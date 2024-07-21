import React from 'react';
import { Card, CardContent, CardActions, Typography, TextField, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import '../../Styles/loginSignin/LoginSignin.css';


// Validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});


function Login() {
  return (
    <section className="login_section">
      <Card className="login_card">
        <CardContent>
          <div className="loginCard_picture">
            {/* Add an image or logo here if necessary */}
          </div>
          <div className="loginCardAction">
            <Typography variant="h5" component="div" className="login_heading">
              Login
            </Typography>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form className="login_form">
                  <Field
                    name="email"
                    as={TextField}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    className="login_field"
                  />
                  <Field
                    name="password"
                    as={TextField}
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    required
                    error={touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    className="login_field"
                  />
                  <CardActions className="login_actions">
                    <Button type="submit" variant="contained" size="large" className="login_button">
                      Login
                    </Button>
                  </CardActions>
                </Form>
              )}
            </Formik>
            <Typography variant="body2" className="login_redirect">
              Don't have an account? <Link to="/signin">Sign In</Link>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}


export default Login;

