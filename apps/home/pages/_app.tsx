import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  AuthUpdater,
  firebaseUserAtom,
  profileInfoAtom,
} from "firebase-auth-api";
import { useAtom } from "jotai";

function MyApp({ Component, pageProps }: AppProps) {
  const [User] = useAtom(firebaseUserAtom);
  console.log(User);

  return (
    <>
      <AuthUpdater />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
