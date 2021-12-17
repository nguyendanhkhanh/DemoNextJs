import Link from 'next/link'
import React, { useState } from 'react'
import Head from '../Head'
import Navbar from '../Navbar'

interface Props {
  title: string
}

const Header = (props: Props) => {
  const { title } = props
  const [medicine, setMedicine] = useState(false)
  const [logged, setLogged] = useState(false)
  return (
    <>
      <Head title={title} />
      <div id="root">
        <div className={`app`}>
          <React.Fragment >
            <Navbar
              medicine={medicine}
              productList={[]}
              logged={logged}
            />
            {/* <div className="header-extra-container">
              <div className="left-menu">
                <Link href="/congtyduoc">
                  <a
                    className="nav-link-main"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    trans.register
                  </a>
                </Link>
              </div>
            </div> */}
          </React.Fragment>
        </div>
      </div>
    </>
  )
}

export default Header
