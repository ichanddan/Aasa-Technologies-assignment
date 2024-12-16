import { Button, Card, CardBody } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigator = useNavigate();

  const data = localStorage.getItem("data");
  const parsedData = JSON.parse(data);
  console.log(parsedData);
  return (
    <div className="flex items-center justify-center">
      <div className=" w-1/2 mt-10 p-4">
        <h1 className="text-2xl font-bold mb-5">Profile</h1>
        <div>
          <Card className="flex items-center">
            <CardBody>
              <div className="flex items-center justify-around">
                <label>Name</label>
                <h1>{parsedData?.User?.Name}</h1>
              </div>
              <div className="flex items-center justify-around">
                <label>Email</label>
                <h1>{parsedData?.User?.Email}</h1>
              </div>
              <Button
                className="mt-10 btn btn-success"
                onPress={() => {
                  localStorage.clear();
                  navigator('/login')
                }}
              >
                Log Out
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
