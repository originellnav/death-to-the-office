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
}) {
  return (
    <>
      <Meta />
      <div className={`min-h-screen ${className}`}>
        <Alert preview={preview} />
        {header && header === "hide" ? null : <Header />}
        <main>{children}</main>
        {footer && footer === "hide" ? null : <Footer />}
      </div>
    </>
  );
}
