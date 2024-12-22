import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const apiUrl = await fetch("https://simple-books-api.glitch.me/books");
  const get = await apiUrl.json();
  // console.log(get);

  const manageImage = [
    "is ko is liye MT dia q ky API is ID 1 sy starte ho rahe hai",
    "/picture/The Russian.png",
    "/picture/Business_Conference_Proceedings1-1-1-scaled.png",
    "/picture/The Vanishing Half.png",
    "/picture/The Midnight Library.png",
    "/picture/Untamed.png",
    "/picture/Viscount Who Loved Me.png",
  ];

  // console.log(get)
  return (
    <>
      <div className="w-full h-32 flex items-center justify-center">
        <h1 className="text-2xl hover:text-3xl  font-bold sm:text-5xl underline sm:hover:text-6xl hover:font-extrabold cursor-pointer ">
          Book API List
        </h1>
      </div>

      <div className=" w-full md:h-[780px] lg:px-12 md:px-3 sm:h-[1130px] flex items-center [@media(max-width:639px)]:h-[2300px] [@media(max-width:639px)]:px-3">
        <div className=" w-full md:h-[750px] sm:flex flex-wrap space-x-1 justify-between sm:h-[1100px] sm:items-center [@media(max-width:639px)]:h-[2260px] [@media(max-width:639px)]:space-y-9 [@media(max-width:639px)]:pt-4">
          {get.map((img: any,index:number) => (
            <div key={img.id} className=" h-[340px] md:w-[25%] shadow-lg rounded-xl shadow-gray-400 sm:w-[45%] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
              <Link href={`/${img.id}`}>
                <div className=" h-[280px] w-full">
                  <div>
                    <Image
                      src={manageImage[img.id]}
                      alt={""}
                      width={300}
                      height={300}
                      className="h-[280px] w-full"
                    />
                  </div>
                </div>
                <div className=" h-10 mt-3 flex items-center">
                  <h3 className="cursor-text">
                    <b>Book Name :</b> {img.name}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
