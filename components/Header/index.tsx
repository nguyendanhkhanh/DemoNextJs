import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { imagePath } from '../../config'

interface Props {
   title: string
}

const Header = (props: Props) => {

  const { title } = props

  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{title ?? ""}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="Mua thuốc,Tra cứu thuốc, Thực phẩm chức năng, Tư vấn với bác sĩ"
      />
      <meta
        name="description"
        content="Website cung cấp dịch vụ tìm kiếm, mua thuốc cho người tiêu dùng"
      />
      <meta name="copyright" content="Công ty cổ phần đầu tư Medlink" />
      <meta name="author" content="Công ty cổ phần đầu tư Medlink" />
      <meta name="distribution" content="Global" />
      <meta name="resource-type" content="Document" />
      <meta
        name="apple-itunes-app"
        content="app-id=yourAppStoreID, app-argument=ThisPagesUrl>"
      />

      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
      />
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      />
      <script
        type="text/javascript"
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.bundle.min.js"
      />
      <link
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossOrigin="anonymous"
      />
      <script src="https://kit.fontawesome.com/1d7f79daa8.js"></script>
      <link
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito&display=swap"
      ></link>
      <script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
        crossOrigin="anonymous"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js" />

      <script
        type="text/javascript"
      // src="./../static/javascripts/click.js"
      />

      <link rel="icon" href={`${imagePath}/logo1.jpg`} />
      {/* <style dangerouslySetInnerHTML={{ __html: Styles }} /> */}
    </Head>
  )
}

export default Header
