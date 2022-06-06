import {useEffect, useState} from 'react'
import {Container, Typography, Grow, Grid, AppBar} from '@material-ui/core';
import {useDispatch} from 'react-redux';

import useStyles from './styles';
import memories from './images/memories.png';
import Posts from '~/components/Posts';
import Form from '~/components/Form';

import {getPosts} from './redux/actions';


function App() {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60"/>
            </AppBar>

            <Grow in={true}>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} md={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
