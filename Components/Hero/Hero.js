import Image from "next/image";

const Hero = () => {
  return (
    <section className=" bg-[#3F4CE0]  w-screen ">
      <div className=" container mx-auto md:bg-hero-pattern  text-white flex flex-col sm:flex-row justify-between items-center bg-no-repeat bg-contain">
        <div className="flex flex-col flex-1 items-center justify-center text-center py-10 ">
          <p className="text-4xl sm:text-6xl font-bold text-center">
            We build products <br /> that humans love.
          </p>
          <button
            className="flex py-2 my-6 px-4 bg-white text-black font-semibold rounded-full shadow-md
               transform transition sm:motion-safe:hover:scale-110 duration-500 focus:outline-none"
          >
            Explore Now
          </button>
        </div>
        <div className="bg-phone-svg bg-no-repeat bg-contain flex flex-1 items-center justify-start text-center">
          <Image
            className="animate-float"
            width="700"
            height="700"
            alt="Tarana app mockup"
            src={
              "https://cdn.statically.io/gh/afkcodes/megbytdev-web/main/assets/mockupTarana.png"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
