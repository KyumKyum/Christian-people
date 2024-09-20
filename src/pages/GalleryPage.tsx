import _ from "lodash";
import Canvas from "../layouts/Canvas";
import IMAGES from "../constants/Images";

function GalleryPage() {
	return (
		<Canvas>
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
		</Canvas>
	);
}

export default GalleryPage;
