import Head from 'next/head';

import "modern-normalize/modern-normalize.css";
import "react-notifications/lib/notifications.css";
import '../styles/global.scss';
// import "@pnotify/core/dist/PNotify.css";
// import "@pnotify/core/dist/BrightTheme.css";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import NotificationContainer from 'react-notifications/lib/NotificationContainer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web version of phonebook" />
        <link
          rel="icon shortcut"
          href="https://avatars.githubusercontent.com/u/69747115?v=4"
          type="image/x-icon"
        />
        <title>Phonebook</title>
      </Head>
      <div id="root-modal"></div>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <NotificationContainer />
    </>
  );
}

export default MyApp;