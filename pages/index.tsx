import { NextPageWithLayout } from '../model'
import MainLayout from '../components/Layout/MainLayout'
import { imagePath } from '../config'
import React from 'react'
import FreeTrailer from '../components/FreeTrailer'
import withAnimate from '../common/withAnimate'
import HomeProducts from '../components/HomeProduct'
import HomeAboutUs from '../components/HomeAboutUs'
import HomeProductDetail from '../components/HomeProductDetail'
import GetIt from '../components/GetIt'
import HomeAchievements from '../components/HomeAchievements'
import HomePartner from '../components/HomePartner'
import HomeNews from '../components/HomeNews'
import HomeContact from '../components/HomeContact'

const Home: NextPageWithLayout = () => {
  return (
    <div className="home-page">
      <FreeTrailer
        data={{
          link: "https://nhathuoc.medlink.vn/auth/register",
          title: "Giải Pháp Toàn Diện Cho Cộng Đồng Dược",
          content: "Chúng tôi cung cấp giải pháp toàn diện cho Nhà Thuốc và Công Ty Dược của bạn, cam kết mang lại những sản phẩm tốt nhất và nâng cao giá trị cho cộng đồng Dược Việt Nam.",
          background: "",
          mainBackground: `${imagePath}/backgroundHomePageSection.png`
        }}
      />
      {withAnimate(<HomeProducts />)}
      {withAnimate(<HomeAboutUs />)}
      {withAnimate(<HomeProductDetail />)}
      {withAnimate(<GetIt />)}
      {withAnimate(<HomeAchievements />)}
      {withAnimate(<HomePartner />)}
      {withAnimate(<HomeNews />)}
      {withAnimate(<HomeContact />)}

    </div>
  )
}

Home.Layout = MainLayout

export default Home
