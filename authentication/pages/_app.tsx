import { Provider } from "next-auth/client";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default MyApp;
