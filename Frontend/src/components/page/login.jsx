import { Button, Input, Card, CardBody, CardHeader } from "@nextui-org/react"

export default function LoginPage() {
  return (
    <div className="container mx-auto mt-10 max-w-md">
      <Card>
        <CardHeader className="flex gap-3">
          <h1 className="text-2xl font-bold">Login</h1>
        </CardHeader>
        <CardBody>
          <form className="space-y-4">
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
            <Button color="primary" type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  )
}

