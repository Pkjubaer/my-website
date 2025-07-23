import HeaderSection from "./HeaderSection";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router";

const Teams = [
  {
    img: "/images/members/person1.png",
    name: "Jone Doe",
    title: "CEO",
    icons: "",
  },
  {
    img: "/images/members/person2.png",
    name: "Jane Smith",
    title: "CTO",
    icons: "",
  },
  {
    img: "/images/members/person3.png",
    name: "Mark Johnson",
    title: "Designer",
    icons: "",
  },
  {
    img: "/images/members/person4.png",
    name: "Emily Carter",
    title: "Developer",
    icons: "",
  },
];
const TeamSection = () => {
  return (
    <div className="max-w-screen-2xl container bg-gray-200 mx-auto py-20 px-5">
      <HeaderSection subheading="Our Team" heading="Meet The Experts" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
        {Teams.map((team, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={team.img}
              alt={team.title}
              className="w-full h-48 object-cover hover:scale-105 transform transition cursor-pointer"
            />
            <div className="p-5 bg-white">
              <h1 className="text-gray-600 font-bold">{team.name}</h1>
              <h2 className="text-gray-400">{team.title}</h2>
              <div className="flex space-x-4 mb-5 items-center mt-2">
                <Link to=""><FaLinkedinIn className="text-blue-600 hover:text-blue-800"/></Link>
                <Link to="#"><FaTwitter className="text-blue-600 hover:text-blue-800"/></Link>
                <Link to="#"><FaInstagram className="text-blue-600 hover:text-blue-800"/></Link>
                <Link to="#"><FaFacebookF className="text-blue-600 hover:text-blue-800"/></Link>
              </div>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300">Contact {team.name.split(" ")[0]}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
