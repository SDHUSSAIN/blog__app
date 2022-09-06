import React from 'react';
import Blog from '../../../pages/Blog'
import BlogItem from './BlogItem';
import './styles.css';

const BlogList = ({blogs}) => {
  return (
      <div className='bloglist__wrap' >
          {blogs.map((blog)=>(
            <BlogItem blog={blog} key={blog.id} />
          ))}
      </div>
  )
};

export default BlogList;
