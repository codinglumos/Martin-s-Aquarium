const database = {
    fish: [
        {id: 1,
        image: "https://bettasource.com/wp-content/uploads/Pink-Betta-Fish.jpg",
        name: "Olivia",
        length: 9,
        species: "Beta",
        location: "Aruba",
        locationphoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Aruba_travel_map.png/800px-Aruba_travel_map.png",
        quote: "Enjoy every moment",
        diet: "Sushi"},
    
        {id: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Sunfish2.jpg/1200px-Sunfish2.jpg",
        name: "Jackie",
        length: 2,
        species: "Sun Fish",
        location: "Florida",
        locationphoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Florida_topographic_map-en.svg/390px-Florida_topographic_map-en.svg.png",
        quote:"Sunshine State of mind",
        diet: "Takis"},
    
        {id: 3,
        image: "https://images.ctfassets.net/cnu0m8re1exe/39CFyuTQREDOsfe8mwMK2d/cec3fc4db4becf2a1f35736fba92a9f5/opah.jpg",
        name: "Julien",
        length: 7,
        species: "Moon Fish",
        location: "Space",
        locationphoto: "https://static01.nyt.com/images/2022/02/21/opinion/sunday/18shesol/18shesol-videoSixteenByNineJumbo1600.jpg",
        quote:"We were really out there!",
        diet: "Space Bacteria"},
    
        {id: 4,
        image: "https://wattleydiscus.com/wp-content/uploads/2020/05/bosmani-rainbow-fish-blue-wattley-discus.jpg",
        name: "Natasha",
        length: 4,
        species: "Rainbow Fish",
        location: "Italy",
        locationphoto: "https://www.nationsonline.org/maps/Italy-Political-Map.jpg",
        quote:"Beautiful AND relaxing",
        diet: "Red Wine"}
    
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
