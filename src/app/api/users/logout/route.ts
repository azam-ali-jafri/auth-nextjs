import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({ message: "success" });
    response.cookies.set("token", "", { httpOnly: true, expires: Date.now() });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
