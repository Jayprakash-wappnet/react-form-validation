import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px"
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2)
    }
  }
}));

const SignUp: React.FC = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: ""
  };
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleDiscard = (resetForm: any) => {
    resetForm();
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(firstName, lastName, email, password);
    // handleClose();
  };

  return (
    <Formik
      initialValues={{
        ...initialValues
      }}
      validationSchema={Yup.object().shape({
        first_name: Yup.string().required("First Name is required"),
        last_name: Yup.string().required("Last Name is required"),
        email: Yup.string().email("Please enter a valid email").required("Email is required"),
        username: Yup.string().required("Name is required"),
        password: Yup.string()
          .required("Please enter your password")
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Password must contain 8 characters, one uppercase, one lowercase, one number and one special case Character"
          )
      })}
      onSubmit={(values) => {
        console.log(values);
        navigate("/");
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        isValid,
        dirty,
        touched,
        values,
        resetForm
      }) => (
        <form className={classes.root} noValidate onSubmit={handleSubmit}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <TextField
            label="First Name"
            error={Boolean(touched.first_name && errors.first_name)}
            helperText={touched.first_name && errors.first_name}
            variant="filled"
            name="first_name"
            onBlur={handleBlur}
            onChange={handleChange}
            required
            value={values.first_name}
          />
          <TextField
            label="Last Name"
            variant="filled"
            error={Boolean(touched.last_name && errors.last_name)}
            helperText={touched.last_name && errors.last_name}
            name="last_name"
            value={values.last_name}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            variant="filled"
            type="email"
            required
            value={values.email}
            helperText={touched.email && errors.email}
            error={Boolean(touched.email && errors.email)}
            onBlur={handleBlur}
            onChange={handleChange}
            name="email"
          />
          <TextField
            label="User Name"
            variant="filled"
            required
            value={values.username}
            helperText={touched.username && errors.username}
            error={Boolean(touched.username && errors.username)}
            onBlur={handleBlur}
            onChange={handleChange}
            name="username"
          />
          <TextField
            label="Password"
            variant="filled"
            type="password"
            required
            value={values.password}
            helperText={touched.password && errors.password}
            error={Boolean(touched.password && errors.password)}
            onBlur={handleBlur}
            onChange={handleChange}
            name="password"
          />
          <div>
            <Button variant="contained" onClick={() => handleDiscard(resetForm)}>
              Discard
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Signup
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default SignUp;
