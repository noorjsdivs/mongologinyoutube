import Header from "@/components/Header";
import NotFoundBanner from "@/components/NotFoundBanner";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <NotFoundBanner />
    </div>
  );
};

export default NotFoundPage;
