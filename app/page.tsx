"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"

export default function IntroPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4 sm:p-6"
    >
      <Card className="w-full max-w-md rounded-xl border-none bg-white shadow-lg">
        <CardContent className="flex flex-col items-center justify-center p-4 text-center sm:p-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/images/start-hamster.png"
              alt="Hamster holding START sign"
              width={180}
              height={180}
              className="mb-4 sm:mb-6 h-[180px] sm:h-[300px] w-auto object-contain"
              priority
            />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="mb-3 text-3xl font-bold sm:text-4xl sm:mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                햄찌MBTI
              </span>
              <span className="text-slate-800">로 알아보는</span>
              <br />
              <span className="text-slate-800">나의 햄찌 성격</span>
            </h1>
            <p className="mb-6 text-base text-slate-600 sm:text-lg sm:mb-8">나는 어떤 햄찌일까?</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full"
          >
            <Link href="/quiz" className="block w-full">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-5 text-lg font-semibold text-white transition-all hover:from-blue-600 hover:to-violet-600 hover:shadow-lg sm:px-8 sm:py-6 sm:text-xl">
                시작하기
              </Button>
            </Link>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
