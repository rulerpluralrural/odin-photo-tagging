const games = {
	BearGame: {
		name: "The Bear",
		imgURL: "/images/BearGame/The Bear.png",
		scores: [{ username: "", time: 0 }],
		images: [
			{
				name: "Bear",
				url: "/images/BearGame/Bear.png",
				found: false,
				location: { x: 296, y: 469 },
			},

			{
				name: "Snowman",
				url: "/images/BearGame/Snowman.png",
				found: false,
				location: { x: 644, y: 449 },
			},

			{
				name: "Thief",
				url: "/images/BearGame/Reindeer with hat.png",
				found: false,
				location: { x: 244, y: 207 },
			},
		],
	},
	GhostGame: {
		name: "The Ghost",
		imgURL: "/images/GhostGame/The Ghost.jpg",
		images: [
			{
				name: "Ghost",
				url: "/images/GhostGame/Boo.png",
				found: false,
				location: { x: 550, y: 139 },
			},
		],
	},
	OpenRoads: {
		name: "The Open Roads",
		imgURL: "/images/OpenRoads/The Open Roads.jpg",
		images: [
			{
				name: "Rocket Bear",
				url: "/images/OpenRoads/Rocket Bear.png",
				found: false,
				location: { x: 686, y: 758 },
			},
			{
				name: "Orangutan",
				url: "/images/OpenRoads/Orangutan.png",
				found: false,
				location: { x: 330, y: 752 },
			},
			{
				name: "PinkHead",
				url: "/images/OpenRoads/PinkHead.png",
				found: false,
				location: { x: 520, y: 298 },
			},
		],
	},
};

export default games;
