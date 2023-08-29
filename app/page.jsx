import Image from "next/image";
import Link from "next/link";
import Pickup from "./pickup";
import Main from "./main";
import Ranking from "./ranking";

export default function Home() {
  return (
    <main>
      <header>
        <div className="w-11/12 mx-auto py-5">
          <Image width={150} height={50} src="/logo.svg"></Image>
        </div>
        <div className="bg-gray-800">
          <ul className="w-11/12 py-4 mx-auto text-white flex justify-between">
            <li>NEW</li>
            <li>COLUMN</li>
            <li>SERIES</li>
            <li>Q&A</li>
            <li className="hidden">CONTACT</li>
          </ul>
        </div>
      </header>
      <div className="w-11/12 mx-auto lg:flex lg:justify-between pb-20">
        <Pickup
          img="/pickup1.jpg"
          title="タイトルテキストテキストテキストテキストテキストテキストテキスト"
        ></Pickup>
        <Pickup
          img="/pickup2.jpg"
          title="タイトルテキストテキストテキストテキストテキストテキストテキスト"
        ></Pickup>
        <Pickup
          img="/pickup3.jpg"
          title="タイトルテキストテキストテキストテキストテキストテキストテキスト"
        ></Pickup>
      </div>
      <div className="w-11/12 mx-auto">
        <div>
          <Main
            title="タイトルテキストテキストテキストテキストテキスト"
            date="2020/01/01"
            category="カテゴリ1"
            img="/main1.jpg"
            text="本文テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          ></Main>
          <Main
            title="タイトルテキストテキストテキストテキストテキスト"
            date="2020/01/01"
            category="カテゴリ1"
            img="/main2.jpg"
            text="本文テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          ></Main>
          <Main
            title="タイトルテキストテキストテキストテキストテキスト"
            date="2020/01/01"
            category="カテゴリ1"
            img="/main3.jpg"
            text="本文テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          ></Main>
          <Main
            title="タイトルテキストテキストテキストテキストテキスト"
            date="2020/01/01"
            category="カテゴリ1"
            img="/main4.jpg"
            text="本文テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          ></Main>
        </div>
      </div>
      <div className="w-11/12 mx-auto pb-20">
        <Image
          className="mx-auto rounded-full mb-10"
          width={100}
          height={100}
          src="/author.jpg"
        ></Image>
        <h2 className="text-center text-xl font-bold pb-10">Name Name</h2>
        <p>
          プロフィールテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
      <div className="w-11/12 mx-auto">
        <h2 className="text-center text-xl font-bold pb-10">Ranking</h2>
        <Ranking
          img="/ranking1.jpg"
          title="タイトルテキストテキストテキストテキストテキストテキスト"
        ></Ranking>
        <Ranking
          img="/ranking2.jpg"
          title="タイトルテキストテキストテキストテキストテキストテキスト"
        ></Ranking>
        <Ranking
          img="/ranking3.jpg"
          title="タイトルテキストテキストテキストテキストテキストテキスト"
        ></Ranking>
      </div>
      <div className="w-11/12 mx-auto pb-32">
        <h2 className="text-center text-xl font-bold pb-10">Archive</h2>
        <table className="w-full">
          <tr className="border-y border-black">
            <td className="p-5">XXXX年XX月(XX)</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-5">XXXX年XX月(XX)</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-5">XXXX年XX月(XX)</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-5">XXXX年XX月(XX)</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-5">XXXX年XX月(XX)</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-5">XXXX年XX月(XX)</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-5">XXXX年XX月(XX)</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-5">XXXX年XX月(XX)</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-5">XXXX年XX月(XX)</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-5">XXXX年XX月(XX)</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-5">XXXX年XX月(XX)</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-5">XXXX年XX月(XX)</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-5">XXXX年XX月(XX)</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-5">XXXX年XX月(XX)</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-5">XXXX年XX月(XX)</td>
          </tr>
        </table>
      </div>
      <div className=" bg-gray-50">
        <div className="w-11/12 mx-auto pb-16">
          <h2 className="pt-20 text-2xl font-bold pb-12">About</h2>
          <p className="pb-8">
            テキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキスト
          </p>
          <Link className="block" href="#">
            ▶︎プロフィール詳細
          </Link>
          <Link className="block" href="#">
            ▶︎お仕事の依頼
          </Link>
          <Link className="block" href="#">
            ▶︎お問い合わせ
          </Link>
        </div>
        <div className="w-11/12 mx-auto pb-10">
          <h2 className="text-2xl font-bold pb-8">Menu</h2>
          <table className="w-full">
            <tr className="border-y border-black">
              <td className="p-5">NEW</td>
            </tr>
            <tr className="border-b border-black">
              <td className="p-5">CATEGORY</td>
            </tr>
            <tr className="border-b border-black">
              <td className="p-5">COLUMN</td>
            </tr>
            <tr className="border-b border-black">
              <td className="p-5">SERIES</td>
            </tr>
            <tr className="border-b border-black">
              <td className="p-5">Q&A</td>
            </tr>
          </table>
        </div>
        <div className="w-11/12 mx-auto pb-36">
          <h2 className="text-2xl font-bold pb-12">Twitter</h2>
          <a
            className="twitter-timeline"
            height="500"
            href="https://twitter.com/XcorpJP?ref_src=twsrc%5Etfw"
          >
            Tweets by XcorpJP
          </a>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
        <p className="text-center">&copy; Travel & Blog</p>
      </div>
    </main>
  );
}
