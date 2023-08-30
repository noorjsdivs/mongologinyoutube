import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    console.log(reqBody);
    const { email, password } = await reqBody;
    // Checking the user exists or not

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          error: "User does not exists!",
        },
        { status: 400 }
      );
    }

    // Validating password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        {
          error: "Invalid Password",
        },
        { status: 400 }
      );
    }
    // Creating the login Session
    const loggedData = {
      _id: user._id,
      username: user.username,
      email: user.email,
    };
    return NextResponse.json({
      message: "User Created Successfully!",
      success: true,
      loggedData,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
