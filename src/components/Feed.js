import "../styles/feed.css";

import firebase from "firebase/compat/app";
import { useCollectionData } from "react-firebase-hooks/firestore";

import InputOption from "./InputOption.js";
import Post from "./Post.js";

//import { posts } from "/src/data.js";

import { Avatar } from "@material-ui/core";
import AvatarImg from "../images/man.png";

import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

function Feed({ openDisplay }) {
  const postsRef = firebase
    .firestore()
    .collection("posts")
    .orderBy("timestamp");

  const [posts] = useCollectionData(postsRef, { idField: "id" });

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <Avatar className="sidebar_avatar" src={AvatarImg} />
          <form>
            <input
              type="text"
              placeholder="Start a Post"
              onClick={openDisplay}
            />
            <button type="submit">Send</button>
          </form>
        </div>

        <div class="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      <div className="posts">
        {posts &&
          posts.map((post) => (
            <Post
              name={post.name}
              description={post.description}
              message={post.message}
              photo={`https://source.unsplash.com/random/?${post.tags}`}
              key={post.id}
              id={post.id}
            />
          ))}

        <Post
          name="Abdulai Sulaiman Bah"
          description="UX Designer"
          message="This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability and function."
          photo="https://source.unsplash.com/random/?Technology"
        />
      </div>
    </div>
  );
}

export default Feed;
