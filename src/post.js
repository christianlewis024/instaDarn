import React, { useState, useEffect } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "./firebase";

function Post({ user, postId, username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);
  const postComment = (e) => {
    e.preventDefault();

    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
    });
    setComment("");
  };

  return (
    <div className="post">
      <div className="post_header">
        <Avatar
          className="post_avatar"
          alt={username}
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>
      {/* header -> avatar + username */}

      <img className="post_image" src={imageUrl}></img>
      {/* image */}

      <h4 className="post_text">
        <strong>{username}</strong> {caption}
      </h4>

      <div className="post_comments">
        {comments.map((comment) => (
          <p>
            <b>{comment.username}</b> {comment.text}
          </p>
        ))}
      </div>

      <form className="post_commentBox">
        <input
          className="post_input"
          type="text"
          placeholder="add a comment.."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="post_button"
          disabled={!comment}
          type="submit"
          onClick={postComment}
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default Post;

// import React, { useState, useEffect, forwardRef } from "react";
// import "./Post.css";
// import Avatar from "@material-ui/core/Avatar";
// import { db } from "./firebase";
// import firebase from "firebase";

// const Post = forwardRef(
//   ({ user, username, postId, imageUrl, caption }, ref) => {
//     const [comments, setComments] = useState([]);
//     const [comment, setComment] = useState("");

//     useEffect(() => {
//       let unsubscribe;
//       if (postId) {
//         unsubscribe = db
//           .collection("posts")
//           .doc(postId)
//           .collection("comments")
//           .onSnapshot((snapshot) => {
//             setComments(snapshot.docs.map((doc) => doc.data()));
//           });
//       }

//       return () => {
//         unsubscribe();
//       };
//     }, [postId]);

//     const postComment = (e) => {
//       e.preventDefault();

//       db.collection("posts").doc(postId).collection("comments").add({
//         text: comment,
//         username: user.displayName,
//       });
//       setComment("");
//     };

//     return (
//       <div className="post" ref={ref}>
//         <div className="post_header">
//           <Avatar
//             className="post_avatar"
//             alt={username}
//             src="/static/images/avatar/1.jpg"
//           />
//           <h3>{username}</h3>
//         </div>

//         <img className="post_image" src={imageUrl} alt="post" />
//         <h4 className="post_text">
//           {username} <span className="post_caption">{caption}</span>
//         </h4>

//         <div className="post_comments">
//           {comments.map((comment) => (
//             <p>
//               <b>{comment.username}</b> {comment.text}
//             </p>
//           ))}
//         </div>

//         {user && (
//           <form className="post_commentBox">
//             <input
//               className="post_input"
//               type="text"
//               placeholder="Add a comment..."
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//             />
//             <button
//               disabled={!comment}
//               className="post_button"
//               type="submit"
//               onClick={postComment}
//             >
//               Post
//             </button>
//           </form>
//         )}
//       </div>
//     );
//   }
// );

// export default Post;
