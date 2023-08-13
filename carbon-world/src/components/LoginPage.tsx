"use client";
import Navbar from "@/components/Navbar";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRefi } from "@/hooks/useRefi";
import { PublicKey } from "@solana/web3.js";
import { FC, useEffect, useState } from "react";
import { clsx } from "clsx";
import { useRouter } from "next/navigation";

interface ExtraDetails {
  [index: number]: string;
}

interface LoginProps {
  name: string;
  extraDetails: ExtraDetails;
  typeOfAccount: string;
}

const LoginPage: FC<LoginProps> = ({ name, extraDetails, typeOfAccount }) => {
  const { connected, publicKey } = useWallet();
  // const x = "NGO";
  const { initialized, initializeUser, addNgoAccount, test, addNgoTest } =
    useRefi({
      typeOfAccount,
    });

  const [disableElement, setdisableElement] = useState<boolean>();

  const [placeholderOne, setPlaceholderOne] = useState<string>("");
  const [placeholderTwo, setPlaceholderTwo] = useState<string>("");

  const { push } = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(typeOfAccount);
    setdisableElement(initialized && connected);
  }, [initialized, connected]);

  useEffect(() => {
    const testFunc = async () => {
      const x = await addNgoTest(typeOfAccount);
      if (x === undefined) {
      } else {
        if (x.length !== 0) {
          if (typeOfAccount === "NGO") push("ngoDashboard");
          else if (typeOfAccount === "INVESTOR") push("investorDesc");
        }
      }
    };
    testFunc();
  }, [addNgoTest, push]);

  const handleClick = () => {
    addNgoAccount({
      name_of_ngo: placeholderOne,
      date_of_ngo_started: placeholderTwo,
      typeOfAccount: typeOfAccount,
    });
    if (typeOfAccount === "NGO") push("ngoDashboard");
    else if (typeOfAccount === "INVESTOR") push("investorDesc");
  };

  return (
    <>
      <Navbar
        connected={connected}
        publicKey={publicKey as PublicKey}
        initialized={initialized}
        initializeUser={initializeUser}
      />
      <div
        className="h-screen bg-cover bg-center bg-no-repeat backdrop-brightness-50"
        style={{ backgroundImage: `url(./login.jpeg)` }}
      >
        <p></p>
        <div
          className={clsx(
            "bg-black-600/30 flex h-full  w-full items-center justify-center backdrop-brightness-75",
            disableElement ? "" : "cursor-not-allowed",
          )}
        >
          <div className=" m-auto w-[50%]">
            <form className="mb-4 h-[50vh] rounded-3xl bg-[#202123] px-8 pb-8 pt-6 shadow-md">
              <div className="mb-4">
                <label className="mb-2 mt-5 block text-sm font-bold text-white">
                  {name}:
                </label>
                <input
                  className={clsx(
                    "block  w-full rounded bg-gray-50 p-2.5 pl-5 text-sm text-gray-900 focus:border-[#5CC94D]   dark:placeholder-gray-400",
                    disableElement ? "" : "cursor-not-allowed",
                  )}
                  id="username"
                  type="text"
                  placeholder={extraDetails[0]}
                  disabled={!disableElement}
                  onChange={(e) => setPlaceholderOne(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 mt-2 block text-sm font-bold text-white">
                  {extraDetails[2]}:
                </label>
                <input
                  type="text"
                  className={clsx(
                    "block  w-full rounded bg-gray-50 p-2.5 pl-5 text-sm text-gray-900 focus:border-[#5CC94D]   dark:placeholder-gray-400",
                    disableElement ? "" : "cursor-not-allowed",
                  )}
                  placeholder={extraDetails[1]}
                  disabled={!disableElement}
                  onChange={(e) => setPlaceholderTwo(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className={clsx(
                    "focus:shadow-outline rounded border border-white  px-4 py-2 font-bold text-white  focus:outline-none",
                    disableElement
                      ? "cursor-pointer hover:border-[#5CC94D] hover:bg-[#5CC94D]"
                      : "cursor-not-allowed",
                  )}
                  type="button"
                  disabled={!disableElement}
                  onClick={handleClick}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
