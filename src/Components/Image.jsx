const Image = ({ imgSrc }) => {
    return (
        <div className=" w-[100px] p-2 m-4  lg:w-[140px] text-center">
            <div className=" w-[140px] h-[180px] mx-auto">
                <img src={imgSrc} alt="" className="object-cover w-full h-full" />
            </div>
        </div>
    );
};

export default Image;
