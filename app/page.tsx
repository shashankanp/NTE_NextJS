import Image from "next/image";
import Logo from "../public/nteLogo.png";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center w-full pt-20">
        <Image src={Logo} alt="NotTheEnd" width={400} />
      </div>
      <p className="flex justify-center font-bold text-[#314974] mt-5 mb-20 text-7xl">
        NOT THE END
      </p>
      <p className="flex justify-center font-bold text-[#314974] mt-5 mb-4 text-[45px]">
        Our Mission
      </p>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-full h-1 my-8 bg-[#d5d1d0] border-0 rounded " />
        <div className="absolute px-4 -translate-x-1/2 bg-[#fff1ed] left-1/2 text-2xl  ">
          <p className="opacity-40">༺❤️༻</p>
        </div>
      </div>
      <p className="flex text-center md:px-80 md:pb-20 justify-center text-3xl font-bold text-[#314974] mt-5 mb-4">
        To stimulate conversation around mental health and suicide through peer
        to peer connection and communication{" "}
      </p>
    </div>
  );
}
