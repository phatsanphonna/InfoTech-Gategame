import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth, getFirebaseToken, getNewIdToken } from "../auth";
import {
  firebaseReady,
  firebaseToken,
  firebaseUserAtom,
  profileInfoAtom,
} from "../jotai/store";
import { useAtom } from "jotai";
import axios from "axios";
import WebworkerLoader from "../webworkers/loader";
import tokenRefresher from "../webworkers/tokenRefresher";

const AuthUpdater = () => {
  const [profile, setProfile] = useAtom(firebaseUserAtom);
  const [ready, setReady] = useAtom(firebaseReady);
  const [token, setToken] = useAtom(firebaseToken);
  const [info, setInfo] = useAtom(profileInfoAtom);

  useEffect(() => {
    // Setup auth state detector
    onAuthStateChanged(auth, async (user) => {
      // Load account data from firebase auth to redux state
      if (user) {
        const token = await getFirebaseToken();
        // Setup default header
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setProfile({ ...user, token });
        setToken(token);
        // Fetch data from backend if the backend url is detected
        if (process.env.NEXT_PUBLIC_backend_url) {
          try {
            const response = await axios.get(
              `${process.env.NEXT_PUBLIC_backend_url}/user/${user.email}`
            );
            setInfo(response.data);
          } catch (e) {
            console.log(e);
            setInfo(null);
          }
        } else {
          setInfo(null);
        }
      } else {
        setProfile(null);
      }
      setReady(true);
    });

    // Setup webworker for token refresher
    let worker = WebworkerLoader(tokenRefresher);
    worker.postMessage("Trigger Refresh WebWorker");
    worker.addEventListener("message", async (e: any) => {
      try {
        console.log("Webworker is refreshing the token");
        const token = await getNewIdToken();
        //@ts-ignore
        setProfile({
          ...profile,
          token,
        });
        setToken(token);
      } catch (e) {
        console.error("An error has occured while trying to refresh ID token");
        console.log(e);
      }
    });
  }, []);
  return null;
};

export { AuthUpdater };
