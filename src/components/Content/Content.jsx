import { useLoaderData } from "react-router-dom";
import placeholderImage from "../../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    const { title, cover_image, tags, body_html, url } = blog;
    return (
        <div className="mx-auto group border border-opacity-30 p-2 hover:no-underline focus:no-underline">
            <img
                role="presentation"
                className="object-cover w-full rounded h-44 "
                src={cover_image || placeholderImage}
            />
            <div>
                <div className="flex flex-wrap py-6 gap-2 border-t  dark:border-gray-600">
                    {tags.map((tag) => (
                        <a
                            key={tag}
                            rel="noopener noreferrer"
                            href="#"
                            className="px-3 py-1 rounded-sm hover:underline dark:bg-default-600 dark:text-gray-50">
                            #{tag}
                        </a>
                    ))}
                </div>
            </div>
            <a href={url} target="_blank" className="space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {title}
                </h3>
                <Markdown
                    rehypePlugins={[rehypeRaw]}
                    className="overflow-x-hidden">
                    {body_html}
                </Markdown>
            </a>
        </div>
    );
};

export default Content;
