import React, { useEffect } from "react";

/**
 * Section Component
 * Renders a section of content with a heading and optional divider
 * 
 * @param {string} id - Unique identifier for the section
 * @param {string} title - Section heading text
 * @param {number} level - Heading level (h1-h6)
 * @param {React.ReactNode} children - Section content
 * @param {Function} registerSection - Callback to register section in TOC
 * @param {boolean} showDivider - Whether to show dividing line
 * @param {boolean} centered - Whether to center the heading
 * @param {string} className - Additional CSS classes
 */
const Section = ({
  id,
  title,
  level = 1,
  children,
  registerSection,
  showDivider = false,
  centered = false,
  className = ""
}) => {
  // Register section in TOC when mounted
  useEffect(() => {
    if (registerSection) {
      registerSection(id, title, level);
    }
  }, [id, title, level, registerSection]);

  // Dynamically choose heading tag based on level
  const Tag = `h${level}`;

  return (
    <div id={id} className={`my-4 md:my-6 lg:my-8 side-block w-full px-4 md:px-6 lg:px-8 ${className}`}>
      {/* Section Heading */}
      <Tag className={`font-bold text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 ${centered ? "text-center" : ""} ${className}`}>
        {title}
      </Tag>

      {/* Optional Divider */}
      {showDivider && <hr className="border-t border-gray-300 mb-4" />}

      {/* Section Content */}
      <div className={`mt-4 space-y-4 ${className}`}>{children}</div>
    </div>
  );
};

export default Section;