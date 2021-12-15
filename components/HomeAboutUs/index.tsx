import React, { useState } from "react";
// import { withTranslation } from "../../i18n";
import { Modal, Button } from "antd";
import { imagePath } from "../../config";
import { CloseCircleFilled, CloseOutlined } from "@ant-design/icons";
import useTrans from "../../common/useTrans";

function HomeAboutUs(props) {
  const [visible, setVisible] = useState(false);
  const trans = useTrans().landingPage
  return (
    <div className="home-about-us">
      <div className="container">
        <div className="common-title-section">{trans.about_us}</div>
        <div className="row">
          <div className="col-md-6 img">
            <img src={`${imagePath}/img_about_us.png`} />
          </div>
          <div className="col-md-6 d-flex justify-content-center flex-column">
            <div className="common-text-medium">{trans.about_us_content}</div>
            <div
              className="d-flex align-items-center wrap-play btn-hover"
              onClick={() => setVisible(true)}
            >
              <img src={`${imagePath}/ic_play.png`} />
              <div className="play common-text-medium">{trans.watch_video}</div>
            </div>
          </div>
        </div>
      </div>
      {visible && (
        <div className={`modal-video ${visible && "show"}`}>
          <div className="d-flex align-items-center justify-content-center">
            <iframe
              src="https://www.youtube.com/embed/GbDdQsf-jI8"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <CloseOutlined 
              onClick={() => setVisible(false)}
              className="icon-close-video"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeAboutUs
