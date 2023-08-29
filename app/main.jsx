import Image from "next/image";
import Link from "next/link";

export default function Main({ title, date, category, img, text }) {
  return (
    <div className="pb-10">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex pb-5">
        <p className="pr-10">{date}</p>
        <p>{category}</p>
      </div>
      <Image className="w-full pb-5" width={500} height={500} src={img}></Image>
      <p className="w-5/6 mx-auto pb-10">{text}</p>
      <Link className="block text-center underline text-xl" href="#">
        READ MORE
      </Link>
    </div>
  );
}
