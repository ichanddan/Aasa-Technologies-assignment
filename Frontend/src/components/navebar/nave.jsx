import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function AppNavbar() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenData = () => {
      const getData = localStorage.getItem("data");
      const parsedData = JSON.parse(getData);
      setToken(parsedData?.token);
    };
    tokenData()
  }, [token]);
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">
          Weather App
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        {token ? (
          <NavbarItem>
            <Link href="/profile">
              <Button color="primary" variant="ghost">
                Profile
              </Button>
            </Link>
          </NavbarItem>
        ) : (
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
        )}
      </NavbarContent>
    </Navbar>
  );
}
