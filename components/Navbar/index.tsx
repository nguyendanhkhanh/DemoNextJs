import React, { Fragment, useState } from "react";
import { UserAgentProvider, UserAgent } from "@quentin-sommer/react-useragent";
import { Menu, Dropdown, Button } from "antd";
import { imagePath } from "../../config";
import Link from "next/link";
import { DownOutlined } from "@ant-design/icons";
import useTrans from "../../common/useTrans";
import { useRouter } from "next/router";
var VNco = `${imagePath}/vietnam.svg`;
var ENco = `${imagePath}/usa.svg`;
import Image from 'next/image'
import location from '../../public/images/location.png'

type Props = {
  medicine: boolean
  // token: string
  logged?: boolean
  name?: string
  login?: string
  productList?: any[]
  language?: string
  // setLanguage: Function;
  product?: any
};

function Navbar(props: Props) {

  const { medicine, logged, name, login, product, productList } = props
  const trans = useTrans().navbar
  const router = useRouter()

  const [top, setTop] = useState(0)
  const [opacity, setOpacity] = useState(true)
  const [openMenu, setOpenMenu] = useState(false)
  const [prevScrollpos, setPrevScrollpos] = useState(0)
  const [mobileCollapseShow, setMobileCollapseShow] = useState(false)
  const [iconMenu, setIconMenu] = useState(true)
  const [languageName, setLanguageName] = useState(router.locale.toUpperCase())
  const [urlImageLanguage, setUrlImageLanguage] = useState(router.locale === 'en' ? ENco : VNco)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  };

  const sum = (array, key) => {
    return array.reduce((a, b) => a + b[key], 0);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    if (prevScrollpos === currentScrollPos) {
      return;
    }
    let opacity = false;
    if (currentScrollPos > 20) {
      opacity = true;
    }
    if (currentScrollPos < 20 || currentScrollPos == null) {
      opacity = false;
    }
    setPrevScrollpos(currentScrollPos)
    setTop(visible ? 0 : -65)
    setOpacity(opacity)
  };

  const toggleMobileNav = () => {
    setMobileCollapseShow(!mobileCollapseShow)
    setIconMenu(!iconMenu)
  };

  const _openUserInfo = () => {
    // Router.pushRoute("/user-info");
  };


  const onClinkChangeLanguage = (language: string) => {
    setLanguageName(language.toUpperCase())
    setUrlImageLanguage(language === 'en' ? ENco : VNco)
    router.push(router.pathname, router.pathname, { locale: language })
  }

  const userProfileMenu = () => {
    return [
      {
        icon: `${imagePath}/icon-list.svg`,
        title: trans.manage_order,
        href: "",
        hasCadet: true,
        // onClick: () => Router.pushRoute("/order-management")
      },
      {
        icon: `${imagePath}/icon-user.svg`,
        title: trans.user_account,
        href: "",
        hasCadet: false,
        // onClick: () => Router.pushRoute("/user-info")
      },
      {
        icon: `${imagePath}/icon-exit.svg`,
        title: trans.log_out,
        href: "",
        hasCadet: false,
        onClick: logout
      },
      {
        icon: `${imagePath}/icon-question.svg`,
        title: "Trợ giúp",
        href: "",
        hasCadet: false,
        onClick: null
      }
    ];
  };

  const logout = () => {
    // this.props.logout();
    // Router.pushRoute("/");
  };

  const renderMenuNav = () => {
    const dataMenuLandingPage = [
      {
        name: trans.pharmacy_management,
        url: "/nhathuoc"
      },
      {
        name: trans.company,
        url: "/congtyduoc"
      },
      {
        name: trans.medicine,
        url: "/muathuoc"
      }
    ];
    const dataMenuHome = [
      {
        name: trans.login,
        url: "/dangnhap"
      },
      {
        name: trans.register,
        url: "/dangky"
      },
    ]
    const dataExtraMenuHome = [
      {
        name: trans.products,
        url: "/muathuoc"
      },
      {
        name: trans.prescriptions,
        url: "/donthuoc"
      },
      {
        name: trans.pharmacist,
        url: "/tuvan"
      }
    ]

    const renderListMenu = () => {
      if (router.pathname === "/") return (
        <div className="linkList">
          {dataMenuHome.map((e, i) => (
            <div
              onClick={() => onClickLink(e.url)}
              key={i}
              className="item"
            >
              {e.name}
            </div>
          ))}
        </div>
      )
      else return (
        <div className="linkList">
          {dataMenuLandingPage.map((e, i) => (
            <div
              onClick={() => onClickLink(e.url)}
              key={i}
              className="item"
            >
              {e.name}
            </div>
          ))}
        </div>
      )
    }

    const renderListMenuExtra = () => {
      return (
        <div className="linkListCategory">
          {dataExtraMenuHome.map((e, i) => (
            <div
              onClick={() => onClickLink(e.url)}
              key={i}
              className="item"
            >
              {e.name}
            </div>
          ))}
        </div>
      )
    }

    const onClickLink = url => {
      toggleMenu();
    };
    return (
      <div className={`menu-nav d-md-block d-lg-none ${openMenu && "open"}`}>
        <div className="main">
          <div className="main-header">
            <div>Menu</div>
            <div>
              <img
                className="icon-close"
                src={`${imagePath}/ic_close.png`}
                onClick={toggleMenu}
              />
            </div>
          </div>
          {renderListMenu()}
          {medicine && <div className="user-menu">{renderUserNav()}</div>}
          <div className="p-l d-flex align-items-center">
            {renderCart()}
            {renderLanguage()}
          </div>
          {router.pathname === "/" && renderListMenuExtra()}
        </div>
      </div>
    );
  };

  const renderLanguage = () => {
    return (
      <Dropdown overlay={renderMenuLanguage}>
        <Button>
          <img
            width="20px"
            style={{ paddingRight: 3 }}
            src={urlImageLanguage}
          />
          {languageName}
          <DownOutlined />
        </Button>
      </Dropdown>
    )
  }

  const renderMenuLanguage = () => (
    <Menu>
      <Menu.Item key="1" onClick={() => onClinkChangeLanguage("vi")}>
        <img width="20px" src={VNco} /> VI
      </Menu.Item>
      <Menu.Item key="2" onClick={() => onClinkChangeLanguage("en")}>
        <img width="20px" src={ENco} /> EN
      </Menu.Item>
    </Menu>
  );

  const renderCart = () => {
    return (
      !medicine && (
        <Link href="cart">
          <a className="nav-link" aria-haspopup="true" aria-expanded="false">
            <div className="position-relative">
              <img
                className="icon"
                src={`${imagePath}/icon-cart.svg`}
              />
              <div
                className="badge anim-cart"
                style={{ opacity: productList.length == 0 ? 0 : 1 }}
              >
                {/* {productList.length} */}
                {/* {sum(productList, "quantity")} */}
              </div>
            </div>
          </a>
        </Link>
      )
    );
  };

  const renderDropdownMenu = () => {
    return (
      <div className="menu-container">
        {userProfileMenu().map((item, index) => {
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
            <a className="nav-link">{trans.login_or_register}</a>
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
              <span className="nav-name">{ }</span>
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
                  <div className="name" onClick={_openUserInfo}>
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

  const renderListMenuLandingPageWeb = () => (
    <Fragment>
      <li className="nav-item">
        <Link href="https://nhathuoc.medlink.vn">
          <a className="nav-link">
            {trans.pharmacy_management}
          </a>
        </Link>
      </li>
      <li className="nav-item user-profile icon-item badge-show">
        <Link href="/congtyduoc">
          <a
            className="nav-link"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {trans.company}
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/muathuoc">
          <a className="nav-link">
            {trans.medicine}
          </a>
        </Link>
      </li>
    </Fragment>
  )
  const renderListMenuMainWeb = () => (
    <div className="nav-item user-profile icon-item badge-show auth">
      <Link href="/congtyduoc">
        <a
          className="nav-link-main"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {trans.login}
        </a>
      </Link>
      <span>|</span>
      <Link href="/congtyduoc">
        <a
          className="nav-link-main"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {trans.register}
        </a>
      </Link>
    </div>
  )

  return (
    <nav
      className={` fixed-top navbar-expand-lg navbar-light navbar ${opacity && "opacity"} `}
      style={{ top }}
    >
      <div className="navbar-container-main">
        <div className="navbar-container">
          <div className="d-flex align-items-center logoBox navbar-icon-medlink" >
            <Link href="/">
              <UserAgentProvider ua={typeof window === "undefined" ? "" : window.navigator.userAgent}>
                <UserAgent computer>
                  <Link href="/">
                    <img
                      src={`${imagePath}/medlink-logo.png`}
                      alt="Medlink logo"
                      srcSet={`${imagePath}/medlink-logo@2x.png 2x, ${imagePath}/medlink-logo@3x.png 3x`}
                    />
                  </Link>
                </UserAgent>
                <UserAgent mobile>
                  <Link href="/">
                    <img
                      src={`${imagePath}/medlink-logo.png`}
                      alt="Medlink logo"
                    />
                  </Link>
                </UserAgent>
              </UserAgentProvider>
            </Link>
            {/* <div className="d-md-block d-lg-none text-logo test">Medlink</div> */}
          </div>
          <div className="d-md-block d-lg-none">
            <img
              src={`${imagePath}/ic_menu.png`}
              className="icon-menu"
              onClick={toggleMenu}
            />
          </div>
          <div className="collapse navbar-collapse list" id="navbarResponsive">
            <ul className="navbar-nav ml-auto" style={{ paddingRight: 30 }}>
              {router.pathname === "/" ? renderListMenuMainWeb() : renderListMenuLandingPageWeb()}
              {renderUserNav()}
              <li className="nav-item  user-profile icon-item badge-show">
                {renderCart()}
              </li>
            </ul>
            {renderLanguage()}
          </div>
          {renderMenuNav()}
        </div>

        <div className="collapse navbar-collapse list header-extra-container" id="navbarResponsive">
          <div className="left-menu">
            <Link href="/muathuoc">
              <a
                className="nav-link-extra"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {trans.products}
              </a>
            </Link>
            <Link href="/tuvan">
              <a
                className="nav-link-extra"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {trans.pharmacist}
              </a>
            </Link>
            <Link href="/donthuoc">
              <a
                className="nav-link-extra"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {trans.prescriptions}
              </a>
            </Link>
          </div>
          <div className="right-menu">
            <Link href="/map">
              <a
                className="nav-link-extra"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="nav-link-extra-text"> {trans.near_pharmacy} </div>
                <Image
                  src={location}
                  alt="Picture of the author"
                  width={22}
                  height={22}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
