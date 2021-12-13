import React from "react";
import { imagePath } from "../../config";
// import { withTranslation } from "../../i18n";

type Props = {

}

const images = [
  `${imagePath}/duocthaosinhphuc.png`,
  `${imagePath}/medicalvn.png`,
  `${imagePath}/6.png`,
  `${imagePath}/7.png`,
  `${imagePath}/11.png`,
  `${imagePath}/lovegarden.png`
];

function HomePartner(props: Props) {
  return (
    <div className="home-partner">
      <div className="container">
        <div className="common-title-section">{"Đối tác đồng hành"}</div>
        <div className="row">
          {images.map((e, i) => (
            <div key={i} className="col-6 col-md-2">
              <img src={e} width="100%" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePartner
