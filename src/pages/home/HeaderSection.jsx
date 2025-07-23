const HeaderSection = ({ subheading, heading, description }) => {
  return (
    <div className="text-center mb-12">
      <p className="text-blue-600 font-semibold uppercase">{subheading}</p>
      <h1 className="font-bold text-3xl lg:text-3xl text-gray-600 mt-3 sm:w-3/5 leading-normal lg:leading-snug capitalize mx-auto">
        {heading}
      </h1>
      {description && <p className="text-gray-600 mt-4 sm:w-3/5 text-base mx-auto">{description}</p>}
    </div>
  );
};

export default HeaderSection;
