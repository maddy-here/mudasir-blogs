import { Fragment } from 'react';
import Head from 'next/head';
import Introduction from '../components/aboutMe';
import Posts from '../components/posts/posts';
import { getFeaturedPosts } from '../lib/api-util';
import styles from '../styles/Home.module.css';


export default function Home(props) {
  const parsedPost = JSON.parse(props.posts)
  return (
      <Fragment>
        <Head>
          <title>Mudasir&#39;s Blogs</title>
          <meta name='description' content='Welcome to mudasir blogs, here i talk about web technologies and latest trends in web technology' />  
        </Head>    
        <div className='container'>
        <Introduction />
        <hr className={styles['h-line']}/>
        <h3 className={styles['section-heading']}>Featured Posts</h3>
        <Posts posts={parsedPost}/>

        </div>
      </Fragment>
  )
}


export function getStaticProps(){

  const featuredPosts = getFeaturedPosts();
  const posts = JSON.stringify(featuredPosts);
  return {
    props:{
      posts,
    }
  }
}