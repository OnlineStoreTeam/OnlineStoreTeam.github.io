import React, { useState } from "react";
import styled from "styled-components";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import theme from "../../theme";

const MainContainer = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  background: #ede8e2;
`;
const ImgContainer = styled(Box)`
  background:
    url("/img_logInPage.png"),
    lightgray -83.648px -12.915px / 116.027% 110.825% no-repeat;
  width: 652px;
  height: 902px;
`;
const SignInContainer = styled(Box)`
  display: flex;
  width: 628px;
  height: 902px;
  padding: 64px 0;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
`;
const SignInForm = styled(Box)`
  display: flex;
  width: 469px;
  padding: 48px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 4px;
  background: #fdfdfd;
`;
const SignInFormText = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const SignInFormInputs = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  align-self: stretch;
`;
const AlertMessage = styled(Alert)``;
function LogInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [passError, setPassError] = useState("");

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "test@gmail.com",
          password: "12345",
        }),
      });

      if (response.ok) {
        window.localStorage.setItem("token", "your_generated_token_here");
        navigate("/admin/product");
      } else {
        setPassError("The email or password you entered is incorrect.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setPassError("The email or password you entered is incorrect.");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      loginOrEmail: "",
      password: "",
    },
    mode: "onBlur",
  });
  return (
    <MainContainer>
      <ImgContainer />
      <SignInContainer>
        <SignInForm>
          <SignInFormText>
            <Typography variant="h2">Welcome !</Typography>
            <Typography variant="h1">Sign in to </Typography>
            <Typography>to access the admin dashboard </Typography>
          </SignInFormText>

          {passError && (
            <AlertMessage
              severity="error"
              sx={{
                ...theme.palette.error,
              }}
            >
              {passError}
            </AlertMessage>
          )}

          <SignInFormInputs>
            <TextField
              label="Enter your Email"
              fullWidth
              error={Boolean(errors.loginOrEmail)}
              helperText={errors.loginOrEmail && errors.loginOrEmail.message}
              {...register("loginOrEmail", { required: "Required" })}
            />
            <FormControl fullWidth variant="outlined">
              <InputLabel
                htmlFor="outlined-adornment-password"
                error={Boolean(errors.password)}
                {...register("password", { required: "Required" })}
              >
                Enter your Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                error={Boolean(errors.password)}
                {...register("password", { required: "Required" })}
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
            <Button
              fullWidth
              variant="contained"
              sx={{
                ...theme.palette.buttonDark,
              }}
              disabled={!isValid}
              onClick={handleSubmit(handleLogin)}
            >
              Sign In
            </Button>
          </SignInFormInputs>
        </SignInForm>
      </SignInContainer>
    </MainContainer>
  );
}
export default LogInPage;
