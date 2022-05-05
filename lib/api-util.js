import matter from "gray-matter";
import path from 'path'
import fs from 'fs'


const postDirectory = path.join(process.cwd(), 'posts')

export function getPostData(fileName){

    
    const postSlug = fileName.replace(/\.md$/, '')
    const filePath = path.join(postDirectory, `${postSlug}.md`);

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const {data, content} = matter(fileContent);

    const postData = {
        slug:postSlug,
        ...data,
        content,
    };

    return postData
}

export function getPostFiles (){
    return fs.readdirSync(postDirectory)
}

export function getAllPosts(){
    const postFiles = getPostFiles();

    const allPosts = postFiles.map(file=>{
        return getPostData(file)
    })
    const sortedPosts = allPosts.sort((a,b)=> a.date > b.date ? -1 : 1)
    
    return sortedPosts
}

export function getFeaturedPosts(){
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(post=>post.isFeatured===1)
    return featuredPosts;
}