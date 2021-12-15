import React from "react";
import useTrans from "../../common/useTrans";
import { imagePath } from "../../config";
// import { withTranslation } from "./../../i18n";

function GetIt(props) {
  const trans = useTrans().landingPage
  return (
    <div className="get-it">
      <div
        className="bg-app"
        style={{
          backgroundImage: `url(${imagePath}/bg_download.png)`
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 content-download-app">
            <div className="common-title-section dash-left">
              {trans.use_anytime}
            </div>
            <div className="common-text-medium">
              {trans.text_download_1}
              <br /> <br />
              {trans.text_download_2}
            </div>
            <div className="list-button">
              <a
                href="https://apps.apple.com/us/app/medlink-pharmacy/id1470921954?l=vi&ls=1"
                target="_blank"
              >
                <img
                  src={`${imagePath}/btn_download_app_ios.png`}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.ecomedic.medlink&hl=en"
                target="_blank"
              >
                <img
                  src={`${imagePath}/btn_download_app_android.png`}
                />
              </a>
            </div>
          </div>
          <div className="col-md-6 bg"></div>
        </div>
      </div>
    </div>
  );
}

export default GetIt
