import Link from "next/link";

export default function Header() {
  return (
    <header className="container mx-auto mb-6 p-6 flex sm:flex-col md:flex-row flex-wrap items-center sm:items-start md:items-center md:justify-between">
      <Link href="/" className="flex items-center">
        <a aria-label="Home">
          <Logo />
        </a>
      </Link>
      <nav className="mt-4 md:mt-0">
        <ul className="flex justify-between">
          <li className="text-black hover:text-primary transition duration-200 ease font-body font-bold pr-3 md:px-4 py-2 inline-flex items-center border-r border-solid border-border">
            <Link href="/">
              <a aria-label="Locations">Locations</a>
            </Link>
          </li>
          <li className="text-black hover:text-primary transition duration-200 ease font-body font-bold px-3 md:px-4 py-2 inline-flex items-center border-r border-solid border-border">
            <Link href="/trends">
              <a aria-label="Trends" rel="noopener noreferrer">
                Trends
              </a>
            </Link>
          </li>
          <li className="text-black hover:text-primary transition duration-200 ease font-body font-bold px-3 md:px-4 py-2 inline-flex items-center border-r border-solid border-border">
            <Link href="/stories">
              <a aria-label="Stories">Stories</a>
            </Link>
          </li>
          <li className="text-black hover:text-primary transition duration-200 ease font-body font-bold pl-3 md:pl-4 py-2">
            <Link href="/about">
              <a aria-label="About">About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const Logo = () => (
  <div style={{ width: "180px" }}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 114 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.372009 9.99997H4.89601V5.58397L7.28401 9.99997H9.45601L11.856 5.58397V9.99997H16.392V1.07197H10.668L8.48401 5.04397L6.38401 1.07197H0.372009V9.99997Z"
        fill="black"
      />
      <path
        d="M24.2575 0.891968C18.2215 0.891968 17.3095 3.45997 17.3095 5.33197V5.69197C17.3095 7.52797 18.2455 10.18 24.2575 10.18H24.8575C30.8815 10.18 31.8055 7.52797 31.8055 5.69197V5.33197C31.8055 3.45997 30.8935 0.891968 24.8575 0.891968H24.2575ZM27.1015 5.57197C27.1015 6.38797 26.4895 7.31197 24.5455 7.31197C22.6255 7.31197 22.0015 6.35197 22.0015 5.54797V5.40397C22.0015 4.62397 22.5655 3.73597 24.5455 3.73597C26.5015 3.73597 27.1015 4.62397 27.1015 5.40397V5.57197Z"
        fill="black"
      />
      <path
        d="M42.0074 9.99997L45.9314 1.07197H41.2034L38.8754 6.57997L36.4154 1.07197H31.2434L35.4914 9.99997H42.0074Z"
        fill="black"
      />
      <path
        d="M46.4989 1.07197V9.99997H57.3109V7.47997H50.9869V6.71197H57.1909V4.26397H50.9869V3.56797H57.2629V1.07197H46.4989Z"
        fill="black"
      />
      <path
        d="M65.9506 9.99997H70.5106V4.14397H74.3626V1.07197H62.0986V4.14397H65.9506V9.99997Z"
        fill="black"
      />
      <path
        d="M81.8739 0.891968C75.8379 0.891968 74.9259 3.45997 74.9259 5.33197V5.69197C74.9259 7.52797 75.8619 10.18 81.8739 10.18H82.4739C88.4979 10.18 89.422 7.52797 89.422 5.69197V5.33197C89.422 3.45997 88.5099 0.891968 82.4739 0.891968H81.8739ZM84.7179 5.57197C84.7179 6.38797 84.1059 7.31197 82.1619 7.31197C80.2419 7.31197 79.618 6.35197 79.618 5.54797V5.40397C79.618 4.62397 80.1819 3.73597 82.1619 3.73597C84.1179 3.73597 84.7179 4.62397 84.7179 5.40397V5.57197Z"
        fill="black"
      />
      <path
        d="M0.372009 20H4.89601V15.584L7.28401 20H9.45601L11.856 15.584V20H16.392V11.072H10.668L8.48401 15.044L6.38401 11.072H0.372009V20Z"
        fill="black"
      />
      <path
        d="M25.3255 16.292H23.1655L24.2335 13.82L25.3255 16.292ZM26.9575 20H32.0455L27.5695 11.072H21.1615L16.9495 20H21.5575L22.0255 18.932H26.4895L26.9575 20Z"
        fill="black"
      />
      <path
        d="M32.592 11.072V20H43.344V16.82H37.152V11.072H32.592Z"
        fill="black"
      />
      <path
        d="M44.3309 11.072V20H55.0829V16.82H48.8909V11.072H44.3309Z"
        fill="black"
      />
      <path
        d="M62.65 10.892C56.614 10.892 55.702 13.46 55.702 15.332V15.692C55.702 17.528 56.638 20.18 62.65 20.18H63.25C69.274 20.18 70.198 17.528 70.198 15.692V15.332C70.198 13.46 69.286 10.892 63.25 10.892H62.65ZM65.494 15.572C65.494 16.388 64.882 17.312 62.938 17.312C61.018 17.312 60.394 16.352 60.394 15.548V15.404C60.394 14.624 60.958 13.736 62.938 13.736C64.894 13.736 65.494 14.624 65.494 15.404V15.572Z"
        fill="black"
      />
      <path
        d="M75.6734 14.636V13.508H78.9974C79.6094 13.508 79.8254 13.736 79.8254 14.072C79.8254 14.396 79.6214 14.636 78.9974 14.636H75.6734ZM75.6734 17.144H78.2174C79.5014 17.144 79.9454 17.732 79.9454 18.644V19.724C79.9454 19.856 79.9454 19.94 80.0054 20H84.6974V19.928C84.6014 19.748 84.5414 19.544 84.5414 19.1V17.744C84.5414 16.58 83.8574 15.776 82.4294 15.5C83.2454 15.332 84.4934 14.768 84.4934 13.436V13.328C84.4934 11.552 82.8974 11.072 80.9774 11.072H71.1134V20H75.6734V17.144Z"
        fill="black"
      />
      <path
        d="M92.5361 20.18C98.4521 20.18 99.2081 17.648 99.2081 16.4V16.088H94.5881C94.5521 16.304 94.3601 17.312 92.2601 17.312C90.2561 17.312 89.8601 16.316 89.8601 15.548V15.404C89.8601 14.624 90.2201 13.736 92.2601 13.736C94.3361 13.736 94.5281 14.672 94.5881 14.864H99.2081V14.684C99.2081 13.364 98.4521 10.892 92.5361 10.892H92.1161C85.9721 10.892 85.1681 13.46 85.1681 15.332V15.692C85.1681 17.552 86.0201 20.18 92.1161 20.18H92.5361Z"
        fill="black"
      />
      <path
        d="M107.079 16.292H104.919L105.987 13.82L107.079 16.292ZM108.711 20H113.799L109.323 11.072H102.915L98.7033 20H103.311L103.779 18.932H108.243L108.711 20Z"
        fill="black"
      />
    </svg>
  </div>
);
