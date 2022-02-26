import React from 'react'
import { AppBar, Toolbar, makeStyles } from '@material-ui/core'
import { NavLink, Link, Routes, Route } from 'react-router-dom'






const useStyles = makeStyles({
    header: {
        background: 'black'
    },
    tabs: {
        color: "white",
        textDecoration: 'none',
        marginRight: '20px',

    }
})



const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <Link className={classes.tabs} to="./"> College Data</Link>
                <Link className={classes.tabs} to="all">Student Lists</Link>
                <Link className={classes.tabs} to="add"> Add User</Link>
                {/* <NavLink className={classes.tabs} to='./' exact> College Data</NavLink>
                <NavLink className={classes.tabs} to='lists' exact> Student Lists</NavLink>
                <NavLink className={classes.tabs} to='add' exact> Add User</NavLink> */}

            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
