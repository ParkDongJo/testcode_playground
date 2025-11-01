// 'use client';
import { getPosts } from "@/api/getPosts";
import { useEffect, useState } from "react";

export default async function Blog() {

  const posts = await getPosts();


  return <div>
    <h1>Blog</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title} by {post.userId}</li>
      ))}
    </ul>
  </div>;
}