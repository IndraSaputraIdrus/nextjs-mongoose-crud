import "../styles/globals.css";
import Layouts from "../components/Layouts";

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <Layouts>{page}</Layouts>);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
