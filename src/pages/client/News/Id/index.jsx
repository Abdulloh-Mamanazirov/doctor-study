import React from "react";
import { useParams } from "react-router-dom";

const index = () => {
  const { id } = useParams();

  return (
    <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto text-left lg:py-10 ">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg"
        alt="doctor-s news image"
        className="w-full h-[500px] object-cover"
      />
      <h1 className="text-2xl md:text-4xl font-bold text-primary-tite text-center mt-5">
        News title goes here. Hello world!
      </h1>
      <p className="text-lg text-center mt-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit dolorum
        reprehenderit tenetur nulla architecto aliquid, esse voluptas aut
        temporibus quae cumque placeat iusto quos laudantium voluptatibus
        voluptatem accusamus, ducimus quis. Excepturi ad sunt, dicta blanditiis
        porro culpa perspiciatis hic quisquam sint at modi itaque cum? Provident
        voluptatem necessitatibus quia officia.
      </p>
    </div>
  );
};

export default index;
