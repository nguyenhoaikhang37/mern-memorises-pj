import {fetchPosts, createPost, updatePost, deletePost} from '~/apis';

export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await fetchPosts();

        dispatch({type: 'FETCH_ALL', payload: data.posts});
    } catch (error) {
        console.log(error.message);
    }
};

export const createPostAction = (newPost) => async (dispatch) => {
    try {
        const {data} = await createPost(newPost);

        dispatch({type: 'CREATE', payload: data.post});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePostAction = (postId, updatedPost) => async (dispatch) => {
    try {
        const {data} = await updatePost(postId, updatedPost);

        dispatch({type: 'UPDATE', payload: data.post});
    } catch (error) {
        console.log(error.message);
    }
}
export const deletePostAction = (postId) => async (dispatch) => {
    try {
        await deletePost(postId);

        dispatch({type: 'DELETE', payload: postId});
    } catch (error) {
        console.log(error.message);
    }
}