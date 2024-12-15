import { Button, Input, Card, CardBody, CardHeader } from "@nextui-org/react"

export default function SignupPage() {
  return (
    <div className="container mx-auto mt-10 max-w-md">
      <Card>
        <CardHeader className="flex gap-3">
          <h1 className="text-2xl font-bold">Sign Up</h1>
        </CardHeader>
        <CardBody>
          <form className="space-y-4">
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              variant="bordered"
            />
            <Input
              type="email"
              label="Email"
              placeholder="Enter your email"
              variant="bordered"
            />
            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              variant="bordered"
            />
            <Input
              type="password"
              label="Confirm Password"
              placeholder="Confirm your password"
              variant="bordered"
            />
            <Button color="primary" type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  )
}

