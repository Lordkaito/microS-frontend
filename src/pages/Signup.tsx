import Loader from "../components/Loader";
import {
  Card,
  CardBody,
  // CardFooter,
  Input,
  CardHeader,
  Button,
} from "@nextui-org/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { store } from "../redux/store";

const Signup = () => {
  let redirectedEmail = store.getState().user.email;
  return (
    <>
      <Loader />
      <div className="bg-[#5248a4] min-h-screen flex justify-center items-center">
        <Card className="">
          <CardHeader className="flex justify-center">
            <h3>Sign up</h3>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={{ email: redirectedEmail, password: "", username: "" }}
              validate={(values) => {
                const errors: any = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }

                if (!values.username) {
                  errors.username = "Required";
                } else if (values.username.length < 3) {
                  errors.username =
                    "Username must be at least 3 characters long";
                }

                if (!values.password) {
                  errors.password = "Required";
                } else if (values.password.length < 8) {
                  errors.password =
                    "Password must be at least 8 characters long";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                // this will handle the form submission later
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col w-[700px] justify-center items-center gap-6 text-lg pb-10">
                  <Field
                    type="email"
                    name="email"
                    placeholder="email"
                    className="w-3/4"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-[#F31260]"
                  />
                  <Field
                    type="username"
                    name="username"
                    placeholder="username"
                    className="w-3/4"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-[#F31260]"
                  />
                  <Field
                    className="w-3/4"
                    type="password"
                    name="password"
                    placeholder="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-[#F31260]"
                  />
                  <Button
                    className="w-3/4"
                    color="danger"
                    type="submit"
                    disabled={isSubmitting}
                    isLoading={isSubmitting}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </CardBody>
          {/* <CardFooter className="flex justify-center">
            <Button color="primary" className="w-40">
              Sign Up
            </Button>
          </CardFooter> */}
        </Card>
      </div>
    </>
  );
};

export default Signup;
