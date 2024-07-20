import Image from "next/image";

const Logo = () => {
  return <Image src={"/logo.svg"} alt="logo" width={130} height={100} />;
};

export default Logo;
