import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, TextField } from "@mui/material";

import { Formik, Form, Field } from "formik";

import login from "./components/service/LoginService";

const UserLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async (values: { email: string; password: string }) => {
    const { email, password } = values;

    if (email && password) {
      console.log(`Email: ${email}, Password: ${password}`);

      const accessToken = await login().loginUser(email, password);

      console.log(`Access Token: ${accessToken}`);

      localStorage.setItem("accessToken", accessToken);

      navigate("/employee", { replace: true });
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>Welcome</h1>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="email">
              {({ field }: { field: any }) => (
                <TextField
                  label="Email"
                  type="email"
                  {...field}
                  fullWidth
                  margin="normal"
                />
              )}
            </Field>

            <Field name="password">
              {({ field }: { field: any }) => (
                <TextField
                  label="Password"
                  type="password"
                  {...field}
                  fullWidth
                  margin="normal"
                />
              )}
            </Field>

            <Button
              variant="outlined"
              color="primary"
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </Button>
            <br />
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </Button>

            <br />

            <Button
              variant="outlined"
              color="secondary"
              onClick={handleBack}
              style={{ marginTop: "10px" }}
            >
              Zurück
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserLogin;
