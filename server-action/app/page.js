import Image from "next/image";
import submitAction from "../actions/form";

export default function Home() {

  
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 mx-auto">
      <h1 className="text-3xl font-bold">Server Action Example</h1>

      <form action={submitAction} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className="text-white" type="text" />
        </div>
        <div>
          <label htmlFor="add">Add</label>
          <input name="add" id="add" className="text-white" type="text" />
        </div>
        <div>
          <button className="border border-white border-2 py-3 px-2">Submit</button>
        </div>
      </form>
    </div>
  );
}
