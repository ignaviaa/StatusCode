import LoginPage from "@/components/LoginPage";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  // const extraDetails = []
  // "Name of the investor",
  //   placeholder2: "Solo or Organization",
  //   subHeading: "Type of Investor",
  // };
  return (
    <>
      <LoginPage
        name="Investor Name"
        extraDetails={[
          "Name of the Investor",
          "Solo or Organization",
          "Type of Investor",
        ]}
        typeOfAccount="INVESTOR"
      />
    </>
  );
};

export default page;
