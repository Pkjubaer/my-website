import HeaderSection from "./HeaderSection";

const NewsLetter = () => {
  return (
    <div className="max-w-screen-2xl container bg-white mx-auto py-20 px-5">
      <HeaderSection
        subheading=""
        heading="Stay updated with our NewaLetter"
        description="Oracle Apex Developer is required to designs new or complementary solutions, implements solutions, and troubleshoots any residual issues post implementation.Bangladesh is set to take a significant leap in healthcare innovation with the launch of a pilot project."
      />
      <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-blue-700 transition">
            <span>Subscribe Now</span>
          </button>
          <button className="border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white text-blue-600 transition">
            Learn More
          </button>
        </div>
    </div>
  );
};

export default NewsLetter;
