import { wrapper } from "@/store/store";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import "@/styles/globals.css";

export default function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Toaster position="top-center" />
      <Component {...pageProps} />
    </Provider>
  );
}
