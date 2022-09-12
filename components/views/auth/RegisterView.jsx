import React from "react";
import Header from "@/components/base/Header";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { toast } from 'react-toastify';
import request from '@/util/request';
import { useRouter } from "next/router";
export default function RegisterView() {
    const router = useRouter();
  const [values, setValues] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    city: "",
    country: "",
    region: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(values.password !== values.confirmPassword){
      return toast.error('Password does not match');
    } else if(values.password.length < 8){
      return toast.error('Password must be at least 8 characters');
    }
    delete values.confirmPassword;
    try{
        const res = await request.post('/app/signup', values);
        toast.success(res?.data?.detail?.message);
        router.push('/auth/login');
    } catch (error) {
        toast.error(error?.response?.data?.detail.includes('duplicate') ? 'Email already exists' : 'Something went wrong');
    }

    setValues({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      gender: "",
      city: "",
      country: "",
      region: ""
    })
  }
  return (
    <>
      <Header title={"Register"} />
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Box
          component="form"
          autoComplete="off"
          sx={{
            maxWidth: 600,
            margin: "auto",
            " .MuiTextField-root": { my: 2 },
          }}
          onSubmit={handleSubmit}
        >
          <div>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  required
                  id="outlined-required-first_name"
                  label="First Name"
                  fullWidth
                  value={values.first_name}
                  onChange={handleChange}
                  name="first_name"
                  autoComplete='off'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="outlined-required-last_name"
                  label="Last Name"
                  fullWidth
                  value={values.last_name}
                  onChange={handleChange}
                  name="last_name"
                  autoComplete='off'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="outlined-required-email"
                  label="Email"
                  fullWidth
                  value={values.email}
                  onChange={handleChange}
                  name="email"
                  type={"email"}
                  autoComplete='off'
                  inputProps={{
                    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-required"
                  label="User Name"
                  fullWidth
                  value={values.email.split("@")[0]}
                  name="username"
                  readOnly
                  helperText="This is your username and can't be changed"
                  autoComplete='off'
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  id="outlined-required-phone"
                  label="Phone"
                  fullWidth
                  value={values.phone}
                  onChange={handleChange}
                  name="phone"
                  type={"tel"}
                  inputProps={{ pattern: "+[0-9]{10}" }}
                  autoComplete='off'
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  id="outlined-required-city"
                  label="City"
                  fullWidth
                  value={values.city}
                  onChange={handleChange}
                  name="city"
                  autoComplete='off'
                />
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth sx={{height:'100%',mt:1.88}} required>
                  <InputLabel id="demo-simple-select-label">Country</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.country}
                    label="Country"
                    onChange={handleChange}
                    name="country"
                    autoComplete='off'
                  >
                    <MenuItem value="pk">Pakistan</MenuItem>
                    <MenuItem value="ind">India</MenuItem>
                    <MenuItem value="usa">USA</MenuItem>
                    <MenuItem value="uk">UK</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                    required
                    id="outlined-required-password"
                    label="Password"
                    fullWidth
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                    autoComplete='off'
                    error={values.password.length < 8}
                    helperText={
                        values.password.length < 8 ? "Password must be 8 characters long" : ""
                    }
                    type="password"
                 />
              </Grid>
              <Grid item xs={6}>
                <TextField
                    required
                    id="outlined-required-password-confirm"
                    label="Confirm Password"
                    fullWidth
                    value={values.confirmPassword}
                    onChange={handleChange}
                    name="confirmPassword"
                    error={values.password !== values.confirmPassword}
                    helperText={
                        values.password !== values.confirmPassword ? "Password and confirm password must be same" : ""
                    }
                    type="password"
                    autoComplete='off'
                 />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth sx={{height:'100%'}} required>
                  <InputLabel id="demo-simple-select-gender">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-gender"
                    id="demo-simple-gender"
                    value={values.gender}
                    label="Gender"
                    onChange={handleChange}
                    name="gender"
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth sx={{height:'100%'}} required>
                  <InputLabel id="demo-simple-select-region">Region</InputLabel>
                  <Select
                    labelId="demo-simple-select-region"
                    id="demo-simple-region"
                    value={values.region}
                    label="Region"
                    onChange={handleChange}
                    name="region"
                  >
                    <MenuItem value="islam">Islam</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="primary"
              sx={{ mt: 3 }}
            >
              Register
            </Button>
            <p style={{ textAlign: "right" }}>
              Already have account?{" "}
              <Link href={"/auth/login"} passHref>
                <a>
                  <u>Login</u>
                </a>
              </Link>
            </p>
          </div>
        </Box>
      </Container>
    </>
  );
}
