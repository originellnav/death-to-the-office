import { CMS_NAME } from "../lib/constants";

import Head from "next/head";

export default function Meta({
  metaKeywords,
  metaTitle,
  metaDescription,
  openImage,
  openTitle,
  openGraphDescription,
  twitterImage,
  twitterTitle,
  twitterDescription,
}) {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />

      <meta http-equiv="Accept-CH" content="DPR, Width, Viewport-Width" />
      <meta property="og:locale" content="en_US" />

      <meta name="keywords" content={metaKeywords} />
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />

      <title>
        {metaTitle} - {CMS_NAME}
      </title>

      {/* <meta
        property="og:url"
        content={`${siteRoute}/${pagePath ? pagePath : ""}`}
      /> */}

      {/* <meta
        name="twitter:url"
        content={`${siteRoute}/${pagePath ? pagePath : ""}`}
      /> */}

      <meta property="og:image" content={openImage} />
      <meta property="og:title" content={`${openTitle}`} />
      <meta property="og:site_name" content={CMS_NAME} />
      <meta property="og:description" content={openGraphDescription} />

      <meta name="twitter:site" content={`@${CMS_NAME}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:src" content={twitterImage} />
      <meta name="twitter:title" content={`${twitterTitle}`} />
      <meta name="twitter:description" content={twitterDescription} />
    </Head>
  );
}
