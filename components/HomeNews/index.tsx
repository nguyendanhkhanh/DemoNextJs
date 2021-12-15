import React from "react";
import useTrans from "../../common/useTrans";
// import { withTranslation } from "../../i18n";


function HomeNews(props) {
  const trans = useTrans().landingPage
  const news = [
    {
      title:
        "Giải pháp kết nối các nhà thuốc vô địch Viet Challenge 2019",
      content:
        "Cuộc thi diễn ra tại Viện Công nghệ MIT (Mỹ) ngày 7/9, là một trong các hoạt động thuộc Đề án Hỗ trợ hệ sinh thái khởi nghiệp đổi mới sáng tạo quốc gia đến năm 2025 (Đề án 844) do Bộ Khoa học và Công nghệ chủ trì.",
      image: `https://i-vnexpress.vnecdn.net/2019/09/09/vo-dich-Vietchallenge-2991-1567997993.jpg`,
      date: "VnExpress, 9/9/2019, 10:07 (GMT+7)",
      url:
        "https://vnexpress.net/khoa-hoc/giai-phap-ket-noi-cac-nha-thuoc-vo-dich-vietchallenge-2019-3979264.html"
    },
    {
      title: "Medlink wins first startup contest VietChallenge 2019",
      content:
        "The final round of a global entrepreneurship competition for Vietnamese (VietChallenge) took place at the Massachusetts Institute of Technology in Boston last Saturday drawing 9 Vietnamese startups from different countries. The competition is part of the Ministry of Science and Technology’s project to support the national innovation startup ecology until 2025.",
      image: `https://image.vovworld.vn/w730/uploaded/vovworld/vjryqdxwp/2019_09_09/vietchallenge_juav.png`,
      date: "Vovworld, September 9, 2019 | 17:24:47",
      url:
        "https://vovworld.vn/en-US/current-affairs/medlink-wins-first-startup-contest-vietchallenge-2019-782463.vov"
    },
    {
      title:
        "Top 3 Techfest 2018 làm nền tảng kết nối công ty dược và nhà thuốc",
      content:
        "Nền tảng kết nối công ty dược và nhà thuốc Medlink là giải pháp công nghệ giúp các công ty tiết kiệm tối đa chi phí phân phối sản phẩm.",
      image: `https://i-startup.vnecdn.net/2018/12/07/IMG-6764-mr1544068267179-8524-1544158629.jpg`,
      date: "Vnexpress, 7/12/2018, 13:36 (GMT+7)",
      url:
        "https://startup.vnexpress.net/tin-tuc/y-tuong-moi/top-3-techfest-2018-lam-nen-tang-ket-noi-cong-ty-duoc-va-nha-thuoc-3850663.html"
    },
    {
      title:
        "Dự án Medlink giành ngôi quán quân cuộc thi khởi nghiệp toàn cầu VietChallenge 2019",
      content:
        "Kết quả chung cuộc Chung kết VietChallenge 2019, chiến thắng thuộc về Medlink - một nền tảng kết nối trực tiếp giữa các hãng dược và nhà thuốc và giành giải thưởng 25.000 USD.",
      image: `https://icdn.dantri.com.vn/2019/09/09/du-an-medlink-vuot-qua-cac-startup-viet-toan-cau-gianh-ngoi-quan-quan-vietchallenge-2019-docx-1568012446078.jpeg`,
      date: "Dân trí, 10/09/2019 - 06:21",
      url:
        "https://dantri.com.vn/du-hoc/du-an-medlink-gianh-ngoi-quan-quan-cuoc-thi-khoi-nghiep-toan-cau-viet-challenge-2019-20190909140425171.htm"
    },
    {
      title: "Accelerating Asia names 10 startups for its seed-stage accelerator program",
      content:
        "A healthtech startup from Vietnam that connects consumers, pharmacies, and pharmaceutical companies.",
      image: `https://cdn.techinasia.com/wp-content/uploads/2019/06/https___cdn.evbuc_.com_images_63996178_303151357343_1_original.jpg`,
      date: "Techinasia, 19 Jun 2019",
      url:
        "https://www.techinasia.com/accelerating-asia-names-10-startups-seed-stage-accelerator-program"
    },
  ];

  return (
    <div className="home-news">
      <div className="container">
        <div className="common-title-section">
          {trans.social_about_us}
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            {news.map((e, i) => (
              <div key={i} className="row news-item">
                <div className="col-md-5 d-flex align-items-center">
                  <img src={e.image} width="100%" />
                </div>
                <div className="col-md-7 news-content">
                  <div className="common-text-medium">{e.date}</div>
                  <div className="news-title">{e.title}</div>
                  <div className="common-text-medium">{e.content}</div>
                  <a className="btn-view-more common-text-medium" href={e.url} target="_blank">
                    {trans.view_more}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNews
