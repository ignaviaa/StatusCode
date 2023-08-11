import { BiLogOut } from "react-icons/bi";
import { AiOutlineTransaction } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { IoBagHandle } from "react-icons/io5"
import { MdDiamond } from "react-icons/md"

export const ngoDashboard = [
    { icon: <BiSolidDashboard />, label: "Dashboard", href: "/dashboard" },
    {
        icon: <AiOutlineTransaction />,
        label: "Transaction",
        href: "/transaction",
    },
    { icon: <SlGraph />, label: "Analytics", href: "/analytics" },
    { icon: <BiLogOut />, label: "Log Out", href: "/home" },
]

export const investorDashboard = [
    { icon: <BiSolidDashboard />, label: "Dashboard", href: "/dashboard" },
    {
        icon: <IoBagHandle />,
        label: "Marketplace",
        href: "/marketplace",
    },
    {
        icon: <AiOutlineTransaction />,
        label: "Transaction",
        href: "/transaction",
    },
    { icon: <MdDiamond />, label: "Rewards", href: "/rewards" },
    { icon: <BiLogOut />, label: "Log Out", href: "/home" },
]