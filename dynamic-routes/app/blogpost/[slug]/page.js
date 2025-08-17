export default async function Page({ params }) {
  // `params` may be async in some Next.js runtimes; await it before accessing.
  let languages = ["python","javascript","c++","c#"]
  if(languages.includes(params.slug)){
    return <div> My Post:{params.slug} </div>
  }
  else{
    return <div> Page not found </div>
  }

  return <p>My Post: {slug}</p>
}