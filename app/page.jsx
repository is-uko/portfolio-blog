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
          <ul className="w-11/12 py-4 mx-auto text-white flex justify-between mb-10">
            <li>
              <Link href="#">NEW</Link>
            </li>
            <li>
              <Link href="#">COLUMN</Link>
            </li>
            <li>
              <Link href="#">SERIES</Link>
            </li>
            <li>
              <Link href="#">Q&A</Link>
            </li>
            <li className="hidden lg:block">
              <Link href="#">CONTACT</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="w-11/12 mx-auto lg:flex lg:justify-between lg:gap-2 pb-20">
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
      <div className="w-11/12 mx-auto lg:flex lg:justify-between lg:gap-2">
        <div className="lg:w-2/3">
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
        <div className="lg:w-1/3">
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
                <td className="p-5">
                  <Link href="#">XXXX年XX月(XX)</Link>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-5">
                  <Link href="#">XXXX年XX月(XX)</Link>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-5">
                  <Link href="#">XXXX年XX月(XX)</Link>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-5">
                  <Link href="#">XXXX年XX月(XX)</Link>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-5">
                  <Link href="#">XXXX年XX月(XX)</Link>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-5">
                  <Link href="#">XXXX年XX月(XX)</Link>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-5">
                  <Link href="#">XXXX年XX月(XX)</Link>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-5">
                  <Link href="#">XXXX年XX月(XX)</Link>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-5">
                  <Link href="#">XXXX年XX月(XX)</Link>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-5">
                  <Link href="#">XXXX年XX月(XX)</Link>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-5">
                  <Link href="#">XXXX年XX月(XX)</Link>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-5">
                  <Link href="#">XXXX年XX月(XX)</Link>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-5">
                  <Link href="#">XXXX年XX月(XX)</Link>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-5">
                  <Link href="#">XXXX年XX月(XX)</Link>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-5">
                  <Link href="#">XXXX年XX月(XX)</Link>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className=" bg-gray-50 lg:flex lg:gap-2 lg:pt-5">
        <div className="w-11/12 mx-auto lg:flex lg:justify-between lg:gap-2">
          <div className="w-11/12 mx-auto pb-16">
            <h2 className="pt-20 lg:pt-0 text-2xl font-bold pb-12">About</h2>
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
                <td className="p-5">
                  <Link href="#">NEW</Link>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-5">
                  <Link href="#">CATEGORY</Link>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-5">
                  <Link href="#">COLUMN</Link>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-5">
                  <Link href="#">SERIES</Link>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-5">
                  <Link href="#">Q&A</Link>
                </td>
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
        </div>
      </div>
      <p className="text-center">&copy; Travel & Blog</p>
    </main>
  );
}
