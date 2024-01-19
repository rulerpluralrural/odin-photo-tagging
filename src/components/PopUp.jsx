import React, { useEffect, useRef } from "react";

const PopUp = ({ game, popUpLocation, togglePopUp }) => {
	const handleWrapper = (ref) => {
		useEffect(() => {
			// Remove popup on click outside of element
			const handleClickOutside = (e) => {
				if (ref.current && !ref.current.contains(e.target)) {
					togglePopUp(false);
				}
			};
			// Bind the event listener
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [ref]);
	};

	const wrapperRef = useRef(null);
	handleWrapper(wrapperRef);

	return (
		<div
			className="absolute flex"
			ref={wrapperRef}
			style={{
				top: `${popUpLocation.y - 25}px`,
				left: `${popUpLocation.x - 25}px`,
			}}
		>
			<div className="border-[1px] border-dashed bg-slate-900 bg-opacity-90 rounded-full w-[50px] aspect-square flex flex-shrink-0 items-center justify-center self-start">
				<p className="text-red-700 font-bold text-2xl">·</p>
			</div>
			<div
				className={`bg-slate-900 bg-opacity-90 rounded-md flex flex-col flex-shrink-0`}
			>
				{game.images.map((target, index) => {
					return (
						<div
							key={index}
							className="flex gap-2 items-center cursor-pointer hover:bg-slate-800 focus:bg-slate-800 transition-colors rounded-md px-3 py-2"
						>
							<img
								src={target.url}
								alt={`${target.name} image`}
								className="w-[50px] aspect-square rounded-[50%]"
							/>
							<p>{target.name}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PopUp;
