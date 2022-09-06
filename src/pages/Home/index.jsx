import React,{useState} from 'react';
import EmptyList from '../../components/Common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/data';

const Home = () => {
    const [blogs ,setBlogs] = useState(blogList);
    const[searchKey,setSearchKey] = useState("");

    // Search Submit
    const handleSearchSubmit=(event)=>{
        event.preventDefault();
        handleSearchResults();
    }
    const handleSearchResults=()=>{
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter((blog)=>blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
        setBlogs(filteredBlogs);
    }
    const handleClearSearch = ()=>{
        setBlogs(blogList);
        setSearchKey('');
    }

  return <div>
      {/* page header */}
      <Header/>
      {/* Search Bar */}
      <SearchBar value={searchKey} formSubmit={handleSearchSubmit} clearSearch={handleClearSearch} handleSearchKey={e=>setSearchKey(e.target.value)}/>
      {/* blog list and Empty list */}
      {!blogs.length ? <EmptyList/> : <BlogList blogs={blogs} />}

  </div>;
};

export default Home;
