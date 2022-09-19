import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import Alert from '@mui/material/Alert';
import { getUserDetailsService, updateUserDetailsService } from '../../Services/profileAPI';

const initialData = {
    contact: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    gender: ""
}
const Profile = () => {
    const [data, setData] = useState(initialData);
    const [editMode, setEditMode] = useState(false);
    const userDetails = useSelector(state => state?.login?.userDetails);
    const userId = userDetails?.id;

    useEffect(() => {
        getUserDetailsService(userId).then(res => {
            setData(res?.data)
        })
    }, []);

    const onChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    const onUpdate = () => {
        updateUserDetailsService(userId, data);
        setEditMode(false);
    }

    return (
        <div>
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
                    {/* {message &&
                            <Alert severity="success">Updated User Details Sucessfully.</Alert>
                        } */}
                    <Grid item xs="6">
                        <Typography variant="h6" component="h6">
                            Profile
                        </Typography>
                    </Grid>
                    <Grid item xs="6">
                        {editMode ?
                            <Button variant="contained" onClick={onUpdate}>Update</Button> :
                            <Button variant="contained" onClick={() => setEditMode(true)}>Edit</Button>
                        }
                    </Grid>
                    <Grid item xs="6">
                        <TextField
                            required
                            fullWidth
                            id="outlined-basic"
                            label="First Name"
                            variant="outlined"
                            name="firstName"
                            onChange={onChange}
                            value={data.firstName}
                            disabled={!editMode}
                        />
                    </Grid>
                    <Grid item xs="6">
                        <TextField name="middleName" onChange={onChange} required disabled={!editMode} fullWidth id="outlined-basic" label="Middle Name" variant="outlined" value={data.middleName} />
                    </Grid>
                    <Grid item xs="6">
                        <TextField name="lastName" onChange={onChange} required fullWidth disabled={!editMode} id="outlined-basic" label="Last Name" variant="outlined" value={data.lastName} />
                    </Grid>
                    <Grid item xs="6">
                        <TextField name="email" onChange={onChange} required fullWidth disabled id="outlined-basic" label="Email" variant="outlined" value={data.email} />
                    </Grid>
                    <Grid item xs="6">
                        <TextField name="password" onChange={onChange} required type="password" disabled={!editMode} fullWidth id="outlined-basic" label="Password" variant="outlined" value={data.password} />
                    </Grid>
                    <Grid item xs="6">
                        <TextField name="contact" onChange={onChange} required fullWidth disabled={!editMode} id="outlined-basic" label="Contact" variant="outlined" value={data.contact} />
                    </Grid>
                    <Grid item xs="12">
                        <FormControl required>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                row
                                onChange={onChange}
                                value={data.gender}
                                disabled={!editMode}
                                name="gender"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Profile;