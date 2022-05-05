import React, { Fragment } from "react";
import Head  from "next/head";
import Posts from "../../components/posts/posts";
import { getAllPosts } from "../../lib/api-util";
import styles from '../../styles/posts.module.css'

const AllPosts = (props) => {
  
  const parsedPost = JSON.parse(props.posts)
  return (
    <Fragment>
      <Head>
        <title>All My blogs</title>
        <meta name='description' content='all my blog posts about web technologies and javascript frameworks'/>
      </Head>
      <section className={styles['featured-posts-container']}>
        <Posts posts={parsedPost}/>
      </section>
    </Fragment>
  );
};

export default AllPosts;


export function getStaticProps(){

  const posts = getAllPosts();
  const stringifiedPosts = JSON.stringify(posts);

  return {
    props:{
      posts:stringifiedPosts,
    }
  }
}