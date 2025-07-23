import HeaderSection from "./HeaderSection";
import { FiFile } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiDatabase } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

const Services = () => {
  const services = [
    {
      icons: FiFile,
      description:
        "Bangladesh is set to take a significant leap in healthcare innovation with the launch of a pilot project",
    },
    {
      icons: FiHeart,
      description:
        "Bangladesh is set to take a significant leap in healthcare innovation with the launch of a pilot project",
    },
    {
      icons: FiDatabase,
      description:
        "Bangladesh is set to take a significant leap in healthcare innovation with the launch of a pilot project",
    },
    {
      icons: FiMenu,
      description:
        "Bangladesh is set to take a significant leap in healthcare innovation with the launch of a pilot project",
    },
  ];
  return (
    <div className="max-w-screen-2xl container bg-white mx-auto py-20 px-5">
      <HeaderSection
        subheading="Services"
        heading="Explore our range of professional services tailored to meet your business needs."
        description="Easily locate Oracle partners with expertise in building, selling, and providing value-added services for Oracle technology.Easily locate Oracle partners with expertise in building, selling, and providing value-added services for Oracle technology."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-4/5 mx-auto mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 hover:shadow-xl hover:rounded-md transition cursor-pointer"
          >
            <service.icons className="text-blue-600 text-4xl mb-4" />
            <p className="text-gray-600 mt-2 md:px-10">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Services;
