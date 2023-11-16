import Header from "../components/Header";
import { Button, Input } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/reducers/usersReducer";

const Landing = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const handleRedirect = (e: any, email: string) => {
    e.preventDefault();
    if (email === "") {
      alert("Please enter your email");
      return;
    }
    dispatch(setUser({ email: email, id: 0, name: "guest", posts: [] }));
    navigate("/signup");
  };
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {/* TODO: we need to use Formik to manage forms and data */}
            <Button
              color="primary"
              variant="shadow"
              onClick={(e) => handleRedirect(e, email)}
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
