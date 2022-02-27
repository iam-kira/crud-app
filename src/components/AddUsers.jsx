import { FormControl, Input, Typography, FormGroup, InputLabel, Button, makeStyles } from "@material-ui/core";
import { addUser } from "../Service/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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


const initialValues = {
    name: '',
    usn: "",
    email: '',
    branch: ''
}





const AddUser = () => {
    const classes = useStyles();
    const [user, setUser] = useState(initialValues);
    const { name, usn, email, branch } = user;
    let history = useNavigate();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }

    const addUserDetails = async (users) => {
        await addUser( users);
        history.push('/all');

    }

    return (
        <FormGroup className={classes.form} >
            <Typography variant='h4' style={{ fontFamily: "monospace" }}> Add Students</Typography>
            <FormControl >
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} />
            </FormControl>
            <FormControl>
                <InputLabel>USN</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='usn' value={usn} />
            </FormControl>
            <FormControl>
                <InputLabel>Branch</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='branch' value={branch} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} />
            </FormControl>
            <Button variant="contained" onClick={(e) => addUserDetails()} className={classes.button} style={{ borderRadius: 10, width: 50, margin: "20px 0 0 38%" }}>Add</Button>
        </FormGroup>
    );
}
export default AddUser;