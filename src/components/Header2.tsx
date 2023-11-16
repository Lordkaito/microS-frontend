import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  User,
  Link,
} from "@nextui-org/react";
import { store } from "../redux/store";
import Loader from "./Loader";

const Header = () => {
  const user = store.getState().user;
  return (
    <header>
      <Loader />
      <Navbar position="static" className="">
        <NavbarBrand as={Link} href={"/"}>
          {/* We will use an image here  */}
          {/* Brand */}
          <p className="font-bold text-inherit">Bwidgets</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" color="foreground">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {/* <NavbarItem className="hidden lg:flex">
            <Button as={Link} color="primary" href="#" variant="shadow">
              Sign Up
            </Button>
          </NavbarItem> */}
          <NavbarItem>
            <User
              name={user.name}
              description={user.email}
              avatarProps={{
                src: "https://www.plenodelafemp.es/wp-content/uploads/2014/10/speaker-3.jpg",
                color: "success",
                isBordered: true,
              }}
            />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
};

export default Header;
