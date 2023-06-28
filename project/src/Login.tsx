<<<<<<< HEAD
import { useState } from 'react';
import { UserService } from './components/service/LoginService';

function LoginPage(props: { history: string[]; }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      const user = await UserService.login(username, password);
      console.log('Logged in user:', user);
      props.history.push('/');
    } catch (error) {
      console.error(error);
      setErrorMessage('Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihre Anmeldeinformationen und versuchen Sie es erneut.');
    }
  };

  return (
    <div>
      <h1>Anmelden</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Benutzername:</label>
          <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Passwort:</label>
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <button type="submit">Anmelden</button>
      </form>
    </div>
  );
}

export default LoginPage;
=======
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
>>>>>>> 08d92d0ed58c1675091e011d5c309de40b13106d
