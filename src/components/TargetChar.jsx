import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const TargetChar = ({ url, name, found }) => {
	return (
		<div className="flex items-center gap-2 self-start">
			{found === true ? (
				<FaRegCheckCircle className="text-5xl aspect-square text-green-700"/>
			) : (
				<img
					src={url}
					alt={`${name} image`}
					className="w-[50px] aspect-square rounded-[50%]"
				/>
			)}

			<p className="font-sans text-lg">{name}</p>
		</div>
	);
};

export default TargetChar;
