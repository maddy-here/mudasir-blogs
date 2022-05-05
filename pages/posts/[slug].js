import React, { Fragment } from "react";
import Head from 'next/head';
import PostContent from "../../components/posts/post-details/post-content";
import { getPostFiles, getPostData } from "../../lib/api-util";

const BlogPost = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt}/>
      </Head>
      <section className='container'>
          <PostContent post={props.post}/>
      </section>
    </Fragment>
  );
};

export function getStaticProps(context){
  const {params} = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props:{
        post: postData,
    }
  }
}

export function getStaticPaths(){

  const postFilenames = getPostFiles();
  const slugs = postFilenames.map(filename=>(filename.replace(/\.md$/, '')));

  const paths = slugs.map(slug=>({params:{slug:slug}}))


  return {
    paths: paths,
    fallback:false,
  }
}

export default BlogPost;
