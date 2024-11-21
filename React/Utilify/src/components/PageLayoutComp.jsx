// a reusable layout component for utilization in all most pages e.g., img_bg_removal, img_compress, img_merge, img_metadata, file_md_to_pddf, etc.


const PageLayoutComp = ({ title, text, component_1, component_2, note = '' }) => {
    return (
      <div className="flex flex-col min-h-screen w-full items-center bg-red-50 from-red-500 to-red-30 p-6">
        {/* Header Section */}
        <header className="mb-8 mt-4 md:w-[70%]">
          <h1 className="text-3xl md:text-5xl font-extrabold text-red-600 text-center animate fade-in-5 mb-4">{title}</h1>
          <p className="mt-2 md:text-lg md:w-[85%] text-md mx-auto text-center text-gray-600 ">{text}</p>
        </header>
  
        {/* Content Section */}
        <main className="flex flex-col items-center justify-center w-full space-y-6 mt-6">
          <div className="w-full max-w-3xl">{component_1}</div>
          <div className="w-full max-w-3xl">{component_2}</div>
        </main>
  
        {/* Note or Footer */}
        {note}
      </div>
    );
  };

export default PageLayoutComp;