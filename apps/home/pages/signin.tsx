import { NextPage } from "next";
import app from "firebase-auth-api";

const SignIn: NextPage = () => {
  console.log(app);

  return <h1>hello world</h1>;
};

export default SignIn;
