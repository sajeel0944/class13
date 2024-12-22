import Image from "next/image";

async function Book({ params }: { params: { book: number } }) {
  const apiUrl = await fetch(
    `https://simple-books-api.glitch.me/books/${params.book}`
  );
  const get = await apiUrl.json();
  // console.log(get)
  const ss: number = params.book;
  const less: number = ss - 1;

  
  const DyManageImage = [
    "/picture/The Russian.png",
    "/picture/Business_Conference_Proceedings1-1-1-scaled.png",
    "/picture/The Vanishing Half.png",
    "/picture/The Midnight Library.png",
    "/picture/Untamed.png",
    "/picture/Viscount Who Loved Me.png",
  ];

  return (
    <>
      <div className="flex justify-center   h-96 mt-5 [@media(max-width:550px)]:px-4">
        <Image
          src={DyManageImage[less]}
          alt={""}
          width={500}
          height={400}
          className="shadow-lg shadow-gray-400 rounded-lg"
        />
      </div>
      <div className="mt-8 text-center space-y-3">
        <h1>
          <b>Book Name :</b> {get.name}
        </h1>
        <h1>
          <b>Author :</b> {get.author}
        </h1>
        <h1>
          <b>Price :</b> {get.price}
        </h1>
        <h1>
          <b>Type :</b> {get.type}
        </h1>
        <h3>
          <b>Avalible :</b> {get.available.toString()}
        </h3>
        <h4>
          <b>id :</b> {get.id}
        </h4>
      </div>
    </>
  );
}

export default Book;
