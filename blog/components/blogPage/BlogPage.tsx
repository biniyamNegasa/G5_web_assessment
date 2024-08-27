import BlogCard from "../blogCard/BlogCard";

const BlogPage = () => {
  return (
    <div>
      <div className="flex items-center pl-16 gap-[22%]">
        <div className="font-semibold text-3xl">Blogs</div>
        <div>
          <div className="flex gap-5 justify-center">
            <label htmlFor="search">
              <input
                type="text"
                className=" rounded-3xl border-2 border-[#CFCFCF] py-2 px-7 w-fit text-[#CFCFCF]"
                placeholder="    Search..."
              />
            </label>
            <button className="font-semibold text-white bg-[#264FAD] rounded-3xl py-2 px-7 w-fit ">
              + New Blog
            </button>
          </div>
        </div>
      </div>
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default BlogPage;
