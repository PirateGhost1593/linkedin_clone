import { useState } from "react";

import "../styles/body.css";

import AddPost from "./AddPost.js";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import Widgets from "./Widgets.js";

function Body() {
  const [displayAddPost, setDisplayAddPost] = useState(false);

  return (
    <div className="app_body">
      {displayAddPost && (
        <AddPost closeDisplay={() => setDisplayAddPost(false)} />
      )}

      <Sidebar />

      {/* Feed */}
      <Feed openDisplay={() => setDisplayAddPost(true)} />
      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default Body;
