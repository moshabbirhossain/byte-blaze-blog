import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import EmptyState from "../../components/EmptyState/EmptyState";
import { deleteBlog, getBlogs } from "../../Utils/Index";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        const storeBlogs = getBlogs();
        setBlogs(storeBlogs);
    },[])

    const handleDelete = (id) =>{
        deleteBlog(id);
        const storeBlogs = getBlogs();
        setBlogs(storeBlogs);
    }
    if(blogs.length<1) return <EmptyState message={'No Bookmarks Available'} address={'/blogs'} label={'Go To Blogs'}/>
    return (
        <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
            {blogs.map((blog) => (
                <BlogCard handleDelete={handleDelete} deletable = {true} blog={blog} key={blog.id} />
            ))}
        </div>
    );
};

export default Bookmarks;
