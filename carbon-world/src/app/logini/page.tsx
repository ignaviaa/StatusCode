import Image from 'next/image'
import Navbar from '@/components/Navbar';

function Page()
{
    return (
      <>
      <Navbar />
      <div className="bg-cover bg-center h-screen bg-no-repeat backdrop-brightness-50" style={{ backgroundImage: `url(./login.jpeg)`}}>
         <div className="w-full h-full flex  justify-center items-center 
             bg-black-600/30 backdrop-brightness-75">
  <div className=" w-[50%] m-auto">
      <form className="bg-[#202123] shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4 h-[50vh]">
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2 mt-5">
        Organisation Name:
      </label>
      <input className="shadow border rounded w-full py-2 px-3 text-black text-sm block focus:shadow-outline p-2.5 pl-5 " id="username" type="text" placeholder="Name of your organization.." />
    </div>
    <div className="mb-6">
      <label className="block text-white text-sm font-bold mb-2 mt-2">
      Organisation email:
      </label>
      <input type="text" className="bg-gray-50  text-gray-900 text-sm rounded focus:border-[#5CC94D] block w-full pl-5 p-2.5  dark:placeholder-gray-400 dark:text-white " placeholder=" Organisation email.." />
    </div>
    <div className="flex items-center ">
      <button className="border border-white hover:bg-[#5CC94D] hover:border-[#5CC94D]  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign Up
      </button>
      <button className="border border-white hover:bg-[#5CC94D] hover:border-[#5CC94D]  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-5" type="button">
        Sign In
      </button>
     
    </div>
  </form>

  </div>
  </div>
  </div>
  </>

    )
}
export default Page;