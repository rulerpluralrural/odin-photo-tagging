import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import { toast } from "react-toastify";

const Modal = ({ time, resetGame }) => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { gameID } = useParams();
	const [username, setUsername] = useState("");

	const handleChange = (e) => {
		setUsername(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const response = await fetch(
				`${import.meta.env.VITE_SERVER_URL}/api/v1/games/${gameID}/scores`,
				{
					method: "POST",
					body: JSON.stringify({ username, time }),
					headers: {
						["Content-Type"]: "application/json; charset=utf-8",
					},
				}
			).then((res) => res.json());
			console.log(response);
			if (response.success) {
				toast.success(response.msg);
				resetGame();
				navigate("/");
			} else {
				if (response.messages) {
					response.messages.forEach((message) => toast.error(message.msg));
				} else {
					toast.error(response.message);
				}
			}

			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	if (loading) {
		return (
			<div className="flex items-center justify-center">
				<MoonLoader color="white" size={100} />
			</div>
		);
	}

	return (
		<div className="flex items-start justify-center mt-28 font-sans">
			<div className="flex flex-col justify-center items-center gap-1">
				<h1 className="text-4xl">You have found them all!</h1>
				<p className="text-2xl">
					Your time is{" "}
					<span className="text-red-500">
						<span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
						<span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
						<span>{("0" + ((time / 10) % 1000)).slice(-2)}</span>
					</span>
				</p>
				<form
					className="w-full flex flex-col gap-2 mb-5"
					onSubmit={handleSubmit}
				>
					<input
						type="text"
						name="username"
						id="username"
						placeholder="Enter your username"
						required
						className="w-full px-3 py-2 rounded-sm text-center text-black"
						onChange={handleChange}
					/>
					<button className="bg-green-500 hover:bg-green-600 focus:bg-green-600 w-full  py-3 rounded-sm text-xl font-semibold transition-colors">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Modal;
