"use client"
import { createContext, useState } from 'react';
export const CommentContext = createContext();

export function CommentsProvider(children) {
  const [comment, setComment] = useState();

  return (
    <CommentContext.Provider value={{ comment : comment , setComment: setComment}}>
      {children}
    </CommentContext.Provider>
  );
}