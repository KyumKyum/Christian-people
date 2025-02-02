import Canvas from "../layouts/Canvas";

function CreatorPage() {
  return (
    <Canvas>
      <div className="flex flex-col pt-20 px-10 items-center">
          <span className="font-LSY font-bold text-4xl text-[#402a01]">
						Who made this?
					</span>
      </div>
      <div className="flex flex-col pt-20 px-10">
          <span className="font-LSY font-bold text-2xl text-[#402a01]">
						Developer: KyumKyum
					</span>
          <span className="font-LSY font-bold text-sm text-black mt-4">
						안녕하세요 :)
            <br/>온전히 하나님의 은혜로 거듭나게 된 개발자입니다.
            <br/>만들면서 성경 인물을 정말 많이 공부를 하였고,
            <br/>그 과정에서 얻은 은혜가 많아 감사하네요. :)
            <br/>간단한 웹앱이지만 잘 즐겨주시기 바랍니다!
					</span>
      </div>
      <div className="flex flex-col pt-20 px-10 items-end">
          <span className="font-LSY font-bold text-2xl text-[#402a01]">
						Designer: 클로버
					</span>
          <span className="font-LSY font-bold text-sm text-black mt-4 items-end">
						취미로 그림을 그리고 있습니다 :3
					</span>
      </div>
      <button
					type="button"
					className=" mt-10 w-5/6 h-6 p-6 rounded-xl"
					onClick={() => {
						window.location.href = "/";
					}}
				>
					<p className="text-xl font-LSY text-black">첫 페이지로 돌아가기!</p>
				</button>
    </Canvas>
  );
}

export default CreatorPage;