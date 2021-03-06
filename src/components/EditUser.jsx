import { FormControl, Input, Typography, FormGroup, InputLabel, Button, makeStyles } from "@material-ui/core";
import { useParams, useNavigate } from "react-router-dom";
import { getUsers, editUser } from "../Service/api";
import { useEffect, useState } from "react";



const initialValues = {
    name: '',
    usn: "",
    email: '',
    branch: ''
}


const useStyles = makeStyles({
    form: {
        background: "grey",
        margin: "5% 0 0 18%",
        padding: "10px 20px 30px 20px",
        width: "60%",
        color: "white",
        '& > *': {
            marginTop: "20px"
        }


    },
    button: {
        backgroundColor: "black",
        color: "white"
    }

})






const EditUser = () => {
    const classes = useStyles();
    // const { id } = useParams();
    let history = useNavigate();
    const [user, setUser] = useState(initialValues);
    const { name, usn, email, branch } = user;


    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = async () => {
        const response = await getUsers(usn);
        setUser(response);
    }


    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const editUserDetails = async () => {
        await editUser(user);
        history.push('./all');
    }
    return (
        
            <FormGroup className={classes.form} >
                <Typography variant='h4' style={{ fontFamily: "monospace" }}> Edit Students</Typography>
                <FormControl >
                    <InputLabel >Name </InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='name' value={user.name} />
                </FormControl>
                <FormControl>
                    <InputLabel >USN </InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='usn' value={user.usn} />
                </FormControl>
                <FormControl>
                    <InputLabel >Branch </InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='branch' value={user.branch} />
                </FormControl>
                <FormControl>
                    <InputLabel >Email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='email' value={user.email} />
                </FormControl>
                <Button variant="contained" onClick={(e) => editUserDetails()} className={classes.button} style={{ borderRadius: 10, width: 50, margin: "20px 0 0 38%" }}>Upload</Button>
            </FormGroup>
        );

}
export default EditUser;