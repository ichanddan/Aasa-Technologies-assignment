import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function AppNavbar() {
  const getData = localStorage.getItem("data");
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">
          Weather App
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        {getData.token ? (
          <>
            <NavbarItem>
              <Link href="/login">
                <Button color="primary" variant="flat">
                  Login
                </Button>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/signup">
                <Button color="primary" variant="solid">
                  Sign Up
                </Button>
              </Link>
            </NavbarItem>
          </>
        ) : (
          <NavbarItem>
            <Link href="/profile">
              <Button color="primary" variant="ghost">
                Profile
              </Button>
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}
