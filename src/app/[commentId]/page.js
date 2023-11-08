"use client"

import { useContext } from "react";
import { CommentContext } from "../CommentsProvider";

export default function Page(params) {
  console.log("Params " , params)
  const [comment , setComment] = useContext(CommentContext);

  console.log("comment" , comment);

  return (
    <h1>Comment Page</h1>
  )
}
