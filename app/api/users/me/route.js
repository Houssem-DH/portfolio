import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextResponse ,NextRequest } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig"

connect()

export async function GET(request)
{
    try {
      const userId =  await getDataFromToken(request)
      const user = await User.findOne({_id : userId}).select("-password")
      return NextResponse.json({
        message : "user Found",
        data : user
      })
    } catch (error) {
      return NextResponse.json({
        message : "user Not Found",
        data : ""
      })
    }
}