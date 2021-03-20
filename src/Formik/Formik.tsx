import { Container, Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormikForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("The name is required"),
      email: Yup.string()
        .email("This is not a valid email")
        .required("The email is required"),
      password: Yup.string()
        .required("The password is required")
        .oneOf([Yup.ref("repeatPassword")], "Passwords are not the same"),
      repeatPassword: Yup.string()
        .required("The password is required")
        .oneOf([Yup.ref("password")], "Passwords are not the same"),
    }),
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  return (
    <Container
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Form with Formik</h1>
      <Form style={{ width: "30%" }} onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          placeholder="Names and Last names"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        ></Form.Input>
        <Form.Input
          type="text"
          placeholder="E-mail"
          value={formik.values.email}
          name="email"
          onChange={formik.handleChange}
          error={formik.errors.email}
        ></Form.Input>
        <Form.Input
          type="password"
          placeholder="Password"
          value={formik.values.password}
          name="password"
          onChange={formik.handleChange}
          error={formik.errors.password}
        ></Form.Input>
        <Form.Input
          type="password"
          placeholder="Repeat Password"
          value={formik.values.repeatPassword}
          name="repeatPassword"
          onChange={formik.handleChange}
          error={formik.errors.repeatPassword}
        ></Form.Input>
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={formik.handleReset}>
          Reset
        </Button>
      </Form>
    </Container>
  );
};

export default FormikForm;
