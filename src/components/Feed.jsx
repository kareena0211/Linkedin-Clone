import React from "react";

import { Avatar } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "./Feed.css";
import Post from "./Post";

const Feed = () => {
  return (
    <>
      <div className="feed">
        <div className="feed__input">
          <div className="feed__form">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46nrFvdN-mJN9QJOjSy_RiTjeyRTASJFKabiSZbWcSGxt3_wikB9OHHlKXcOqDEG1lvw&usqp=CAU" />
            <form>
              <input type="text" placeholder="Start a post" />
              <input type="submit" />
            </form>
          </div>
          <div className="feed__options">
            <div className="option">
              <InsertPhotoIcon style={{ color: "#70b5f9" }} />
              <span>Photo</span>
            </div>

            <div className="option">
              <YouTubeIcon style={{ color: "#7fc15e" }} />
              <span>Video</span>
            </div>

            <div className="option">
              <CalendarMonthIcon style={{ color: "#e7a33e" }} />
              <span>Event</span>
            </div>

            <div className="option">
              <AssignmentIcon style={{ color: "#fc9295" }} />
              <span>Write Article</span>
            </div>
          </div>
        </div>
        <Post
          name="Kareena"
          description="New to learn React js"
          message="Good experience"
          photoURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK0EztGrrGWCA9CYjGkTmcQEmmqdDQaxLvQg&usqp=CAU"
        />

        <Post
          name="Raveena"
          description="Software Programmer"
          message="very soon"
          photoURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_oC5i--DGEbyLpByNPknsyvTr_e4MSvwKw&usqp=CAU"
        />

        <Post
          name="Chanchal"
          description="Going with flow"
          message="Seeing my bright future"
          photoURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPZfYDqk56E9dJCjyYqq4eLJnp4-fCrLjoQ&usqp=CAU"
        />

        <Post
          name="chetan"
          description="Aspirant"
          message="Learning new things with the time"
          photoURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLAxHMR2pGbpM71BAMsJC3MF1tUR_5fnY9GA&usqp=CAU"
        />
      </div>
    </>
  );
};

export default Feed;
