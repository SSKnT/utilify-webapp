import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Separator */}
        <Separator className="bg-gray-700 mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">Utilify</h2>
            <p className="text-sm">
              Empowering your workflow with simple and efficient tools for text,
              image, and file management.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-300 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="hover:text-white text-sm transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white text-sm transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white text-sm transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white text-sm transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-5.524 0-10 4.475-10 10 0 4.418 2.87 8.165 6.839 9.49-.094-.805-.178-2.046.037-2.927.196-.841 1.264-5.336 1.264-5.336s-.323-.644-.323-1.598c0-1.494.866-2.61 1.944-2.61.917 0 1.36.687 1.36 1.51 0 .919-.586 2.297-.888 3.58-.254 1.093.536 1.985 1.588 1.985 1.908 0 3.382-2.014 3.382-4.911 0-2.564-1.845-4.354-4.481-4.354-3.054 0-4.847 2.288-4.847 4.643 0 .918.352 1.903.792 2.438.088.11.1.205.075.314-.082.348-.268 1.092-.305 1.243-.048.203-.157.246-.365.149-1.364-.635-2.215-2.625-2.215-4.22 0-3.43 2.497-6.584 7.195-6.584 3.775 0 6.712 2.694 6.712 6.293 0 3.746-2.352 6.757-5.616 6.757-1.096 0-2.129-.571-2.48-1.246 0 0-.528 2.015-.656 2.524-.237.906-.882 2.037-1.315 2.723.985.304 2.02.471 3.1.471 5.524 0 10-4.476 10-10s-4.476-10-10-10z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 6.5c-.8.35-1.7.6-2.6.7.9-.5 1.6-1.4 1.9-2.3-.8.5-1.7.9-2.6 1.1-.8-.8-1.8-1.3-3-1.3-2.4 0-4.3 2-4.3 4.3 0 .3 0 .6.1.9-3.5-.2-6.6-1.9-8.7-4.4-.4.7-.6 1.4-.6 2.3 0 1.6.8 2.9 2 3.7-.7 0-1.3-.2-1.8-.5v.1c0 2.2 1.6 4.1 3.7 4.5-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 1.9 2.3 3.2 4.3 3.2-1.6 1.3-3.7 2-5.9 2-.4 0-.8 0-1.2-.1 2.1 1.3 4.5 2.1 7.2 2.1 8.6 0 13.3-7.1 13.3-13.3v-.6c.9-.6 1.6-1.3 2.2-2.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <Separator className="bg-gray-700 mt-8" />

        {/* Footer Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2024 Utilify. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with ❤️ using Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
