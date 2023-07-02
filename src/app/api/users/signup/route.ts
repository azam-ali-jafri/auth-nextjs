import { connect } from "@/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const { username, email, password } = await request.json();

    const emailTaken = await User.findOne({ email });

    if (emailTaken) {
      return NextResponse.json({ message: "email already taken" }, { status: 500 });
    }

    const usernameTaken = await User.findOne({ username });

    if (usernameTaken) {
      return NextResponse.json({ message: "username already taken" }, { status: 500 });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const createdUser = await User.create({
      username: username.toLowerCase(),
      password: hashedPassword,
      email,
    });

    return NextResponse.json({
      message: "success",
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
