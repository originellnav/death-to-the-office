import Alert from "../components/alert";
import Header from "../components/header";
import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({
  preview,
  children,
  header,
  footer,
  className,
  metaKeywords,
  metaTitle,
  metaDescription,
  openImage,
  openTitle,
  openGraphDescription,
  twitterTitle,
  twitterImage,
  twitterDescription,
}) {
  return (
    <>
      <Meta
        metaKeywords={metaKeywords}
        metaTitle={metaTitle}
        metaDescription={metaDescription}
        openImage={openImage}
        openTitle={openTitle}
        openGraphDescription={openGraphDescription}
        twitterTitle={twitterTitle}
        twitterImage={twitterImage}
        twitterDescription={twitterDescription}
      />
      <div className={`min-h-screen ${className}`}>
        <Alert preview={preview} />
        {header && header === "hide" ? null : <Header />}
        <main>{children}</main>
        {footer && footer === "hide" ? null : <Footer />}
      </div>
    </>
  );
}
