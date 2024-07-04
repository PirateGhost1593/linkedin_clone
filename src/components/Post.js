import { Avatar } from "@material-ui/core";
import { useState } from "react";
import firebase from "firebase/compat/app";

import "../styles/post.css";
import InputOption from "./InputOption";
import AvatarImg from "../images/man.png";

import ThumpUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Post({ name, description, message, photo, id }) {
  const [likePost, setLikePost] = useState(false);
  const [hoverImg, setHoverImg] = useState(false);

  const firestore = firebase.firestore();
  const postsRef = firestore.collection("posts");

  return (
    <div className="post">
      <div className="post_header">
        <Avatar className="sidebar_avatar" src={AvatarImg} />
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>

        <div
          className="more"
          onMouseEnter={() => setHoverImg(true)}
          onMouseLeave={() => setHoverImg(false)}
          onClick={() => postsRef.doc(id).delete()}
        >
          {hoverImg ? <DeleteIcon /> : <MoreHorizIcon />}
        </div>
      </div>

      <div className="post_body">
        <p>{message}</p>
        <img src={photo} alt="post_image" />
      </div>

      <div className="post_buttons">
        <div
          className="likebutton"
          onClick={() =>
            likePost === true ? setLikePost(false) : setLikePost(true)
          }
        >
          {likePost === true ? (
            <InputOption
              Icon={ThumbUpIcon}
              title="Like"
              color="skyblue"
              className="icon"
            />
          ) : (
            <InputOption
              Icon={ThumpUpAltOutlinedIcon}
              title="Like"
              color="gray"
            />
          )}
        </div>
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
