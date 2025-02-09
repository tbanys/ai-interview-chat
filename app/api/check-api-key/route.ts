import { NextResponse } from "next/server"

export async function GET() {
  const apiKeySet = !!process.env.OPENAI_API_KEY
  return NextResponse.json({ apiKeySet })
}

