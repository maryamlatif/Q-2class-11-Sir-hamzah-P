import Link from "next/link"
// interface IBook {
//   id:number;
//   title:string 
// }




// const book: IBook[]= [{
//   title:"The  Day",
//   id:1
// },
// {
//   title:"The  Night",
//   id:2
// },

// {
//   title:"The  Dawn",
//   id:2
// }]

export default async  function Home() {
  const res = await fetch("https://simple-books-api.glitch.me/books", {

    method : "GET"

  })
  interface IBook{
    "id":number,
    "name":string,
    "type":string,
    "available":boolean
  }

 const books :IBook [] = await res.json()
  console.log(books)

  return (
    <div>
      {/* html ma map ka function is trha use krty hain map method */}
      {/* agar key nhi lgao toh map method sbko aik jesa smjhy ha nextjs ma ye key important ha */}
      

      {
        books.map((books) => {
        return <div key={books.id} className="text-blue-800">
          <Link href={`/${books.id}`}>
          
          <h1>{books.name}</h1>
          </Link></div>
        })
}


      {/* simple method */}
      {/* <h2>{book[0].title}</h2>
      <h2>{book[1].id}</h2> */}
      
    </div>
  )
}
