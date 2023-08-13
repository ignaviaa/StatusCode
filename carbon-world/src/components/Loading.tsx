import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-[#171819]">
            <div className="md:w-[20%]">
                <Skeleton className="h-full" />
            </div>
            <div className="w-screen h-screen flex flex-col overflow-x-hidden">
                <div className="flex items-center justify-between p-10 py-8 mx-5">
                    <Skeleton height={30} width={200} />
                    <div className="flex items-center bg-[#171819]">
                        <Skeleton height={30} width={150} />
                    </div>
                </div>
                <div className="grid grid-cols-3 w-[76vw] h-[15vh] mx-auto mb-5 bg-[#202123] divide-x divide-[#3F4042] space-x-1 rounded p-5 font-Poppins text-gray-400 text-[15px]">
                    <Skeleton height={30} width={100} />
                    <Skeleton height={30} width={150} />
                    <Skeleton height={30} width={150} />
                </div>
                <div className="grid grid-col-1 grid-flow-col mx-auto">
                    <div>
                        <Skeleton height={200} width={300} />
                    </div>
                    <div className="relative left-[2vh]">
                        <Skeleton height={200} width={500} />
                    </div>
                </div>
                <div className="flex items-center p-10 py-5 mx-5">
                    <Skeleton height={30} width={200} />
                </div>
                <div className="grid grid-cols-3 gap-10 m-auto w-[75vw] mb-10">
                    <div>
                        <Skeleton height={200} width={300} />
                    </div>
                    <div className="w-[25vw] ">
                        <Skeleton height={300} />
                    </div>
                    <div className="w-[25vw] ">
                        <Skeleton height={300} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
