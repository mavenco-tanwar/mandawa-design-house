import Image from "next/image";
import Button from "../Global/Buttons";

const BlogCard = ({ blog, onClick }) => (
  <div
    className="hover:bg-white rounded hover:shadow hover:shadow-lg transition cursor-pointer flex flex-col"
    onClick={onClick}
  >
    <div className="w-full md:h-[440px] h-64 relative">
      <Image
        src={blog.image}
        alt={blog.title}
        fill
        className="object-cover rounded-t"
        priority={false} // you can set true for above-the-fold images
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
    <div className="p-[24px] sm:p-6 flex flex-col md:flex-row md:items-center items-left justify-between relative gap-[40px]">
      <span className="bg-white text-[16px] px-[16px] py-[8px] w-fit absolute left-[24px] top-[-72px] font-poppins">
        News
      </span>
      <div className="flex-1">
        <span className="text-[14px] text-[#666666] font-poppins">
          {blog.date}
        </span>
        <h2 className="text-[34px] font-belleza">{blog.title}</h2>
        <p className="text-[#666666] text-[14px] flex-grow">
          {blog.description}
        </p>
      </div>
      <div>
        <Button
          text="Read More"
          variant="Brown"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        />
      </div>
    </div>
  </div>
);

export default BlogCard;
