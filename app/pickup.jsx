import Image from "next/image";
import Link from "next/link"

export default function Pickup({ img, title }) {
  return (
    <div className="pb-10">
      <Image
        className="w-full pb-5 lg:pr-1"
        width={500}
        height={500}
        src={img}
      ></Image>
      <h2 className="text-xl font-bold pb-5">{title}</h2>
      <Link className="block text-center underline text-xl" href="#">
        READ MORE
      </Link>
    </div>
  );
}
