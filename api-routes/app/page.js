"use client"

import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    let data ={
      name:"Rishi Rana",
      role: "coder"
    }
    let a = await fetch("/api/add", {
      method: "POST", headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify(data),
    })
    let res = await a.json()
    console.log(res)

  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-2xl font-bold">
        Next.js Api routes demo
      </h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
