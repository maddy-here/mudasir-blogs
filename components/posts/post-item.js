import React from "react";
import Image from 'next/image'
import Link from 'next/link'

import styles from './post-item.module.css'

const PostItem = (props) => {

    const {title, date, slug, excerpt, image} = props.posts;

    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;
    const formattedDate = new Date(date).toLocaleDateString('en-PK',{
        year:'numeric',
        month:'long',
        day:'numeric'
    })

  return (
    <div className={styles['post-item-container']}>
        <Link href={linkPath}>
            <a>
                <div className={styles['post-item-image-container']}>
                    <Image src={imagePath} alt={title} width={300} height={200} layout='responsive' />
                </div>
                <div className={styles['post-item-desc-container']}>
                    <h3>{title}</h3>
                    <p className={styles['post-item-date']}>{formattedDate}</p>
                    <p className={styles['post-item-desc-text']}>{excerpt}</p>
                </div>
            </a>
        </Link>
    </div>
  );
};

export default PostItem;
