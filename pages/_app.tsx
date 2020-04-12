import { AppProps } from "next/app";
import NProgress from "../components/nprogress";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <NProgress />
  </>
);

export default MyApp;
