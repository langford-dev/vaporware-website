import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.webp";

const Logo = () => {
  return (
    <>
      <Link href="/" passHref>
        <div className="w-[80px]">
          <Image src={logo} alt="vapourware_logo" />
        </div>
      </Link>
    </>
  );
};

export default Logo;
