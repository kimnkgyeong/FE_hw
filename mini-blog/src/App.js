import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";
import data from "./db/data.json";

function App() {
  const [posts, setPosts] = useState(data.posts);

  const handleAddPost = (newPostData) => {
    const newPost = {
      id: String(posts.length + 1),
      title: newPostData.title,
      content: newPostData.content,
      comments: [],
    };
    setPosts([...posts, newPost]);
  };

  const handleAddComment = (postId, commentContent) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const newComment = {
          id: Date.now(),
          content: commentContent,
        };
        return { ...post, comments: [...post.comments, newComment] };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <Routes>
      <Route path="/" element={<MainPage posts={posts} />} />
      <Route
        path="/post-write"
        element={<PostWritePage onAddPost={handleAddPost} />}
      />
      <Route
        path="/post/:postId"
        element={<PostViewPage posts={posts} onAddComment={handleAddComment} />}
      />
    </Routes>
  );
}

export default App;
