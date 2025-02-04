import React, { useState, useEffect, cloneElement, useMemo } from "react";
import { useRouter } from "next/router";

/**
 * LayoutPage Component
 * Main layout component that handles page structure, navigation, and table of contents
 */
const LayoutPage = ({ mainContent }) => {
  // State Management
  const [rawToc, setRawToc] = useState([]); // Stores raw TOC data
  const [activeSection, setActiveSection] = useState(null); // Currently visible section
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu state
  const router = useRouter();
  const currentUrl = router.asPath;

  /**
   * Registers a section in the table of contents
   * @param {string} id - Section identifier
   * @param {string} title - Section title
   * @param {number} level - Heading level
   */
  const registerSection = (id, title, level) => {
    setRawToc((prevRawToc) => {
      if (!prevRawToc.find((section) => section.id === id)) {
        return [...prevRawToc, { id, title, level }];
      }
      return prevRawToc;
    });
  };

  /**
   * Builds hierarchical TOC structure
   * Uses memoization to prevent unnecessary recalculations
   */
  const tocHierarchy = useMemo(() => {
    const tocHierarchy = [];
    const parentStack = [];
    let childStack = [];

    rawToc.forEach((section) => {
      if (section.level === 1) {
        tocHierarchy.push({
          ...section,
          children: childStack,
        });
        childStack = [];
        parentStack.push(section);
      } else if (section.level > 1) {
        if (childStack.length > 0) {
          if (section.level < childStack[childStack.length - 1].level) {
            parentStack[parentStack.length - 1].children.push({
              ...section,
              children: childStack,
            });
            childStack = [section];
          } else {
            childStack.push(section);
          }
        } else {
          childStack.push(section);
        }
      }
    });

    return tocHierarchy;
  }, [rawToc]);

  /**
   * Scroll handling with offset for fixed header
   */
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const yOffset = -150;
    const yPosition =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  /**
   * Renders TOC items recursively
   * Handles both parent and child items with proper styling
   */
  const renderTOCHierarchy = (tocHierarchy) => {
    return tocHierarchy.map((parent) => (
      <li key={parent.id} className="mb-2">
        <a
          href={`#${parent.id}`}
          onClick={(e) => handleClick(e, parent.id)}
          className={`no-underline ${
            parent.id === activeSection
              ? "font-bold text-[#2B7FEA]"
              : "text-[#1B2559]"
          }`}
        >
          {parent.title}
        </a>
        {parent.children && parent.children.length > 0 && (
          <ul className="list-none pl-4">
            {parent.children.map((child) => (
              <li
                key={child.id}
                className={`mb-2 ${
                  child.id === activeSection
                    ? "font-bold text-[#2B7FEA]"
                    : "text-[#1B2559]"
                }`}
                style={{ marginLeft: `${(child.level - 1) * 20}px` }}
              >
                <a
                  href={`#${child.id}`}
                  onClick={(e) => handleClick(e, child.id)}
                  className="no-underline hover:text-[#2B7FEA]"
                >
                  {child.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ));
  };

  /**
   * Recursively clones children and passes registerSection prop
   */
  const cloneChildrenWithRegister = (children) => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        const newProps = { registerSection };
        const clonedChild = cloneElement(
          child,
          newProps,
          cloneChildrenWithRegister(child.props.children)
        );
        return clonedChild;
      }
      return child;
    });
  };

  /**
   * Extracts path elements from URL for breadcrumb
   */
  function getPathElements(url) {
    const cleanUrl = url.split('#')[0];
    let docIndex = cleanUrl.indexOf("/Documentation/");
    if (docIndex !== -1) {
      let path = cleanUrl.slice(docIndex + 1);
      let pathElements = path.split("/");
      return pathElements.map((el) => el.replace(/-/g, " "));
    }
    return [];
  }

  // Set up intersection observer for active section tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    rawToc.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup observer
    return () => {
      rawToc.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [rawToc]);

  const wd = getPathElements(currentUrl);

  return (
    <div className="w-full min-h-screen bg-[white]">
      {/* Mobile Menu Toggle Button */}
      <button 
        className="fixed right-4 bottom-4 z-50 lg:hidden bg-[#2B7FEA] text-white p-3 rounded-full shadow-lg"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? 'Close' : 'Menu'}
      </button>

      {/* Mobile TOC Sidebar */}
      <div className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-200 ease-in-out lg:hidden z-40`}>
        <div className="p-4">
          <h3 className="font-bold text-[#1B2559] mb-4 ml-3">Table of Contents</h3>
          <ul className="list-none pl-2">
            {renderTOCHierarchy(tocHierarchy)}
          </ul>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="w-full px-4 lg:px-0 lg:max-w-[90%] py-4 lg:py-[40px] mb-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(200px,_300px)_minmax(600px,_1fr)_minmax(200px,_350px)] gap-4">
          {/* Left Sidebar */}
          <aside className="hidden lg:block p-4"></aside>

          {/* Main Content Area */}
          <main className="bg-[#F7F8FF] p-4 md:p-6 lg:p-8 rounded shadow-md">
            {/* Breadcrumb Navigation */}
            <div className="flex flex-wrap gap-2 mt-4 py-4 text-sm md:text-base">
              {wd.map((item, index) => (
                <React.Fragment key={index}>
                  {index < wd.length - 1 ? (
                    <a
                      href={`/${wd.slice(0, index + 1).join("/").replace(/\s+/g, "-")}`}
                      className="text-[#1B2559] hover:text-[#2B7FEA] no-underline truncate max-w-[150px] md:max-w-none"
                    >
                      {item.replace(/-/g, " ")}
                    </a>
                  ) : (
                    <span className="text-[#1B2559] truncate max-w-[150px] md:max-w-none">
                      {item.replace(/-/g, " ")}
                    </span>
                  )}
                  {index < wd.length - 1 && (
                    <span className="text-[#1B2559]">&gt;</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Main Content */}
            <div className="prose max-w-none">
              {cloneChildrenWithRegister(mainContent.props.children)}
            </div>
          </main>

          {/* Desktop TOC Sidebar */}
          <aside className="hidden lg:block p-4">
            <div className="sticky top-20 border-l-2 border-gray-300 pr-4">
              <h3 className="font-bold text-[#1B2559] mb-4 ml-1">Table of Contents</h3>
              <ul className="list-none pl-2">
                {renderTOCHierarchy(tocHierarchy)}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;