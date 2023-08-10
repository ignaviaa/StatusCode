import {FaUserTie} from "react-icons/fa"
import {GiWorld} from "react-icons/gi"

function Page()
{
    return (
    <div className="h-screen bg-[#202123] w-screen overflow-hidden">
        <div className="flex flex-row font-Poppins divide-x-2 divide-blue-50">
        <div className="m-auto text-center pt-40 mr-5 ">
            <div className="border border-[#54b946] hover:bg-[#54b946] hover:cursor-pointer rounded-3xl h-[32vh] w-[20vw] pt-[30%] ">
            <FaUserTie className="h-10 w-10 mx-auto fill-white" />
            </div>
            <p className="p-5 m-5 font-semibold">Investor</p></div>
            <div className="m-auto text-center pt-40 ml-5 pl-10">
            <div className="border border-[#54b946] hover:bg-[#54b946] hover:cursor-pointer rounded-3xl h-[32vh] w-[20vw] pt-[30%] ">
            <GiWorld className="h-10 w-10 mx-auto" />
            </div>
            <p className="p-5 m-5 font-semibold">NGO</p>
            </div>
        </div>
    </div>
    )
}
export default Page;