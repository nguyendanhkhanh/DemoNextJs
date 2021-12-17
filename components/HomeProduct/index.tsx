import Link from "next/link";
import React from "react";
import useTrans from "../../common/useTrans";
import { imagePath } from "../../config";
// import { withTranslation } from "../../i18n";

function HomeProducts(props) {
  const trans = useTrans().landingPage
  const products = [
    {
      title: trans.title_product_1,
      content: trans.content_product_1,
      image: `${imagePath}/people1.png`,
      url: "/nhathuoc"
    },
    {
      title: trans.title_product_2,
      content: trans.content_product_2,
      image: `${imagePath}/people2.png`,
      url: "/company"
    },
    {
      title: trans.title_product_3,
      content: trans.content_product_3,
      image: `${imagePath}/people.png`,
      url: "/"
    }
  ];

  return (
    <div className="home-products">
      <div className="container">
        <div className="home-container">
          <div className="common-title-section">{trans.list_product}</div>
          <div className="row">
            {products.map((e, i) => (
              <div key={i} className="home-product-item col-md-4">
                <div className="home-product-image">
                  <img src={e.image} width="100%" />
                </div>
                <div className="product-title">{e.title}</div>
                <div className="common-text-medium">{e.content}</div>
                <Link href={e.url}>
                  <div className="btn-try btn-hover">{trans.try_it}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProducts
