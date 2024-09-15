import type { Detail } from "../interfaces/Detail";
import PEOPLE from "./People";

import Joseph from '../assets/joseph.png'

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
    }
}

export default Details;