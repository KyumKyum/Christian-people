import _ from "lodash";
import Canvas from "../layouts/Canvas";
import IMAGES from "../constants/Images";

function GalleryPage() {
	return (
		<Canvas>
			<div className="flex flex-col w-full justify-center">
				<p className="w-5/6 mt-8 text-center text-3xl font-LSY text-[#302A01]">
					성경 인물 리스트
				</p>
				<div className="w-5/6 grid grid-cols-2 gap-x-2 gap-y-4 my-10">
					{_.map(IMAGES, (image, index) => {
						return (
							<div className="flex flex-col gap-y-2">
								<img
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
									src={image.url}
									alt={image.alt}
									className="w-full h-full"
								/>
								<button
									type="button"
									className="flex justify-center items-center rounded-xl bg-[#302a01] py-2 mb-4"
									onClick={() => {
										window.location.href = `/details?character=${image.alt}`;
									}}
								>
									<span className="text-2xl font-LSY text-white">
										{image.meta}
									</span>
								</button>
							</div>
						);
					})}
				</div>
				<button
					type="button"
					className=" mb-10 w-5/6 h-6 p-6 rounded-xl border-2 border-[#302a01] flex justify-center items-center"
					onClick={() => {
						window.location.href = "/";
					}}
				>
					<p className="text-base font-LSY text-black">뒤로가기</p>
				</button>
			</div>
		</Canvas>
	);
}

export default GalleryPage;
