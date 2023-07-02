import { connect } from "@/dbConfig";
import { getUserDetail } from "@/helpers/getUserDetail";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getUserDetail(request);
    const user = await User.findById(userId);
    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
