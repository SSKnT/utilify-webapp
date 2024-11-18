
const Sidebar = () => {
  return (
    <>
      {/* For Desktop */}
      <div className="hidden md:flex flex-col fixed top-16 left-0 w-[20%] h-full pl-7 py-4 shadow-md items-start bg-white z-20">
        {/* Search Bar */}
        <div className="pt-6 pr-6 relative">
          <i className="fas fa-search absolute left-2 top-8 transform-translate-y-1/2 text-white"></i>
          <input
            name="search"
            type="text"
            placeholder="Quick search..."
            className="z-20 w-full pl-8 placeholder-current px-2 h-9 rounded-md text-white text-sm font-sans bg-black bg-opacity-40 hover:bg-opacity-25 focus:outline-none"
          />
        </div>
        {/* Sidebar Navigation */}
        <SidebarNav />
      </div>
    </>
  );
}

const SidebarNav = () => {
  return(
    <>
    <div className="flex flex-col space-y-3 mt-8">
          <div>
            <a href="#" className="text-md font-sans font-semibold flex items-center group">
              <i className="fas fa-file-alt text-blue-500 mr-2 group-hover:text-blue-500 group-focus:text-blue-500"></i>
              <span className="text-blue-500 group-hover:text-blue-500 group-focus:text-blue-500">Text</span>
            </a>
            <div className="flex flex-col space-y-0 mt-2 ml-1">
              <a href="#" className="pl-3 border-l border-gray-300 text-gray-400 hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500">Summarize</a>
              <a href="#" className="pl-3 border-l border-gray-300 text-gray-400 hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500">Analyze</a>
              <a href="#" className="pl-3 border-l border-gray-300 text-gray-400 hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500">Fortune</a>
            </div>
          </div>

          <div>
            <a href="#" className="text-md font-sans font-semibold flex items-center group">
              <i className="fas fa-image text-red-500 mr-2 group-hover:text-red-500 group-focus:text-red-500"></i>
              <span className="text-red-500 group-hover:text-red-500 group-focus:text-red-500">Image</span>
            </a>
            <div className="flex flex-col space-y-0 mt-2 ml-1">
              <a href="#" className="pl-3 border-l border-gray-300 text-gray-400 hover:border-red-500 hover:text-red-500 focus:border-red-500 focus:text-red-500">Remove background</a>
              <a href="#" className="pl-3 border-l border-gray-300 text-gray-400 hover:border-red-500 hover:text-red-500 focus:border-red-500 focus:text-red-500">Compress</a>
              <a href="#" className="pl-3 border-l border-gray-300 text-gray-400 hover:border-red-500 hover:text-red-500 focus:border-red-500 focus:text-red-500">Merge</a>
              <a href="#" className="pl-3 border-l border-gray-300 text-gray-400 hover:border-red-500 hover:text-red-500 focus:border-red-500 focus:text-red-500">Extract Metadata</a>
            </div>
          </div>

          <div>
            <a href="#" className="text-md font-sans font-semibold flex items-center group">
              <i className="fas fa-paperclip text-yellow-500 mr-2 group-hover:text-yellow-500 group-focus:text-yellow-500"></i>
              <span className="text-yellow-500 group-hover:text-yellow-500 group-focus:text-yellow-500">File</span>
            </a>
            <div className="flex flex-col space-y-0 mt-2 ml-1">
              <a href="#" className="pl-3 border-l border-gray-300 text-gray-400 hover:border-yellow-500 hover:text-yellow-500 focus:border-yellow-500 focus:text-yellow-500">Markdown to PDF</a>
            </div>
          </div>
        </div>
    </>
  )
}

export default Sidebar;