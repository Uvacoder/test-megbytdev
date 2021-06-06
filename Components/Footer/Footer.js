import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="bg-[#222831] text-white relative overflow-hidden"
      id="contacts"
    >
      <div className="absolute -left-40 -top-40 hidden sm:block">
        <Image
          className="sm:opacity-40"
          width={400}
          height={400}
          alt="Tarana app mockup"
          src={
            "https://cdn.statically.io/gh/afkcodes/megbytdev-web/main/public/footer-blob.svg"
          }
        />
      </div>
      <div className="absolute -right-40 -bottom-40 ">
        <Image
          className="opacity-30 sm:opacity-40"
          width={400}
          height={400}
          alt="Tarana app mockup"
          src={
            "https://cdn.statically.io/gh/afkcodes/megbytdev-web/main/public/footer-blob.svg"
          }
        />
      </div>
      <div
        className="flex  sm:h-80  container mx-auto flex-col sm:flex-row flex-
          wrap justify-evenly py-4 px-4"
      >
        <div className="h-full flex flex-1 justify-center mt-4 z-10">
          <div className="logo text-center">
            <Image
              src={
                "https://cdn.statically.io/gh/afkcodes/megbytdev-web/main/public/whiteLogo.png"
              }
              width={80}
              height={60}
              alt="Megabyt logo"
            />
            <div>
              <p className="text-sm">
                We build products that humans love. with a vision to build
                something interesting for the world.
              </p>
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col  flex-1 mt-4 items-start sm:items-center">
          <h2 className="underline">Contact Us</h2>
          <ul className="py-2 text-sm text-gray-400">
            <li className="py-2 hover:text-white">
              <a href="mailto:megabytdev@gmail.com" target="_blank">
                Email
              </a>
            </li>
            <li className="py-2 hover:text-white">
              <a href="https://wa.me/918051133661?text=Hello" target="_blank">
                Whatsapp
              </a>
            </li>
          </ul>
        </div>
        <div className="h-full flex-col flex flex-1 items-start sm:items-center mt-4">
          <h2 className="underline">Find us on</h2>
          <ul className="py-2 text-sm text-gray-400">
            <li className="py-2 hover:text-white">
              <a href="https://www.facebook.com/megabyt.dev/" target="_blank">
                Facebook
              </a>
            </li>
            <li className="py-2 hover:text-white">
              <a href="https://t.me/joinchat/GFqisABlUf74WTSI" target="_blank">
                Telegram
              </a>
            </li>
            <li className="py-2 hover:text-white">
              <a href="https://github.com/megabyt-dev" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className="h-full flex-col flex flex-1 items-start sm:items-center mt-4 z-10">
          <h2 className="underline">Quicklinks</h2>
          <ul className="py-2 text-sm text-gray-400">
            <li className="py-2 hover:text-white">
              <Link
                href="https://play.google.com/store/apps/details?id=dev.megabyt.taranaradio&hl=en_IN&gl=US"
                target="_blank"
              >
                Tarana Radio
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center container mx-auto">
        <div className="flex flex-row mb-2 ">&copy; Megabyt Innovations.</div>
      </div>
    </footer>
  );
};

export default Footer;
