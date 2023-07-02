import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export async function getUserDetail(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken: any = await jwt.verify(token, "jwtsecret");
    return decodedToken.id;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
