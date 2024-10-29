"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface DiaryEntry {
  id: number
  title: string
  content: string
  date: Date
}

export function DiaryPageComponent() {
  const [entries, setEntries] = useState<DiaryEntry[]>([
    {
      id: 1,
      title: "My First Entry",
      content: "Today was a great day! I started my new diary app.",
      date: new Date(),
    },
  ])
  const [newEntry, setNewEntry] = useState({ title: "", content: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewEntry((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newEntry.title && newEntry.content) {
      setEntries((prev) => [
        {
          id: prev.length + 1,
          title: newEntry.title,
          content: newEntry.content,
          date: new Date(),
        },
        ...prev,
      ])
      setNewEntry({ title: "", content: "" })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">My Personal Diary</h1>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Add New Entry</CardTitle>
            <CardDescription>Write about your day or any thoughts you want to remember.</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter the title of your entry"
                  value={newEntry.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  name="content"
                  placeholder="Write your diary entry here..."
                  value={newEntry.content}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Add Entry
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Recent Entries</h2>
          {entries.map((entry) => (
            <Card key={entry.id}>
              <CardHeader>
                <CardTitle>{entry.title}</CardTitle>
                <CardDescription>{format(entry.date, "MMMM d, yyyy 'at' h:mm a")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{entry.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}