import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, createTheme, ThemeProvider } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import login from './components/service/LoginService';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const UserLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async (values: { email: string; password: string }) => {
    const { email, password } = values;
    if (email && password) {
      console.log(`Email: ${email}, Password: ${password}`);
      const accessToken = await login().loginUser(email, password);
      console.log(`Access Token: ${accessToken}`);
      localStorage.setItem('accessToken', accessToken);
      navigate('/employee', { replace: true });
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div style={{ padding: '20px' }}>
        <h1>Welcome</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
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
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </ThemeProvider>
  );
};

export default UserLogin;
