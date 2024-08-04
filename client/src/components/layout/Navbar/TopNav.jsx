import { CiShoppingCart } from "react-icons/ci"
import { IoPersonOutline } from "react-icons/io5"
import * as Icon from "react-bootstrap-icons"
import { useState } from "react"
import { FaLeaf } from "react-icons/fa"

const TopNav = ({
  isPlaying,
  togglePlayPause,
  toggleNavbar,
  setToggleNavbar,
  toggleHamburgerMenu,
  setToggleHamburgerMenu,
}) => {
  const [isLogin, setLogin] = useState(true)
  return (
    <div className="topNav">
      <div className="headerLeft">
        <button
          id="hamburgerBtn"
          className="hamburgerBtn"
          onClick={() => {
            setToggleHamburgerMenu(!toggleHamburgerMenu)
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="musicContainer">
          <button className="btn music">
            music
            <div
              id="mainMusicSwitcher"
              className={isPlaying ? "musicSwitcher active" : "musicSwitcher"}
              onClick={togglePlayPause}
            >
              <div className="ball"></div>
            </div>
          </button>
        </div>
        <div className="languageDropdown">
          <button className="btn language">
            Language<i className="bi bi-chevron-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">中文</a>
            <a href="#">English</a>
          </div>
        </div>
      </div>
      <a href="#">
        <img className="topLogo" src="/00logo/LogoType_Light_1.png" alt="" />
      </a>
      <div className="headerRight">
        <a href="/cart" className="btnShoppingCart">
          <CiShoppingCart />
        </a>
        <div className="userMenuContainer">
          <a href="./login" className="btn btnLogin">
            {!isLogin ? (
              <>
                {" "}
                <Icon.PersonFill />
                <span className="loginText">Login</span>
              </>
            ) : (
              <>
                <img src="/00myIcon/baby.png" className="userAvatar" />
                <span className="loginText">張甄畇</span>
              </>
            )}
          </a>
          {isLogin && (
            <div className="dropdown-content">
              <a href="/profile">會員中心</a>
              <a href="#" className="logoutBtn">
                登出
              </a>
            </div>
          )}
        </div>
      </div>
      <button
        id="toggleNavbar"
        className="toggleNavbar"
        onClick={() => {
          setToggleNavbar(!toggleNavbar)
        }}
      >
        <Icon.ChevronDoubleUp />
      </button>
    </div>
  )
}

export default TopNav
