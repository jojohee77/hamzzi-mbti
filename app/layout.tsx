import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '햄찌MBTI - 나의 햄찌 성격 유형 테스트',
  description: '귀여운 햄스터로 알아보는 MBTI 성격 유형 테스트! 나는 어떤 햄찌일까? 재미있는 심리테스트로 나의 성격을 알아보세요.',
  keywords: [
    'MBTI',
    '햄스터',
    '햄찌',
    '성격유형',
    '성격테스트',
    '심리테스트',
    '성격검사',
    '심리검사',
    '재미있는 테스트',
    '동물 성격테스트',
    '인기 심리테스트',
  ],
  authors: [{ name: '햄찌MBTI' }],
  creator: '햄찌MBTI',
  publisher: '햄찌MBTI',
  applicationName: '햄찌MBTI',
  openGraph: {
    title: '햄찌MBTI - 나의 햄찌 성격 유형 테스트',
    description: '귀여운 햄스터로 알아보는 MBTI 성격 유형 테스트! 나는 어떤 햄찌일까? 재미있는 심리테스트로 나의 성격을 알아보세요.',
    siteName: '햄찌MBTI',
    images: [
      {
        url: 'https://hamzzi-mbti.onrender.com/images/start-hamster.png',
        width: 800,
        height: 600,
        alt: '햄찌MBTI 대표 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '햄찌MBTI - 나의 햄찌 성격 유형 테스트',
    description: '귀여운 햄스터로 알아보는 MBTI 성격 유형 테스트! 나는 어떤 햄찌일까?',
    images: ['https://hamzzi-mbti.onrender.com/images/start-hamster.png'],
    site: '@햄찌MBTI',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="네이버 서치어드바이저 인증 코드" />
      </head>
      <body>{children}</body>
    </html>
  )
}
