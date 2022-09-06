import React,{useState,useEffect} from 'react';
import './styles.css';
import { Link, useParams } from 'react-router-dom';
import Chip from '../../components/Common/Chip';
import EmptyList from '../../components/Common/EmptyList';
import { blogList } from '../../config/data';

const Blog = () => {
  const {id} = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(()=>{
    let blog = blogList.find(blog=>blog.id===parseInt(id))
    if(blog){
      setBlog(blog);
    }
  },[])
  
  return (<div>
            <Link to="/" ><span>&#8592;</span>Go Back</Link>
            {
              blog ? (
                      <div className="blog__wrap">
                          <header>
                            <p className='blog__date' >Published {blog.createdAt}</p>
                            <h1>{blog.title}</h1>
                            <div className="blog__subCategory">
                              {blog.subCategory.map((category,index)=><div><Chip key={index} label={category} /></div>)}
                            </div>
                          </header>
                          <img src={blog.cover} alt='cover'/>
                          <p className='blog__desc'>{blog.description}</p>
                      </div>) : (<EmptyList/>)
            }
         </div>)
}

export default Blog;
