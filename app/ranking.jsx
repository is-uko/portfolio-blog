import Image from "next/image";
import Link from "next/link";

export default function Ranking({img, title}) {
    return (
      <div className="pb-10">
        <Image
          className="w-full pb-5"
          width={500}
          height={500}
          src={img}
        ></Image>
        <p>{title}</p>
      </div>
    );
}