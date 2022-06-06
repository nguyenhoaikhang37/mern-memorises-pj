import React from 'react';
import {Grid, CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';

import Post from './Post';
import useStyles from './styles';

const Posts = ({setCurrentId}) => {
    const data = useSelector((state) => state.posts);
    const classes = useStyles();

    return (
        !data.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {data.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6} md={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default Posts;