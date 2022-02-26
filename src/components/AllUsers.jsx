import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../Service/api";
import { Table, Button, TableBody, TableCell, TableRow, TableHead, makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom'



const useStyles = makeStyles({
    bg: {
        backgroundColor: '-moz - radial - gradient(circle at 50 % 50 %, rgba(0, 0, 0, 1) 50 %, rgba(255, 255, 255, 1) 100 %)',
    },
    table: {
        width: '90%',
        color: 'black',
        margin: "50px",
        borderRadius: '10px!important'


    },
    head: {
        '& > *': {
            backgroundColor: "black",
            color: "lime",
            fontSize: 18,
            fontFamily: "serif",
            textAlign: 'center',
            fontWeight: 'bold',

        }

    },
    row: {
        '& > *': {
            backgroundColor: "grey",
            fontFamily: "monospace",
            textAlign: 'center',
            color: '#ffffff',
            fontWeight: "bold"
        }

    }
})


const AllUsers = () => {
    const classes = useStyles();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }
    return (
        <div className={classes.bg}>
            <Table className={classes.table}>
                <TableHead >
                    <TableRow className={classes.head}>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>USN</TableCell>
                        <TableCell>Branch</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Functions</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody >
                    {users.map((user) => (
                        <TableRow className={classes.row}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.usn}</TableCell>
                            <TableCell>{user.branch}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" style={{ marginRight: 10 }} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Delete</Button>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
export default AllUsers;