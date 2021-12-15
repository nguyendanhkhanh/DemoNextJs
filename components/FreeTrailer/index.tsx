import React from "react";
import useTrans from "../../common/useTrans";
import { imagePath } from "../../config";
// import { withTranslation } from "./../../i18n";

type TypeFreeTrailer = {
  data: {
    link: string,
    title: string;
    background: string;
    content: string;
    image?: string;
    mainBackground?: string;
  };
};

function FreeTrailer(props: TypeFreeTrailer) {
  const { data } = props;
  const trans = useTrans().landingPage
  return (
    <div
      className="free-trailer"
    //   style={{
    //     backgroundImage: `url(${data.background})`
    //   }}
    >
      <div
        className={data.mainBackground ? "main-bg" : "bg-img"}
        style={{
          backgroundImage: `url(${data.mainBackground ? data.mainBackground : data.image
            })`
        }}
      >
        <div
          className="container"
          style={{
            padding: `${data.image ? 50 : 100}px 0`
          }}
        >
          <div className="col-md-7">
            <div
              className="title-free"
              style={{ color: data.mainBackground ? "#fff" : undefined }}
            >
              {data.title}
            </div>
            <div
              className="content-free"
              style={{ color: data.mainBackground ? "#fff" : undefined }}
            >
              {data.content}
            </div>
            <a
              className="btn-free btn-hover btn-bg"
              style={{
                background: data.mainBackground ? "#05A098" : undefined
              }}
              href={data.link ? data.link : "#form-register"}
              target={data.link ? "_blank" : ""}
            >
              {/* {t("free-trailer")} */}
              {trans.free_trailer}
            </a>
            <div
              className="free-30-day"
              style={{ color: data.mainBackground ? "#fff" : undefined }}
            >
              {data.background && (
                <img src={`${imagePath}/ic_checked.png`} />
              )}
              {/* {t("free-trailer-30-day")} */}
              {trans.free_trailer_30_day}
            </div>
          </div>
          {data.image && (
            <img className="d-block d-sm-none" width="100%" src={data.image} />
          )}
        </div>
      </div>
    </div>
  );
}

export default FreeTrailer;
