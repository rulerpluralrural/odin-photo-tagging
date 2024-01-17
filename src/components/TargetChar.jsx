import React from "react";

const TargetChar = ({ url, name }) => {
	return (
		<div className="flex items-center gap-2">
			<p className="font-sans text-lg">{name}</p>
			<img
				src={url}
				alt={`${name} image`}
				className="w-[50px] aspect-square rounded-[50%]"
			/>
		</div>
	);
};

export default TargetChar;
