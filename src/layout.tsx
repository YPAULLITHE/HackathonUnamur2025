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
          <LinkWithStyle to={"/"}><p className="text-xl font-semibold mb-4">Acceuil</p></LinkWithStyle>
        </li>
      </>
    )
  }

  return (
    <div className="bg-base-300 h-screen flex-col">
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
        </section>
        <section className="navbar-end">
                <div className="stats bg-base-100 border border-base-300">
                  <div className="stat">
                    <div className="stat-title">Social Credits</div>
                    <div className="stat-value">{member.points} 🏆</div>
                </div>
                </div>
          <div className="avatar">
                &nbsp;&nbsp;&nbsp;&nbsp;
            <div className="h-16 rounded-full">
              <img src={member.img} />
            </div>
          </div>
        </section>
      </div>
      <Outlet />
    </div>
  )
}
