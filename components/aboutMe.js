import React from "react";
import styles from './aboutMe.module.css'
import Image from 'next/image'

const  Introduction = () => {
  return (
      <div className={styles.introduction}>
              <Image className={styles['profile-image']} src='/images/profile.jpg' alt="profile" width={240} height={240} />
        <h1>
            Hi! i&apos;m Mudasir
        </h1>
        <p>
            i blog about web technologies and popular javascript frameworks like react and next js.
        </p>
      </div>
  );
};

export default Introduction;
