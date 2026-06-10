import { NextRequest, NextResponse } from "next/server"

import nodemailer from "nodemailer"

export async function POST(
    req: NextRequest
) {

    try {

        const body = await req.json()

        const transporter =
            nodemailer.createTransport({

                service: "gmail",

                auth: {

                    user:
                        process.env.Email_id,

                    pass:
                        process.env.Email_pass,
                },

            })

        const answersHtml =
            body.answers.map(
                (item: any) => `

                <p>
                    <strong>
                        ${item.question}
                    </strong>

                    <br/>

                    ${item.answer}
                </p>

            `
            ).join("")

        await transporter.sendMail({

            from:
                process.env.Email_id,

            to:
                "ppvarma07@gmail.com",

            subject:
                "❤️ Birthday Answers",

            html: `

                <div
                    style="
                        font-family:Arial;
                        padding:20px;
                    "
                >

                    <h1>
                        ❤️ Love Answers
                    </h1>

                    ${answersHtml}

                </div>

            `
        })

        return NextResponse.json({
            success: true
        })

    } catch (error) {

        console.log(error)

        return NextResponse.json(
            {
                success: false
            },
            {
                status: 500
            }
        )

    }

}