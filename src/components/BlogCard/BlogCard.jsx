/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import placeholderImage from "../../assets/404.jpg";
import { MdOutlineDeleteForever } from "react-icons/md";
const BlogCard = ({ blog, deletable, handleDelete }) => {
    const { id, title, cover_image, published_at, description } = blog;
    return (
        <div className="flex relative">
            <div className="transition hover:scale-105 border-2 border-primary hover:border-secondary border-opacity-50 p-2">
                <Link
                    to={`/blog/${id}`}
                    className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50">
                    <img
                        role="presentation"
                        className="object-cover w-full rounded h-44 dark:bg-gray-500"
                        src={cover_image || placeholderImage}
                    />
                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                            {title}
                        </h3>
                        <span className="text-xs dark:text-gray-600">
                            {new Date(published_at).toLocaleDateString()}
                        </span>
                        <p>{description}</p>
                    </div>
                </Link>
            </div>

            {deletable && (
                <div onClick={()=> handleDelete(id)} className="absolute -top-5 -right-5 p-2 rounded-full bg-primary hover:bg-secondary group hover:scale-105 cursor-pointer">
                    <MdOutlineDeleteForever
                        size={20}
                        className="text-secondary group-hover:text-primary"
                    />
                </div>
            )}
        </div>
    );
};

export default BlogCard;
