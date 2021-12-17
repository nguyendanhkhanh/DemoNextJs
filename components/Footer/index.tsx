import Link from "next/link";
import React, { Component } from "react";
import useTrans from "../../common/useTrans";
import { imagePath } from "../../config";
// import { i18n, withTranslation, Trans } from "../../i18n";

type Props = {

}


const Footer = (props: Props) => {
  const trans = useTrans().footer

  const list = [
    {
      icon: `${imagePath}/ic_location.png`,
      text: trans.address
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
      title: trans.introduce,
      data: [
        {
          text: trans.about_us,
          url: "/"
        },
        {
          text: trans.news,
          url: "/"
        },
        {
          text: trans.contact,
          url: "/"
        }
      ]
    },
    {
      title: trans.product,
      data: [
        {
          text: trans.title_product_1,
          url: "/nhathuoc"
        },
        {
          text: trans.title_product_2,
          url: "/company"
        },
        {
          text: trans.title_product_3,
          url: "/"
        }
      ]
    },
    {
      title: trans.rules,
      data: [
        {
          text: trans.terms_of_use,
          url: "/company/order-policy"
        },
        {
          text: trans.question,
          url: "/company/order-policy"
        },
        {
          text: trans.delivery_policy,
          url: "/company/security"
        }
      ]
    }
  ];

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6 info">
            <div className="title-1">
              {trans.MEDLINK_INVESTMENT_JOINT_STOCK_COMPANY}
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
          {trans.registered_with_MIT}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
