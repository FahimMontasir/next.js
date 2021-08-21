import MainNavigation from "./main-navigation";

const Layout = ({ children }) => {
  return (
    <section className="container">
      <MainNavigation />
      <main>{children}</main>
    </section>
  );
};
export default Layout;
