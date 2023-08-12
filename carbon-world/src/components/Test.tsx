"use client";
import { FC, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { useRefi } from "@/hooks/useRefi";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { useRouter } from "next/navigation";

interface TestProps {}

const Test: FC<TestProps> = ({}) => {
  const typeOfAccount = "NGO";
  const data = {
    name_of_ngo: "what",
    date_of_ngo_started: "what",
  };
  const { connected, publicKey } = useWallet();
  const {
    sendSol,
    initialized,
    initializeUser,
    test,
    addNgoAccount,
    addNgoTest,
  } = useRefi({
    typeOfAccount,
  });
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const testFunc = async () => {
      const x = await addNgoTest();
      if (x === undefined) {
      } else {
        if (x.length !== 0) {
          push("dashboard");
        }
      }
    };
    testFunc();
  }, [addNgoTest, push]);

  return (
    <div>
      {loading && (
        <Navbar
          connected={connected}
          publicKey={publicKey as PublicKey}
          initialized={initialized}
          initializeUser={initializeUser}
        />
      )}

      <p onClick={() => push("/dashboard")}>hi therre</p>
    </div>
  );
};

export default Test;
