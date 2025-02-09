"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useChat } from "ai/react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function InterviewPractice() {
  const [topic, setTopic] = useState("")
  const [promptTechnique, setPromptTechnique] = useState("few-shot")
  const [techniqueDescription, setTechniqueDescription] = useState("")
  const [apiKeySet, setApiKeySet] = useState(true)

  const { messages, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',
    body: {
      data: {
        topic,
        promptTechnique
      }
    }
  })

  console.log({error});

  const getTechniqueDescription = (technique: string): string => {
    switch (technique) {
      case "few-shot":
        return "Provides example questions to guide the AI in generating similar questions for your topic."
      case "chain-of-thought":
        return "Generates a series of questions that build upon each other, following a logical thought process."
      case "zero-shot":
        return "Creates diverse questions without any specific examples, covering various aspects of the topic."
      case "role-playing":
        return "Simulates a real interview experience with an AI interviewer asking questions on your chosen topic."
      case "step-by-step":
        return "Offers a comprehensive guide for interview preparation, including key concepts, resources, and practice questions."
      default:
        return ""
    }
  }

  const updatePromptTechnique = (technique: string) => {
    setPromptTechnique(technique)
    setTechniqueDescription(getTechniqueDescription(technique))
  }

  useEffect(() => {
    setTechniqueDescription(getTechniqueDescription(promptTechnique))

    fetch("/api/check-api-key")
      .then((res) => res.json())
      .then((data) => setApiKeySet(data.apiKeySet))
      .catch((err) => {
        console.error("Error checking API key:", err)
        setApiKeySet(false)
      })
  }, [promptTechnique])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Submitting form with:", { topic, promptTechnique })
    try {
      await handleSubmit(e)
      console.log("Form submitted successfully")
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  useEffect(() => {
    if (messages.length > 0) {
      console.log("Received message:", messages[messages.length - 1].content)
    }
  }, [messages])

  if (!apiKeySet) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          The OpenAI API key is not set. Please set the OPENAI_API_KEY environment variable.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Interview Practice</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
                Interview Topic
              </label>
              <Input
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., React, Data Structures, System Design"
                required
              />
            </div>
            <div>
              <label htmlFor="promptTechnique" className="block text-sm font-medium text-gray-700">
                Prompt Technique
              </label>
              <Select value={promptTechnique} onValueChange={updatePromptTechnique}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a prompt technique" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="few-shot">Few-Shot Learning</SelectItem>
                  <SelectItem value="chain-of-thought">Chain-of-Thought</SelectItem>
                  <SelectItem value="zero-shot">Zero-Shot Prompting</SelectItem>
                  <SelectItem value="role-playing">Role-Playing</SelectItem>
                  <SelectItem value="step-by-step">Step-by-Step Guidance</SelectItem>
                </SelectContent>
              </Select>
              {techniqueDescription && <p className="mt-2 text-sm text-gray-600">{techniqueDescription}</p>}
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Generating..." : "Generate Interview Practice"}
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <Textarea
            value={messages.length > 0 ? messages[messages.length - 1].content : ""}
            readOnly
            placeholder="Your interview practice will appear here..."
            className="w-full h-64"
          />
        </CardFooter>
      </Card>
    </div>
  )
}

