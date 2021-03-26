import { useContext } from "react";
import { DataContext } from "../pages/_app.js";

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
  const { aboutContent } = useContext(DataContext);

  const defaultMetaKeywords = aboutContent[0].metaKeywords;
  const defaultMetaTitle = aboutContent[0].metaTitle;
  const defaultMetaDescription = aboutContent[0].metaDescription;
  const defaultOpenImage = aboutContent[0].openImage;
  const defaultOpenTitle = aboutContent[0].openTitle;
  const defaultOpenGraphDescription = aboutContent[0].openGraphDescription;
  const defaultTwitterImage = aboutContent[0].twitterImage;
  const defaultTwitterTitle = aboutContent[0].twitterTitle;
  const defaultTwitterDescription = aboutContent[0].twitterDescription;

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

      <meta
        name="keywords"
        content={
          defaultMetaKeywords && metaKeywords
            ? metaKeywords
            : defaultMetaKeywords
        }
      />
      <meta
        name="title"
        content={defaultMetaTitle && metaTitle ? metaTitle : defaultMetaTitle}
      />
      <meta
        name="description"
        content={
          defaultMetaDescription && metaDescription
            ? metaDescription
            : defaultMetaDescription
        }
      />

      <title>
        {defaultMetaTitle && metaTitle ? metaTitle : defaultMetaTitle} -{" "}
        {CMS_NAME}
      </title>

      {/* <meta
        property="og:url"
        content={`${siteRoute}/${pagePath ? pagePath : ""}`}
      /> */}

      {/* <meta
        name="twitter:url"
        content={`${siteRoute}/${pagePath ? pagePath : ""}`}
      /> */}

      <meta
        property="og:image"
        content={defaultOpenImage && openImage ? openImage : defaultOpenImage}
      />
      <meta
        property="og:title"
        content={`${
          defaultOpenTitle && openTitle ? openTitle : defaultOpenTitle
        }`}
      />
      <meta property="og:site_name" content={CMS_NAME} />
      <meta
        property="og:description"
        content={
          defaultOpenGraphDescription && openGraphDescription
            ? openGraphDescription
            : defaultOpenGraphDescription
        }
      />

      <meta name="twitter:site" content={`@${CMS_NAME}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image:src"
        content={
          defaultTwitterImage && twitterImage
            ? twitterImage
            : defaultTwitterImage
        }
      />
      <meta
        name="twitter:title"
        content={`${
          defaultTwitterTitle && twitterTitle
            ? twitterTitle
            : defaultTwitterTitle
        }`}
      />
      <meta
        name="twitter:description"
        content={
          defaultTwitterDescription && twitterDescription
            ? twitterDescription
            : defaultTwitterDescription
        }
      />
    </Head>
  );
}
