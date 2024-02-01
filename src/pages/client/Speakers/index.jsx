import React from "react";

const SpeakerCard = ({ id, image, name, job, desc }) => {
  return (
    <div className="grid grid-cols-1 mb-6 md:grid-cols-[40%,1fr] place-items-center gap-2">
      <div>
        <img
          src={
            image ??
            "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg"
          }
          alt="doctor study speaker image"
          className="object-cover aspect-square rounded-full h-64 max-h-64"
        />
      </div>
      <div className="px-4 py-4 lg:px-2 ">
        <h3 className="text-xl md:text-2xl font-medium text-gray-600 mb-2">
          {name}
        </h3>
        <p className="text-base md:text-lg text-gray-700">{job}</p>
        <div className="w-24 pb-1 mb-4 border-b border-gray-600"></div>
        <p className="mb-4 text-sm md:text-base text-gray-500 line-clamp-3">
          {desc}
        </p>
      </div>
    </div>
  );
};

const index = () => {
  return (
    <section className="flex items-center py-5 lg:py-10">
      <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto text-left lg:py-10 ">
        <div className="mb-10 text-center">
          <h1 className="text-2xl md:text-4xl text-primary-tite font-bold capitalize">
            Portal Speakers
          </h1>
        </div>
        {new Array(5).fill(null).map((_, ind) => (
          <SpeakerCard
            key={ind}
            name={"John Doe " + ind}
            job={"Neurolog "}
            desc={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ab repellendus sapiente odio excepturi aliquid voluptas amet tempora ea exercitationem sit autem quo impedit necessitatibus, fugiat sequi molestias beatae veniam."
            }
          />
        ))}
      </div>
    </section>
  );
};

export default index;
