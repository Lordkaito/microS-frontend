import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalContent,
  Button,
  CircularProgress,
  useDisclosure,
  Skeleton,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

const Main = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    onOpen();
    setTimeout(() => {
      onClose();
    }, 1000);
  }, []);
  return (
    <>
      <Modal
        size="full"
        isOpen={isOpen}
        onClose={onClose}
        className="flex justify-center items-center"
      >
        <ModalContent>
          <>
            <CircularProgress size="lg" aria-label="Loading..." />
          </>
        </ModalContent>
      </Modal>
      {/* <Loader /> */}
      <main className="flex flex-grow items-center justify-center bg-indigo-200">
        <Card className="">
          <CardHeader className="flex justify-center">
            <h3>Post what you think</h3>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={{
                title: "",
                content: "",
              }}
              validate={(values) => {
                const errors: any = {};
                if (!values.title) {
                  errors.title = "Required";
                }

                if (!values.content) {
                  errors.content = "Required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSuccess(true);
                console.log(values);
                // this will send the post to the db later
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                  setError(true);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col w-[700px] justify-center items-center gap-6 text-lg pb-10">
                  <Field
                    type="text"
                    name="title"
                    placeholder="title"
                    className="w-3/4 m-2 bg-slate-50 p-2 rounded-md"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-[#F31260]"
                  />
                  <Field
                    as="textarea"
                    type="text"
                    name="content"
                    placeholder="content"
                    className="w-3/4 m-2 bg-slate-50 p-2 rounded-md"
                  />
                  <ErrorMessage
                    name="content"
                    component="div"
                    className="text-[#F31260]"
                  />
                  <Button
                    className="w-3/4"
                    color={error ? "danger" : success ? "success" : "primary"}
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
        </Card>
      </main>
    </>
  );
};

export default Main;
