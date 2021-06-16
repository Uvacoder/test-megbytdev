import Image from "next/image";

const Story = () => {
  return (
    <section className="container mx-auto" id="story">
      <div className="py-6 container mx-auto">
        <p className="text-4xl sm:text-5xl font-bold text-center underline">
          Our Story
        </p>
      </div>
      <div>
        <p className="text-base sm:text-lg text-center text-gray-600 font-medium sm:w-9/12 mx-auto px-2">
          It all started when three friends decided to build
          something that would be loved by all, and thus Tarana was
          conceptualized and lot of new developments are happening, with a
          vision to build something interesting for the world.
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          width={700}
          height={700}
          alt="Tarana app mockup"
          src={
            "https://cdn.statically.io/gh/afkcodes/megbytdev-web/main/public/story.svg"
          }
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default Story;
