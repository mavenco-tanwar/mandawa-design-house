import ContactHero from "@/components/ContactPage/ContactHero/ContactHero";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import { useState } from "react";
import BlogCard from "@/components/BlogPage/BlogCard";
import RelatedPosts from "@/components/BlogPage/RelatedPosts";
import BlogModal from "@/components/BlogPage/BlogModal";

const blogs = [
  {
    image: "/images/global/Blog-Header-img.png",
    date: "Jun 01, 2025",
    title: "Inspire Your Space",
    description:
      "Dive into our curated blog where style meets function. From interior design tips to furniture care guides, explore ideas.",
    fullText:
      "This is the full blog content. Share more details, images, and tips here...",
  },

    {
    image: "/images/global/Blog-Header-img.png",
    date: "Jun 01, 2025",
    title: "Inspire Your Space",
    description:
      "Dive into our curated blog where style meets function. From interior design tips to furniture care guides, explore ideas.",
    fullText:
      "This is the full blog content. Share more details, images, and tips here...",
  },
      {
    image: "/images/global/Blog-Header-img.png",
    date: "Jun 01, 2025",
    title: "Inspire Your Space",
    description:
      "Dive into our curated blog where style meets function. From interior design tips to furniture care guides, explore ideas.",
    fullText:
      "This is the full blog content. Share more details, images, and tips here...",
  },
      {
    image: "/images/global/Blog-Header-img.png",
    date: "Jun 01, 2025",
    title: "Inspire Your Space",
    description:
      "Dive into our curated blog where style meets function. From interior design tips to furniture care guides, explore ideas.",
    fullText:
      "This is the full blog content. Share more details, images, and tips here...",
  },

        {
    image: "/images/global/Blog-Header-img.png",
    date: "Jun 01, 2025",
    title: "Inspire Your Space",
    description:
      "Dive into our curated blog where style meets function. From interior design tips to furniture care guides, explore ideas.",
    fullText:
      "This is the full blog content. Share more details, images, and tips here...",
  },

        {
    image: "/images/global/Blog-Header-img.png",
    date: "Jun 01, 2025",
    title: "Inspire Your Space",
    description:
      "Dive into our curated blog where style meets function. From interior design tips to furniture care guides, explore ideas.",
    fullText:
      "This is the full blog content. Share more details, images, and tips here This is the full blog content. Share more details, images, and tips here This is the full blog content. Share more details, images, and tips here This is the full blog content. Share more details, images, and tips here This is the full blog content. Share more details, images, and tips here This is the full blog content. Share more details, images, and tips here...",
  },

        {
    image: "/images/global/Blog-Header-img.png",
    date: "Jun 01, 2025",
    title: "Inspire Your Space",
    description:
      "Dive into our curated blog where style meets function. From interior design tips to furniture care guides, explore ideas.",
    fullText:
      "This is the full blog content. Share more details, images, and tips here...",
  },
];

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  return (
    <>
      <ContactHero title="Blogs" imageUrl="/images/global/Blogs-Header.png" />
      <div className="bg-[#F6F4EE] py-[60px] px-4 sm:px-6 md:px-8 min-h-screen flex flex-col md:flex-row">
        <aside className="w-full md:w-[420px] px-4 md:px-8 py-6 md:py-10 order-2 md:order-1">
          <RelatedPosts blogs={blogs} onClick={setSelectedBlog} />
        </aside>
        <main className="w-full md:w-3/4 px-0 py-0 md:px-8 md:py-10 order-1 md:order-2">
          <div className="grid gap-[40px] grid-cols-1">
            {blogs.map((blog, idx) => (
              <BlogCard
                blog={blog}
                key={idx}
                onClick={() => setSelectedBlog(blog)}
              />
            ))}
          </div>
        </main>
        <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      </div>
    </>
  );
};

BlogPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default BlogPage;
