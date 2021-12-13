import Link from "next/link";
import React, { useState } from "react";
import { imagePath } from "../../config";
import NavigationArrow from "../NavigationArrow";
// import { withTranslation } from "../../i18n";
// import NavigationArrow from "../NavigationArrow";

type Props = {

}

const data = [
  {
    name: "QUẢN LÝ NHÀ THUỐC",
    title: "Quản lý kho thuốc đơn giản và dễ dàng hơn bao giờ hết",
    data: [
      {
        name: "Đã liên thông với Dược Quốc Gia"
      },
      {
        name: "Dễ dàng quản lý nhà thuốc mọi lúc, mọi nơi"
      },
      {
        name: "Đặt hàng trực tiếp với nhà cung cấp, công ty dược với giá tốt nhất"
      },
      {
        name: "Sử dụng online đa nền tảng: Website và Mobile"
      },
      {
        name: "Thao tác đơn giản dễ sử dụng"
      },
      {
        name: "Báo cáo doanh thu chi tiết, dễ hiểu"
      }
    ],
    image: `${imagePath}/img_product_detail_1.png`,
    url: "/nhathuoc"
  },
  {
    name: "QUẢN LÝ CÔNG TY DƯỢC",
    title: "Tối ưu hoá nguồn lực và chi phí trong doanh nghiệp.",
    data: [
      {
        name: "CRM"
      },
      {
        name: "Bán hàng"
      },
      {
        name: "Quản lý kho tối ưu"
      },
      {
        name: "Call center"
      },
      {
        name: "Báo cáo chi tiết, dễ hiểu"
      },
    ],
    image: `${imagePath}/img_product_detail_2.png`,
    url: "/congtyduoc"
  },
  {
    name: "MUA THUỐC ONLINE",
    title: "Kết nối trực tiếp tới nhà cung cấp, cam kết nguồn gốc thuốc rõ ràng",
    data: [
      {
        name: "Đảm bảo chất lượng rõ nguồn gốc"
      },
      {
        name: "Tư vấn tận tình từ dược sỹ"
      },
      {
        name: "Triết khấu hấp dẫn khi mua thuốc"
      },
    ],
    image: `${imagePath}/img_product_detail_3.png`,
    url: "/muathuoc"
  }
];

function HomeProductDetail(props: Props) {
  const [index, setIndex] = useState(0);
  return (
    <div className="home-product-detail">
      <div className="common-title-section">Chi tiết sản phẩm</div>
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
                      Xem chi tiết
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
