"use client";
import NavigationBar from "./components/NavigationBar";
import { useState, useEffect, use } from "react";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/navigation";
// landing page
export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleChange = (e: any) => {
    console.log(search);
    setSearch(e.target.value);
  };
  return (
    <div className="text-white max-w-[1400px] mx-auto px-4">
      <NavigationBar />
      <div className="mt-[15%] relative ">
        <div className="flex flex-row  mx-auto gap-3 relative">
          <form onSubmit={() => router.push(`/search/${search}`)}>
            <input
              type="text"
              onChange={handleChange}
              placeholder="Enter keywords..."
              className="w-[1300px] h-[50px] rounded-md text-black outline-none"
            ></input>
            <button type="submit">
              <BsSearch
                size={50}
                className="w-[100px] bg-blue-500 absolute top-0 rounded-md right-0"
              />
            </button>
          </form>
        </div>
        <a href="/Home">
          <button className="h-[80px] w-[20%] text-3xl bg-blue-700 rounded-full mt-[5%] absolute top-[50%] left-[40%]">
            View Full site
          </button>
        </a>
      </div>
    </div>
  );
}
