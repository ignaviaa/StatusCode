"use client";
import SideBar from "@/components/SideBar";
import Cards from "@/components/Cards";
import AddButton from "@/components/AddButton";
import SearchBar from "@/components/SearchBar";
import BarChart from "@/components/BarChart";
import Category from "@/components/Category";
import { ngoDashboard } from "@/constants/dashboard";
import { useEffect, useState } from "react";
import MyFormModal from "@/components/MyFormModal";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRefi } from "@/hooks/useRefi";

function Page() {
  const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);
  const { connected, publicKey } = useWallet();
  const [cards, setCards] = useState<any>([{}]);
  const { findNgoProjects } = useRefi({ typeOfAccount: "NGO" });
  // const {
  //   sendSol,
  //   initialized,
  //   initializeUser,
  //   test,
  //   addNgoAccount,
  //   addNgoTest,
  //   updateNgoDashboard,
  //   findTo,
  // } = useRefi({
  //   typeOfAccount,
  // });

  // const handleClick = async () => {
  //   const x = await findNgoProjects();
  //   setCards(x)
  // };
  useEffect(() => {
    const handleClick = async () => {
      const x = await findNgoProjects();
      setCards(x);
    };
    handleClick();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className=" flex min-h-screen flex-col bg-[#171819]  md:flex-row">
        <div className="md:w-[20%]">
          <SideBar data={ngoDashboard} />
        </div>
        <div className=" flex h-screen w-screen flex-col overflow-x-hidden">
          <div className="mx-5 flex items-center justify-between p-10 py-8 ">
            <span className="font-Poppins text-[25px] font-semibold text-white ">
              Dashboard
            </span>
            <div className="flex items-center bg-[#171819]">
              <SearchBar
                placeholderDetails="Search listed project"
                width="30vw"
              />
            </div>
          </div>

          <div className="mx-auto mb-5 grid h-[15vh] w-[76vw] grid-cols-3 space-x-1 divide-x divide-[#3F4042] rounded bg-[#202123] p-5 font-Poppins text-[15px] text-gray-400">
            <div className=" flex flex-row items-center justify-center ">
              Amount{" "}
            </div>
            <div className="flex flex-row items-center justify-center ">
              Contributors{" "}
            </div>
            <div className="flex flex-row items-center justify-center ">
              Carbon Captured{" "}
            </div>
          </div>
          <div className="grid-col-1 mx-auto grid grid-flow-col ">
            <div>
              <Category />
            </div>
            <div className="relative left-[2vh]">
              <BarChart />
            </div>
          </div>
          <div className="mx-5 flex items-center p-10 py-5">
            <span className="font-Poppins text-[25px] font-semibold text-white ">
              Projects
            </span>
          </div>
          <div className="m-auto mb-10 grid w-[75vw] grid-cols-3 gap-10">
            <div onClick={() => setIsPopUpOpen(true)} className="w-[25vw] ">
              <AddButton />
            </div>

            {isPopUpOpen && (
              <MyFormModal onDismiss={() => setIsPopUpOpen(false)} />
            )}

            {/*<div className="w-[25vw]  ">*/}
            {/*    <Cards/>*/}
            {/*</div>*/}
            {/* <div className="w-[25vw]" onClick={() => handleClick()}>
              <Cards />
            </div>
            <div className="w-[25vw]  ">
              <Cards />
            </div> */}
            {cards?.map((value: any, index: any) => (
              <div key={index}>
                <Cards name={value.nameOfProject} desc={value.description} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
