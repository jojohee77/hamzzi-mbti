"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { questions, type MbtiDimension, mbtiTypes } from "@/lib/mbti-data"
import { QuestionCard } from "@/components/question-card"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function QuizPage() {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, MbtiDimension>>({})
  const [showPreResult, setShowPreResult] = useState(false)
  const [mbtiResult, setMbtiResult] = useState<string>("")

  const handleAnswer = (questionId: string, selectedDimension: MbtiDimension) => {
    setAnswers((prev) => ({ ...prev, [questionId]: selectedDimension }))
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      const result = calculateMbti(answers)
      setMbtiResult(result)
      setShowPreResult(true)
    }
  }

  const handleCoupangClick = () => {
    window.open("https://link.coupang.com/a/cFdti6", "_blank")
    router.push(`/result?mbti=${mbtiResult}`)
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

  if (showPreResult) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4"
      >
        <Card className="w-full max-w-2xl rounded-xl border-none bg-white shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-slate-800">
              결과가 준비되었어요!
            </CardTitle>
            <p className="text-slate-600 mt-2">
              아래 링크를 확인하고 나의 햄찌 성격을 알아보세요!
            </p>
            <p className="text-slate-500 text-sm mt-1">
              (결과를 보기 위해서는 링크를 확인해주세요)
            </p>
          </CardHeader>
          <CardContent className="flex flex-col items-center p-6 gap-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {mbtiTypes.slice(0, 6).map((type) => (
                <div
                  key={type.id}
                  className="relative w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-lg overflow-hidden"
                >
                  <Image
                    src={`/images/mbti/${type.id.toLowerCase()}.png`}
                    alt="햄찌MBTI 미리보기 이미지"
                    fill
                    className="object-contain blur-sm hover:blur-md transition-all"
                    priority
                  />
                </div>
              ))}
            </div>
            <Button
              onClick={handleCoupangClick}
              className="w-full px-6 py-6 text-lg font-semibold text-white bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-105"
            >
              링크 확인 후 결과보기 🛍️
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

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
        isLastQuestion={currentQuestionIndex === questions.length - 1}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
      />
    </motion.div>
  )
}
