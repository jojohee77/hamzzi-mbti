// Define types for better structure
export type MbtiDimension = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P"

export interface Question {
  id: string
  text: string
  options: {
    value: string
    text: string
    dimension: MbtiDimension // The dimension this option contributes to
  }[]
}

export interface MbtiTypeData {
  id: string // e.g., 'INFP'
  name: string // e.g., 'INFP 햄찌 - 꿈꾸는 몽글mong글 햄찌'
  description: string
  characteristics: string[]
  strengths: string[]
  weaknesses: string[]
  recommendedActivities: string[]
  imageQuery: string
  imagePath?: string // 새로 추가된 이미지 경로
  goodMatches: { type: string; reason: string; imageQuery: string }[]
  badMatches: { type: string; reason: string; imageQuery: string }[]
  keywords: string[] // 각 유형별 MZ 스타일 키워드
}

// Questions for the quiz
export const questions: Question[] = [
  // E vs I 문항들 (5개)
  {
    id: "q1",
    text: "새로운 햄찌들을 만났을 때 나는?",
    options: [
      { value: "A", text: "먼저 다가가서 인사하고 대화를 시작한다", dimension: "E" },
      { value: "B", text: "조용히 관찰하면서 다른 햄찌가 다가오기를 기다린다", dimension: "I" },
    ],
  },
  {
    id: "q2",
    text: "주말에 에너지를 충전하는 방법은?",
    options: [
      { value: "A", text: "다른 햄찌들과 함께 놀면서 신나게 보낸다", dimension: "E" },
      { value: "B", text: "혼자만의 시간을 가지며 휴식을 취한다", dimension: "I" },
    ],
  },
  {
    id: "q3",
    text: "스트레스를 받았을 때 나는?",
    options: [
      { value: "A", text: "친구들과 만나서 수다를 떨며 푼다", dimension: "E" },
      { value: "B", text: "혼자만의 공간에서 조용히 생각을 정리한다", dimension: "I" },
    ],
  },
  {
    id: "q4",
    text: "새로운 장난감을 받았을 때 나는?",
    options: [
      { value: "A", text: "다른 햄찌들에게 자랑하고 함께 가지고 논다", dimension: "E" },
      { value: "B", text: "혼자 천천히 탐색하고 즐긴다", dimension: "I" },
    ],
  },
  {
    id: "q5",
    text: "햄찌 모임에서 나는?",
    options: [
      { value: "A", text: "여러 햄찌들과 적극적으로 어울린다", dimension: "E" },
      { value: "B", text: "한두 마리의 친한 햄찌와 조용히 대화한다", dimension: "I" },
    ],
  },

  // S vs N 문항들 (5개)
  {
    id: "q6",
    text: "새로운 미로를 발견했을 때 나는?",
    options: [
      { value: "A", text: "현재 보이는 길을 따라 차근차근 탐험한다", dimension: "S" },
      { value: "B", text: "미로 끝에 어떤 보물이 있을지 상상하며 탐험한다", dimension: "N" },
    ],
  },
  {
    id: "q7",
    text: "먹이를 저장할 때 나는?",
    options: [
      { value: "A", text: "정확한 양을 계산해서 실용적으로 저장한다", dimension: "S" },
      { value: "B", text: "다양한 맛을 시도해보고 새로운 조합을 생각한다", dimension: "N" },
    ],
  },
  {
    id: "q8",
    text: "집을 꾸밀 때 나는?",
    options: [
      { value: "A", text: "편안하고 실용적인 구조를 선호한다", dimension: "S" },
      { value: "B", text: "독특하고 창의적인 디자인을 시도한다", dimension: "N" },
    ],
  },
  {
    id: "q9",
    text: "문제가 생겼을 때 나는?",
    options: [
      { value: "A", text: "경험과 사실에 기반해서 해결한다", dimension: "S" },
      { value: "B", text: "직관과 새로운 아이디어로 해결한다", dimension: "N" },
    ],
  },
  {
    id: "q10",
    text: "다른 햄찌의 이야기를 들을 때 나는?",
    options: [
      { value: "A", text: "구체적인 사실과 세부사항에 집중한다", dimension: "S" },
      { value: "B", text: "이야기 속에 숨은 의미와 패턴을 찾는다", dimension: "N" },
    ],
  },

  // T vs F 문항들 (5개)
  {
    id: "q11",
    text: "친구 햄찌가 슬퍼할 때 나는?",
    options: [
      { value: "A", text: "문제를 분석하고 해결책을 제시한다", dimension: "T" },
      { value: "B", text: "친구의 감정에 공감하고 위로한다", dimension: "F" },
    ],
  },
  {
    id: "q12",
    text: "중요한 결정을 내릴 때 나는?",
    options: [
      { value: "A", text: "장단점을 객관적으로 분석한다", dimension: "T" },
      { value: "B", text: "나와 다른 햄찌들의 감정을 고려한다", dimension: "F" },
    ],
  },
  {
    id: "q13",
    text: "다른 햄찌와 의견이 다를 때 나는?",
    options: [
      { value: "A", text: "논리적인 근거를 들어 설득한다", dimension: "T" },
      { value: "B", text: "서로의 입장을 이해하려고 노력한다", dimension: "F" },
    ],
  },
  {
    id: "q14",
    text: "집단 활동에서 나는?",
    options: [
      { value: "A", text: "효율성과 목표 달성을 중요하게 생각한다", dimension: "T" },
      { value: "B", text: "모두의 화합과 참여를 중요하게 생각한다", dimension: "F" },
    ],
  },
  {
    id: "q15",
    text: "칭찬을 할 때 나는?",
    options: [
      { value: "A", text: "객관적인 성과와 결과를 칭찬한다", dimension: "T" },
      { value: "B", text: "노력과 진심을 담아 따뜻하게 칭찬한다", dimension: "F" },
    ],
  },

  // J vs P 문항들 (5개)
  {
    id: "q16",
    text: "하루를 보낼 때 나는?",
    options: [
      { value: "A", text: "미리 계획을 세우고 순서대로 실행한다", dimension: "J" },
      { value: "B", text: "상황에 따라 유연하게 일정을 조정한다", dimension: "P" },
    ],
  },
  {
    id: "q17",
    text: "방 정리를 할 때 나는?",
    options: [
      { value: "A", text: "정해진 위치에 깔끔하게 정리한다", dimension: "J" },
      { value: "B", text: "필요할 때마다 그때그때 정리한다", dimension: "P" },
    ],
  },
  {
    id: "q18",
    text: "새로운 프로젝트를 시작할 때 나는?",
    options: [
      { value: "A", text: "단계별 계획을 세우고 체계적으로 진행한다", dimension: "J" },
      { value: "B", text: "시작하면서 점차 방향을 정해나간다", dimension: "P" },
    ],
  },
  {
    id: "q19",
    text: "약속 시간에 대한 나의 태도는?",
    options: [
      { value: "A", text: "약속 시간보다 일찍 도착한다", dimension: "J" },
      { value: "B", text: "시간에 맞춰 즉흥적으로 움직인다", dimension: "P" },
    ],
  },
  {
    id: "q20",
    text: "휴가를 계획할 때 나는?",
    options: [
      { value: "A", text: "세부 일정을 미리 꼼꼼히 계획한다", dimension: "J" },
      { value: "B", text: "큰 틀만 잡고 현장에서 결정한다", dimension: "P" },
    ],
  },
]

// MBTI type data
export const mbtiTypes: MbtiTypeData[] = [
  {
    id: "ISTJ",
    name: "ISTJ 햄찌 - 성실한 관리자 햄찌",
    description: "책임감 있고 체계적인 성격의 햄찌로, 규칙과 질서를 중요하게 생각해요. 맡은 일은 끝까지 해내는 믿음직한 햄찌랍니다!",
    characteristics: [
      "체계적이고 계획적인 성격",
      "신중하고 책임감이 강함",
      "전통과 규칙을 중요시함",
      "실용적이고 현실적인 접근"
    ],
    strengths: [
      "꼼꼼하고 정확한 일 처리",
      "높은 책임감과 신뢰성",
      "체계적인 문제 해결 능력"
    ],
    weaknesses: [
      "변화를 받아들이기 어려움",
      "융통성이 부족할 수 있음",
      "감정 표현이 서툴 수 있음"
    ],
    recommendedActivities: [
      "정리정돈하기",
      "체크리스트 만들기",
      "전통적인 취미 활동"
    ],
    imageQuery: "organized responsible hamster with tiny glasses and clipboard",
    imagePath: "/images/mbti/istj.png",
    goodMatches: [
      {
        type: "ESTP",
        reason: "현실적인 문제 해결에 능숙하며 서로를 보완해요",
        imageQuery: "energetic practical hamster"
      },
      {
        type: "ESFP",
        reason: "활기찬 에너지로 삶의 균형을 맞춰줘요",
        imageQuery: "cheerful spontaneous hamster"
      }
    ],
    badMatches: [
      {
        type: "ENFP",
        reason: "너무 즉흥적이고 규칙을 잘 따르지 않아 힘들어요",
        imageQuery: "free spirited creative hamster"
      }
    ],
    keywords: [
      "계획 없으면 손떨리는 사람임ㅇㅇ",
      "그게 맞는 건가..?(꼼꼼 체크)",
      "시간 약속 어기면 빡침주의",
      "거참 요즘 애들은...(올드한 마인드)",
      "내 계획이 곧 법임",
      "할거면 제대로 하자!",
      "어떻게 이런 실수를...(한숨)",
      "나만의 체계적인 시스템 장인",
      "그래도 원칙이 있는 거지~"
    ]
  },
  {
    id: "ISFJ",
    name: "ISFJ 햄찌 - 따뜻한 수호자 햄찌",
    description: "세심하고 배려심 많은 성격의 햄찌로, 다른 햄찌들을 돌보는 것을 좋아해요. 책임감 있고 헌신적인 마음씨를 가졌답니다!",
    characteristics: [
      "따뜻하고 배려심 깊은 성격",
      "책임감과 인내심이 강함",
      "세세한 것을 잘 기억함",
      "전통과 안정을 중시함"
    ],
    strengths: [
      "다른 햄찌들을 잘 돌봄",
      "꼼꼼하고 신중한 성격",
      "높은 공감 능력"
    ],
    weaknesses: [
      "자신의 필요를 뒤로 미룸",
      "변화를 어려워함",
      "거절하기 어려워함"
    ],
    recommendedActivities: [
      "요리하기",
      "원예 활동",
      "봉사 활동"
    ],
    imageQuery: "caring protective hamster with warm smile",
    imagePath: "/images/mbti/isfj.png",
    goodMatches: [
      {
        type: "ESFP",
        reason: "활발한 에너지로 즐거움을 선사해요",
        imageQuery: "cheerful playful hamster"
      },
      {
        type: "ESTP",
        reason: "현실적인 문제 해결을 도와줘요",
        imageQuery: "practical energetic hamster"
      }
    ],
    badMatches: [
      {
        type: "ENTP",
        reason: "너무 도전적이고 변화를 많이 추구해서 불안해요",
        imageQuery: "innovative debater hamster"
      }
    ],
    keywords: [
      "남 챙기는거 떵상인 거 맞음",
      "속으로 다 계산 완료함ㅋ",
      "누가 아프다고? 내가 간다!",
      "기억력 미쳤다고 전해라",
      "너가 좋다면 나도 좋아~",
      "배려 만렙 찍었음",
      "전통의 수호자라고 할 수 있죠",
      "누가 내 도움이 필요하다고?",
      "이 정도는 기본인거 알지?"
    ]
  },
  {
    id: "INFJ",
    name: "INFJ 햄찌 - 통찰력 있는 예언가 햄찌",
    description: "깊은 생각에 잠겨 세상을 이해하려 노력하는 햄찌예요. 남의 감정을 잘 읽고 미래를 내다보는 듯한 통찰력을 가졌답니다!",
    characteristics: [
      "뛰어난 직관력과 통찰력",
      "깊은 공감 능력",
      "이상주의적 성향",
      "조용하고 신비로운 분위기"
    ],
    strengths: [
      "타인의 감정을 잘 이해함",
      "창의적인 문제 해결 능력",
      "깊이 있는 대화 능력"
    ],
    weaknesses: [
      "현실과 거리를 두는 경향",
      "완벽주의적 성향",
      "때로는 고집이 셈"
    ],
    recommendedActivities: [
      "명상하기",
      "창작 활동",
      "상담이나 멘토링"
    ],
    imageQuery: "insightful mysterious hamster with crystal ball",
    imagePath: "/images/mbti/infj.png",
    goodMatches: [
      {
        type: "ENFP",
        reason: "서로의 이상을 공유하며 성장해요",
        imageQuery: "adventurous free-spirited hamster"
      },
      {
        type: "ENTP",
        reason: "새로운 관점을 제시해줘요",
        imageQuery: "innovative debater hamster"
      }
    ],
    badMatches: [
      {
        type: "ESTP",
        reason: "너무 즉흥적이고 현실적이라 이해하기 어려워요",
        imageQuery: "energetic practical hamster"
      }
    ],
    keywords: [
      "이 세상 사람 맞냐고요..",
      "내 직감 믿고 갑니다 가보자고~",
      "세상을 바꾸고 싶은 영혼",
      "혼자만의 시간 절대필수",
      "이상과 현실의 딜레마..",
      "너의 눈빛이 말하고 있어..",
      "완벽을 추구하는 나침반",
      "내 상상력 미쳤다고 전해라",
      "깊은 대화 가보자고~"
    ]
  },
  {
    id: "INTJ",
    name: "INTJ 햄찌 - 전략가 마스터 햄찌",
    description: "모든 것을 계획하고 완벽하게 실행하는 것을 좋아하는 햄찌예요. 똑똑하고 독립적이지만, 속은 따뜻하답니다!",
    characteristics: [
      "전략적이고 분석적인 사고",
      "독립적이고 자신감 있는 성격",
      "높은 기준과 완벽주의",
      "혁신적인 문제 해결 능력"
    ],
    strengths: [
      "뛰어난 계획 수립 능력",
      "객관적인 분석력",
      "효율적인 문제 해결"
    ],
    weaknesses: [
      "감정 표현이 서툴 수 있음",
      "때로는 너무 비판적",
      "융통성이 부족할 수 있음"
    ],
    recommendedActivities: [
      "전략 게임하기",
      "독서와 연구",
      "프로젝트 기획"
    ],
    imageQuery: "strategic mastermind hamster with tiny chessboard",
    imagePath: "/images/mbti/intj.png",
    goodMatches: [
      {
        type: "ENFP",
        reason: "서로의 부족한 부분을 채워줘요",
        imageQuery: "adventurous free-spirited hamster"
      },
      {
        type: "ENTP",
        reason: "지적인 대화가 잘 통해요",
        imageQuery: "innovative debater hamster"
      }
    ],
    badMatches: [
      {
        type: "ESFP",
        reason: "너무 즉흥적이고 감정적이라 피곤해요",
        imageQuery: "cheerful spontaneous hamster"
      }
    ],
    keywords: [
      "전략적 천재 그 자체",
      "나의 계획은 완벽하다",
      "감정은 잠시 넣어두겠습니다",
      "이미 다 예측했다고요",
      "비효율적인건 못참지ㅎ",
      "나만의 세계관 장인",
      "어림도 없는 소리하고 계시네요",
      "혁신 그 자체인 나",
      "이미 시뮬레이션 완료함"
    ]
  },
  {
    id: "ISTP",
    name: "ISTP 햄찌 - 만능 재주꾼 햄찌",
    description: "손재주가 좋고 궁금한 건 직접 해봐야 직성이 풀리는 햄찌예요. 위기 상황에서는 누구보다 빠르게 해결책을 찾아내요!",
    characteristics: [
      "뛰어난 손재주",
      "논리적이고 분석적인 사고",
      "실용적인 문제 해결 능력",
      "독립적이고 적응력이 강함"
    ],
    strengths: [
      "위기 상황 대처 능력",
      "실용적인 해결책 제시",
      "빠른 상황 판단력"
    ],
    weaknesses: [
      "장기 계획 세우기 어려움",
      "감정 표현이 서툴 수 있음",
      "때로는 너무 독립적"
    ],
    recommendedActivities: [
      "만들기와 조립",
      "운동과 모험",
      "문제 해결 게임"
    ],
    imageQuery: "handy practical hamster with tiny tools",
    imagePath: "/images/mbti/istp.png",
    goodMatches: [
      {
        type: "ESFJ",
        reason: "따뜻한 마음으로 이해해줘요",
        imageQuery: "warm supportive hamster"
      },
      {
        type: "ESTJ",
        reason: "체계적인 계획을 세워줘요",
        imageQuery: "organized leader hamster"
      }
    ],
    badMatches: [
      {
        type: "ENFJ",
        reason: "너무 감정적이고 간섭이 심해요",
        imageQuery: "charismatic empathetic hamster"
      }
    ],
    keywords: [
      "뭐든 분해하면 직성이 풀림",
      "위기상황에서 존재감 폭발",
      "말보다는 행동으로 보여줄게요",
      "효율적인게 최고시다이",
      "귀찮은건 못하겠어요 패스~",
      "관찰력 미쳤다고 전해라",
      "나는 자유가 좋아요",
      "뭐든 혼자 해결 가능",
      "논리적 분석 완료했습니다"
    ]
  },
  {
    id: "ISFP",
    name: "ISFP 햄찌 - 자유로운 예술가 햄찌",
    description: "아름다움을 사랑하고 자신만의 방식으로 세상을 표현하는 햄찌예요. 조용하지만 내면에는 뜨거운 열정이 있답니다!",
    characteristics: [
      "예술적 감각이 뛰어남",
      "자유로운 영혼",
      "현재를 즐기는 성향",
      "따뜻한 감성의 소유자"
    ],
    strengths: [
      "창의적인 표현력",
      "섬세한 감각",
      "순수한 열정"
    ],
    weaknesses: [
      "장기 계획 부족",
      "우유부단할 수 있음",
      "현실적인 면이 부족할 수 있음"
    ],
    recommendedActivities: [
      "예술 활동",
      "자연 탐험",
      "음악 감상"
    ],
    imageQuery: "artistic free-spirited hamster painting",
    imagePath: "/images/mbti/isfp.png",
    goodMatches: [
      {
        type: "ESTJ",
        reason: "안정감을 주고 현실적인 도움을 줘요",
        imageQuery: "organized leader hamster"
      },
      {
        type: "ESFJ",
        reason: "따뜻하게 보듬어주고 지지해줘요",
        imageQuery: "warm supportive hamster"
      }
    ],
    badMatches: [
      {
        type: "ENTJ",
        reason: "너무 계획적이고 통제하려 들어요",
        imageQuery: "commanding visionary hamster"
      }
    ],
    keywords: [
      "오늘의 기분에 따라 삽니다",
      "나만의 감성 찾아 여행중",
      "자유로운 영혼 그 자체",
      "아무도 날 가두지 마",
      "내 취향 존중해주세요",
      "평화주의자 맞습니다만?",
      "갑자기 하고 싶은게 생겼어요",
      "나는 나다! 그 자체로 완벽",
      "감성 충만 지금 이 순간"
    ]
  },
  {
    id: "INFP",
    name: "INFP 햄찌 - 꿈꾸는 몽글mong글 햄찌",
    description: "따뜻한 마음으로 세상을 더 나은 곳으로 만들고 싶어하는 햄찌예요. 상상력이 풍부하고 감성적이랍니다!",
    characteristics: [
      "풍부한 상상력",
      "이상주의적 성향",
      "깊은 감성",
      "따뜻한 마음씨"
    ],
    strengths: [
      "창의적인 문제 해결",
      "공감 능력이 뛰어남",
      "진정성 있는 소통"
    ],
    weaknesses: [
      "현실감각이 부족할 수 있음",
      "우유부단한 경향",
      "때로는 너무 감정적"
    ],
    recommendedActivities: [
      "창작 글쓰기",
      "예술 활동",
      "봉사 활동"
    ],
    imageQuery: "dreamy idealistic hamster in clouds",
    imagePath: "/images/mbti/infp.png",
    goodMatches: [
      {
        type: "ENFJ",
        reason: "서로의 이상을 지지하고 격려해요",
        imageQuery: "charismatic empathetic hamster"
      },
      {
        type: "ENTJ",
        reason: "현실적인 조언으로 꿈을 이룰 수 있게 도와줘요",
        imageQuery: "commanding visionary hamster"
      }
    ],
    badMatches: [
      {
        type: "ESTJ",
        reason: "너무 현실적이고 규칙을 강조해서 답답해요",
        imageQuery: "organized leader hamster"
      }
    ],
    keywords: [
      "나로 태어나서 럭키비키~",
      "세상에 영감을 주는 중",
      "몽상가라서 행복한 사람",
      "이상적인 세상을 꿈꾸는 중",
      "감정이 너무 풍부한데요?",
      "나만의 동화 속 주인공",
      "순수함이 매력포인트",
      "내적 성장 중입니다",
      "오늘도 행복을 찾아서~"
    ]
  },
  {
    id: "INTP",
    name: "INTP 햄찌 - 논리적인 사색가 햄찌",
    description: "호기심이 많고 모든 것을 분석하고 이해하려는 햄찌예요. 독특한 관점과 엉뚱한 매력이 있답니다!",
    characteristics: [
      "뛰어난 논리력",
      "왕성한 호기심",
      "독창적인 사고방식",
      "객관적인 분석 능력"
    ],
    strengths: [
      "복잡한 문제 해결 능력",
      "창의적인 아이디어 제시",
      "깊이 있는 지식 탐구"
    ],
    weaknesses: [
      "감정 표현이 서툴 수 있음",
      "실행력이 부족할 수 있음",
      "사회성이 부족할 수 있음"
    ],
    recommendedActivities: [
      "퍼즐 게임",
      "연구와 실험",
      "새로운 지식 탐구"
    ],
    imageQuery: "logical thoughtful hamster with formulas",
    imagePath: "/images/mbti/intp.png",
    goodMatches: [
      {
        type: "ENTJ",
        reason: "지적인 대화가 잘 통하고 서로 발전해요",
        imageQuery: "commanding visionary hamster"
      },
      {
        type: "ENFJ",
        reason: "따뜻한 마음으로 이끌어줘요",
        imageQuery: "charismatic empathetic hamster"
      }
    ],
    badMatches: [
      {
        type: "ESFJ",
        reason: "너무 감정적이고 사교적이라 피곤해요",
        imageQuery: "warm supportive hamster"
      }
    ],
    keywords: [
      "분석하다가 해 뜨겠네요",
      "궁금한게 너무 많은 사람",
      "토론 시작하면 멈출 수 없음",
      "나만의 세계에 빠져있는 중",
      "논리적 사고 장인",
      "효율성을 추구하는 완벽주의자",
      "지식이 곧 힘이다!",
      "이게 왜 이런지 알아보자",
      "새로운 아이디어 뿜뿜"
    ]
  },
  {
    id: "ESTP",
    name: "ESTP 햄찌 - 모험을 즐기는 햄찌",
    description: "에너지가 넘치고 새로운 경험을 찾아 떠나는 것을 좋아하는 햄찌예요. 즉흥적이지만 그게 매력이랍니다!",
    characteristics: [
      "활동적이고 모험적인 성격",
      "현실적인 문제 해결 능력",
      "순발력이 뛰어남",
      "사교적이고 유쾌함"
    ],
    strengths: [
      "위기 대처 능력",
      "실용적인 해결책 제시",
      "적응력이 뛰어남"
    ],
    weaknesses: [
      "장기 계획 부족",
      "참을성이 부족할 수 있음",
      "때로는 너무 충동적"
    ],
    recommendedActivities: [
      "스포츠 활동",
      "모험 여행",
      "실용적인 취미"
    ],
    imageQuery: "adventurous energetic hamster with explorer hat",
    imagePath: "/images/mbti/estp.png",
    goodMatches: [
      {
        type: "ISFJ",
        reason: "안정감을 주고 따뜻하게 보듬어줘요",
        imageQuery: "caring protective hamster"
      },
      {
        type: "ISTJ",
        reason: "현실적인 조언으로 지지해줘요",
        imageQuery: "organized responsible hamster"
      }
    ],
    badMatches: [
      {
        type: "INFJ",
        reason: "너무 깊은 생각에 잠겨 이해하기 어려워요",
        imageQuery: "insightful mysterious hamster"
      }
    ],
    keywords: [
      "일단 해보고 후회하자!",
      "스릴과 자유를 사랑하는 중",
      "계획이 뭐죠? 먹는건가요?",
      "지금 이 순간을 즐기자고~",
      "나는 액션이 필요해!",
      "현실주의자 만렙 찍음",
      "문제해결 능력자라고 전해라",
      "재미없으면 의미없음",
      "도전은 나의 힘!"
    ]
  },
  {
    id: "ESFP",
    name: "ESFP 햄찌 - 자유로운 연예인 햄찌",
    description: "타고난 스타! 사람들의 시선을 즐기고 항상 즐거움을 찾아다니는 햄찌예요. 밝고 긍정적인 에너지가 매력이랍니다!",
    characteristics: [
      "밝고 활발한 성격",
      "즉흥적이고 자유로움",
      "사교적이고 친근함",
      "현재를 즐기는 성향"
    ],
    strengths: [
      "뛰어난 사교성",
      "긍정적인 에너지",
      "상황 적응력"
    ],
    weaknesses: [
      "계획성 부족",
      "집중력이 부족할 수 있음",
      "깊이 있는 대화를 어려워할 수 있음"
    ],
    recommendedActivities: [
      "공연과 예술 활동",
      "파티 기획",
      "사교 모임"
    ],
    imageQuery: "lively spontaneous hamster with microphone",
    imagePath: "/images/mbti/esfp.png",
    goodMatches: [
      {
        type: "ISTJ",
        reason: "안정감을 주고 현실적인 도움을 줘요",
        imageQuery: "organized responsible hamster"
      },
      {
        type: "ISFJ",
        reason: "따뜻하게 보듬어주고 지지해줘요",
        imageQuery: "caring protective hamster"
      }
    ],
    badMatches: [
      {
        type: "INTJ",
        reason: "너무 계획적이고 논리적이라 답답해요",
        imageQuery: "strategic mastermind hamster"
      }
    ],
    keywords: [
      "분위기 메이커는 나야나~",
      "오늘도 파티 주인공",
      "재미없으면 인생이 아님",
      "즉흥적인게 내 매력임",
      "나는 걸어다니는 햇살이야✨",
      "관심 주는거 좋아합니다",
      "지금 이 순간이 행복해",
      "새로운 도전 환영해요",
      "인싸력 만렙 찍었음"
    ]
  },
  {
    id: "ENFP",
    name: "ENFP 햄찌 - 열정적인 활동가 햄찌",
    description: "에너지가 넘치고 새로운 아이디어로 가득한 햄찌예요! 긍정적인 에너지로 주변을 행복하게 만들어요.",
    characteristics: [
      "창의적이고 열정적",
      "사교적이고 친근함",
      "새로운 시도를 좋아함",
      "감성이 풍부함"
    ],
    strengths: [
      "뛰어난 창의력",
      "공감 능력이 좋음",
      "긍정적인 에너지"
    ],
    weaknesses: [
      "집중력 부족",
      "일의 마무리가 약함",
      "때로는 너무 감정적"
    ],
    recommendedActivities: [
      "브레인스토밍",
      "창작 활동",
      "사회 활동"
    ],
    imageQuery: "enthusiastic creative hamster with sparkling eyes",
    imagePath: "/images/mbti/enfp.png",
    goodMatches: [
      {
        type: "INFJ",
        reason: "서로의 이상을 공유하며 성장해요",
        imageQuery: "insightful mysterious hamster"
      },
      {
        type: "INTJ",
        reason: "지적인 대화가 잘 통하고 서로 발전해요",
        imageQuery: "strategic mastermind hamster"
      }
    ],
    badMatches: [
      {
        type: "ISTJ",
        reason: "너무 규칙적이고 현실적이라 답답해요",
        imageQuery: "organized responsible hamster"
      }
    ],
    keywords: [
      "아이디어 뱅크 그 자체",
      "에너지가 무한한 사람임",
      "새로운거 너무 좋아요!!",
      "영감 받는 중이니 말걸지마",
      "이 세상 모든게 흥미로워..",
      "자유로운 영혼 충전중",
      "가능성이 무한한 사람",
      "나는야 에너자이저~",
      "긍정적인게 최고시다이"
    ]
  },
  {
    id: "ENTP",
    name: "ENTP 햄찌 - 뜨거운 논쟁을 즐기는 햄찌",
    description: "똑똑하고 재치 있으며 새로운 아이디어를 끊임없이 만들어내는 햄찌예요. 논쟁을 즐기지만 그만큼 성장하는 매력이 있답니다!",
    characteristics: [
      "논리적이고 창의적인 사고",
      "뛰어난 토론 능력",
      "혁신적인 아이디어",
      "도전을 즐기는 성향"
    ],
    strengths: [
      "문제 해결 능력",
      "빠른 상황 판단",
      "유연한 사고방식"
    ],
    weaknesses: [
      "일의 마무리가 약함",
      "때로는 너무 논쟁적",
      "감정을 고려하지 않을 수 있음"
    ],
    recommendedActivities: [
      "토론과 디베이트",
      "새로운 기술 탐구",
      "창의적인 프로젝트"
    ],
    imageQuery: "innovative debater hamster with thought bubble",
    imagePath: "/images/mbti/entp.png",
    goodMatches: [
      {
        type: "INFJ",
        reason: "서로의 깊은 생각을 이해하고 존중해요",
        imageQuery: "insightful mysterious hamster"
      },
      {
        type: "INTJ",
        reason: "지적인 대화가 잘 통하고 서로 발전해요",
        imageQuery: "strategic mastermind hamster"
      }
    ],
    badMatches: [
      {
        type: "ISFJ",
        reason: "너무 감정적이고 보수적이라 답답해요",
        imageQuery: "caring protective hamster"
      }
    ],
    keywords: [
      "토론 한판 뜰까요?",
      "아이디어 뱅크 풀가동중",
      "호기심 대마왕이에요",
      "나의 창의력은 무한해~",
      "일단 도전해보는거에요",
      "논리력 만렙 찍었음",
      "새로운 관점 제시하는 중",
      "나는 혁신가에요~",
      "생각의 한계는 없다고 봄"
    ]
  },
  {
    id: "ESTJ",
    name: "ESTJ 햄찌 - 꼼꼼한 리더 햄찌",
    description: "모든 것을 체계적으로 계획하고 목표 달성을 위해 노력하는 햄찌예요. 책임감 강한 리더십이 매력이랍니다!",
    characteristics: [
      "체계적이고 계획적",
      "책임감이 강함",
      "실용적인 문제 해결",
      "리더십이 있음"
    ],
    strengths: [
      "조직력이 뛰어남",
      "효율적인 업무 처리",
      "신뢰성이 높음"
    ],
    weaknesses: [
      "융통성이 부족할 수 있음",
      "감정 표현이 서툴 수 있음",
      "때로는 너무 완고함"
    ],
    recommendedActivities: [
      "프로젝트 관리",
      "조직 활동",
      "체계적인 취미"
    ],
    imageQuery: "organized leader hamster with tiny suit",
    imagePath: "/images/mbti/estj.png",
    goodMatches: [
      {
        type: "ISFP",
        reason: "자유로운 영혼에 매력을 느껴요",
        imageQuery: "artistic free-spirited hamster"
      },
      {
        type: "ISTP",
        reason: "현실적인 문제 해결에 능숙해요",
        imageQuery: "handy practical hamster"
      }
    ],
    badMatches: [
      {
        type: "INFP",
        reason: "너무 이상주의적이고 비현실적이라 답답해요",
        imageQuery: "dreamy idealistic hamster"
      }
    ],
    keywords: [
      "체계적인게 최고시다이",
      "시간 관리의 달인임",
      "계획이 곧 나의 삶이야",
      "리더십 그 자체라고 할 수 있죠",
      "효율성 찾아 삼만리~",
      "책임감 만렙 찍었음",
      "완벽한 결과를 추구해요",
      "규칙은 지켜야죠 당연히",
      "목표 달성은 필수입니다"
    ]
  },
  {
    id: "ESFJ",
    name: "ESFJ 햄찌 - 친절한 사교왕 햄찌",
    description: "사람들과 어울리는 것을 좋아하고 항상 주변을 밝게 만드는 햄찌예요. 따뜻한 마음씨가 매력이랍니다!",
    characteristics: [
      "사교적이고 친절함",
      "책임감이 강함",
      "배려심이 깊음",
      "전통을 중시함"
    ],
    strengths: [
      "뛰어난 대인관계",
      "실용적인 도움 제공",
      "조직력이 좋음"
    ],
    weaknesses: [
      "비판에 민감함",
      "변화를 어려워함",
      "때로는 너무 남 의식"
    ],
    recommendedActivities: [
      "모임 주최하기",
      "봉사 활동",
      "요리와 나눔"
    ],
    imageQuery: "friendly social hamster with warm smile",
    imagePath: "/images/mbti/esfj.png",
    goodMatches: [
      {
        type: "ISTP",
        reason: "조용하지만 든든한 매력에 끌려요",
        imageQuery: "handy practical hamster"
      },
      {
        type: "ISFP",
        reason: "예술적인 감각을 존중해줘요",
        imageQuery: "artistic free-spirited hamster"
      }
    ],
    badMatches: [
      {
        type: "INTP",
        reason: "너무 논리적이고 감정 표현이 없어서 답답해요",
        imageQuery: "logical thoughtful hamster"
      }
    ],
    keywords: [
      "인싸 중의 인싸라고 할 수 있죠",
      "남 챙기는게 행복해요",
      "분위기 메이커 그 자체",
      "조화로움이 최고시다이",
      "모두가 행복했으면 좋겠어요",
      "책임감 넘치는 사람임",
      "따뜻한 마음씨 장인",
      "배려왕이라고 전해라",
      "사회성 만렙 찍었음"
    ]
  },
  {
    id: "ENFJ",
    name: "ENFJ 햄찌 - 카리스마 넘치는 햄찌",
    description: "타고난 리더이자 조력자! 모두가 행복해지는 것을 보며 보람을 느끼는 햄찌예요. 따뜻한 카리스마가 매력이랍니다!",
    characteristics: [
      "카리스마 있는 리더십",
      "뛰어난 공감 능력",
      "이상주의적 성향",
      "사교적이고 배려심 깊음"
    ],
    strengths: [
      "사람들을 이끄는 능력",
      "뛰어난 의사소통",
      "긍정적인 영향력"
    ],
    weaknesses: [
      "완벽주의적 성향",
      "때로는 너무 이상적",
      "자기 희생적인 경향"
    ],
    recommendedActivities: [
      "리더십 개발",
      "멘토링",
      "사회 공헌 활동"
    ],
    imageQuery: "charismatic empathetic hamster with friends",
    imagePath: "/images/mbti/enfj.png",
    goodMatches: [
      {
        type: "INFP",
        reason: "서로의 이상을 지지하고 격려해요",
        imageQuery: "dreamy idealistic hamster"
      },
      {
        type: "INTP",
        reason: "지적인 대화가 잘 통하고 서로 발전해요",
        imageQuery: "logical thoughtful hamster"
      }
    ],
    badMatches: [
      {
        type: "ISTP",
        reason: "너무 독립적이고 감정 표현이 적어서 답답해요",
        imageQuery: "handy practical hamster"
      }
    ],
    keywords: [
      "영향력 있는 리더 그 자체",
      "모두의 멘토가 되고 싶어요",
      "세상을 바꾸고 싶은 사람",
      "따뜻한 카리스마 장인",
      "공감 능력자라고 전해라",
      "이상적인 세상을 꿈꾸는 중",
      "긍정적 에너지 뿜뿜",
      "사람들을 이끄는게 행복해요",
      "나는야 분위기 리더~"
    ]
  },
  {
    id: "ENTJ",
    name: "ENTJ 햄찌 - 비전을 제시하는 햄찌",
    description: "목표 지향적이고 효율적인 방법을 찾아내는 햄찌예요. 카리스마 넘치는 리더십으로 주변을 이끌어요!",
    characteristics: [
      "강력한 리더십",
      "전략적 사고",
      "효율성 추구",
      "야망이 있음"
    ],
    strengths: [
      "목표 달성 능력",
      "전략적 계획 수립",
      "결단력이 강함"
    ],
    weaknesses: [
      "감정 배려가 부족할 수 있음",
      "때로는 너무 독단적",
      "완벽주의적 성향"
    ],
    recommendedActivities: [
      "리더십 개발",
      "전략 게임",
      "비즈니스 기획"
    ],
    imageQuery: "commanding visionary hamster with crown",
    imagePath: "/images/mbti/entj.png",
    goodMatches: [
      {
        type: "INFP",
        reason: "따뜻한 감성으로 균형을 맞춰줘요",
        imageQuery: "dreamy idealistic hamster"
      },
      {
        type: "INTP",
        reason: "지적인 대화가 잘 통하고 서로 발전해요",
        imageQuery: "logical thoughtful hamster"
      }
    ],
    badMatches: [
      {
        type: "ISFP",
        reason: "너무 즉흥적이고 계획이 없어서 답답해요",
        imageQuery: "artistic free-spirited hamster"
      }
    ],
    keywords: [
      "리더는 타고난거라고 봄",
      "전략적 천재 인정?",
      "목표 달성은 필수임",
      "비전 제시하는 사람",
      "효율성 찾아 삼만리~",
      "완벽주의자 그 자체",
      "나의 카리스마는 세계관급",
      "성공이 곧 나의 삶",
      "혁신을 이끄는 리더"
    ]
  }
]
