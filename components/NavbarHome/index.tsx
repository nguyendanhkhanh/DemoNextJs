import { UserAgent, UserAgentProvider } from '@quentin-sommer/react-useragent'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import imagePath from "../../next.config"

interface Props {
  medicine: boolean
  // token: string
  logged?: boolean
  name?: string
  login?: string
  // productList: 
  language?: string
  // t: Function;
  // setLanguage: Function;
}

function NavbarHome(props: Props) {

  const { medicine, logged, name, login } = props

  const [top, setTop] = useState(0)
  const [opacity, setOpacity] = useState(false)

  const   renderDropdownMenu = () => {
    return (
      <div className="menu-container">
        {this.userProfileMenu().map((item, index) => {
          return (
            <div
              key={index}
              className="dropdown-item"
              // href={item.href}
              onClick={item.onClick}
            >
              <img className="icon" src={item.icon} />
              <span className="ml-2 pt-1">{item.title}</span>
              {item.hasCadet && (
                <img
                  className="icon-small ml-auto"
                  src={`${imagePath}/icon-angle-right.svg`}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const renderUserNav = () => {
    return (
      medicine &&
      (!logged ? (
        <li className="nav-item">
          <Link href="/login">
            <a className="nav-link">{}</a>
          </Link>
        </li>
      ) : (
        <li className="nav-item dropdown user-profile icon-item badge-show">
          <div
            className="nav-link dropdown-toggle"
            id="navbarDropdownBlog"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className="position-relative">
              <img
                className="icon nav-avatar"
                src={`${imagePath}/icon_avatar.png`}
              />
              <span className="nav-name">{}</span>
            </div>
          </div>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdownBlog"
          >
            <div className="dropdown-header">
              <div className="user-profile">
                <img
                  className="img-fluid avatar"
                  src={`${imagePath}/icon_avatar.png`}
                />
                <div className="info">
                  <div className="name" onClick={this._openUserInfo}>
                    {name}
                  </div>
                  <div className="email">{login}</div>
                </div>
              </div>
            </div>
            {renderDropdownMenu()}
          </div>
        </li>
      ))
    );
  };

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg navbar-light bg-light ${opacity ? "opacity" : ""
        } `}
      style={{ top }}
    >
      <div className="container">
        <div className="d-flex align-items-center logoBox">
          <Link href="/">
            <UserAgentProvider ua={window.navigator.userAgent}>
              <UserAgent computer>
                <Link href="/">
                  <img
                    src={`${imagePath}/logo1.png`}
                    alt="Medlink logo"
                    srcSet={`${imagePath}/medlink-logo@2x.png 2x, ${imagePath}/medlink-logo@3x.png 3x`}
                  />
                </Link>
              </UserAgent>
              <UserAgent mobile>
                <Link href="/">
                  <img
                    src={`${imagePath}/logo1.png`}
                    alt="Medlink logo"
                  />
                </Link>
              </UserAgent>
            </UserAgentProvider>
          </Link>
          {/* <div className="d-md-block d-lg-none text-logo">Medlink</div> */}
        </div>
        <div className="d-md-block d-lg-none">
          <img
            src={`${imagePath}/ic_menu.png`}
            className="icon-menu"
            onClick={this.toggleMenu}
          />
        </div>
        <div className="collapse navbar-collapse list" id="navbarResponsive">
          <ul className="navbar-nav ml-auto" style={{ paddingRight: 30 }}>
            {!medicine && (
              <Fragment>
                <li className="nav-item">
                  <Link href="/nhathuoc">
                    <a className="nav-link">{}</a>
                  </Link>
                </li>
                <li className="nav-item  user-profile icon-item badge-show">
                  <Link href="/congtyduoc">
                    <a
                      className="nav-link"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {}
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/muathuoc">
                    <a className="nav-link">{}</a>
                  </Link>
                </li>
              </Fragment>
            )}
            {renderUserNav()}
            <li className="nav-item  user-profile icon-item badge-show">
              {this.renderCart()}
            </li>
          </ul>
          {this.renderLanguage()}
        </div>
      </div>
      {this.renderMenuNav()}
    </nav>
  )
}

export default NavbarHome
