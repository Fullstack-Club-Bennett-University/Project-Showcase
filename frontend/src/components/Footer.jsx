import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-800 via-indigo-800 to-black py-8">
      <div className="mx-auto w-full max-w-screen-xl text-center">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {/* Resources */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-200 uppercase">
              Resources
            </h2>
            <ul className="text-gray-300 font-medium">
              <li className="mb-2">
                <a
                  href="https://www.zoho.com/en-in/crm/"
                  className="hover:underline"
                >
                  Zoho CRM
                </a>
              </li>
              <li>
                <a href="https://clickup.com/" className="hover:underline">
                  ClickUp
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-200 uppercase">
              Follow us
            </h2>
            <ul className="text-gray-300 font-medium">
              <li className="mb-2">
                <a
                  href="https://github.com/Fullstack-Club-Bennett-University"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" className="hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-200 uppercase">
              Legal
            </h2>
            <ul className="text-gray-300 font-medium">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />

        {/* Footer Bottom */}
        <div className="flex justify-center items-center">
          <span className="text-sm text-gray-300">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Sondar
            </a>
            . All Rights Reserved.
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center mt-4 space-x-6">
          <a
            href="https://github.com/Fullstack-Club-Bennett-University"
            className="text-gray-400 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/company/fullstack-club-bu/posts/?feedView=all"
            className="text-gray-400 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21 0H3C1.343 0 0 1.343 0 3v18c0 1.657 1.343 3 3 3h18c1.657 0 3-1.343 3-3V3c0-1.657-1.343-3-3-3zM8.654 19.188H5.808V8.667h2.846v10.521zm-1.418-11.73c-.963 0-1.744-.783-1.744-1.748s.781-1.749 1.744-1.749c.962 0 1.743.784 1.743 1.749 0 .965-.781 1.748-1.743 1.748zm12.008 11.73h-2.845v-5.473c0-1.302-.025-2.976-1.809-2.976-1.81 0-2.087 1.416-2.087 2.881v5.568h-2.845V8.667h2.733v1.434h.04c.38-.717 1.306-1.474 2.689-1.474 2.877 0 3.41 1.89 3.41 4.343v6.218z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
