import React,{useContext} from "react";
import Header from "@/components/base/Header";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Link from "next/link";
import request from '@/util/request';
import { toast } from "react-toastify";
import Cookies from 'universal-cookie';
import { useRouter } from "next/router";
import {AuthContext} from '@/context/AuthContext';
export default function LoginView() {
  const {setUser} = useContext(AuthContext);
  const cookies = new Cookies();
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [values, setValues] = React.useState({
    username: "",
    password: "",
  });
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const res = await request.post('/app/signin',values);
      toast.success('Login successful');
      setUser(res.data.detail);
      cookies.set('user', res.data, {
        path: '/',
        maxAge: new Date(Date.now() + 86400000),
      });
      router.push('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.detail || 'Something went wrong');
    }
  }
  return (
    <>
      <Header title={"Login"} />
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
            <TextField
              required
              id="outlined-required"
              label="User Name"
              fullWidth
              value={values.username}
              onChange={handleChange}
              name="username"
              type={'text'}
            />
            <FormControl
              sx={{ width: "100%", my: 3 }}
              variant="outlined"
              required
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                fullWidth
                value={values.password}
                onChange={handleChange}
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="primary"
              sx={{ mt: 3 }}
            >
              Login
            </Button>
            <p style={{textAlign:'right'}}>
              Do not have an account? <Link href={'/auth/register'} passHref>
                <a><u>Register</u></a>
              </Link>
            </p>
          </div>
        </Box>
      </Container>
    </>
  );
}
