import { Link } from "react-router";
import { NavLink, Wrapper } from "./styless/navbarStyle";

const Navbar = () => {
  return (
    <Wrapper>
      <NavLink to={"/home"}>
        <div>Home</div>
      </NavLink>
      <NavLink to={"/product"}>
        <div>Product</div>
      </NavLink>
      <NavLink to={"/about"}>
        <div>About</div>
      </NavLink>
      <NavLink to={"/contact"}>
        <div>Contact</div>
      </NavLink>
      <NavLink to={"/profile"}>
        <div>Profile</div>
      </NavLink>{" "}
      <NavLink to={"/todo"}>
        <div>Todo list</div>
      </NavLink>
    </Wrapper>
  );
};

export default Navbar;
