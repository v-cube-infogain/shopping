import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import Alert from '@mui/material/Alert';
import {
    updateFirstName, updateMiddleName, updateLastName, updateEmail,
    updateContact, updatePassword, updateGender
} from '../../Redux/registartionSlice';
import { registartionService } from '../../Services/registartionAPI';

const Registartion = () => {
    const [ message, setMessage ] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector(state => state.registartion);
    const { firstName, lastName, middleName, email, contact, password, gender } = data;

    const regClick = () => {
        setMessage(false);
        registartionService(data).then(res => {
            console.log("success", res);
            setMessage(true);
        }).catch(error => {
            console.log("error", error);
        })
    }

    const backClick = () => {
        navigate("/login")
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
                {message &&
                    <Alert severity="success">User registered Sucessfully.</Alert>
                }                
                <Grid item xs="12">
                    <Typography variant="h6" component="h6">
                        Registartion
                    </Typography>
                </Grid>
                <Grid item xs="6">
                    <TextField 
                        required 
                        fullWidth 
                        id="outlined-basic" 
                        label="First Name" 
                        variant="outlined" 
                        onChange={e => dispatch(updateFirstName(e.target.value))}
                        value={firstName}
                    />
                </Grid>
                <Grid item xs="6">
                    <TextField required fullWidth id="outlined-basic" label="Middle Name" variant="outlined"  onChange={e => dispatch(updateMiddleName(e.target.value))} value={middleName} />
                </Grid>
                <Grid item xs="6">
                    <TextField required fullWidth id="outlined-basic" label="Last Name" variant="outlined" onChange={e => dispatch(updateLastName(e.target.value))} value={lastName} />
                </Grid>
                <Grid item xs="6">
                    <TextField required fullWidth id="outlined-basic" label="Email" variant="outlined" onChange={e => dispatch(updateEmail(e.target.value))} value={email} />
                </Grid>
                <Grid item xs="6">
                    <TextField required type="password" fullWidth id="outlined-basic" label="Password" variant="outlined" onChange={e => dispatch(updatePassword(e.target.value))} value={password} />
                </Grid>
                <Grid item xs="6">
                    <TextField required fullWidth id="outlined-basic" label="Contact" variant="outlined" onChange={e => dispatch(updateContact(e.target.value))} value={contact} />
                </Grid>                
                <Grid item xs="12">
                    <FormControl required>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            row
                            onChange={e => dispatch(updateGender(e.target.value))}
                            value={gender}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs="6">
                    <Button fullWidth variant="contained" onClick={regClick}>Registartion</Button>
                </Grid>
                <Grid item xs="6">
                    <Button fullWidth variant="contained" onClick={backClick}>Back to Login</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Registartion;
