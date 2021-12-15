import React, { useState } from "react";
import useTrans from "../../common/useTrans";
import { imagePath } from "../../config";
import NavigationArrow from "../NavigationArrow";
// import NavigationArrow from "../NavigationArrow";
// import { withTranslation } from "../../i18n";

function HomeAchievements(props) {
  const [index, setIndex] = useState(0);
  const trans = useTrans().landingPage

  const achievements = [
    {
      name: trans.achievement_2,
      image: `${imagePath}/techsauce-2019.png`
    },
    {
      name: trans.achievement_3,
      image: `${imagePath}/vietchallenge.jpg`
    },
    {
      name: trans.achievement_1,
      image: `${imagePath}/techfest.jpg`
    },
  ];

  return (
    <div className="home-achievements">
      <div className="common-title-section">{trans.achievement}</div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 left">
            <img src={achievements[index].image} />
            <img
              className="arrow arrow-left d-none d-sm-block"
              src={`${imagePath}/ic_arrow_left.png`}
              onClick={() => setIndex(index < 1 ? 0 : index - 1)}
            />
            <img
              className="arrow arrow-right d-none d-sm-block"
              src={`${imagePath}/ic_arrow_left.png`}
              onClick={() =>
                setIndex(index >= achievements.length - 1 ? index : index + 1)
              }
            />
            <div className=" d-none d-sm-block">
              <div className="dash-list">
                {achievements.map((e, i) => (
                  <div
                    key={i}
                    className={`dash ${index === i && "active"} `}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-4 right d-none d-sm-block">
            {achievements.map((e, i) => (
              <div
                key={i}
                className={`${i === index && "active"} common-text-medium`}
                onClick={() => setIndex(i)}
              >
                {e.name}
              </div>
            ))}
          </div>
          <div className="col-12 d-block d-sm-none">
            <div className="d-flex flex-column">
              <div className="common-text-medium content">
                {achievements[index].name}
              </div>
              <NavigationArrow
                index={index}
                num={achievements.length}
                onChange={i => setIndex(i)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAchievements
