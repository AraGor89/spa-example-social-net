import React from "react";
import { NavLink } from "react-router-dom";
import style from "./menu.module.css";

const Menu = (props) => {
  return (
    <div className={style.nav}>
      <Navigation link="/login" content="Login" />
      <Navigation link="/notes" content="Notes" />
      <Navigation link="/users" content="Users" />
      <Navigation link="/todoos" content="Doings" />
      <Navigation link="/hooksPosts" content=" My blog" />
    </div>
  );
};
const Navigation = (props) => {
  return (
    <div className={style.item}>
      <NavLink to={props.link} activeClassName={style.activeLink}>
        {props.content}
      </NavLink>
    </div>
  );
};
export default Menu;
