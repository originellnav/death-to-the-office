import { useContext } from "react";
import { DataContext } from "../pages/_app.js";

import Link from "next/link";
import Newsletter from "./newsletter";

export default function Footer() {
  const { aboutContent } = useContext(DataContext);

  const twitter = aboutContent[0].twitter;
  const instagram = aboutContent[0].instagram;

  return (
    <footer className="bg-grey">
      <div className="container mx-auto py-10 md:py-12 px-6 grid grid-cols-4">
        <nav className="flex flex-col col-span-4 md:col-span-1 pb-6 md:pb-0 mb-8 md:mb-0 mr-4 border-b md:border-b-0 md:border-r border-solid border-border text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold font-body mb-3">
            Quick links.
          </h3>
          <ul className="flex flex-col list-style-none">
            <li className="font-body mb-3 text-black text-opacity-40 hover:text-opacity-60 transition duration-150 ease font-medium">
              <Link href="/">
                <a aria-label="Locations">Locations</a>
              </Link>
            </li>
            <li className="font-body mb-3 text-black text-opacity-40 hover:text-opacity-60 transition duration-150 ease font-medium">
              <Link href="/trends">
                <a
                  aria-label="Trends"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trends
                </a>
              </Link>
            </li>
            <li className="font-body mb-3 text-black text-opacity-40 hover:text-opacity-60 transition duration-150 ease font-medium">
              <Link href="/stories">
                <a aria-label="Stories">Stories</a>
              </Link>
            </li>
            <li className="font-body mb-3 text-black text-opacity-40 hover:text-opacity-60 transition duration-150 ease font-medium">
              <Link href="/about">
                <a aria-label="About">About</a>
              </Link>
            </li>
          </ul>
          <ul className="flex justify-center md:justify-start items-center mt-4 mb-3 md:mb-0 -ml-2">
            {instagram && (
              <li className="mr-2">
                <a
                  href="https://www.instagram.com/"
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 block text-black text-opacity-60 transition duration-150 ease hover:text-opacity-100"
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.9995 14.5565C27.0753 14.5565 27.4401 14.568 28.6555 14.6237C31.7774 14.7657 33.2357 16.247 33.3777 19.3459C33.4334 20.5603 33.444 20.9251 33.444 24.0009C33.444 27.0777 33.4325 27.4416 33.3777 28.656C33.2347 31.752 31.7803 33.2361 28.6555 33.3782C27.4401 33.4339 27.0773 33.4454 23.9995 33.4454C20.9237 33.4454 20.5589 33.4339 19.3445 33.3782C16.2149 33.2352 14.7643 31.7472 14.6222 28.655C14.5665 27.4406 14.555 27.0768 14.555 24C14.555 20.9241 14.5675 20.5603 14.6222 19.3449C14.7653 16.247 16.2197 14.7648 19.3445 14.6227C20.5598 14.568 20.9237 14.5565 23.9995 14.5565V14.5565ZM23.9995 12.48C20.8709 12.48 20.4792 12.4934 19.2504 12.5491C15.0667 12.7411 12.7416 15.0624 12.5496 19.2499C12.4929 20.4797 12.4795 20.8713 12.4795 24C12.4795 27.1286 12.4929 27.5213 12.5486 28.7501C12.7406 32.9337 15.0619 35.2589 19.2494 35.4509C20.4792 35.5065 20.8709 35.52 23.9995 35.52C27.1281 35.52 27.5208 35.5065 28.7496 35.4509C32.9294 35.2589 35.2603 32.9376 35.4494 28.7501C35.5061 27.5213 35.5195 27.1286 35.5195 24C35.5195 20.8713 35.5061 20.4797 35.4504 19.2509C35.2622 15.071 32.9381 12.7421 28.7505 12.5501C27.5208 12.4934 27.1281 12.48 23.9995 12.48ZM23.9995 18.0845C23.2227 18.0845 22.4534 18.2375 21.7357 18.5348C21.018 18.832 20.3659 19.2678 19.8166 19.8171C19.2673 20.3664 18.8315 21.0185 18.5343 21.7362C18.237 22.4539 18.084 23.2231 18.084 24C18.084 24.7768 18.237 25.546 18.5343 26.2638C18.8315 26.9815 19.2673 27.6336 19.8166 28.1829C20.3659 28.7322 21.018 29.1679 21.7357 29.4652C22.4534 29.7625 23.2227 29.9155 23.9995 29.9155C25.5684 29.9155 27.073 29.2923 28.1824 28.1829C29.2918 27.0735 29.915 25.5689 29.915 24C29.915 22.4311 29.2918 20.9265 28.1824 19.8171C27.073 18.7077 25.5684 18.0845 23.9995 18.0845ZM23.9995 27.84C22.9811 27.84 22.0043 27.4354 21.2842 26.7153C20.5641 25.9951 20.1595 25.0184 20.1595 24C20.1595 22.9816 20.5641 22.0048 21.2842 21.2847C22.0043 20.5646 22.9811 20.16 23.9995 20.16C25.0179 20.16 25.9946 20.5646 26.7148 21.2847C27.4349 22.0048 27.8395 22.9816 27.8395 24C27.8395 25.0184 27.4349 25.9951 26.7148 26.7153C25.9946 27.4354 25.0179 27.84 23.9995 27.84ZM30.1493 16.4688C29.7825 16.4688 29.4307 16.6145 29.1714 16.8738C28.9121 17.1332 28.7664 17.4849 28.7664 17.8517C28.7664 18.2184 28.9121 18.5702 29.1714 18.8295C29.4307 19.0888 29.7825 19.2345 30.1493 19.2345C30.516 19.2345 30.8678 19.0888 31.1271 18.8295C31.3864 18.5702 31.5321 18.2184 31.5321 17.8517C31.5321 17.4849 31.3864 17.1332 31.1271 16.8738C30.8678 16.6145 30.516 16.4688 30.1493 16.4688V16.4688Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
            )}
            {twitter && (
              <li>
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-8 h-8 block text-black text-opacity-60 transition duration-150 ease hover:text-opacity-100"
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.5195 16.8547C34.6568 17.237 33.7417 17.4878 32.8046 17.5987C33.7921 17.0085 34.5309 16.0789 34.883 14.9837C33.955 15.5343 32.9398 15.9223 31.8811 16.1309C31.439 15.6589 30.9045 15.2829 30.311 15.0261C29.7175 14.7693 29.0775 14.6372 28.4309 14.6381C25.379 14.6381 23.1365 17.4854 23.8257 20.4413C21.9464 20.3472 20.1079 19.8589 18.4295 19.0082C16.7512 18.1574 15.2705 16.9632 14.0837 15.503C13.4793 16.5437 13.2941 17.7755 13.5657 18.9479C13.8373 20.1203 14.5453 21.1452 15.5457 21.8141C14.7955 21.7904 14.0618 21.5876 13.4059 21.2227C13.3541 23.4125 14.9237 25.4611 17.1969 25.9171C16.5007 26.1062 15.7704 26.1338 15.0619 25.9977C15.3638 26.937 15.9518 27.7583 16.7437 28.3469C17.5355 28.9354 18.4915 29.2617 19.4779 29.28C17.4966 30.8341 14.9796 31.5385 12.4795 31.2384C14.6409 32.6271 17.1565 33.3643 19.7256 33.3619C28.5019 33.3619 33.4603 25.9497 33.1608 19.3017C34.086 18.6325 34.8847 17.8039 35.5195 16.8547V16.8547Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
            )}
          </ul>
        </nav>
        <Newsletter />
      </div>
    </footer>
  );
}
