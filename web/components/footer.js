import Link from "next/link";
import Newsletter from "./newsletter";

export default function Footer() {
  return (
    <footer className="bg-grey">
      <div className="container mx-auto py-10 md:py-12 px-6 grid grid-cols-4">
        <nav className="flex flex-col col-span-4 md:col-span-1 pb-6 md:pb-0 mb-8 md:mb-0 mr-4 border-b md:border-b-0 md:border-r border-solid border-border text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold font-body mb-3">
            Quick links.
          </h3>
          <ul className="flex flex-col list-style-none">
            <li className="font-body mb-3 text-black text-opacity-40 hover:text-opacity-60 transition duration-150 ease font-medium">
              <Link href="/" aria-label="Locations">
                <a>Locations</a>
              </Link>
            </li>
            <li className="font-body mb-3 text-black text-opacity-40 hover:text-opacity-60 transition duration-150 ease font-medium">
              <Link
                href="https://deathtotheoffice.substack.com/"
                rel="noopener noreferrer"
                aria-label="Trends"
              >
                <a target="_blank">Trends</a>
              </Link>
            </li>
            <li className="font-body mb-3 text-black text-opacity-40 hover:text-opacity-60 transition duration-150 ease font-medium">
              <Link href="/stories" aria-label="Stories">
                <a>Stories</a>
              </Link>
            </li>
            <li className="font-body mb-3 text-black text-opacity-40 hover:text-opacity-60 transition duration-150 ease font-medium">
              <Link href="/about" aria-label="Abourt">
                <a>About</a>
              </Link>
            </li>
          </ul>
          <ul className="flex justify-center md:justify-start items-center mt-4 mb-3 md:mb-0">
            <li className="mr-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-black text-opacity-60 transition duration-150 ease hover:text-opacity-100"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99981 2.09779C9.92221 2.09779 10.1502 2.10499 10.9098 2.13979C12.861 2.22859 13.7724 3.15439 13.8612 5.09119C13.896 5.85019 13.9026 6.07819 13.9026 8.00059C13.9026 9.92359 13.8954 10.151 13.8612 10.91C13.7718 12.845 12.8628 13.7726 10.9098 13.8614C10.1502 13.8962 9.92341 13.9034 7.99981 13.9034C6.07741 13.9034 5.8494 13.8962 5.0904 13.8614C3.1344 13.772 2.22781 12.842 2.13901 10.9094C2.10421 10.1504 2.097 9.92299 2.097 7.99999C2.097 6.07759 2.10481 5.85019 2.13901 5.09059C2.22841 3.15439 3.1374 2.22799 5.0904 2.13919C5.85 2.10499 6.07741 2.09779 7.99981 2.09779ZM7.99981 0.799988C6.04441 0.799988 5.7996 0.808388 5.0316 0.843188C2.4168 0.963188 0.963605 2.41399 0.843605 5.03119C0.808205 5.79979 0.799805 6.04459 0.799805 7.99999C0.799805 9.95539 0.808204 10.2008 0.843004 10.9688C0.963004 13.5836 2.4138 15.0368 5.03101 15.1568C5.79961 15.1916 6.04441 15.2 7.99981 15.2C9.95521 15.2 10.2006 15.1916 10.9686 15.1568C13.581 15.0368 15.0378 13.586 15.156 10.9688C15.1914 10.2008 15.1998 9.95539 15.1998 7.99999C15.1998 6.04459 15.1914 5.79979 15.1566 5.03179C15.039 2.41939 13.5864 0.963788 10.9692 0.843788C10.2006 0.808388 9.95521 0.799988 7.99981 0.799988ZM7.99981 4.30279C7.51428 4.30279 7.03351 4.39842 6.58495 4.58422C6.13638 4.77002 5.72881 5.04236 5.38549 5.38567C5.04217 5.72899 4.76984 6.13657 4.58404 6.58513C4.39824 7.0337 4.3026 7.51447 4.3026 7.99999C4.3026 8.48551 4.39824 8.96628 4.58404 9.41485C4.76984 9.86341 5.04217 10.271 5.38549 10.6143C5.72881 10.9576 6.13638 11.23 6.58495 11.4158C7.03351 11.6016 7.51428 11.6972 7.99981 11.6972C8.98036 11.6972 9.92076 11.3077 10.6141 10.6143C11.3075 9.92094 11.697 8.98055 11.697 7.99999C11.697 7.01943 11.3075 6.07903 10.6141 5.38567C9.92076 4.69231 8.98036 4.30279 7.99981 4.30279ZM7.99981 10.4C7.36329 10.4 6.75284 10.1471 6.30275 9.69704C5.85266 9.24696 5.59981 8.63651 5.59981 7.99999C5.59981 7.36347 5.85266 6.75302 6.30275 6.30293C6.75284 5.85285 7.36329 5.59999 7.99981 5.59999C8.63633 5.59999 9.24677 5.85285 9.69686 6.30293C10.1469 6.75302 10.3998 7.36347 10.3998 7.99999C10.3998 8.63651 10.1469 9.24696 9.69686 9.69704C9.24677 10.1471 8.63633 10.4 7.99981 10.4ZM11.8434 3.29299C11.6142 3.29299 11.3943 3.38405 11.2323 3.54614C11.0702 3.70822 10.9791 3.92806 10.9791 4.15729C10.9791 4.38652 11.0702 4.60635 11.2323 4.76844C11.3943 4.93053 11.6142 5.02159 11.8434 5.02159C12.0726 5.02159 12.2925 4.93053 12.4546 4.76844C12.6166 4.60635 12.7077 4.38652 12.7077 4.15729C12.7077 3.92806 12.6166 3.70822 12.4546 3.54614C12.2925 3.38405 12.0726 3.29299 11.8434 3.29299Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-black text-opacity-60 transition duration-150 ease hover:text-opacity-100"
              >
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1998 1.53421C14.6606 1.77317 14.0887 1.92991 13.503 1.99921C14.1202 1.63031 14.582 1.04933 14.802 0.364806C14.222 0.708957 13.5875 0.951448 12.9258 1.08181C12.6495 0.786843 12.3155 0.55182 11.9445 0.391323C11.5736 0.230825 11.1736 0.148279 10.7694 0.148806C8.86201 0.148806 7.46041 1.92841 7.89121 3.77581C6.71663 3.71701 5.56756 3.41185 4.51858 2.88012C3.46961 2.3484 2.54419 1.60201 1.8024 0.689406C1.4247 1.33983 1.30894 2.10971 1.4787 2.84245C1.64845 3.57519 2.09096 4.21574 2.71621 4.63381C2.24731 4.61901 1.78876 4.49228 1.3788 4.26421C1.3464 5.63281 2.3274 6.91321 3.7482 7.19821C3.31305 7.31639 2.85664 7.33363 2.4138 7.24861C2.60251 7.83564 2.97002 8.34898 3.46491 8.71681C3.9598 9.08464 4.5573 9.28855 5.17381 9.30001C3.93552 10.2713 2.36238 10.7116 0.799805 10.524C2.15071 11.392 3.7229 11.8527 5.32861 11.8512C10.8138 11.8512 13.9128 7.21861 13.7256 3.06361C14.3038 2.6453 14.803 2.12743 15.1998 1.53421Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        <Newsletter />
      </div>
    </footer>
  );
}
