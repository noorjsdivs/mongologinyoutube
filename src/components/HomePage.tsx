"use client";
import React from "react";
import Header from "./Header";
import Image from "next/image";
import dashImg from "@/images/dash.png";
import { Audio } from "react-loader-spinner";
import { useSelector } from "react-redux";

const HomePage = () => {
  const userInfo = useSelector((state: any) => state.mongo.userInfo);

  return (
    <div className="w-full min-h-screen bg-square-bg">
      <Header />

      <div className="max-w-5xl mx-auto py-10 flex flex-col items-center">
        <div className="bg-black p-6 rounded-md flex items-center gap-x-10 font-medium">
          <div className="flex flex-col gap-y-3">
            <p>_id:</p>
            <p>username:</p>
            <p>email:</p>
          </div>
          <div className="flex flex-col gap-y-3 text-white font-bold">
            <p>{userInfo ? userInfo._id : 1234567890}</p>
            <p>{userInfo ? userInfo.username : "username"}</p>
            <p>{userInfo ? userInfo.email : "email"}</p>
          </div>
        </div>
        <div className="relative">
          <Image loading="lazy" src={dashImg} alt="dashImg" className="" />
          <div className="absolute top-10 left-14">
            <Audio
              height="50"
              width="50"
              color="red"
              ariaLabel="audio-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
