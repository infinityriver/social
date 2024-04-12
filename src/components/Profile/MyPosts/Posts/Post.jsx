import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (

        <div className={s.item}>
            <img src='https://picwish.com/wp-content/uploads/2021/11/featured-image-edited.jpg'/>
            <span>{props.message}</span> <br />
            <span>{'Likes' + ' ' + props.likecount}</span>
        </div>

    );
}

export default Post;