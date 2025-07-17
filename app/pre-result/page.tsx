"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { mbtiTypes } from "@/lib/mbti-data"

export default function PreResultPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const mbti = searchParams.get("mbti")

  const handleCoupangClick = () => {
    window.open("https://link.coupang.com/a/cFdti6", "_blank")
    if (mbti) {
      router.push(`/result?mbti=${mbti}&clicked=true`)
    }
  }

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