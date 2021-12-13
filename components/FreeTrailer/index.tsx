import React from "react";
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
              Dùng thử ngay
            </a>
            <div
              className="free-30-day"
              style={{ color: data.mainBackground ? "#fff" : undefined }}
            >
              {data.background && (
                <img src={`${imagePath}/ic_checked.png`} />
              )}
              {/* {t("free-trailer-30-day")} */}
              Miễn phí dùng thử 14 ngày
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
