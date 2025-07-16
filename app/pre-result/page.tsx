"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { mbtiTypes } from "@/lib/mbti-data"

export default function PreResultPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const mbti = searchParams.get("mbti")
  const [hasClickedCoupang, setHasClickedCoupang] = useState(false)

  useEffect(() => {
    // 로컬 스토리지에서 쿠팡 링크 클릭 여부 확인
    const clicked = localStorage.getItem(`coupang_clicked_${mbti}`)
    if (clicked === "true") {
      router.push(`/result?mbti=${mbti}`)
    }
  }, [mbti, router])

  useEffect(() => {
    if (hasClickedCoupang) {
      const timer = setTimeout(() => {
        router.push(`/result?mbti=${mbti}`)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [hasClickedCoupang, mbti, router])

  const handleCoupangClick = () => {
    window.open("https://link.coupang.com/a/cFdti6", "_blank")
    localStorage.setItem(`coupang_clicked_${mbti}`, "true")
    setHasClickedCoupang(true)
  }

  // 랜덤하게 6개의 MBTI 타입 선택
  const randomMbtiTypes = [...mbtiTypes]
    .sort(() => Math.random() - 0.5)
    .slice(0, 6)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4"
    >
      <Card className="w-full max-w-2xl rounded-xl border-none bg-white shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-slate-800">
            어떤 햄찌일까요?
          </CardTitle>
          <p className="text-slate-600">
            링크를 확인하고 나의 햄찌 성격을 알아보세요!
          </p>
        </CardHeader>
        <CardContent className="flex flex-col items-center p-6 gap-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {randomMbtiTypes.map((type) => (
              <div
                key={type.id}
                className="relative w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-lg overflow-hidden"
              >
                <Image
                  src={`/images/mbti/${type.id.toLowerCase()}.png`}
                  alt="햄스터"
                  fill
                  className="object-contain blur-sm hover:blur-md transition-all"
                  priority
                />
              </div>
            ))}
          </div>
          <Button
            onClick={handleCoupangClick}
            disabled={hasClickedCoupang}
            className={`w-full px-6 py-6 text-lg font-semibold text-white transition-colors ${
              hasClickedCoupang
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
            }`}
          >
            {hasClickedCoupang ? "잠시 후 결과가 공개됩니다..." : "링크 확인 후 결과보기 🛍️"}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
} 