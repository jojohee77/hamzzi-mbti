"use client"

import { useEffect, useState, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { mbtiTypes, type MbtiTypeData } from "@/lib/mbti-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import html2canvas from "html2canvas"

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
  const searchParams = useSearchParams()
  const mbti = searchParams.get("mbti")
  const [resultData, setResultData] = useState<MbtiTypeData | null>(null)
  const resultRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mbti) {
      const data = mbtiTypes.find((type) => type.id === mbti)
      setResultData(data || null)
    }
  }, [mbti])

  if (!resultData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-pink-50 p-4 text-xl font-semibold text-gray-700">
        결과를 불러오는 중...
      </div>
    )
  }

  const shareText = `나의 햄찌 성격은 ${resultData.id} - ${resultData.name.split(" - ")[1]}! 너는 어떤 햄찌야? #햄찌MBTI`
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  const handleShare = () => {
    navigator.clipboard.writeText(`${shareText}\n${shareUrl}`)
    alert("링크가 클립보드에 복사되었습니다!")
  }

  const handleSaveImage = async () => {
    if (resultRef.current) {
      try {
        const canvas = await html2canvas(resultRef.current, {
          useCORS: true,
          scale: 2,
          backgroundColor: "#fdf2f8" // pink-50 배경색
        })
        
        const link = document.createElement("a")
        link.download = `hamzzi-mbti-${resultData?.id.toLowerCase()}.png`
        link.href = canvas.toDataURL("image/png")
        link.click()
      } catch (error) {
        console.error("Error saving image:", error)
        alert("이미지 저장 중 오류가 발생했습니다.")
      }
    }
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
                    className="mx-auto mb-4 sm:mb-6 w-[250px] sm:w-[300px]"
                    priority
                  />
                  <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold text-blue-600">
                    <span className="block sm:inline">{resultData.id}</span>
                    <span className="hidden sm:inline"> - </span>
                    <span className="block sm:inline">{resultData.name.split(" - ")[1]}</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600">{resultData.description}</p>
                </motion.div>
              </div>

              <motion.div variants={item} className="mt-8 mb-6 sm:mb-8">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-blue-700 flex items-center gap-2">
                  <span className="bg-blue-100 p-1.5 rounded-lg">✨</span>
                  성격 특성
                </h3>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
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
                      <div className="overflow-hidden rounded-2xl h-[140px] sm:h-[160px] bg-white flex items-center">
                        <Image
                          src={`/images/mbti/${match.type.toLowerCase()}.png`}
                          alt={match.type}
                          width={160}
                          height={160}
                          className="h-full w-auto object-contain"
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
                      <div className="overflow-hidden rounded-2xl h-[140px] sm:h-[160px] bg-white flex items-center">
                        <Image
                          src={`/images/mbti/${match.type.toLowerCase()}.png`}
                          alt={match.type}
                          width={160}
                          height={160}
                          className="h-full w-auto object-contain"
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
                  onClick={handleShare}
                  className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 px-4 py-4 sm:px-6 sm:py-5 text-base sm:text-lg font-semibold text-white transition-colors"
                >
                  링크 복사
                </Button>
                <Button
                  onClick={handleSaveImage}
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 px-4 py-4 sm:px-6 sm:py-5 text-base sm:text-lg font-semibold text-white transition-colors"
                >
                  이미지 저장
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
    </motion.div>
  )
}
