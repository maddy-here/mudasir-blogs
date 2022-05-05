import React from "react";
import styles from './navigation.module.css'
import Link from 'next/link';

const Navigation = () => {
  return (
      <nav className={styles['nav-bar']}>
          <Link href='/'>
            <a>
                <h1 className={styles['logo-text']}>M. Blogs</h1>
            </a>
          </Link>
            <div className={styles.navigations}>
                <Link href='/posts'>
                    <a>
                        posts
                    </a>
                </Link>

                <Link href='/contact'>
                    <a>
                        contact
                    </a>
                </Link>
            </div>
      </nav>
  );
};

export default Navigation;
