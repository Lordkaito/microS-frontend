import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

const Header = () => {
  return (
    <header>
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
          <NavbarItem className="hidden lg:flex">
            {/* <Link href="#">Login</Link> */}
            <Button as={Link} color="primary" href="#" variant="shadow">
              Sign Up
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="secondary" href="/home" variant="ghost">
              Log in
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
};

export default Header;
