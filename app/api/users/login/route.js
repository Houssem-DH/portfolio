import { connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"



connect()

export async function POST(request) {
    try {
        const reqBody = await request.json()
        const { email, password } = reqBody
        console.log(reqBody);

        //check if user exisst 

        const user = await User.findOne({ email })

        if (!user) {
            return NextResponse.json({ error: "user Doasnt Exist" }, { status: 600 })
        }

        //check if passwrd is correct

        const validPassword = await bcryptjs.compare(password, user.password)

        if (!validPassword) {

            return NextResponse.json({ error: "Password does not match" }, { status: 400 })
        }

        // crerate token data

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.password
        }



        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET,  { expiresIn: "1y" })

      



        const response = NextResponse.json({
            message: "Login Sccess",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true,
        })
       
        return response



      

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

}