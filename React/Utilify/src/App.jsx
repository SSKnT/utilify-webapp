import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      {/* Spacer div for header */}
      <div className="w-full min-h-14 md:min-h-16"></div>

      <div className="flex w-full h-full md:flex-row">
        <Sidebar />
        {/* Content Section */}
        <div className="md:w-[80%] w-full relative md:left-[20%] bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
