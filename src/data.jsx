import { BsChatLeftDotsFill } from "react-icons/bs";
import { ImUsers } from "react-icons/im";
import { GiBrain } from "react-icons/gi";
import { GiDatabase } from "react-icons/gi";
import { MdAccessAlarms } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

const sidebarItems = [
  {
    id: 1,
    name: "Chat",
    icon: <BsChatLeftDotsFill />,
    url: "",
  },
  {
    id: 2,
    name: "Users",
    icon: <ImUsers />,
    url: "",
  },
  {
    id: 3,
    name: "Training",
    icon: <GiBrain />,
    url: "",
  },
  {
    id: 4,
    name: "Entities",
    icon: <GiDatabase />,
    url: "",
  },
  {
    id: 5,
    name: "Archives",
    icon: <MdAccessAlarms />,
    url: "",
  },
  {
    id: 6,
    name: "Trending",
    icon: <IoMdTrendingUp />,
    url: "",
  },
  {
    id: 7,
    name: "Settings",
    icon: <IoSettings />,
    url: "",
  },
];

export default sidebarItems;
