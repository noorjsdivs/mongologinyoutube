"use client";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Input from "./Input";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegistrationForm = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleRegistration = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:3000/api/users/registration",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: user.username,
            email: user.email,
            password: user.password,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        router.push("/login");
      } else {
        toast.error(data.error);
        console.log(data);
      }
    } catch (error) {
      toast.error("Signup Failed!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.username.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="w-[450px] sm:w-[500px] mx-auto bg-black px-10 py-16 rounded-md flex flex-col gap-y-6 border-[1px] border-primaryColor/30">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-semibold text-white">Sign up Form</p>
          <p className="mt-2">Create your account</p>
        </div>
        {loading && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#CDF683"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />
        )}
      </div>
      <div className="flex flex-col gap-y-4">
        <Input
          label="Full Name"
          placeholder="ex: John Doe"
          inputType="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <Input
          label="Email"
          placeholder="ex: john@anymail.com"
          inputType="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Input
          label="Password"
          placeholder="- - - - - -"
          inputType="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      {buttonDisabled ? (
        <button
          onClick={(e) => e.preventDefault()}
          className="bg-zinc-900 w-full py-2 text-primaryColor/60 cursor-not-allowed rounded-md mt-2 duration-200"
        >
          Fill the fields
        </button>
      ) : (
        <button
          onClick={handleRegistration}
          className="w-full py-2 rounded-md mt-2 border-[1px] bg-zinc-950 text-primaryColor border-primaryColor hover:bg-zinc-800 duration-200"
        >
          Crate an Account
        </button>
      )}
      <p>
        Have an account{" "}
        <Link href={"/login"}>
          <span className="text-primaryColor/60 hover:text-primaryColor cursor-pointer font-semibold duration-200">
            Login
          </span>
        </Link>
      </p>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default RegistrationForm;
