import { Button } from "@mantine/core";
import React from "react";
import { useParams } from "react-router-dom";

const index = () => {
  const { id } = useParams();

  return (
    <div className="max-w-6xl px-4 py-4 mx-auto">
      <div className="text-left lg:py-10 grid md:grid-cols-2 gap-2">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg"
          alt="doctor-s news image"
          className="w-full"
        />
        <div>
          <h1 className="text-xl md:text-3xl font-bold text-primary-tite mt-5">
            Webinar title goes here. Hello world!
          </h1>
          <p className="text-md mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            dolorum reprehenderit tenetur nulla architecto aliquid, esse
            voluptas aut temporibus quae cumque placeat iusto quos laudantium
            voluptatibus voluptatem accusamus, ducimus quis. Excepturi ad sunt,
            dicta blanditiis porro culpa perspiciatis hic quisquam sint at modi
            itaque cum? Provident voluptatem necessitatibus quia officia.
          </p>
        </div>
      </div>
      <Button fullWidth size={"lg"}>
        Participate
      </Button>
    </div>
  );
};

export default index;
