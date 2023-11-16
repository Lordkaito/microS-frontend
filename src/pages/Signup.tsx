import Loader from "../components/Loader";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
} from "@nextui-org/react";

const Signup = () => {
  return (
    <>
      <Loader />
      <div className="bg-red-500 min-h-screen flex justify-center items-center">
        <Card className="">
          <CardHeader>Sign up</CardHeader>
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <CardFooter className="flex justify-center">
            <Button color="primary" className="w-40">Sign Up</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Signup;
