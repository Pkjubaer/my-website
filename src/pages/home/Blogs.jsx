import HeaderSection from "./HeaderSection";
const blogs = [
  {
    img: "/images/blogs/blog1.png",
    title: "title 1",
    category: "technology",
    heding: 'How AI is the Future of Web Development',
    description: 'Prices of potatoes have begun to rise after months, adding slight pressure on consumers struggling with high inflation but also bringing relief to farmers reeling from losses.',
    author: "/images/authors/author1.png",
    authorName: 'Jone Doe',
    authorRole: 'Tech Blogger'
  },
  {
    img: "/images/blogs/blog2.png",
    title: "title 2",
    category: "design",
    heding: '10 Tips for Creating Stunning UI/UX Designs',
    description: 'Prices of potatoes have begun to rise after months, adding slight pressure on consumers struggling with high inflation but also bringing relief to farmers reeling from losses.',
    author: "/images/authors/author2.png",
    authorName: 'Jane Smith',
    authorRole: 'UX Designer'
  },
  {
    img: "/images/blogs/blog3.png",
    title: "title 3",
    category: "development",
    heding: 'Understanding JavaScript Closures in Depth',
    description: 'Prices of potatoes have begun to rise after months, adding slight pressure on consumers struggling with high inflation but also bringing relief to farmers reeling from losses.',
    author: "/images/authors/author3.png",
    authorName: 'Mark Johnson',
    authorRole: 'Frontend Developerr'
  },
  {
    img: "/images/blogs/blog4.png",
    title: "title 4",
    category: "business",
    heding: 'Why Digital Transformation is Essential for Sucess',
    description: 'Prices of potatoes have begun to rise after months, adding slight pressure on consumers struggling with high inflation but also bringing relief to farmers reeling from losses.',
    author: "/images/authors/author4.png",
    authorName: 'Emily Carter',
    authorRole: 'Business Analyst'
  },
];
const Blogs = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto py-20 px-5 bg-white">
      <HeaderSection
        subheading="Our Blogs"
        heading="Latest Aticles and Insights"
      />
      {/* Blogs content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-48 object-cover hover:scale-105 transform transition"
            />
            <div className="p-5">
              <p className="text-sm text-blue-600 font-medium uppercase mb-2">{blog.category}</p>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{blog.heding}</h3>
              <p className="text-sm text-gray-600 mb-5">{blog.description}</p>
              {/*  author info */}
              <div className="flex  items-center space-x-3">
                <img src={blog.author} alt={blog.authorName} className="w-10 h-10 rounded-full object-cover"/>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">{blog.authorName}</h4>
                  <p className="text-xs text-gray-500 ">{blog.authorRole}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
