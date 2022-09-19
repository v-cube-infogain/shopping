import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { updateEmail, updatePassword, updateUserDetails } from '../../Redux/loginSlice';
import { loginService } from '../../Services/loginAPI';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector(state => state.login);
    console.log(data);
    const { email, password } = data;

    const onLoginClick = () => {
        loginService({ email, password }).then(res => {
            dispatch(updateUserDetails(res.data));
            navigate("/dashboard");
        })
    }

    const onRegClick = () => {
        navigate("/registration");
    }

    return (
        <Box
            sx={{
                width: 600,
                border: "1px solid #ccc",
                padding: "24px",
                marginLeft: "30%",
                marginTop: "5%"
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs="12">
                    <Typography variant="h6" component="h6">
                        Login
                    </Typography>
                </Grid>
                <Grid item xs="12">
                    <TextField required fullWidth id="outlined-basic" label="Email" variant="outlined" onChange={e => dispatch(updateEmail(e.target.value))} />
                </Grid>
                <Grid item xs="12">
                    <TextField required type="password" fullWidth id="outlined-basic" label="Password" variant="outlined" onChange={e => dispatch(updatePassword(e.target.value))} />
                </Grid>
                <Grid item xs="6">
                    <Button fullWidth variant="contained" onClick={onLoginClick}>Login</Button>                    
                </Grid>
                <Grid item xs="6">
                    <Button fullWidth variant="contained" onClick={onRegClick}>Create Account</Button>                    
                </Grid>
            </Grid>
        </Box>
    );
}

export default Login;
