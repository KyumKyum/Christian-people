import type { Detail } from "../interfaces/Detail";
import IMAGES from "./Images";
import PEOPLE from "./People";



const Details: Record<PEOPLE, Detail> = {
    [PEOPLE.JOSEPH]: {
        koName: "요셉",
        enName: "Joseph",
        image: IMAGES.joseph.url,
        main: "하나님이 생명을 구원하시려고\n나를 당신들보다 먼저 보내셨나이다",
        descriptions: [
            "요셉은 감성적인 사람이었습니다.\n창세기에 '요셉이 운다'라는 표현이 10번 정도 등장할 정도로\n그는 감수성이 풍부하고 눈물이 많은 사람이었죠.\n(제작자 역시 감수성이 예민한 편이기 때문에 공감이 됩니당...ㅎ)",
            "하지만 그의 신앙은 결코 무르지 않았어요!\n누명이 씌워져 감옥에 갇힐 때에도 그는 늘 하나님과 동행했고,\n본인을 팔아 넘겼던 형들을 곧 용서할 수 있었죠!\n요셉은 하나님의 선하신 절대적인 섭리를 믿었으며,\n이 모든 과정이 그 섭리를 이루어가는 과정이라는 믿음이 있었기에\n가능한 일이었답니다.",
            "이러한 그의 성품에서 알 수 있는 그의 특징은 바로 온유함입니다!\n그는 악을 악으로 갚지 않고, 오히려 선으로 용서를 할 수 있었죠.\n요셉의 훈련받은 온유함이 빛을 발한 순간이\n바로 형들을 만났을 때 그들을 용서한 순간입니다!",
            "요셉과도 같은 감수성과 온유함을 지닌 당신!\n당신의 신앙 생활을 축복합니다! :)"
        ]
    },
    [PEOPLE.DANIEL]: {
        koName: "다니엘",
        enName: "Daniel",
        image: IMAGES.daniel.url,
        main: "이전에 하던대로 기도하며\n하나님께 감사하였더라",
        descriptions: [
            "다니엘은 강직한 사람이었습니다.\n그는 신앙을 위해서 왕의 진미마저 거부할 수 있었고,\n뜨거운 풀무불마저도 다니엘을 하나님이 아닌 우상에\n절하게 만들 수 없었죠.",
            "또한 다니엘은 매일 기도를 세번씩 드리는 성실한 신앙인이었습니다!\n그를 시기한 관리들이 다니엘이 매일 기도를 한다는 것을 제외하고는\n고발할 흠을 찾지 못했던 점을 통해서 알 수 있죠.",
            "이러한 성실함은 세상의 그 어떠한 협박도 무너뜨릴 수 없었습니다.\n풀무불도 사자굴도 막을 수 없던 그의 담대함과 강직함의 원천은\n하나님을 향한 믿음과 기도가 있었다는 사실!",
            "다니엘과 같은 강직함과 성실함을 지닌 당신!\n당신의 신앙 생활을 축복합니다! :)"
        ]
    },
    [PEOPLE.JOSHUA]: {
        koName: "여호수아",
        enName: "Joshua",
        image: IMAGES.joshua.url,
        main: "오직 나와 내 집은\n여호와를 섬기겠노라",
        descriptions: [
            "여호수아는 담대한 사람이었습니다.\n그는 담대한 믿음을 바탕으로 가나안 전투를 준비하였고,\n하나님의 말씀에 순종하여서 담대하게 범람하는 요단강을 건넙니다.\n그리고 전쟁의 지도자로서 가나안 정복을 성공으로 이끕니다.",
            "여호수아는 동시에 공평한 지도자였습니다.\n그는 본인을 포함하여 정복한 가나안 땅을 공평하게 배분하였고\n이 점에서 여호수아는 하나님 앞에서\n청렴했던 자임을 알 수 있습니다.",
            "여호수아의 강함과 담대함의 원천은 하나님이었습니다!\n하나님께서는 늘 그에게 \"강하고 담대하라\"고 명령하였으며\n여호수아는 하나님께서 주시는 사명과 확신에\n의지하고 순종하는 믿음의 종이었습니다.",
            "여호수아와 같은 담대함과 청렴한 리더십을 지닌 당신!\n당신의 신앙 생활을 축복합니다! :)"
        ]
    },
    [PEOPLE.MATTHEW]: {
        koName: "마태",
        enName: "Matthew",
        image: IMAGES.matthew.url,
        main: "나를 따르라 하시니\n일어나 따르니라",
        descriptions: [
            "마태는 누가와 같이 겸손한 사람이었습니다.\n마태복음의 모든 순간에서 그는 예수님만을 높이고,\n본인은 철저히 전하는 목소리로서 낮아졌던.\n겸손한 예수님의 제자였습니다.",
            "본인이 작성한 마태복음이지만, 본인에 대한 기록이 존재하지 않는,\n오직 예수님만을 높이며 모든 것을 객관적으로 적은 그는\n겸손함이 어떤 성품인지 잘 보여주는 사람이었습니다.",
            "예수님을 만나기 전 그는 세리로,\n죄인의 대표격인 사람으로서 살아왔었습니다.\n예수님을 만난 후에 그는 제자로 부르심을 받았고,\n그때 그는 동료 세리들마저 본인의 집으로 초대를 하며\n예수님을 전하는 사람이 되었다는 것을 기억합니다.",
            "마태와 같은 겸손함과 객관성을 지닌 당신!\n당신의 신앙 생활을 축복합니다! :)"
        ]
    },
    [PEOPLE.ESTHER]: {
        koName: "에스더",
        enName: "Esther",
        image: IMAGES.esther.url,
        main: "죽으면 죽으리이다",
        descriptions: [
            "에스더는 용기있는 사람이었습니다.\n그녀는 모르드개와 본인의 민족을 구하기 위해\n죽을 각오를 하고 왕 앞에 나아간 자였습니다.\n죽음의 위협도 그녀를 막을 수는 없었죠.",
            "또한 그녀는 지혜로운 자였습니다.\n왕에게 곧바로 모든 일을 이야기하지 않고,\n적절한 때를 찾기 위해 왕과 하만을 잔치에 초대를 했죠.\n그리고 결정적인 순간에 모든 것을 고발함으로서\n모든 유대 민족을 구원할 수 있게 됩니다.",
            "그녀가 대담하게 왕 앞에 나아가기 전에 하나님을 향한 믿음이,\n그 이전에 하나님 앞에 겸손히 나아가는 기도가\n있었음을 기억해야겠습니다.\n믿음과 기도, 그리고 용기의 관계는 생각 이상으로 밀접하거든요!",
            "에스더와 같은 용기와 지혜를 지닌 당신!\n당신의 신앙 생활을 축복합니다! :)"
        ]
    },
    [PEOPLE.LUKE]: {
        koName: "의사 누가",
        enName: "Luke",
        image: IMAGES.luke.url,
        main: "성령으로 임하시고 승천하신\n날까지의 일을 기록하였노라",
        descriptions: [
            "의사 누가는 마태와 같이 겸손한 사람이었습니다.\n그의 저서 가운데에서 그의 이름은 한번도 나오지를 않습니다.\n누가는 철저히 자신을 낮추고 뒤에서 기록을 하는 사람이었습니다.",
            "또한 누가는 선한 성품을 가진 의사였습니다.\n그는 바울과 함께 동행하며 그가 감옥에서 고난 받을때에도\n바울의 곁을 지켜주던 동반자였습니다.",
            "누가는 성경을 연구하며 말씀을 철저히 기록했던 자였습니다!\n누가가 있었기에 우리는 오늘날에도 누가복음,\n사도행전을 공부하며 많은 은혜를 받을 수 있게 되었죠.",
            "의사 누가와 같은 겸손함과 선함을 지닌 당신!\n당신의 신앙 생활을 축복합니다! :)"
        ]
    },
    [PEOPLE.NEHEMIAH]: {
        koName: "느헤미야",
        enName: "Nehemiah",
        image: IMAGES.nehemiah.url,
        main: "크고 두려우신 하나님이여,\n간구하나이다",
        descriptions: [
            "느헤미야는 뛰어난 리더십을 가진 사람이었습니다.\n그는 성벽 제건을 위하여 철저하게 사전 조사를 하고\n조직적으로 일을 분담하였습니다.\n",
            "그의 리더십은 성벽 재건에서 끝나지 않았습니다.\n그는 돈, 예배, 결혼 문제에 있어 개혁을 진행하였고,\n이로 인해 백성들 안에서는 다시 신앙적인 부흥이 일어나게 되죠.\n(사실, 이 프로젝트가 시작된 것도 제작자가\n느헤미야의 리더십에 감명받아서입니다 XD)",
            "느헤미야는 기도하는 리더였습니다.\n그는 힘든 상황에서도 감정적이 되지 않고,\n모든 일과 상황에 있어서 하나님께 간구했습니다.\n그는 항상 하나님과 동행하는 리더였습니다.",
            "느헤미야와 같은 리더십을 지닌 당신!\n당신의 신앙 생활을 축복합니다! :)"
        ]
    },
    [PEOPLE.DAVID]: {
        koName: "다윗",
        enName: "David",
        image: IMAGES.david.url,
        main: "나의 힘이신 여호와여\n내가 주를 사랑하나이다",
        descriptions: [
            "다윗은 용감하고 자비로운 사람이었습니다.\n그는 골리앗과의 싸움에서 자원하여 승리를 거두었고,\n본인을 없애려던 사울을 없앨 기회가 있었음에도\n옷자락만 잘라가는 식으로 자비를 배푸는 자였죠.",
            "또한 그는 철저히 계획하는 자였습니다.\n골리앗과의 싸움 전에도, 사울과 대립할 때에도\n그는 모든 순간에 준비하고 예비하는 것이\n습관된 자였습니다.",
            "다윗은 하나님의 권위에 철저히 순종하는 자였습니다.\n그는 하나님께 물어보고, 하나님을 의식하며 행하는 자였습니다.\n그런 다윗을 하나님께서는 \"내 마음에 합한 자\"\n라고 이야기를 하셨죠.",
            "다윗과 같은 용감함과 자비로움을 지닌 당신!\n당신의 신앙 생활을 축복합니다! :)"
        ]
    },
    [PEOPLE.PETER]: {
        koName: "베드로",
        enName: "Peter",
        image: IMAGES.peter.url,
        main: "내가 주를 사랑하는 줄\n주님께서 아시나이다",
        descriptions: [
            "베드로는 열정이 넘치는 자였습니다.\n그는 먼저 행하고, 먼저 따르는 사람이었습니다.\n갈릴리 바다에서 예수님을 의지하여 물 위를 걷게 된 사건과\n빌립보 지방에서 가장 먼저 예수님을 그리스도라고\n이야기를 한 점에서 확인할 수 있죠.",
            "베드로는 특히나 예수님을 열정적으로 사랑하는 자였습니다.\n그는 예수님을 향한 사랑으로 모든 일을 행했고,\n십자가 사건 후 예수님을 다시 만났을 때\n바다로 뛰어내려 달려가는 것을 보면 알 수 있죠.",
            "베드로 역시 약함이 있었습니다.\n예수님께서는 그런 베드로를 계속해서 사랑한다고 말씀하셨고,\n그 안에서 빚어진 베드로는 예수님을 증거하는\n위대한 사도 중 한 명으로 남게 되죠.",
            "베드로와 같은 열정과 사랑을 지닌 당신!\n당신의 신앙 생활을 축복합니다! :)"
        ]
    },
    [PEOPLE.MOSES]: {
        koName: "모세",
        enName: "Moses",
        image: IMAGES.moses.url,
        main: "너희는 강하고 담대하라\n두려워하지 말라",
        descriptions: [
            "모세는 온유한 사람이었습니다.\n출에굽 이후의 광야 생활 동안 이스라엘 백성들은\n줄곧 불평불만과 원망을 일삼았지만,\n모세는 이를 온유함으로 감당하였죠.",
            "특히 모세는 백성들을 향한 사랑이 엄청났습니다.\n백성들이 금신상을 만들어 범죄하였을 때,\n모세가 한 행동은 하나님께로 나아가\n생명을 걸고 주님께 드리는 중보기도였습니다.\n범죄한 백성들을 용서해달라고 말이죠.",
            "모세의 온유함 이전에는\n40년간 하나님과 동행하는 광야 생활이 있었음을 기억합시다.\n광야 생활 동안 그는 하나님 안에서 빚어져갔고,\n하나님과의 친밀한 교제가 그의 온유함의\n근원이 되었다는 것을 기억합시다.",
            "모세와 같은 온유함을 지닌 당신!\n당신의 신앙 생활을 축복합니다! :)"
        ]
    }

}

export default Details;