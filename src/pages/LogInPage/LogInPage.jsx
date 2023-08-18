import React, {useState} from 'react';
import styled from "styled-components";
import {
    Alert,
    Box, Button,
    FormControl, FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const MainContainer = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  background: #EDE8E2;
`;
const ImgContainer = styled(Box)`
  background: url("/img_logInPage.png"), lightgray -83.648px -12.915px / 116.027% 110.825% no-repeat;
  width: 652px;
  height: 902px;
`;
const SignInContainer=styled(Box)`
  display: flex;
  width: 628px;
  height: 902px;
  padding: 128px 0;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
`;
const SignInForm=styled(Box)`
  display: flex;
  width: 469px;
  padding: 48px;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  border-radius: 4px;
  background: #FDFDFD;
`;
const SignInFormText=styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const SignInFormInputs=styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  align-self: stretch;
`;
const AlertMessage=styled(Alert)`

`;
function LogInPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [passError, setPassError] = useState('');

    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                body: JSON.stringify({
                    email: 'test@gmail.com',
                    password: '12345',
                }),
            });

            if (response.ok) {
                window.localStorage.setItem('token', 'your_generated_token_here');
                navigate('/admin/product');
            } else {
                setPassError('Please fix the errors before submitting.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setPassError('Please fix the errors before submitting.');
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            loginOrEmail: '',
            password: '',
        },
        mode: 'onBlur',
    });
    return (
        <MainContainer>
            <ImgContainer />
            <SignInContainer>
                <SignInForm>
                    <SignInFormText>
                        <Typography variant='h5'
                                    style={{
                                        fontFamily: 'Lato',
                                    }}>
                            Welcome !</Typography>
                        <Typography style={{
                            fontSize: '32px',
                            fontFamily: 'Lato',
                            fontWeight: "bold",
                        }}>
                            Sign in to </Typography>
                        <Typography style={{
                            fontSize: '16px',
                            fontFamily: 'Lato',
                        }}>
                            to access the admin dashboard </Typography>
                    </SignInFormText>

                    {passError && (
                        <AlertMessage severity="error"sx={{width: '100%', padding: '4px 8px', fontFamily: 'Lato',
                            fontSize: '14px', color: '#DC362E'}}>{passError}</AlertMessage>
                    )}

                    <SignInFormInputs>
                        <TextField
                            label="Enter your Email"
                            fullWidth
                            error={Boolean(errors.loginOrEmail)}
                            helperText={errors.loginOrEmail && errors.loginOrEmail.message}
                            {...register('loginOrEmail', { required: 'Required' })}
                        />
                        <FormControl fullWidth variant="outlined" >
                            <InputLabel htmlFor="outlined-adornment-password" error={Boolean(errors.password)}
                                        {...register('password', { required: 'Required'})}>Enter your Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                error={Boolean(errors.password)}
                                {...register('password', { required: 'Required'})}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Enter your Password"
                            />
                            <FormHelperText error={Boolean(errors.password)}>
                                {errors.password && errors.password.message}
                            </FormHelperText>
                        </FormControl>
                    </SignInFormInputs>
                    <Button
                        fullWidth
                        variant='contained'
                        style={{
                            backgroundColor: isValid ? '#161616' : '',
                            borderRadius: 2,
                            textTransform: 'none',
                        }}
                        disabled={!isValid}
                        onClick={handleSubmit(handleLogin)}
                    >
                        Sign In
                    </Button>
                </SignInForm>
            </SignInContainer>
        </MainContainer>
    );
}

export default LogInPage;