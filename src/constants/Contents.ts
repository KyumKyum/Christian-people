// 12 Questions and its answers

import type { Content } from "../interfaces/Content";
import { PersonalityType } from "../interfaces/Personality";

const Contents: Content[] = [
	{
		question: "일요일 예배가 끝났다!!\n나는...",
		type: PersonalityType.ENERGY,
		answers: [
			{
				text: "집에 들어가서 침대에 누울 생각에\n벌써부터 행복해한다.",
				grade: -1,
			},
			{
				text: "스몰 토킹을 하는 그룹이나\n놀러가는 모임이 없는지 기웃거린다.",
				grade: 1,
			},
		],
	},
	{
		question: "교회에서 새로운 후임자가\n내 일을 맡게 되었다!\n나는...",
		type: PersonalityType.DECISION,
		answers: [
			{
				text: "일단 밥부터 사주고,\n같이 밥을 먹으면서 생각나는대로\n알려줄 것을 알려준다.",
				grade: -1,
			},
			{
				text: "만나기 전에 인수인계서를 작성하고,\n궁금해만할 것들을\n모두 정리해서 준다.",
				grade: 1,
			},
		],
	},
	{
		question:
			'"너, 이번 한번만 예배 빠지면 안돼...?"\n라고 말하는 비신자 친구에게\n나는...',
		type: PersonalityType.JUDGEMENT,
		answers: [
			{
				text: "안되는 것은 안되는 것!\n납득할 수 있는 논리적인 이유와 함께\n예배만큼은 안된다고 이야기를 한다.",
				grade: -1,
			},
			{
				text: "일단 미안한 표정 장착!\n최대한 설득을 하며 빠질 수 없는\n이유에 대해 설명한다.",
				grade: 1,
			},
		],
	},
	{
		question:
			"항상 검은색 정장을 입으시던 목사님,\n오늘 갑자기 분홍색 셔츠을 입고 오셨다!\n나는...",
		type: PersonalityType.FOCUS,
		answers: [
			{
				text: "분홍색 셔츠? (별 생각 없음)",
				grade: -1,
			},
			{
				text: "분홍색 셔츠??? 오늘 무슨 날인가?\n갑자기 무슨 일이시지?\n왜 하필 분홍색이지?",
				grade: 1,
			},
		],
	},
	{
		question:
			"카페에서 이어지는\n동역하는 친구의 힘든 이야기.\n결국 친구는 울음을 터뜨리고,\n나는...",
		type: PersonalityType.JUDGEMENT,
		answers: [
			{
				text: '"이런 방법은 어때?"\n맛있는 것을 사주면서 이 상황에서\n할 수 있는 최선의 방법을 찾아준다.',
				grade: -1,
			},
			{
				text: '"많이 힘들었지..."\n친구의 말을 다 들어주며\n위로의 말을 해준다.',
				grade: 1,
			},
		],
	},
	{
		question: '"우리 같이 찬양 릴스 찍자!!"\n신나보이는 친구의 말에 나는...',
		type: PersonalityType.ENERGY,
		answers: [
			{
				text: "어...음...파이팅...^^",
				grade: -1,
			},
			{
				text: "대박!! 너무 좋지!\n어떤 찬양으로 할까?",
				grade: 1,
			},
		],
	},
	{
		question:
			'동역하는 친구와 카페를 간 오늘!\n눈 앞에 보이는 것은\n"재고 소진으로 인해 조기 마감합니다."\n나는...',
		type: PersonalityType.DECISION,
		answers: [
			{
				text: "여유롭게 근처에 있는\n괜찮아 보이는 카페에 들어간다.",
				grade: -1,
			},
			{
				text: "여유롭게 미리 생각해둔\n플랜 B로 넘어간다",
				grade: 1,
			},
		],
	},
	{
		question:
			'"요즘 이런 고민이 있어..."\n함께 동역하는 친구의 진지한 고민에\n나는...',
		type: PersonalityType.FOCUS,
		answers: [
			{
				text: '"이런 경우에 나는..."\n내 경험이나 친구의 경험을\n이야기해주며 도움을 준다',
				grade: -1,
			},
			{
				text: '"이런 뜻이 아닐까?"\n고민을 새로운 관점으로\n해석하여 도움을 준다.',
				grade: 1,
			},
		],
	},
	{
		question:
			"침대에서 일어나는 순간 드는\n불길한 느낌!\n곧 예배에 늦었다는 것을 깨달았다!\n나는...",
		type: PersonalityType.DECISION,
		answers: [
			{
				text: "일단 나가서 뛰면서 생각한다.",
				grade: -1,
			},
			{
				text: "핸드폰을 켜\n가장 빠른 교통수단을 알아본다.",
				grade: 1,
			},
		],
	},
	{
		question:
			'친구가 웃으면서 말을 걸어온다.\n"나 이번 수양회에서\n정말 큰 은혜 받았어!!"\n나는...',
		type: PersonalityType.JUDGEMENT,
		answers: [
			{
				text: "정말? 어떤 은혜를 받았는데?\n궁금하다!",
				grade: -1,
			},
			{
				text: "정말? 너무 기쁘다!\n정말 은혜로운 수양회지! :)",
				grade: 1,
			},
		],
	},
	{
		question:
			"노래방하고 카페에 다니면서\n동역하는 친구와 함께 놀았던 오늘!\n나는...",
		type: PersonalityType.ENERGY,
		answers: [
			{
				text: "정말 잘 놀았다!\n이제 집에 돌아가서 충전해야지!",
				grade: -1,
			},
			{
				text: "정말 잘 놀았다! 충전 완료!",
				grade: 1,
			},
		],
	},
	{
		question: '교회 나눔 시간!\n"천국가면 뭘 하고 싶어?" 하는 질문에\n나는...',
		type: PersonalityType.FOCUS,
		answers: [
			{
				text: "아무 걱정 없이 들판에 누워있고 싶어!",
				grade: -1,
			},
			{
				text: "하늘을 날면서 여기저기를 다닐꺼야!",
				grade: 1,
			},
		],
	},
];

export default Contents;
