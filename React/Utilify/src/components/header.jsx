import MobileSidebar from "./mobileSidebar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator";


const Header = () => {

  return (
    <header className="px-4 py-2 border-b border-gray-200 fixed top-0 left-0 w-full md:h-16 h-14 z-20 bg-white backdrop-blur bg-opacity-70">
      <div className="flex items-center h-full w-full">
        {/* Logo Section */}
        <div className="text-xl font-semibold">
          <h3>LOGO</h3>
        </div>

        {/* Navigation (Desktop version) */}
        <div className="hidden md:flex space-x-6 ml-auto">
          <nav>
            <ul className="flex space-x-6 text-md font-sans font-semibold">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>

      {/* Navigation (Mobile version) */}
      <div className='md:hidden ml-auto'>
        <Sheet> 
          <SheetTrigger>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu mt-1">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Toolbox</SheetTitle>
              <SheetDescription>
                <MobileSidebar />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

        <Separator orientation="vertical" className='mx-4 h-[70%]' />
        {/* GitHub Icon */}
        <a className="md:mx-2 mx-1" href="https://github.com/my-prof" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github text-2xl"></i>
        </a>


        {/* LinkedIn Icon */}
        <a className="md:mx-2 mx-1" href="https://www.linkedin.com/in/my-prof" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin text-2xl"></i>
        </a>





      </div>


    </header>
  )
};

export default Header;
