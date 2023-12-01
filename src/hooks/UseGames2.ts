// import React, { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";
// const UseGames2 = () => {
//   type CommentType = {
//     id: number;
//     name: string;
//   };
//   //   type CommentResponse = {
//   //     result: CommentType[];
//   //   };

//   const [comments, setComments] = useState<CommentType[]>([]);
//   const [error, setErrors] = useState("");

//   useEffect(() => {
//     const controller = new AbortController();

//     apiClient
//       .get<CommentType[]>("https://jsonplaceholder.typicode.com/comments", {
//         signal: controller.signal,
//       })
//       .then((res) => setComments(res.data))
//       .catch((error) => {
//         if (error instanceof CanceledError) return;
//         setErrors(error.message);
//       });

//     return () => controller.abort();
//   }, []);

//   return {comments, error}

// }
// export default UseGames2