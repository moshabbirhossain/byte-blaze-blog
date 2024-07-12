import { BeatLoader } from "react-spinners";
const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
            <BeatLoader size={50} color="#F92FD3"></BeatLoader>
        </div>
    );
};

export default Loader;