import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

let style_menu = {
  maxWidth: "200px",
  marginLeft: "30px",
  marginRight: "30px",
  padding: "15px",
  borderRight: "1px solid lightgray"
};

export const Nav = () => {
  let path = useRouter().asPath;
  return (
    <aside className="menu" style={style_menu}>
      <p className="menu-label">General</p>
      <ul className="menu-list">
        <li>
          <Link href="/">
            <a className={path == "/" ? "is-active" : ""}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={path == "/contact" ? "is-active" : ""}>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={path == "/about" ? "is-active" : ""}>About</a>
          </Link>
        </li>
      </ul>
      <p className="menu-label">Administration</p>
      <ul className="menu-list">
        <li>
          <a>Team Settings</a>
        </li>
        <li>
          <a>Manage Your Team</a>
          <ul>
            <li>
              <a>Members</a>
            </li>
            <li>
              <a>Plugins</a>
            </li>
            <li>
              <a>Add a member</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Authentication</a>
        </li>
      </ul>
    </aside>
  );
};

/*
<ul>
          <li>
            <Link href='\'>
                <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='\about'>
                <a>About</a>
            </Link>
          </li>
      </ul>
*/
