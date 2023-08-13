"use client";
import { FC, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { useRefi } from "@/hooks/useRefi";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { useRouter } from "next/navigation";
import { useDataStore } from "@/utils/dataStore";

interface TestProps {}

const Test: FC<TestProps> = ({}) => {
  const ngoName = useDataStore((state) => state.ngoName);
  const updateNgoName = useDataStore((state) => state.updateNgoName);
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
    updateNgoDashboard,
    findTo,
  } = useRefi({
    typeOfAccount,
  });
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const testFunc = async () => {
  //     const x = await addNgoTest(typeOfAccount);
  //     if (x === undefined) {
  //     } else {
  //       if (x.length !== 0) {
  //         push("dashboard");
  //       }
  //     }
  //   };
  //   testFunc();
  // }, [addNgoTest, push]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const x = await updateNgoDashboard();
  //     console.log(x);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <Navbar
        connected={connected}
        publicKey={publicKey as PublicKey}
        initialized={initialized}
        initializeUser={initializeUser}
      />
      <p
        onClick={() => {
          updateNgoDashboard();
        }}
      >
        Please Wait
      </p>
      <p
        onClick={() => {
          console.log(ngoName);
        }}
      >
        Print me
      </p>
      <p
        onClick={() => {
          push("dashboard");
        }}
      >
        push
      </p>
      <p
        onClick={() => {
          test({ hi: "hi" });
        }}
      >
        test me
      </p>
      <p onClick={() => findTo()}>HI</p>
    </div>
  );
};

export default Test;
