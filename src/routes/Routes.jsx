import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Blogs from "../pages/Blogs/Blogs.jsx";
import MainLayout from "../Layout/MainLayout.jsx";
import Bookmarks from "../pages/Bookmarks/Bookmarks.jsx";
import Blog from "../pages/Blog/Blog.jsx";
import Content from "../components/Content/Content.jsx";
import Author from "../components/Author/Author.jsx";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                // tech-1
                // path: '/',
                // tech-2
                index: true,
                element: <Home />,
            },
            {
                path: "/blogs",
                element: <Blogs />,
                loader: () =>
                    fetch("https://dev.to/api/articles?per-page=20&top=20"),
            },
            {
                path: "/blog/:id",
                element: <Blog />,
                loader: ({ params }) =>
                    fetch(`https://dev.to/api/articles/${params.id}`),
                children: [
                    {
                        index: true,
                        element: <Content />,
                        loader: ({ params }) =>
                            fetch(`https://dev.to/api/articles/${params.id}`),
                    },
                    {
                        path: 'author',
                        element: <Author/>,
                        loader: ({ params }) =>
                            fetch(`https://dev.to/api/articles/${params.id}`),
                    },
                ],
            },
            {
                path: "/bookmarks",
                element: <Bookmarks />,
            },
        ],
    },
]);
