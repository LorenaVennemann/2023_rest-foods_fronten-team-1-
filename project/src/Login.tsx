import { Button, TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import LoginService from './components/service/LoginService';
import { Navigate } from 'react-router-dom'; // assuming you're using React Router

const Login = () => {
  const handleLogin = async (values) => {
    const { email, password } = values;
    if (email && password) {
      console.log(`Email: ${email}, Password: ${password}`);
      try {
        const accessToken = await LoginService.loginUser(email, password);
        console.log(`Access Token: ${accessToken}`);
        localStorage.setItem('accessToken', accessToken);
        navigate('/employee', { replace: true });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{ email: 'elmar@mail.com', password: '12345' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          console.log(errors);
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleLogin(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="email">
              {({ field }) => (
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
              {({ field}) => (
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
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleBack}
              style={{ marginTop: '10px' }}
            >
              Zurück
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
