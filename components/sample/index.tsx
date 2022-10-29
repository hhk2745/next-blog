import { useState } from "react";
import { Hamburger, Icon, Logo, Menus, NavBar } from "./Header";
import ReactHookForm from "./ReactHookForm";

const Sample = () => {
  const [active, setActive] = useState<boolean>(false);

  const items = [
    { url: "#", title: "Home" },
    { url: "#", title: "Gallery" },
    { url: "#", title: "Weddings" },
    { url: "#", title: "FAQ" },
    { url: "#", title: "Bokkings" },
  ];
  return (
    <>
      <NavBar active={active}>
        <Logo active={active}>
          <a href="#">
            <i className="fa-brands fa-square-pied-piper"></i>
            DreamCoding
          </a>
        </Logo>

        <Menus items={items} active={active}></Menus>
        <Icon active={active}>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
        </Icon>
        <Hamburger active={active}>
          <a
            href="#"
            onClick={() => {
              setActive(!active);
            }}
          >
            <i className="fa-solid fa-bars"></i>
          </a>
        </Hamburger>
      </NavBar>

      <ReactHookForm />
    </>
  );
};

export default Sample;
