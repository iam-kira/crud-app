import { Box, makeStyles } from '@material-ui/core';

const styles = makeStyles({
    tabs: {
        fontFamily: 'mono',
        color: 'white',
        background: "grey",
        // backgroundColor: 'radial - gradient(circle at 50 % 50 %, rgba(0, 0, 0, 1) 50 %, rgba(255, 255, 255, 1) 100 %)',
        margin: "20px 20px 20px 20px",
        padding: "20px 20px 20px 20px"

    }
})





const StudentData = () => {
    const classes = styles();
    return (
        <Box className={classes.tabs}>
            <h1 >Hey, Buddy</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid deleniti praesentium error est nesciunt pariatur recusandae doloremque incidunt aliquam rem, sed repudiandae qui nobis vero minima, distinctio commodi. Dolore obcaecati quas voluptas illo! Quia veritatis blanditiis ad, pariatur id ex rerum dignissimos cum architecto, ut ducimus officiis quae exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maxime itaque corporis quasi beatae rerum,
                minima odio non totam iure alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, eius, obcaecati labore reiciendis ipsa illum aliquid odit praesentium officiis laboriosam perspiciatis architecto quis qui, exercitationem ad iste dicta id nam. Aspernatur omnis excepturi quae ipsa, obcaecati voluptatum perspiciatis ipsum rerum odio porro quaerat laborum deserunt magni est! Repudiandae, illo porro.</p>
            <p>
                {'Nice to meet you !  See yeaa :)'}</p>
        </Box>
    );
}


export default StudentData