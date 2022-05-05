import React from "react";
import Image from 'next/image'
import styles from './post-header.module.css';

const PostHeader = (props) => {
    const {title, image, slug} = props.post;
    const imagePath = `/images/posts/${slug}/${image}`

  return <header className="container">
      <div className={styles['content-wrapper']}>
          <h1>{title}</h1>
          <Image src={imagePath} alt={title} width={300} height={250} className={styles.image}/>
      </div>
  </header>;
};

export default PostHeader;
