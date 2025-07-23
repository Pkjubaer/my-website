import HeaderSection from "./HeaderSection";

const Testimonial = () => {
  return (
    <div
      className="max-w-screen-2xl container mx-auto py-20 px-5"
      style={{ backgroundColor: "#F2F4F8" }}
    >
      <HeaderSection subheading="testimonials" heading="What our clients say" />
      {/* carousel section */}
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item md:space-x-8 relative w-full">
            <div className="md:w-1/2 bg-white rounded-md shadow md:p-8 p-4">
              <img
                src="/images/logos/logo1.png"
                className="size-28 mx-auto my-2 object-center"
              />
              <p className="text-gray-600 italic mb-4 md:w-3/5 mx-auto">
                Bangladesh is set to take a significant leap in healthcare
                innovation with the launch of a pilot project
              </p>
              <div className="flex flex-col items-center space-y-2">
                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                  J
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  Jubaer
                </h3>
                <p className="text-sm text-gray-500">CEO, TechCorp</p>
              </div>
            </div>
            <div className="md:w-1/2 bg-white rounded-md shadow md:p-8 p-4">
              <img
                src="/images/logos/logo2.png"
                className="size-28 mx-auto my-2 object-center"
              />
              <p className="text-gray-600 italic mb-4 md:w-3/5 mx-auto">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sapiente labore, nesciunt officia, eaque quia alias ratione eum nostrum voluptatibus vitae corrupti unde veniam aliquid. Commodi illum totam pariatur recusandae"
              </p>
              <div className="flex flex-col items-center space-y-2">
                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                  H
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  Hossain
                </h3>
                <p className="text-sm text-gray-500">CEO, TechCorp</p>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item md:space-x-8 relative w-full">
            <div className="md:w-1/2 bg-white rounded-md shadow md:p-8 p-4">
              <img
                src="/images/logos/logo1.png"
                className="size-28 mx-auto my-2 object-center"
              />
              <p className="text-gray-600 italic mb-4 md:w-3/5 mx-auto">
                Bangladesh is set to take a significant leap in healthcare
                innovation with the launch of a pilot project
              </p>
              <div className="flex flex-col items-center space-y-2">
                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                  J
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  Jubaer
                </h3>
                <p className="text-sm text-gray-500">CEO, TechCorp</p>
              </div>
            </div>
            <div className="md:w-1/2 bg-white rounded-md shadow md:p-8 p-4">
              <img
                src="/images/logos/logo2.png"
                className="size-28 mx-auto my-2 object-center"
              />
              <p className="text-gray-600 italic mb-4 md:w-3/5 mx-auto">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sapiente labore, nesciunt officia, eaque quia alias ratione eum nostrum voluptatibus vitae corrupti unde veniam aliquid. Commodi illum totam pariatur recusandae"
              </p>
              <div className="flex flex-col items-center space-y-2">
                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                  H
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  Hossain
                </h3>
                <p className="text-sm text-gray-500">CEO, TechCorp</p>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item md:space-x-8 relative w-full">
            <div className="md:w-1/2 bg-white rounded-md shadow md:p-8 p-4">
              <img
                src="/images/logos/logo1.png"
                className="size-28 mx-auto my-2 object-center"
              />
              <p className="text-gray-600 italic mb-4 md:w-3/5 mx-auto">
                Bangladesh is set to take a significant leap in healthcare
                innovation with the launch of a pilot project
              </p>
              <div className="flex flex-col items-center space-y-2">
                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                  J
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  Jubaer
                </h3>
                <p className="text-sm text-gray-500">CEO, TechCorp</p>
              </div>
            </div>
            <div className="md:w-1/2 bg-white rounded-md shadow md:p-8 p-4">
              <img
                src="/images/logos/logo2.png"
                className="size-28 mx-auto my-2 object-center"
              />
              <p className="text-gray-600 italic mb-4 md:w-3/5 mx-auto">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sapiente labore, nesciunt officia, eaque quia alias ratione eum nostrum voluptatibus vitae corrupti unde veniam aliquid. Commodi illum totam pariatur recusandae"
              </p>
              <div className="flex flex-col items-center space-y-2">
                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                  H
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  Hossain
                </h3>
                <p className="text-sm text-gray-500">CEO, TechCorp</p>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item md:space-x-8 relative w-full">
            <div className="md:w-1/2 bg-white rounded-md shadow md:p-8 p-4">
              <img
                src="/images/logos/logo1.png"
                className="size-28 mx-auto my-2 object-center"
              />
              <p className="text-gray-600 italic mb-4 md:w-3/5 mx-auto">
                Bangladesh is set to take a significant leap in healthcare
                innovation with the launch of a pilot project
              </p>
              <div className="flex flex-col items-center space-y-2">
                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                  J
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  Jubaer
                </h3>
                <p className="text-sm text-gray-500">CEO, TechCorp</p>
              </div>
            </div>
            <div className="md:w-1/2 bg-white rounded-md shadow md:p-8 p-4">
              <img
                src="/images/logos/logo2.png"
                className="size-28 mx-auto my-2 object-center"
              />
              <p className="text-gray-600 italic mb-4 md:w-3/5 mx-auto">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sapiente labore, nesciunt officia, eaque quia alias ratione eum nostrum voluptatibus vitae corrupti unde veniam aliquid. Commodi illum totam pariatur recusandae"
              </p>
              <div className="flex flex-col items-center space-y-2">
                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                  H
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  Hossain
                </h3>
                <p className="text-sm text-gray-500">CEO, TechCorp</p>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
