"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { questions, type MbtiDimension } from "@/lib/mbti-data"
import { QuestionCard } from "@/components/question-card"
import { motion } from "framer-motion"

export default function QuizPage() {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, MbtiDimension>>({})

  const handleAnswer = (questionId: string, selectedDimension: MbtiDimension) => {
    setAnswers((prev) => ({ ...prev, [questionId]: selectedDimension }))
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      const mbtiResult = calculateMbti(answers)
      // 쿠팡 링크를 새 창에서 열기
      window.open("https://link.coupang.com/a/cFdti6", "_blank")
      // clicked=true 파라미터를 추가하여 결과 페이지로 이동
      router.push(`/result?mbti=${mbtiResult}&clicked=true`)
    }
  }

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const calculateMbti = (userAnswers: Record<string, MbtiDimension>): string => {
    const counts: Record<MbtiDimension, number> = {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    }

    Object.values(userAnswers).forEach((dimension) => {
      counts[dimension]++
    })

    let mbti = ""
    mbti += counts.E > counts.I ? "E" : "I"
    mbti += counts.S > counts.N ? "S" : "N"
    mbti += counts.T > counts.F ? "T" : "F"
    mbti += counts.J > counts.P ? "J" : "P"

    return mbti
  }

  const currentQuestion = questions[currentQuestionIndex]
  const currentAnswer = answers[currentQuestion.id]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4"
    >
      <QuestionCard
        question={currentQuestion}
        onAnswer={handleAnswer}
        currentAnswer={currentAnswer}
        onNext={handleNext}
        onPrev={handlePrev}
        isLastQuestion={currentQuestionIndex === questions.length - 1}
        isFirstQuestion={currentQuestionIndex === 0}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
      />
    </motion.div>
  )
}
