import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TxtInput from '../../Component/textInput/textInput';
import CoralBtn from '../../Component/CoralBtn/CoralBtn';
import { MutateLogin } from '../../API/login';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Cookies, useCookies } from 'react-cookie';
import { redirect , useNavigate} from 'react-router';

const errorMessage = styled.p`
color:#B00020;
`;

export function loginLoader() {
  // const [cookies, setCookie,removeCookie] = useCookies(["token"]);
  const cookies = new Cookies();

  if(cookies.get('token')){
      return redirect('/')
  }

  return null
}

function LoginPage() {

  const [wrongMessage, setWrongMessage] = useState('');
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
  const loginMutation = MutateLogin();

  const handleLogin = async (data) => {

    console.log('email', data.email);
    console.log('pass', data.password);

    loginMutation.mutate(data, {
      onSuccess: (data) => {

        if (data.status === 200) {
          console.log('test',data.status);
          setCookie("token", data.data.token, { path: "/" });
          navigate('/');
        }else{
          setWrongMessage(data.message)
        }
      }
    })
  }

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Box sx={{ mt: 1 }} >

        <form onSubmit={handleSubmit(handleLogin)}>
          <TxtInput register={register("email", { required: { value: true, message: "Email Feild is empty!" } })} label={'Email'} type={'email'} placeholder={'example@example.com'} />
          <TxtInput register={register("password", { required: { value: true, message: "Password Feild is empty!" } })} label={'Password'} type={'password'} placeholder={'................'} />
          <Typography color={'error'}>{errors?.email?.message}</Typography>
          <Typography color={'error'}>{errors?.password?.message}</Typography>
          <Typography color={'error'}>{wrongMessage}</Typography>
          <CoralBtn label={'Login'} type={'contained'} />

        </form>

        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default LoginPage