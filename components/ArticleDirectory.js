import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import QuickLink from "./QuickLink";

const ArticleDirectory = () => {
  const [structure, setStructure] = useState([]);
  const router = useRouter();
  const currentUrl = router.asPath;

  function getPathElements(url) {
    let docIndex = url.indexOf("/Documentation/");
    if (docIndex !== -1) {
      let path = url.slice(docIndex + 1);
      let pathElements = path.split("/");
      return pathElements.map((el) => el.replace(/-/g, " "));
    }
    return [];
  }

  const wd = getPathElements(currentUrl);
  console.log(wd.join("/").replace(/\s+/g, "-"));

  useEffect(() => {
    const fetchStructure = async () => {
      const res = await fetch(
        `/api/getDocumentationStructure?dir=/${wd
          .join("/")
          .replace(/\s+/g, "-")}`
      );
      const data = await res.json();
      setStructure(data);
    };
    fetchStructure();
  }, [currentUrl]);

  // Recursive function to render directories and files
  const renderStructure = (structure, isTopLevel = true) => {
    // Separate directories from files
    const directories = structure.filter((item) => item.type === "directory");
    const files = structure.filter((item) => item.type === "file");

    // Render files as QuickLink only at the top level if no directories
    if (isTopLevel && directories.length === 0 && files.length > 0) {
      return (
        <div className="flex flex-col rounded-[24px] border border-solid border-[#e6e6e6] bg-[#fefefe] p-2 sm:p-3 mb-4">
          <div className="p-3 text-black-900">
            <h2 className="text-2xl font-bold no-underline pb-6">
              Available Files
            </h2>
            <hr className="mt-0 border-0 border-t border-solid border-[#e6e6e6]"></hr>
            <div className="ml-4">
              {files.map((file, index) => {
                const fullPath = `${currentUrl}/${file.path}`;
                return (
                  <QuickLink
                    key={index}
                    link={fullPath}
                    text={file.name.replace(/-/g, " ")}
                  />
                );
              })}
            </div>
          </div>
        </div>
      );
    }

    // Recursively render directories and files within directories
    return structure.map((item, index) => {
      if (item.type === "directory") {
        return (
          <div
            key={index}
            className="flex flex-col rounded-[24px] border border-solid border-[#e6e6e6] bg-[#fefefe] p-2 sm:p-3 mb-4 shadow-lg"
          >
            <div className="p-3 text-black-900">
              <h2 className="text-2xl font-bold no-underline pb-6">
                {item.name.replace(/-/g, " ")}
              </h2>
              <hr className="mt-0 border-0 border-t border-solid border-[#e6e6e6]"></hr>
            </div>
            <div className="ml-4">
              {renderStructure(item.children, false)}{" "}
              {/* Pass false to indicate it's not top-level */}
            </div>
          </div>
        );
      }

      if (item.type === "file") {
        const fullPath = `${currentUrl}/${item.path}`;
        return (
          <QuickLink
            key={index}
            link={fullPath}
            text={item.name.replace(/-/g, " ")}
          />
        );
      }
    });
  };

  return (
    <div className="bg-[white]">
      <div className="w-4/5 md:w-1/2 mx-auto ">
      <div className="flex space-x-2 py-4">
        {wd.map((item, index) => (
          <React.Fragment key={index}>
            {index < wd.length - 1 ? (
              <a
                href={`/${wd
                  .slice(0, index + 1)
                  .join("/")
                  .replace(/\s+/g, "-")}`}
                className="text-[black] hover:text-gray-400"
              >
                {item.replace(/-/g, " ")}
              </a>
            ) : (
              <span className="text-[#298be1]">{item.replace(/-/g, " ")}</span>
            )}
            {index < wd.length - 1 && (
              <span className="text-[#298be1]">&gt;</span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center mt-4 mb-8 relative group">
        <div className="absolute top-1/3 -left-1 pointer-events-none flex items-center fill-white-300 ps-5 group-focus-within:fill-black">
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            xmlns="http://www.w3.org/2000/svg"
            className="group-focus-within:fill-black-600"
            fill="black"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.27485 8.7001C3.27485 5.42781 5.92757 2.7751 9.19985 2.7751C12.4721 2.7751 15.1249 5.42781 15.1249 8.7001C15.1249 11.9724 12.4721 14.6251 9.19985 14.6251C5.92757 14.6251 3.27485 11.9724 3.27485 8.7001ZM9.19985 0.225098C4.51924 0.225098 0.724854 4.01948 0.724854 8.7001C0.724854 13.3807 4.51924 17.1751 9.19985 17.1751C11.0802 17.1751 12.8176 16.5627 14.2234 15.5265L19.0981 20.4013C19.5961 20.8992 20.4033 20.8992 20.9013 20.4013C21.3992 19.9033 21.3992 19.0961 20.9013 18.5981L16.0264 13.7233C17.0625 12.3176 17.6749 10.5804 17.6749 8.7001C17.6749 4.01948 13.8805 0.225098 9.19985 0.225098Z"
            ></path>
          </svg>
        </div>
        <input
          className="w-full rounded-[10px] border border-[#000000cc] bg-[#ffffff33] p-4 ps-12 text-lg text-[#ffffff] shadow-sm outline-none transition ease-linear hover:bg-[#ffffff44] focus:border-transparent focus:bg-white-300 focus:text-black-600 placeholder:focus:text-black-600 hover:shadow-search-bar-hover focus:shadow-search-bar-focused peer"
          type="text"
          placeholder="Search for articles..."
        />
      </div>
      <h1 className="text-4xl font-bold text-black-300 my-8">
        {wd[wd.length - 1].replace(/-/g, " ")}
      </h1>
      <div className="flex flex-col">{renderStructure(structure)}</div>
    </div>
    </div>
  );
};

export default ArticleDirectory;
