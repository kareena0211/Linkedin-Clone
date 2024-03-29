import React from "react";
import "./Widget.css";
import InfoIcon from "@mui/icons-material/Info";

const Widget = () => {
  return (
    <>
      <div className="widget">
        <div className="widget_top">
          <div className="widget__header">
            <h4>LinkedIn News</h4>
            <InfoIcon />
          </div>

          <div className="widget__body">
            <ul className="widget__options">
              <li>
                <h4>Slaying Job search</h4>
                <p>6d ago * 4,55 readers</p>
              </li>
              <li>
                <h4>A Two Pizza ready for eating</h4>
                <p>2d ago * 6,12 readers</p>
              </li>

              <li>
                <h4>A Two Pizza ready for eating</h4>
                <p>2d ago * 6,12 readers</p>
              </li>

              <li>
                <h4>A Two Pizza ready for eating</h4>
                <p>2d ago * 6,12 readers</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="widget__bottom">
          <div className="widget__header">
            <h4>Today's top courses</h4>
            <InfoIcon />
          </div>

          <div className="widget__body">
            <ul className="widget__options">
              <li>
                <h4>Reading with a heavy heart</h4>
                <p>kay coly</p>
              </li>

              <li>
                <h4>Reading with a heavy heart</h4>
                <p>kay coly</p>
              </li>

              <li>
                <h4>Reading with a heavy heart</h4>
                <p>kay coly</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Widget;
