import { NextResponse } from "next/server"
import { Configuration, OpenAIApi } from "openai-edge"
import { OpenAIStream, StreamingTextResponse } from 'ai'

// Explicitly set runtime
export const runtime = 'edge'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

const systemPrompts = {
  "few-shot": `You are an expert interviewer. Your task is to provide interview practice based on the given topic. Here are a few examples:

Topic: React
Q1: What is the difference between state and props in React?
Q2: Explain the concept of virtual DOM in React.
Q3: How do you optimize performance in a React application?

Topic: Data Structures
Q1: Explain the difference between an array and a linked list.
Q2: What is a hash table and how does it work?
Q3: Describe the time complexity of common operations in a binary search tree.

Now, provide similar interview questions for the given topic.`,

  "chain-of-thought": `You are an expert interviewer. Your task is to provide interview practice based on the given topic. Use a chain-of-thought approach to generate questions and explain the reasoning behind each question. For example:

1. Start with a fundamental concept question to assess basic knowledge.
2. Follow up with a question that builds on the first, requiring deeper understanding.
3. Ask about a real-world application of the concept to test practical knowledge.
4. Pose a problem-solving question related to the topic.
5. End with an open-ended question to evaluate critical thinking and communication skills.

Generate a set of interview questions following this pattern for the given topic.`,

  "zero-shot": `You are an expert interviewer. Your task is to provide interview practice based on the given topic. Generate a set of diverse interview questions without any specific examples or guidance. Cover various aspects of the topic, including theoretical knowledge, practical applications, and problem-solving scenarios.`,

  "role-playing": `You are an expert interviewer conducting a mock interview. Your task is to simulate a real interview experience based on the given topic. Start by introducing yourself as the interviewer and set the context for the interview. Then, ask a series of questions as if you were conducting an actual interview. Include a mix of technical questions, behavioral questions, and scenario-based questions related to the topic.`,

  "step-by-step": `You are an expert interviewer. Your task is to provide a step-by-step guide for interview preparation based on the given topic. Follow this structure:

1. Overview of the topic and its importance in interviews
2. Key concepts to study (list 3-5 main areas)
3. Recommended resources for learning (books, websites, courses)
4. Practice questions (provide 3 sample questions with brief answers)
5. Tips for answering questions effectively
6. Common mistakes to avoid
7. Advice for demonstrating expertise during the interview

Provide a comprehensive guide following these steps for the given topic.`,
}

export async function POST(req: Request) {
  console.log("API route called")
  const { topic, promptTechnique } = await req.json()
  console.log("Received request:", { topic, promptTechnique })

  // Security guard to prevent misuse
  if (topic.toLowerCase().includes("harmful") || topic.toLowerCase().includes("illegal")) {
    return NextResponse.json(
      { error: "Invalid topic. Please choose an appropriate interview subject." },
      { status: 400 },
    )
  }

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: "OpenAI API key is not configured" }, { status: 500 })
  }

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompts[promptTechnique as keyof typeof systemPrompts] },
        { role: "user", content: `Topic: ${topic}` },
      ],
      temperature: 0.7,
      stream: true,
    })

    // Create a stream from the response
    if (!response.ok) {
      const errorText = await response.text()
      console.error('OpenAI API error:', errorText)
      return new Response(errorText, { status: response.status })
    }

    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream)
  } catch (error) {
    console.error("Error in API route:", error)
    return NextResponse.json({ error: "An error occurred while generating the response." }, { status: 500 })
  }
}

