"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { motion, AnimatePresence } from "framer-motion"
import type { Question, MbtiDimension } from "@/lib/mbti-data"

interface QuestionCardProps {
  question: Question
  onAnswer: (questionId: string, dimension: MbtiDimension) => void
  currentAnswer?: MbtiDimension
  onNext: () => void
  onPrev: () => void
  isLastQuestion: boolean
  isFirstQuestion: boolean
  currentQuestionIndex: number
  totalQuestions: number
}

export function QuestionCard({
  question,
  onAnswer,
  currentAnswer,
  onNext,
  onPrev,
  isLastQuestion,
  isFirstQuestion,
  currentQuestionIndex,
  totalQuestions,
}: QuestionCardProps) {
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl px-4 sm:px-0"
      >
        <Card className="overflow-hidden border-none bg-white shadow-lg">
          <CardContent className="p-4 sm:p-6">
            <div className="mb-4 sm:mb-6">
              <div className="mb-2 flex justify-between text-xs sm:text-sm text-slate-500">
                <span>질문 {currentQuestionIndex + 1} / {totalQuestions}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2 bg-slate-100 [&>[role=progressbar]]:bg-gradient-to-r [&>[role=progressbar]]:from-blue-500 [&>[role=progressbar]]:to-violet-500" />
            </div>
            
            <h2 className="mb-6 sm:mb-8 text-center text-xl sm:text-2xl font-bold text-slate-800 whitespace-pre-wrap break-keep">{question.text}</h2>
            
            <div className="flex flex-col gap-3 sm:gap-4">
              {question.options.map((option) => (
                <Button
                  key={option.value}
                  variant={currentAnswer === option.dimension ? "default" : "outline"}
                  className={`w-full min-h-[4rem] sm:min-h-[4.5rem] p-4 sm:p-6 text-base sm:text-lg transition-all hover:scale-[1.02] sm:hover:scale-105 whitespace-pre-wrap break-keep ${
                    currentAnswer === option.dimension
                      ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-600 hover:to-violet-600"
                      : "hover:border-blue-300 hover:bg-slate-50"
                  }`}
                  onClick={() => onAnswer(question.id, option.dimension)}
                >
                  {option.text}
                </Button>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 flex justify-between gap-3 sm:gap-4">
              <Button
                variant="outline"
                onClick={onPrev}
                disabled={isFirstQuestion}
                className="w-1/2 py-4 sm:py-5 text-base sm:text-lg hover:bg-slate-50"
              >
                이전
              </Button>
              <Button
                onClick={onNext}
                disabled={!currentAnswer}
                className="w-1/2 py-4 sm:py-5 text-base sm:text-lg bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600"
              >
                {isLastQuestion ? "링크방문후 결과보기 🎁" : "다음"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  )
}
