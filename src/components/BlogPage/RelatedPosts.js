import Image from "next/image";

const RelatedPosts = ({ blogs, onClick }) => (
  <div className="mb-10">
    <h3 className="text-[24px] text-[#191919] font-poppins mb-[24px]">
      Newest Post
    </h3>
    {blogs.slice(0, 4).map((blog, idx) => (
      <div
        key={idx}
        className="flex mb-[24px] cursor-pointer items-center"
        onClick={() => onClick(blog)}
      >
        <div className="relative w-[80px] h-[80px] flex-shrink-0">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover rounded"
            sizes="80px"
          />
        </div>

        <div className="ml-4">
          <span className="text-[14px] font-poppins text-[#666666]">News</span>
          <div className="font-belleza text-[24px] text-[#191919]">
            {blog.title}
          </div>
          {/* <div className="text-[14px] font-poppins text-[#666666]">
            0 Comments
          </div> */}
        </div>
      </div>
    ))}
  </div>
);

export default RelatedPosts;
