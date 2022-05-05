import React from "react";
import PostHeader from "./post-header";
import styles from './post-content.module.css'
import  ReactMarkdown  from "react-markdown";
import Image from 'next/image'

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';

SyntaxHighlighter.registerLanguage('js', js);

const PostContent = (props) => {
  const {post} = props;

  const customRenderers = {
    paragraph: (paragraph)=>{
      const {node} = paragraph;
      if(node.children[0].type==='image'){
        const image = node.children[0];
        return (
          <div>
            <Image
              src={image.url}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }
      else return <p>{paragraph.children}</p>
    },

    code:(code)=>{
      const {language, children} = code;

      return (
        <SyntaxHighlighter 
          language={language} 
          style={atomDark}>
          {children}
        </SyntaxHighlighter>
      );
    },
    
  };

  return (<main className={`${styles['content-container']} container`} >
      <PostHeader post={post}/>

      <div className={styles['hr-line']}></div>

      <div className={styles['main-content-container']}>

        <ReactMarkdown 
          components={customRenderers}
          >
            {post.content}
        </ReactMarkdown>
      </div>
  </main>);
};

export default PostContent;
