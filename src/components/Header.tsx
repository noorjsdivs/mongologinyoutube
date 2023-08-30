"use client";
import { navListItem } from "@/constants";
import Link from "next/link";
import React from "react";
import ListItem from "./ListItem";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "@/redux/mongoSlice";
import { useRouter } from "next/navigation";

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userInfo = useSelector((state: any) => state.mongo.userInfo);
  const handleLogout = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(removeUser());
    router.push("/login");
  };
  return (
    <div className="h-24 px-10 flex items-center justify-between">
      <Link
        href={"/"}
        className="text-base uppercase font-bold text-primaryColor relative group overflow-hidden"
      >
        Clicks
        <span className="w-full h-[2px] bg-primaryColor inline-flex absolute bottom-0 left-0 translate-x-[-100%] group-hover:translate-x-0 duration-500"></span>
      </Link>
      <ul className="hidden md:inline-flex bg-slate-950 px-10 py-4   rounded-xl border-[1px] border-primaryColor/40 items-center gap-x-10 text-xs uppercase text-gray-400 font-medium">
        {navListItem.map(({ title, href }) => (
          <ListItem key={title} title={title} href={href} />
        ))}
      </ul>
      <div>
        {userInfo ? (
          <button
            onClick={handleLogout}
            className="uppercase text-xs font-bold border px-6 py-2 rounded-full border-green-500 bg-transparent hover:bg-primaryColor hover:text-gray-950 cursor-pointer duration-200"
          >
            Logout
          </button>
        ) : (
          <Link href={"/login"}>
            <button className="uppercase text-xs font-bold border px-6 py-2 rounded-full border-green-500 bg-transparent hover:bg-primaryColor hover:text-gray-950 cursor-pointer duration-200">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
