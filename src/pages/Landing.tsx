import Header from "../components/Header";
import { Button, Input } from "@nextui-org/react";
import { useNavigate, Route, Routes } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const handleRedirect = (e: any) => {
    e.preventDefault();
    navigate("/home");
  }
  return (
    <>
      <Header />
      <div className="flex flex-grow justify-center bg-[url('https://media.discordapp.net/attachments/895060541293346848/1174450143362293790/vxcvxcv.png?ex=6567a2ee&is=65552dee&hm=2cd00369d81973e9991815aa343cdb8aba949fc5231c72e21dc8f8ec1c5fc9ba&=&width=1602&height=500')] bg-cover bg-center bg-[#272f75] min-h-screen">
        <div className="mt-24">
          <h2 className="text-white">Welcome to BWdigets</h2>
          <div className="flex max-h-80 w-[500px] flex-col">
            <Input
              type="email"
              placeholder="Enter your email"
              size="sm"
              description="By signing up you accept our terms and conditions"
              isRequired
            />
            {/* TODO: we need to use Formik to manage forms and data */}
            <Button color="primary" variant="shadow" onClick={(e) => handleRedirect(e)}>
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
