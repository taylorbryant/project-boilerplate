import "../css/index.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
