import type { Detail } from "../interfaces/Detail";
import PEOPLE from "./People";

import Joseph from '../assets/joseph.png'
import Daniel from '../assets/daniel.png'
import Joshua from '../assets/joshua.png'
import Matthew from '../assets/matthew.png'

const Details: Record<PEOPLE, Detail> = {
    [PEOPLE.JOSEPH]: {
        koName: "요셉",
        enName: "Joseph",
        image: Joseph,
        main: "하나님이 생명을 구원하시려고\n나를 당신들보다 먼저 보내셨나이다",
        descriptions: [
            "요셉은 감성적인 사람이었습니다.\n창세기에 '요셉이 운다'라는 표현이 10번 정도 등장할 정도로\n그는 감수성이 풍부하고 눈물이 많은 사람이었죠.\n(제작자 역시 감수성이 예민한 편이기 때문에 공감이 됩니당...ㅎ)",
            "하지만 그의 신앙은 결코 무르지 않았어요!\n누명이 씌워져 감옥에 갇힐 때에도 그는 늘 하나님과 동행했고,\n본인을 팔아 넘겼던 형들을 곧 용서할 수 있었죠!\n요셉은 하나님의 선하신 절대적인 섭리를 믿었으며,\n이 모든 과정이 그 섭리를 이루어가는 과정이라는 믿음이 있었기에\n가능한 일이었답니다.",
            "이러한 그의 성품에서 알 수 있는 그의 특징은 바로 온유함입니다!\n그는 악을 악으로 갚지 않고, 오히려 선으로 용서를 할 수 있었죠.\n요셉의 훈련받은 온유함이 빛을 발한 순간이\n바로 형들을 만났을 때 그들을 용서한 순간입니다!",
            "요셉과도 같은 감수성과 온유함을 지닌 당신!\n당신의 신앙생활을 축복합니다! :)"
        ]
    },
    [PEOPLE.DANIEL]: {
        koName: "다니엘",
        enName: "Daniel",
        image: Daniel,
        main: "이전에 하던대로 기도하며\n하나님께 감사하였더라",
        descriptions: [
            "다니엘은 강직한 사람이었습니다.\n그는 신앙을 위해서 왕의 진미마저 거부할 수 있었고,\n뜨거운 풀무불마저도 다니엘을 하나님이 아닌 우상에\n절하게 만들 수 없었죠.",
            "또한 다니엘은 매일 기도를 세번씩 드리는 성실한 신앙인이었습니다!\n그를 시기한 관리들이 다니엘이 매일 기도를 한다는 것을 제외하고는\n고발할 흠을 찾지 못했던 점을 통해서 알 수 있죠.",
            "이러한 성실함은 세상의 그 어떠한 협박도 무너뜨릴 수 없었습니다.\n풀무불도 사자굴도 막을 수 없던 그의 담대함과 강직함의 원천은\n하나님을 향한 믿음과 기도가 있었다는 사실!",
            "다니엘과 같은 강직함과 성실함을 지닌 당신!\n당신의 신앙생활을 축복합니다! :)"
        ]
    },
    [PEOPLE.JOSHUA]: {
        koName: "여호수아",
        enName: "Joshua",
        image: Joshua,
        main: "오직 나와 내 집은\n여호와를 섬기겠노라",
        descriptions: [
            "여호수아는 담대한 사람이었습니다.\n그는 담대한 믿음을 바탕으로 가나안 전투를 준비하였고,\n하나님의 말씀에 순종하여서 담대하게 범람하는 요단강을 건넙니다.\n그리고 전쟁의 지도자로서 가나안 정복을 성공으로 이끕니다.",
            "여호수아는 동시에 공평한 지도자였습니다.\n그는 본인을 포함하여 정복한 가나안 땅을 공평하게 배분하였고\n이 점에서 여호수아는 하나님 앞에서\n청렴했던 자임을 알 수 있습니다.",
            "여호수아의 강함과 담대함의 원천은 하나님이었습니다!\n하나님께서는 늘 그에게 \"강하고 담대하라\"고 명령하였으며\n여호수아는 하나님께서 주시는 사명과 확신에\n의지하고 순종하는 믿음의 종이었습니다.",
            "여호수아와 같은 담대함과 청렴한 리더십을 지닌 당신!\n당신의 신앙생활을 축복합니다! :)"
        ]
    },
    [PEOPLE.MATTHEW]: {
        koName: "마태",
        enName: "Matthew",
        image: Matthew,
        main: "나를 따르라 하시니\n일어나 따르니라",
        descriptions: [
            "마태는 겸손한 사람이었습니다.\n마태복음의 모든 순간에서 그는 예수님만을 높이고,\n본인은 철저히 전하는 목소리로서 낮아졌던.\n겸손한 예수님의 제자였습니다.",
            "본인이 작성한 마태복음이지만, 본인에 대한 기록이 존재하지 않는,\n오직 예수님만을 높이며 모든 것을 객관적으로 적은 그는\n겸손함이 어떤 성품인지 잘 보여주는 사람이었습니다.",
            "예수님을 만나기 전 그는 세리로,\n죄인의 대표격인 사람으로서 살아왔었습니다.\n예수님을 만난 후에 그는 제자로 부르심을 받았고,\n그때 그는 동료 세리들마저 본인의 집으로 초대를 하며\n예수님을 전하는 사람이 되었다는 것을 기억합니다.",
            "마태와 같은 겸손함을 지닌 당신!\n당신의 신앙생활을 축복합니다! :)"
        ]
    }
}

export default Details;