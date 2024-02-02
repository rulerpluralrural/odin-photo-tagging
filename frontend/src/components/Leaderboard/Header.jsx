import React from "react";

const Header = () => {
	return (
		<thead className="text-lg">
			<tr>
				<th className="underline px-5 py-2">Username</th>
				<th className="underline px-5 py-2">Time</th>
				<th className="underline px-5 py-2">Submitted</th>
			</tr>
		</thead>
	);
};

export default Header;
