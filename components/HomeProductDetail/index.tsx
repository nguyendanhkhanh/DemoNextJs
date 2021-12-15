import Link from "next/link";
import React, { useState } from "react";
import useTrans from "../../common/useTrans";
import { imagePath } from "../../config";
import NavigationArrow from "../NavigationArrow";
// import { withTranslation } from "../../i18n";
// import NavigationArrow from "../NavigationArrow";

type Props = {

}

function HomeProductDetail(props: Props) {
  const trans = useTrans().landingPage
  const [index, setIndex] = useState(0);

  const data = [
    {
      name: trans.PHARMACY_MANAGE,
      title: trans.product_title_1,
      data: [
        {
          name: trans.pharmacy_element1
        },
        {
          name: trans.pharmacy_element2
        },
        {
          name: trans.pharmacy_element3
        },
        {
          name: trans.pharmacy_element4
        },
        {
          name: trans.pharmacy_element5
        },
        {
          name: trans.pharmacy_element6
        }
      ],
      image: `${imagePath}/img_product_detail_1.png`,
      url: "/nhathuoc"
    },
    {
      name: trans.COMPANY_MANAGE,
      title: trans.product_title_2,
      data: [
        {
          name: trans.company_element2
        },
        {
          name: trans.company_element3
        },
        {
          name: trans.company_element4
        },
        {
          name: trans.company_element5
        },
        {
          name: trans.company_element6
        },
      ],
      image: `${imagePath}/img_product_detail_2.png`,
      url: "/congtyduoc"
    },
    {
      name: trans.BUY_ONLINE_DRUGS,
      title: trans.product_title_3,
      data: [
        {
          name: trans.medicineChild1
        },
        {
          name: trans.medicineChild2
        },
        {
          name: trans.medicineChild3
        },
      ],
      image: `${imagePath}/img_product_detail_3.png`,
      url: "/muathuoc"
    }
  ];

  return (
    <div className="home-product-detail">
      <div className="common-title-section">{trans.title_product_detail}</div>
      <div className="container">
        {data.map((e, i) => (
          <div className={`item ${index !== i && "inactive"}`} key={i}>
            <div className={`row ${i % 2 === 0 && "flex-row-reverse"}`} key={i}>
              <div className={`col-md-6 d-flex align-items-center`}>
                <img src={e.image} />
              </div>
              <div className="col-md-6">
                <div className="col-12">
                  <div className="common-text-medium name">{e.name}</div>
                  <div className="title">{e.title}</div>
                  <div className="content">
                    {e.data.map((e, i) => (
                      <div className="common-text-medium" key={i}> • {e.name}</div>
                    ))}
                  </div>
                  <Link href={e.url}>
                    <div className="btn-view common-text-medium btn-link">
                      {trans.view_detail}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="navigation">
          <NavigationArrow
            index={index}
            num={data.length}
            onChange={i => setIndex(i)}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeProductDetail
