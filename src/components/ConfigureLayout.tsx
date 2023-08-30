"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ConfigureLayout = ({ children }: { children: React.ReactNode }) => {
  const userInfo = useSelector((state: any) => state.mongo.userInfo);
  const router = useRouter();
  useEffect(() => {
    if (!userInfo) {
      router.replace("login" || "registration");
    } else {
      router.replace("/");
    }
  }, [userInfo, router]);
  return <>{children}</>;
};

export default ConfigureLayout;
