import { ReactNode } from "react";
import style from "../../styles/sample/header.module.scss";

export type normalComponentType = {
  children?: ReactNode;
  active: boolean;
};
export const getActiveClasses = (originClass: string, active: boolean) => {
  return active ? [originClass, style.active].join(" ") : originClass;
};
export const NavBar = ({ children, active }: normalComponentType) => {
  return <nav className={getActiveClasses(style.nav, active)}>{children}</nav>;
};
export const Logo = ({ children, active }: normalComponentType) => {
  return <div className={getActiveClasses(style.logo, active)}>{children}</div>;
};
export const Menus = ({
  items,
  active,
}: {
  items: Array<{ url: string; title: string }>;
  active: boolean;
}) => {
  return (
    <ul className={getActiveClasses(style.menu, active)}>
      {items.map((m, i) => (
        <li key={i}>
          <a href={m.url}>{m.title}</a>
        </li>
      ))}
    </ul>
  );
};
export const Icon = ({ children, active }: normalComponentType) => {
  return <ul className={getActiveClasses(style.icon, active)}>{children}</ul>;
};

export const Hamburger = ({ children, active }: normalComponentType) => {
  return (
    <div className={getActiveClasses(style.hamburger, active)}>{children}</div>
  );
};
