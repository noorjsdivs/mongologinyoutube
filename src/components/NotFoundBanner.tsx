import React from "react";
import Container from "./Container";
import Link from "next/link";

const NotFoundBanner = () => {
  return (
    <Container className="flex items-center justify-center py-10">
      <div className="realtive max-w-screen-2xl min-h-[500px] bg-not-found object-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-4xl font-bold">Your page not Found</h2>
        <p className="text-base font-medium text-center">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Link href={"/"}>
          <button className="w-44 h-12 rounded-full text-base font-semibold text-zinc-200 hover:text-zinc-950 border border-green-700 bg-transparent hover:bg-primaryColor duration-200">
            Back to Home
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default NotFoundBanner;
