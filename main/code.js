var instantfamous = {};
(function(){
UltimateLib.Research.addEngineResearch({
	id: "04dde0fc-04c6-4043-ba32-c19f1e3914b2",
	name: "Hyper Realistic",
	canResearch: function () {
							var res = true;
							res =   GameManager.company.canDevelopLargeGames();

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 14
	});

GDT.addPlatform({
	id:"bafaec15-7a6e-4e68-bf8c-7cdc8da9d4a4",
	name:"Ballista",
	company:"Alienware",
	startAmount:0.999,
	unitsSold:9E10,
	licencePrize:1E5,
	published:"1/1/1",
	platformRetireDate:"100/12/4",
	developmentCosts:9E4,
	genreWeightings:[  1, 1, 1, 1, 1, 1 ],
	audienceWeightings:[  1, 1, 1 ],
	techLevel:7,
	iconUri:"./mods/instantfamous/images/platforms/ALIENWARE_BADGE.png",
	events:[{
	id: "4c499467-1b98-4dcb-bfa0-2ea3a3faeff3",
	date: "1/1/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Alienware",
	text: "Alienware company with super advance tech have lauch their console Ballista",
	image: "./mods/instantfamous/images/notifications/ALIENWARE_BADGE.png",
	buttonText: "OK",
	weeksUntilFired: 0
	});} 
	}
]
	});

GDT.addTopics([
{ 
	id: "730e8a02-833c-4045-b52e-c91b216e5e7b",
	name: "Realistic Life Simulator",
	genreWeightings: [  1, 1, 1, 1, 1, 1 ],
	audienceWeightings: [  0.9, 1, 0.7 ]
	 }

]);


UltimateLib.Achievements.add(UltimateLib.Achievements.create({
	id: "74a041aa-87ca-4d73-94d6-1a6e8caa7f3e",
	title: "Holy Shit",
	description: "Reach quadtrillion sale copy without publishing deal",
	tint: "#FFFFFF",
	value: 1,
	hidden: false,
	canEarnMultiple: false,
	isAchieved: function () {
							var res = true;
							res =   GameManager.company.canDevelopMediumGames();

						return res;
				}
	}));
})();
