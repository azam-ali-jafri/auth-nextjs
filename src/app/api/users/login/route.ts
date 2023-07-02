import { connect } from "@/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    const user = await User.findOne({ username });

    if (!user) {
      return NextResponse.json({ message: "incorrect credentials" }, { status: 500 });
    }

    const verifyPassword = await bcryptjs.compare(password, user.password);

    if (!verifyPassword) {
      return NextResponse.json({ message: "incorrect credentials" }, { status: 500 });
    }

    const tokenData = {
      id: user._id,
    };

    const token = jwt.sign(tokenData, "jwtsecret", { expiresIn: "1d" });

    const response = NextResponse.json({ message: "success" });

    response.cookies.set("token", token, { httpOnly: true });

    return response;
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
