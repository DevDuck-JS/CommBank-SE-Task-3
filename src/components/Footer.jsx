import React from "react";
import footerItems from "../data/footerItems.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

const Footer = () => {
  const handleScrollToTop = (e) => {
    e.preventDefault(); // to prevent default link jump
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex mt-16">
      <div className="bg-white w-full px-8 ">
        <div className="px-6">
          <div className="border-b-1 border-gray-200 relative">
            {/* Footer menu */}
            <div className="grid grid-cols-1 md:grid-cols-4 px-16 py-6">
              {footerItems.map((footerItem) => (
                <ul key={footerItem.id}>
                  <li className="font-bold mb-2">{footerItem.title}</li>
                  {footerItem.items.map((item) => (
                    <li className="font-light mb-2 hover:underline hover:underline-offset-4">
                      <a href="#">{item.label}</a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            {/* Back to top button */}
            <button onClick={handleScrollToTop}>
              <div className="flex items-center justify-center w-18 h-18 bg-amber-300 absolute -top-9 right-0 z-500">
                <FontAwesomeIcon icon="fa-solid fa-arrow-up " />
              </div>
            </button>
          </div>

          {/* Copy right */}

          <div className="py-6 px-16 text-[#706d6e]">
            <p className="pt-4 text-[14px]">
              CommBank acknowledges the Traditional Owners of the lands across
              Australia as the continuing custodians of Country and Culture. We
              pay our respect to First Nations peoples and their Elders, past
              and present.
            </p>

            <p className="pt-4 text-[14px]">
              ©2025 Commonwealth Bank of Australia ABN 48 123 123 124 AFSL and
              Australian credit licence 234945
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
