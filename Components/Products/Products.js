import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <section className="bg-opacity-0">
      <div className="py-6 container mx-auto">
        <p className="text-4xl sm:text-5xl font-bold text-center underline">
          Our Products
        </p>
      </div>
      <div>
        <div className="container mx-auto flex flex-1 flex-col sm:flex-row justify-between items-center bg-no-repeat bg-contain bg">
          <div className="flex items-center justify-start text-center">
            <Image
              width={700}
              height={700}
              alt="Tarana app mockup"
              src={
                "https://cdn.statically.io/gh/afkcodes/megbytdev-web/main/assets/mockupTarana.png"
              }
            />
          </div>
          <div className="flex flex-col sm:flex-1 items-center justify-evenly text-center h-96 ">
            <p className="text-4xl sm:text-6xl font-bold text-center">Tarana</p>
            <p className="text-base sm:text-lg text-center text-gray-600 font-medium px-2">
              Tarana is an online Radio Player launched in 2020, where you can
              listen to more than 40000+ radio stations from across the globe
              right on your mobile device.
            </p>
            <Link href="#">
              <Image
                className="cursor-pointer"
                width={265}
                height={74}
                alt="Tarana app mockup"
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/320px-Google_Play_Store_badge_EN.svg.png"
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
