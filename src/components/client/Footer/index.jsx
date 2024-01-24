import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../../assets";

const Footer = () => {
  return (
    <div className="mt-10">
      <hr className="my-6 max-w-screen-xl border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <footer className="bg-white ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img src={Logo} width={150} alt="Doctor S Logo" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 md:gap-32">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  {"Pages"}
                </h2>
                <ul className="font-medium">
                  <li className="mb-4">
                    <Link to={"/"} className="hover:underline focus:underline">
                      Home
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to={"/events"}
                      className="hover:underline focus:underline"
                    >
                      Events
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to={"/news"}
                      className="hover:underline focus:underline"
                    >
                      News
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to={"/speakers"}
                      className="hover:underline focus:underline"
                    >
                      Speakers
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  {"Follow us"}
                </h2>
                <ul className="font-medium">
                  <li className="mb-4">
                    <Link to="" className="hover:underline ">
                      Telegram
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#" target={"_blank"} className="hover:underline">
                      Facebook
                    </Link>
                  </li>
                  <li className="mb-4">
                    <a
                      href="mailto:hr@artellogistics.com"
                      className="hover:underline"
                    >
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 ">
              © {new Date().getFullYear()}{" "}
              <Link to="/" className="hover:underline">
                Doctor Study.
              </Link>{" "}
              {"All rights are reserved"}.
            </span>
            <div className="flex gap-5 mt-4 sm:justify-center sm:mt-0">
              <Link
                to="#"
                target={"_blank"}
                title="Facebook"
                className="text-gray-500 hover:text-gray-900"
                aria-label="facebook"
              >
                <span className="fa-brands fa-facebook-f" />
              </Link>
              <Link
                to="#"
                title="Telegram"
                className="text-gray-500 hover:text-gray-900"
                aria-label="telegram"
              >
                <span className="fa-solid fa-paper-plane" />
              </Link>
              <a
                href="#"
                title="Gmail"
                className="text-gray-500 hover:text-gray-900"
                aria-label="mail-to-us"
              >
                <span className="fa-solid fa-envelope" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
