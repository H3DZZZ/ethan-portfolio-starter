import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";
const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 py-4 max-h-[90px]">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              // src={"/logoMain.svg"}
              width={270}
              height={70}
              alt="logo"
              priority={true}
              className="max-h-[50px] max-w-[270px] object-cover"
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
