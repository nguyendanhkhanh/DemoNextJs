import Link from "next/link";
import React, { Component } from "react";
import { imagePath } from "../../config";
// import { i18n, withTranslation, Trans } from "../../i18n";

const list = [
  {
    icon: `${imagePath}/ic_location.png`,
    text:
      "P.305 - 306, Tầng 3, TTTM tòa 48B Keangnam, Đường Phạm Hùng, Phường Mễ Trì, Quận Nam Từ Liêm, Thành phố Hà Nội, Việt Nam"
  },
  {
    icon: `${imagePath}/ic_mobile.png`,
    text: "Hotline: 0969 191 355"
  },
  {
    icon: `${imagePath}/ic_mail.png`,
    text: "Email: hotro@medlink.vn"
  }
];

const list2 = [
  {
    title: "Giới thiệu",
    data: [
      {
        text: "Về chúng tôi",
        url: "/"
      },
      {
        text: "Tin tức",
        url: "/"
      },
      {
        text: "Liên hệ",
        url: "/"
      }
    ]
  },
  {
    title: "Sản phẩm",
    data: [
      {
        text: "Quản lý nhà thuốc",
        url: "/nhathuoc"
      },
      {
        text: "Quản lý công ty dược",
        url: "/congtyduoc"
      },
      {
        text: "Mua thuốc online",
        url: "/muathuoc"
      }
    ]
  },
  {
    title: "Điều khoản",
    data: [
      {
        text: "terms_of_use",
        url: "/company/order-policy"
      },
      {
        text: "question",
        url: "/company/order-policy"
      },
      {
        text: "delivery_policy",
        url: "/company/security"
      }
    ]
  }
];

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6 info">
              <div className="title-1">
                {"CÔNG TY CỔ PHẦN ĐẦU TƯ MEDLINK"}
              </div>
              {list.map((e, i) => (
                <div className="d-flex line" key={i}>
                  <div>
                    <img src={e.icon} />
                  </div>
                  <div className="common-text-medium">{e.text}</div>
                </div>
              ))}
            </div>
            <div className="col-md-6 links">
              <div className="row">
                {list2.map((e, i) => (
                  <div className="col-6 col-md-4" key={i}>
                    <div className="title-2 common-text-medium">
                      {e.title}
                    </div>
                    {e.data.map((e, i) => (
                      <Link href={e.url} key={i}>
                        <div className="common-text-medium item">
                          {e.text}
                        </div>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10"></div>
            <div className="col-6 col-md-2">
              <img
                width="100%"
                src={`${imagePath}/img_registered.png`}
              />
            </div>
          </div>
          <div className="d-block d-sm-none common-text-medium">
            {"Đã đăng ký với Bộ Công Thương"}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
