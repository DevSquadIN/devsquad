"use client"

import { useEffect, useState } from "react"

import { Progress } from "./ui/progress"

const ProgressBar = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(5), 300)

    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="mt-2" />
}

export default ProgressBar
