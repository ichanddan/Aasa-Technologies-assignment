import { Button, Input, Card, CardBody, CardHeader } from "@nextui-org/react";
import { useState } from "react";
import { handelSignup } from "../../Api";
import { toast } from "react-toastify";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    Name: "",
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
      const signup = await handelSignup(formData);

      if (signup.status == 200) {
        toast.success("Signup successful!");
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="container mx-auto mt-10 max-w-md">
      <Card>
        <CardHeader className="flex gap-3">
          <h1 className="text-2xl font-bold">Sign Up</h1>
        </CardHeader>
        <CardBody onSubmit={handleSubmit}>
          <form className="space-y-4">
            <Input
              onChange={handleChange}
              id="Name"
              type="text"
              label="Name"
              placeholder="Enter your full name"
              variant="bordered"
            />

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
              Sign Up
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
