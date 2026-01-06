import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const social = [
  { href: "https://github.com/yourgithub", label: "GitHub", icon: FaGithub },
  {
    href: "https://linkedin.com/in/yourprofile",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  { href: "https://twitter.com/yourhandle", label: "Twitter", icon: FaTwitter },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
            JK
          </div>
          <div>
            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
              JK — Backend / Fullstack Developer
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Built with React & Tailwind
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {social.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              >
                <Icon size={18} className="text-gray-700 dark:text-gray-200" />
              </a>
            );
          })}
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span>© {year} JK. </span>
          <span className="hidden sm:inline">All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
