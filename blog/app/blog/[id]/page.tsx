"use client";
import SingleBlog from "@/components/singleBlog/SingleBlog";
import { useGetBlogByIdQuery } from "@/lib/service/blog-api";
import { BlogPageProps } from "@/types/blog-by-id-type";
import React from "react";

const SigleBlogPage = ({ params }: BlogPageProps) => {
  const { id } = params;
  const { data, isLoading, isError } = useGetBlogByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>There's has been an error!</div>
  return (
    <div>
      <SingleBlog {...data} />
    </div>
  );
};

export default SigleBlogPage;
