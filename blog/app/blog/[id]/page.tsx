"use client";
import SingleBlog from "@/components/singleBlog/SingleBlog";
import { useGetBlogByIdQuery } from "@/lib/service/blog-api";
import { BlogPageProps } from "@/types/blog-by-id-type";
import React from "react";

const page = ({ params }: BlogPageProps) => {
  const { id } = params;
  const { data, isLoading } = useGetBlogByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <SingleBlog {...data} />
    </div>
  );
};

export default page;
