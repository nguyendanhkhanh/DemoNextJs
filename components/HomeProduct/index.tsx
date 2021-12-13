import Link from "next/link";
import React from "react";
import { imagePath } from "../../config";
// import { withTranslation } from "../../i18n";

function HomeProducts(props) {
  const products = [
    {
      title: "Quản lý nhà thuốc",
      content: "Quản lý kho đơn giản và dễ dàng",
      image: `${imagePath}/people1.png`,
      url: "/nhathuoc"
    },
    {
      title: "Quản lý công ty dược",
      content: "Quản lý khách hàng, kho và nhân viên",
      image: `${imagePath}/people2.png`,
      url: "/congtyduoc"
    },
    {
      title: "Mua thuốc online",
      content: "Kết nối trực tiếp tới nhà cung cấp, nguồn gốc thuốc rõ ràng",
      image: `${imagePath}/people.png`,
      url: "/muathuoc"
    }
  ];

  return (
    <div className="home-products">
      <div className="container">
        <div className="home-container">
          <div className="common-title-section">Các sản phẩm</div>
          <div className="row">
            {products.map((e, i) => (
              <div key={i} className="home-product-item col-md-4">
                <div className="home-product-image">
                  <img src={e.image} width="100%" />
                </div>
                <div className="product-title">{e.title}</div>
                <div className="common-text-medium">{e.content}</div>
                <Link href={e.url}>
                  <div className="btn-try btn-hover">Dùng thử ngay</div>
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
