import Image from "next/image";

const BlogModal = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white rounded-lg max-w-2xl w-full px-2 py-8 md:px-4 md:py-10 relative max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-0 right-3 md:top-1 md:right-4 text-gray-500 hover:text-black text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Image wrapper */}
        <div className="relative w-full h-48 sm:h-64 mb-4 rounded overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 640px"
          />
        </div>

        <div className="mb-2 relative">
          <span className="bg-white text-[16px] px-[16px] py-[8px] w-fit absolute left-[24px] top-[-72px] font-poppins">
            News
          </span>
          <span className="text-[14px] font-poppins text-[#666666]">
            {blog.date}
          </span>
        </div>

        <h2 className="font-belleza text-[24px] text-[#191919]">{blog.title}</h2>
        <p className="text-[14px] font-poppins text-[#666666]">{blog.fullText}</p>
      </div>
    </div>
  );
};

export default BlogModal;
