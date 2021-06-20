import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <section className="bg-opacity-0 " id="products">
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
                "https://cdn.statically.io/gh/afkcodes/megbytdev-web/main/public/blackPhone.png"
              }
              placeholder="blur"
              blurDataURL={
                "https://cdn.statically.io/gh/afkcodes/megbytdev-web/main/public/blackPhone.png"
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
            <Link
              href="https://play.google.com/store/apps/details?id=dev.megabyt.taranaradio&hl=en_IN&gl=IN"
              target="_blank"
              rel="noopener noreferrer"
              placeholder="blur"
            >
              <Image
                className="cursor-pointer"
                width={265}
                height={74}
                alt="Tarana app mockup"
                src={
                  "https://cdn.statically.io/gh/afkcodes/megbytdev-web/main/public/playStore.svg"
                }
                placeholder="blur"
                blurDataURL={
                  "https://cdn.statically.io/gh/afkcodes/megbytdev-web/main/public/playStore.svg"
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
