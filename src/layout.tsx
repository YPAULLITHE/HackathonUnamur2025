import React from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faAngleRight, faBars } from "@fortawesome/free-solid-svg-icons"


const member = {
  points:100,
  img:"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
}

export default function Layout() {
  let location = useLocation()

  // this component is used to highlight the current page in the menu
  let LinkWithStyle = (props: {to: string, children: JSX.Element | JSX.Element[] | string}) => {
    let style = location.pathname === props.to ? "bg-accent text-accent-content" : ""

    return (
      <Link to={props.to} className={style}>
        {props.children}
      </Link>
    )
  }

  let menu = (position: "vertical" | "horizontal") => {
    let expandIcon = position === "vertical" ? faAngleRight : faChevronDown

    return (
      <>
        <li>
          <LinkWithStyle to={"/"}>Home</LinkWithStyle>
        </li>
        <li>
          <LinkWithStyle to={"/about"}>About</LinkWithStyle>
        </li>
      </>
    )
  }

  return (
    <div className="bg-base-300 h-screen flex flex-col">
      <div className="navbar bg-base-100">
        <section className="navbar-start w-full">
          {/* mobile menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menu("vertical")}
            </ul>
          </div>
          {/* desktop menu */}
          <ul className="menu menu-horizontal px-1 hidden lg:flex z-10">{menu("horizontal")}</ul>
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path
                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>

            <input type="checkbox" value="dracula" className="toggle theme-controller" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </section>
        <section className="navbar-end">
                <div className="stats bg-base-100 border border-base-300">
                  <div className="stat">
                    <div className="stat-title">Social Points</div>
                    <div className="stat-value">{member.points}</div>
                </div>
                </div>
          <div className="avatar">
            <div className="h-8 rounded-full">
              <img src={member.img} />
            </div>
          </div>
        </section>
      </div>
      <Outlet />
    </div>
  )
}
