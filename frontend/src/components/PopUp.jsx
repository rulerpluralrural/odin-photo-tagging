import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const PopUp = ({ targets, popUpLocation, togglePopUp, setTargets }) => {
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

	const checkTarget = (target) => {
		return async () => {
				const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/v1/games/${target._id}`, {
					method: "PUT",
					body: JSON.stringify(popUpLocation),
					headers: {
						["Content-Type"]: "application/json; charset=utf-8",
					},
				}).then((res) => res.json());
				togglePopUp(false);

				if (response.target.found) {
					setTargets(
						targets.map((item) => {
							if (item._id === target._id) {
								return { ...item, found: true };
							}
							return item;
						})
					);
					toast.success(`${target.name} found!`);
				} else {
					toast.error('Wrong! Try again...')
				}
				
		};
	};

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
			<div className="bg-slate-900 bg-opacity-90 rounded-md flex flex-col flex-shrink-0 last:round-b-md">
				{targets.map((target, index) => {
					return (
						<div
							key={index}
							className={`flex gap-2 items-center cursor-pointer hover:bg-slate-700 focus:bg-slate-700 transition-colors px-3 py-2 first:rounded-t-md last:rounded-b-md ${
								target.found === true && "bg-lime-700"
							}`}
							onClick={checkTarget(target)}
						>
							<img
								src={target.imgURL}
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
