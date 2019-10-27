var friends = [];

//Seed person constructor
function Person(name,image,responses){
    this.name = name;
    this.image = image;
    this.responses = responses;
};

friends.push(new Person('Jim Hopper','/userimages/JimHopper.jpg',[5,3,4,3,1,3,4,5,5,5]));
friends.push(new Person('Mike Wheeler','/userimages/MikeWheeler.jpg',[4,4,4,5,4,3,3,4,2,4]));
friends.push(new Person('Eleven','/userimages/Eleven.jpg',[3,3,3,1,2,3,4,4,5,5]));
friends.push(new Person('Nancy Wheeler','/userimages/NancyWheeler.jpg',[3,3,3,3,3,3,4,4,4,5]));
friends.push(new Person('Will Byers','/userimages/WillByers.jpg',[5,3,4,3,3,3,5,5,3,5]));
friends.push(new Person('Lucas Sinclair','/userimages/LucasSinclair.jpg',[1,1,3,5,5,4,3,4,3,1]));
friends.push(new Person('Steve Harrington','/userimages/SteveHarrington.jpg',[3,1,5,2,3,1,3,5,1,2]));
friends.push(new Person('Billy Hargrove','/userimages/BillyHargrove.jpg',[5,4,2,1,3,3,4,2,1,3]));
friends.push(new Person('Joyce Byers','/userimages/JoyceByers.jpg',[5,4,2,1,3,3,4,2,1,3]));
friends.push(new Person('The Mind Flayer','/userimages/TheMindFlayer.jpeg',[1,1,1,1,1,1,1,1,1,1]));

module.exports = friends;