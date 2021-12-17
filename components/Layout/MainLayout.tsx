import Link from 'next/link'
import React, { useState } from 'react'
import BottomFooter from '../BottomFooter'
import Footer from '../Footer'
import Header from '../Header'
interface Props {
  children: any
}

const MainLayout = (props: Props) => {

  const { children } = props

  const [header, setHeader] = useState(false)

  return (
    <React.Fragment>
      <Header title="Medlink"/>



      <div className={`app-body ${header ? "has-header" : ""}`}>
        {header && header}
        <main className="main">
          <div className="content">{children}</div>
        </main>
      </div>

      <div>
        <Footer />
        <BottomFooter />
      </div>

      {/* <div id="loading-page"></div>

      {/* {!loaded && (
          <div
            id="loading-start"
            style={{
              position: "fixed",
              width: "100%",
              height: "100%",
              background: "#fff",
              zIndex: 1000,
              top: "100%",
              left: 0
            }}
          ></div>
          )} */}
    </React.Fragment>
  )
}

export default MainLayout
