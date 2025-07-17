"use client"

import { useEffect, useState, useRef } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { mbtiTypes, type MbtiTypeData } from "@/lib/mbti-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function ResultPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const mbti = searchParams.get("mbti")
  const clicked = searchParams.get("clicked")
  const [resultData, setResultData] = useState<MbtiTypeData | null>(null)
  const resultRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showAllMbti, setShowAllMbti] = useState(false)

  useEffect(() => {
    if (!mbti) return

    const data = mbtiTypes.find((type) => type.id === mbti)
    setResultData(data || null)
    setIsLoading(false)
  }, [mbti])

  const shareText = `나의 햄찌 성격은 ${resultData?.name.split(" - ")[1]}! 너는 어떤 햄찌야? #햄찌MBTI`
  const shareUrl = typeof window !== "undefined" ? 
    `${window.location.origin}${window.location.pathname}?mbti=${mbti}&clicked=true` : ""

  const handleShare = () => {
    navigator.clipboard.writeText(`${shareText}\n${shareUrl}`)
    alert("링크가 클립보드에 복사되었습니다!")
  }

  if (isLoading || !resultData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4 text-xl font-semibold text-gray-700">
        결과를 불러오는 중...
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4"
    >
      <Card className="w-full max-w-2xl rounded-xl border-none bg-white shadow-lg">
        <CardHeader className="text-center pb-0">
          <CardTitle className="text-2xl sm:text-3xl font-bold text-slate-800">나의 햄찌 성격은?!</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center p-4 sm:p-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full"
          >
            <div>
              <div ref={resultRef} className="pt-6 pb-6 px-4 sm:pt-8 sm:pb-8 sm:px-8 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50">
                <motion.div variants={item} className="text-center">
                  <Image
                    src={`/images/mbti/${resultData.id.toLowerCase()}.png`}
                    alt={resultData.name}
                    width={300}
                    height={400}
                    className="mx-auto mb-4 sm:mb-6 w-[250px] sm:w-[300px] rounded-[2rem]"
                    priority
                  />
                  <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold text-blue-600">
                    <span className="block">{resultData.name.split(" - ")[1]}</span>
                  </h2>
                  <div className="flex flex-wrap justify-center gap-2 mt-6">
                    {resultData.keywords.map((keyword, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100/95 to-indigo-100/95 px-3.5 py-1.5 text-[13px] sm:text-sm text-slate-700 hover:from-blue-200/95 hover:to-indigo-200/95 transition-all backdrop-blur-sm border border-blue-200 shadow-sm hover:shadow-md whitespace-nowrap"
                      >
                        {keyword}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div variants={item} className="mt-8 sm:mt-10 mb-6 sm:mb-8">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-blue-700 flex items-center gap-2">
                  <span className="bg-blue-100 p-1.5 rounded-lg">✨</span>
                  성격 특성
                </h3>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <li className="flex items-center rounded-lg bg-slate-50 p-3 text-sm sm:text-base text-slate-700 hover:bg-slate-100 transition-colors col-span-2">
                    <span className="mr-2 text-blue-500">•</span>
                    {resultData.description}
                  </li>
                  {resultData.characteristics.map((trait, index) => (
                    <li key={index} className="flex items-center rounded-lg bg-slate-50 p-3 text-sm sm:text-base text-slate-700 hover:bg-slate-100 transition-colors">
                      <span className="mr-2 text-blue-500">•</span>
                      {trait}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={item} className="mb-6 sm:mb-8">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-emerald-700 flex items-center gap-2">
                  <span className="bg-emerald-100 p-1.5 rounded-lg">💪</span>
                  장점
                </h3>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {resultData.strengths.map((strength, index) => (
                    <li key={index} className="flex items-center rounded-lg bg-emerald-50 p-3 text-sm sm:text-base text-slate-700 hover:bg-emerald-100 transition-colors">
                      <span className="mr-2 text-emerald-500">✓</span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={item} className="mb-6 sm:mb-8">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-amber-700 flex items-center gap-2">
                  <span className="bg-amber-100 p-1.5 rounded-lg">🔍</span>
                  보완할 점
                </h3>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {resultData.weaknesses.map((weakness, index) => (
                    <li key={index} className="flex items-center rounded-lg bg-amber-50 p-3 text-sm sm:text-base text-slate-700 hover:bg-amber-100 transition-colors">
                      <span className="mr-2 text-amber-500">!</span>
                      {weakness}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={item} className="mb-6 sm:mb-8">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-violet-700 flex items-center gap-2">
                  <span className="bg-violet-100 p-1.5 rounded-lg">🎯</span>
                  추천 활동
                </h3>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {resultData.recommendedActivities.map((activity, index) => (
                    <li key={index} className="flex items-center rounded-lg bg-violet-50 p-3 text-sm sm:text-base text-slate-700 hover:bg-violet-100 transition-colors">
                      <span className="mr-2 text-violet-500">★</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={item} className="mb-6 sm:mb-8">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-blue-700 flex items-center gap-2">
                  <span className="bg-blue-100 p-1.5 rounded-lg">❤️</span>
                  잘 맞는 햄찌 (궁합 햄찌)
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  {resultData.goodMatches.map((match) => (
                    <Card key={match.type} className="flex items-center p-4 sm:p-5 border-none bg-gradient-to-br from-blue-50 to-violet-50 hover:from-blue-100 hover:to-violet-100 transition-colors rounded-2xl">
                      <div className="overflow-hidden rounded-2xl h-[140px] sm:h-[160px]">
                        <Image
                          src={`/images/mbti/${match.type.toLowerCase()}.png`}
                          alt={match.type}
                          width={160}
                          height={160}
                          className="h-full w-auto object-contain rounded-2xl"
                        />
                      </div>
                      <div className="flex-1 pl-5">
                        <p className="font-semibold text-slate-800 text-base sm:text-lg">{mbtiTypes.find(t => t.id === match.type)?.name.split(" - ")[1] || match.type}</p>
                        <p className="text-sm sm:text-base text-slate-600">{match.reason}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={item} className="mb-6 sm:mb-8">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-rose-700 flex items-center gap-2">
                  <span className="bg-rose-100 p-1.5 rounded-lg">⚠️</span>
                  안 맞는 햄찌 (충돌 햄찌)
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  {resultData.badMatches.map((match) => (
                    <Card key={match.type} className="flex items-center p-4 sm:p-5 border-none bg-gradient-to-br from-rose-50 to-orange-50 hover:from-rose-100 hover:to-orange-100 transition-colors rounded-2xl">
                      <div className="overflow-hidden rounded-2xl h-[140px] sm:h-[160px]">
                        <Image
                          src={`/images/mbti/${match.type.toLowerCase()}.png`}
                          alt={match.type}
                          width={160}
                          height={160}
                          className="h-full w-auto object-contain rounded-2xl"
                        />
                      </div>
                      <div className="flex-1 pl-5">
                        <p className="font-semibold text-slate-800 text-base sm:text-lg">{mbtiTypes.find(t => t.id === match.type)?.name.split(" - ")[1] || match.type}</p>
                        <p className="text-sm sm:text-base text-slate-600">{match.reason}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={item} className="flex flex-col gap-3 sm:gap-4">
                <Button
                  onClick={() => setShowAllMbti(true)}
                  className="w-full bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 px-4 py-4 sm:px-6 sm:py-5 text-base sm:text-lg font-semibold text-white transition-colors"
                >
                  내 햄찌 MBTI 보기 🐹
                </Button>
                <Button
                  onClick={handleShare}
                  className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 px-4 py-4 sm:px-6 sm:py-5 text-base sm:text-lg font-semibold text-white transition-colors"
                >
                  링크 복사
                </Button>
                <Link href="/" className="w-full">
                  <Button className="w-full bg-slate-200 hover:bg-slate-300 px-4 py-4 sm:px-6 sm:py-5 text-base sm:text-lg font-semibold text-slate-700 transition-colors">
                    다시 테스트하기
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </CardContent>
      </Card>

      <Dialog open={showAllMbti} onOpenChange={setShowAllMbti}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">전체 햄찌 MBTI</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {mbtiTypes.map((type) => (
              <div key={type.id} className="flex flex-col items-center p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                  <Image
                    src={`/images/mbti/${type.id.toLowerCase()}.png`}
                    alt={type.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-center mt-2">{type.name.split(" - ")[1]}</p>
                <p className="text-xs text-slate-500 text-center">{type.id}</p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}
