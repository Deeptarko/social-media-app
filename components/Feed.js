import React, { useState,useEffect } from "react";
import {SparklesIcon} from '@heroicons/react/outline';
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Input from "./Input";
import Post from '../components/Post';
const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className="text-white flex-grow border-l border-r max-w-2xl border-gray-700 sm:ml-[73px] xl:ml-[372px]">
      <div className="text-white flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
          <h2 className="text-lg sm:text-xl font-bold">Home</h2>
          <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
              <SparklesIcon className="h-5 text-white"/>
          </div>
      </div>
      <Input/>
      <div className="pb-72">
        {posts.map(post=>(
          <Post key={post.id} id={post.id} post={post.data()}/>
        ))}
      </div>
    </div>
  );
};

export default Feed;
