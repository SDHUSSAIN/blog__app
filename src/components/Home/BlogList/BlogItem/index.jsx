import React from 'react';
import {Link} from 'react-router-dom';
import Chip from '../../../Common/Chip';
import './styles.css';

const BlogItem = ({blog:{id,description,title,createdAt,authorName,authorAvatar,category,cover}}) => {
  return(
      <div className="blogItem__wrap">
          <img src={cover} alt="cover" className='blogItem__cover' />
          <Chip label={category} />
          <h3>{title}</h3>
          <p className='blogItem__desc'>{description}</p>
          <footer>
            <div className='blogItem__author'>
              <img src={authorAvatar} alt="avatar" />
              <div>
                <h6>{authorName}</h6>
                <p>{createdAt}</p>
              </div>
              
            </div>
            <Link to={`/blog/${id}`} className='blogItem__link'><span>&#8594;</span></Link>
          </footer>
      </div>
  )
};

export default BlogItem;
