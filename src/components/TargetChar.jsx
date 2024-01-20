import React from "react";

const TargetChar = ({ url, name }) => {
	return (
		<div className="flex items-center gap-2 self-start">
			<img
				src={url}
				alt={`${name} image`}
				className="w-[50px] aspect-square rounded-[50%]"
			/>
			<p className="font-sans text-lg">{name}</p>
		</div>
	);
};

export default TargetChar;
