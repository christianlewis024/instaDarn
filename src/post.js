import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar
          className="post_avatar"
          alt="Darnus92"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>
      {/* header -> avatar + username */}

      <img
        className="post_image"
        src="https://images.unsplash.com/photo-1442850473887-0fb77cd0b337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      ></img>
      {/* image */}

      <h4 className="post_text">
        <strong>Darnus92</strong> This is where I live
      </h4>
      {/* username + caption */}
    </div>
  );
}

export default Post;
