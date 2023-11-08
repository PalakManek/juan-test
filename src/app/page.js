"use client"

import Link from "next/link";
import { CommentContext } from "./CommentsProvider";
import { useEffect, useState } from "react";

export default function Home() {

  const [data, setData] = useState([]);

  async function getData() {
    const res = await fetch('https://6509bd34f6553137159bedbc.mockapi.io/cimphony/comments')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    const data = res.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  } , [])


  const [comment , setComment] = useContext(CommentContext);

  return (
    <>
      <h1 className="mt-100 align-center">comments</h1>
      {data.map((comment, index) => (
        <Link href={`/${comment.id}`} key={index} onClick={ () => { setComment(comment)}}>
          <div key={comment.id} className="p-10 cursor-pointer border-solid border-2 border-indigo-600">
            <p>{comment.name}</p>
            <p>{comment.text}</p>
          </div>
        </Link>
      ))}
    </>
  )
}
