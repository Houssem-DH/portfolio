import { connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"



connect()

export async function POST(request) {
    try {
        const reqBody = await request.json()
        const { username, email, password } = reqBody
        console.log(reqBody);

        //check if user exisst 

        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "user Already Exist" }, { status: 400 })
        }

        //Hash pw
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User(
            {
                username,
                email,
                password: hashedPassword
            }
        )
        const savedUser = await newUser.save()
        console.log(savedUser);

        return NextResponse.json({
            message: "user Created Successfully",
            success: true,
            savedUser

        })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

}