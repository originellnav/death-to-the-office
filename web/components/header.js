import Link from "next/link";

export default function Header() {
  return (
    <header className="container mx-auto mb-6 p-6 flex sm:flex-col md:flex-row flex-wrap items-center sm:items-start md:items-center md:justify-between">
      <Link href="/" className="flex items-center">
        <a>
          <Logo />
        </a>
      </Link>
      <nav className="mt-4 md:mt-0">
        <ul className="flex justify-between">
          <li className="text-black hover:text-primary transition duration-200 ease font-bold pr-3 md:px-4 py-2 inline-flex items-center border-r border-solid border-border">
            <Link href="/" aria-label="Locations">
              <a>Locations</a>
            </Link>
          </li>
          <li className="text-black hover:text-primary transition duration-200 ease font-bold px-3 md:px-4 py-2 inline-flex items-center border-r border-solid border-border">
            <Link
              href="https://deathtotheoffice.substack.com/"
              rel="noopener noreferrer"
              aria-label="Trends"
            >
              <a target="_blank">Trends</a>
            </Link>
          </li>
          <li className="text-black hover:text-primary transition duration-200 ease font-bold px-3 md:px-4 py-2 inline-flex items-center border-r border-solid border-border">
            <Link href="/blog" aria-label="Stories">
              <a>Stories</a>
            </Link>
          </li>
          <li className="text-black hover:text-primary transition duration-200 ease font-bold pl-3 md:pl-4 py-2">
            <Link href="/about" aria-label="About">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const Logo = () => (
  <div style={{ width: "280px" }}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 273 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.22168 13.338H9.38368C14.3877 13.338 17.1777 11.034 17.1777 6.894C17.1777 2.754 14.3877 0.450001 9.38368 0.450001L0.22168 0.450001L0.22168 13.338ZM4.79368 10.152L4.79368 3.618H8.73568C11.2197 3.618 12.6237 4.806 12.6237 6.894C12.6237 8.982 11.2197 10.152 8.73568 10.152H4.79368Z"
        fill="black"
      />
      <path
        d="M18.6787 13.338H32.4487V10.422H23.2327V8.028H31.5487V5.526H23.2327V3.366L32.2687 3.366V0.450001L18.6787 0.450001V13.338Z"
        fill="black"
      />
      <path
        d="M32.826 13.338H37.686L38.676 11.088L45.102 11.088L46.11 13.338H50.988L44.706 0.450001L39.252 0.450001L32.826 13.338ZM39.594 8.442L41.898 3.348H41.934L44.202 8.442L39.594 8.442Z"
        fill="black"
      />
      <path
        d="M54.4803 13.338H59.1783V3.762L64.2003 3.762V0.450001L49.4583 0.450001V3.762H54.4803V13.338Z"
        fill="black"
      />
      <path
        d="M65.2607 13.338H69.9587V8.208L77.0687 8.208V13.338H81.7667V0.450001L77.0687 0.450001V5.022H69.9587V0.450001L65.2607 0.450001V13.338Z"
        fill="black"
      />
      <path
        d="M92.0096 13.338H96.7076V3.762L101.73 3.762V0.450001L86.9876 0.450001V3.762L92.0096 3.762V13.338Z"
        fill="black"
      />
      <path
        d="M111.494 13.788C117.164 13.788 120.944 11.034 120.944 6.894C120.944 2.754 117.164 0 111.494 0C105.842 0 102.062 2.754 102.062 6.894C102.062 11.034 105.842 13.788 111.494 13.788ZM111.494 10.476C108.668 10.476 106.76 9.036 106.76 6.894C106.76 4.752 108.668 3.312 111.494 3.312C114.32 3.312 116.246 4.752 116.246 6.894C116.246 9.036 114.32 10.476 111.494 10.476Z"
        fill="black"
      />
      <path
        d="M135.041 13.338H139.739V3.762L144.761 3.762V0.450001L130.019 0.450001V3.762L135.041 3.762V13.338Z"
        fill="black"
      />
      <path
        d="M145.821 13.338H150.519V8.208H157.629V13.338L162.327 13.338V0.450001L157.629 0.450001V5.022L150.519 5.022V0.450001L145.821 0.450001V13.338Z"
        fill="black"
      />
      <path
        d="M164.12 13.338H177.89V10.422H168.674V8.028H176.99V5.526H168.674V3.366L177.71 3.366V0.450001L164.12 0.450001V13.338Z"
        fill="black"
      />
      <path
        d="M192.441 13.788C198.111 13.788 201.891 11.034 201.891 6.894C201.891 2.754 198.111 0 192.441 0C186.789 0 183.009 2.754 183.009 6.894C183.009 11.034 186.789 13.788 192.441 13.788ZM192.441 10.476C189.615 10.476 187.707 9.036 187.707 6.894C187.707 4.752 189.615 3.312 192.441 3.312C195.267 3.312 197.193 4.752 197.193 6.894C197.193 9.036 195.267 10.476 192.441 10.476Z"
        fill="black"
      />
      <path
        d="M203.372 13.338H208.07V8.802H215.864V6.102L208.07 6.102V3.762L216.926 3.762V0.450001L203.372 0.450001V13.338Z"
        fill="black"
      />
      <path
        d="M218.173 13.338H222.871V8.802H230.665V6.102L222.871 6.102V3.762L231.727 3.762V0.450001L218.173 0.450001V13.338Z"
        fill="black"
      />
      <path
        d="M232.974 13.338H237.636V0.450001L232.974 0.450001V13.338Z"
        fill="black"
      />
      <path
        d="M248.532 13.662C253.266 13.662 256.686 11.682 257.37 8.568L253.05 7.794C252.672 9.36 250.98 10.35 248.658 10.35C245.706 10.35 243.834 9 243.834 6.894C243.834 4.788 245.508 3.438 248.118 3.438C249.972 3.438 251.448 4.284 251.88 5.634L256.146 4.734C255.282 1.908 252.114 0.126001 247.992 0.126001C242.574 0.126001 239.136 2.754 239.136 6.894C239.136 11.16 242.79 13.662 248.532 13.662Z"
        fill="black"
      />
      <path
        d="M258.55 13.338H272.32V10.422H263.104V8.028H271.42V5.526L263.104 5.526V3.366L272.14 3.366V0.450001L258.55 0.450001V13.338Z"
        fill="black"
      />
    </svg>
  </div>
);
