import { NextPageWithLayout } from '../../model'
import MainLayout from '../../components/Layout/MainLayout'
import { imagePath } from '../../config'
import React from 'react'
import FreeTrailer from '../../components/FreeTrailer'
import withAnimate from '../../common/withAnimate'
import HomeProducts from '../../components/HomeProduct'
import HomeAboutUs from '../../components/HomeAboutUs'
import HomeProductDetail from '../../components/HomeProductDetail'
import GetIt from '../../components/GetIt'
import HomeAchievements from '../../components/HomeAchievements'
import HomePartner from '../../components/HomePartner'
import HomeNews from '../../components/HomeNews'
import HomeContact from '../../components/HomeContact'
import useTrans from '../../common/useTrans'

const Home: NextPageWithLayout = () => {
  const trans = useTrans().landingPage
  return (
    <div className="home-page">
      <FreeTrailer
        data={{
          link: "https://nhathuoc.medlink.vn/auth/register",
          title: trans.title_slide,
          content: trans.content_slide,
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
