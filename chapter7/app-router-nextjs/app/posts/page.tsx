'use client';
import { getPosts } from "@/api/getPosts";
import { useEffect, useState } from "react";
import type { Post } from "@/api/getPosts";

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  
  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);


  return <div>
    <h1>Posts</h1>
    <label htmlFor="title">Title</label>
    <input type="text" placeholder="title" aria-label="title" />
    <button type="submit">검색</button>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title} by {post.userId}</li>
      ))}
    </ul>
  </div>;
}