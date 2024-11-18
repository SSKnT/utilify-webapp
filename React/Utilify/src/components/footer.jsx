import { Separator } from '@/components/ui/separator';  

// Footer Section
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <Separator className='my-4 w-[90%] ml-auto mr-auto bg-slate-700' />
            <div className="container mx-auto px-6 text-center">
                <p className="mb-4">&copy; 2023 Utilify. All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="hover:text-blue-400">Facebook</a>
                    <a href="#" className="hover:text-blue-400">Twitter</a>
                    <a href="#" className="hover:text-blue-400">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};


export default Footer;