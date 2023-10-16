import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai"; // use the correct package name and import syntax

const openai = new OpenAI({ apiKey: process.env.OPEN_API_KEY });

export async function POST(
    req: Request
) {
    try {
        const {userId} = auth(); 
        const body = await req.json();
        const { messages } = body;

        if(!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if(!openai.apiKey) {
            return new NextResponse("Open AI Key not configured", { status: 500 });
        }

        if(!messages) {
            return new NextResponse("Messages are required", {status: 400});
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages});
            
            return NextResponse.json(response.choices[0].message);
    }
    catch(error) {
        console.log("[CONVERSATION_ERROR]", error);
        return new NextResponse("Internal error", { status: 500});
    }
}