import { Button, Input, Card, CardBody, CardHeader } from "@nextui-org/react";
import { useState } from "react";
import { handelLogin } from "../../Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigator = useNavigate();

  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const login = await handelLogin(formData);

      if (login.status == 200) {
        await localStorage.setItem("data", JSON.stringify(login.data.data));
        toast.success("login successful!");
        setTimeout(() => {
          navigator("/");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="container mx-auto mt-10 max-w-md">
      <Card>
        <CardHeader className="flex gap-3">
          <h1 className="text-2xl font-bold">Login</h1>
        </CardHeader>
        <CardBody onSubmit={handleSubmit}>
          <form className="space-y-4">
            <Input
              onChange={handleChange}
              id="Email"
              type="email"
              label="Email"
              placeholder="Enter your email"
              variant="bordered"
            />
            <Input
              onChange={handleChange}
              id="Password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              variant="bordered"
            />
            <Button color="primary" type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
