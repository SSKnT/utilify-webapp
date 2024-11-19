import { useState } from "react";
import { Link } from "react-router-dom";

const MobileSidebar = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleSection = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  return (
    <div className="flex flex-col px-4 py-6 space-y-4">
      {/* Search Bar */}
      <div className="relative mb-2">
        <i className="fas fa-search absolute left-3 top-3 text-gray-500"></i>
        <input
          name="search"
          type="text"
          placeholder="Quick search..."
          className="w-full pl-10 pr-3 py-2 text-sm font-sans rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Navigation Sections */}
      <div className="flex flex-col space-y-4">
        {/* Text Section */}
        <div>
          <button
            onClick={() => toggleSection("text")}
            className="w-full flex items-center justify-between text-md font-sans font-semibold text-blue-500"
          >
            <span className="flex items-center text-xl">
              <i className="fas fa-file-alt text-blue-500 mr-2"></i>
              Text
            </span>
            <i
              className={`fas fa-chevron-down transition-transform ${
                expanded === "text" ? "rotate-180" : ""
              }`}
            ></i>
          </button>
          {expanded === "text" && (
            <div className="mt-2 ml-4 flex flex-col space-y-2">
              <Link to="/text_sum" className="text-gray-600 hover:text-blue-500">Summarize</Link>
              <Link to="/text_analyze" className="text-gray-600 hover:text-blue-500">Analyze</Link>
              <Link to="/text_fortune" className="text-gray-600 hover:text-blue-500">Fortune</Link>
            </div>
          )}
        </div>

        {/* Image Section */}
        <div>
          <button
            onClick={() => toggleSection("image")}
            className="w-full flex items-center justify-between text-md font-sans font-semibold text-red-500"
          >
            <span className="flex items-center text-xl">
              <i className="fas fa-image text-red-500 mr-2"></i>
              Image
            </span>
            <i
              className={`fas fa-chevron-down transition-transform ${
                expanded === "image" ? "rotate-180" : ""
              }`}
            ></i>
          </button>
          {expanded === "image" && (
            <div className="mt-2 ml-4 flex flex-col space-y-2">
              <Link to="img_bg_removal" className="text-gray-600 hover:text-red-500">Remove background</Link>
              <Link to="" className="text-gray-600 hover:text-red-500">Compress</Link>
              <Link to="" className="text-gray-600 hover:text-red-500">Merge</Link>
              <Link to="" className="text-gray-600 hover:text-red-500">Extract Metadata</Link>
            </div>
          )}
        </div>

        {/* File Section */}
        <div>
          <button
            onClick={() => toggleSection("file")}
            className="w-full flex items-center justify-between text-md font-sans font-semibold text-yellow-500"
          >
            <span className="flex items-center text-xl">
              <i className="fas fa-paperclip text-yellow-500 mr-2"></i>
              File
            </span>
            <i
              className={`fas fa-chevron-down transition-transform ${
                expanded === "file" ? "rotate-180" : ""
              }`}
            ></i>
          </button>
          {expanded === "file" && (
            <div className="mt-2 ml-4 flex flex-col space-y-2">
              <Link to="" className="text-gray-600 hover:text-yellow-500">Markdown to PDF</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
