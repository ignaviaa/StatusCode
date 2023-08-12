import LoginPage from "@/components/LoginPage";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <LoginPage
        name="NGO Name"
        extraDetails={["Name of the NGO", "Enter Year", "Year the NGO started"]}
        typeOfAccount="NGO"
      />
    </>
  );
};

export default page;
