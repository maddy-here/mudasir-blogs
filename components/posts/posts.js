import React from "react";
import PostItem from "./post-item";
import styles from './posts.module.css'


const Posts = (props) => {
    const {posts} =  props;

  return (
      <div className={styles['featured-posts-container']}>
          {posts.map((post,indx)=><PostItem posts={post} key={indx}/>)}
      </div>
      );
    };

export default Posts;
