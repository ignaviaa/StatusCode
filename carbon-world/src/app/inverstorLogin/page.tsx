"use client";
import Navbar from "@/components/Navbar";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRefi } from "@/hooks/useRefi";
import { PublicKey } from "@solana/web3.js";
import { useEffect, useState } from "react";
import { clsx } from "clsx";

function Page() {
  const { connected, publicKey } = useWallet();

  const { initialized, initializeUser } = useRefi();
  const [disableElement, setdisableElement] = useState<boolean>();
  useEffect(() => {
    setdisableElement(initialized && connected);
  }, [initialized, connected]);
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
                  Organisation Name:
                </label>
                <input
                  className="focus:shadow-outline block w-full rounded border p-2.5 px-3 py-2 pl-5 text-sm text-black shadow "
                  id="username"
                  type="text"
                  placeholder="Name of your organization.."
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 mt-2 block text-sm font-bold text-white">
                  Organisation email:
                </label>
                <input
                  type="text"
                  className="block  w-full rounded bg-gray-50 p-2.5 pl-5 text-sm text-gray-900 focus:border-[#5CC94D]  dark:text-white dark:placeholder-gray-400 "
                  placeholder=" Organisation email.."
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className={clsx(
                    "focus:shadow-outline rounded border border-white  px-4 py-2 font-bold text-white hover:border-[#5CC94D] hover:bg-[#5CC94D] focus:outline-none",
                    disableElement ? "" : "cursor-not-allowed",
                  )}
                  type="button"
                  disabled={disableElement}
                >
                  Sign Up
                </button>
                <button
                  className={clsx(
                    "focus:shadow-outline ml-5 rounded border border-white px-4 py-2 font-bold text-white hover:border-[#5CC94D] hover:bg-[#5CC94D] focus:outline-none",
                    disableElement ? "" : "cursor-not-allowed",
                  )}
                  type="button"
                  disabled={disableElement}
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Page;
