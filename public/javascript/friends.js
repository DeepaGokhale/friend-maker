var TinderPeople = function(name, photo, scores)
    {
        this.name = name;
        this.photo = photo;
        this.scores = scores;
    }
//generate random data with people so we have some good matches for anyone entering the information
var tinders = [];
var tinderNames = ['Albert Pinto', 'Keshto Iyer', 'Carrie Murphy', 'Neena Sunny', 'Peter Pan', 'Thumbalina Jolie', 'Tom Thumb', 'Santa Clause', 'Princess Leona', 'Yellow Chilli', 'Jamie Scary'];
var tinderImages = ['https://static.fusionmovies.to/images/character/qSeRxGGeYQOl3d7ZjB9fuoRl3C0QUkrXABaxtyvIsxTtcdxY1CJrsRBml2C_bY-2O1bRhOMn4aYiStQcG6xjoa1dK5uoMeXxdx8N4HE8gmA.jpg?1',
                    'https://www.seinfeldscripts.com/images/kramer.jpg', 
                    'https://www.seinfeldscripts.com/images/newman1.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTArQ3nObmwgcRLvcazsha0t_t1i48b6uE6yIQX2SE4aGuNKVT',
                    'https://atlantablackstar.com/wp-content/uploads/2012/12/michael-richards.jpg', 
                    'https://static1.squarespace.com/static/5a031d634c0dbf6d00bdbbc3/t/5a11e259c8302511614895c4/1511121505619/xmashair.jpeg',                            
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlY0iwC-Hyb8GvuaifhN19nAXmSsXlov75ZEKWh9osA2aLmIXWPg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVO_-zVrcoJtcJzoupDRG7uCYbpq_-DK5a82RYcN8vUhndSG7h', 
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfY0x7RfSvSfW-uJnm7bNOzjHjb0XAn0ihp8WkVeXr0XCPZMCJ',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUdxlX0MJpDNc_-hGXBpsuq5w7Yw9-Nfk10AWO7jWwOHwebqf5', 
                    'https://i.pinimg.com/originals/1d/c7/3f/1dc73fef3322b23e4d1105c517459510.jpg'
                ];

                

addOrigPeople();

function addOrigPeople(){
    //adding 10 people to the tinders array
    for (var p = 1; p < 11; p++)
    {                
        let maxVal = 5;
        var ansArr = [];
        //total no of questions = 11
        for (var i=0; i < 11; i ++)
        {
            var answer = generateRandom(maxVal);
            //get the random answer and add to people array
            //console.log(answer)
            ansArr.push(answer);                    
        }
        var newPeople = new TinderPeople(tinderNames[p], tinderImages[p], ansArr);
        //this will create tinders database to match with new survey
        tinders.push(newPeople);
    }            
    // console.log("People loaded!");               
}

function displayFriends()
{

    for(i=0; i < tinders.length; i++)
    {
        $("#friendsData").append(JSON.stringify(tinders[i]) + '<br>');
        // $("#friendsData").append(JSON.stringify(tinders[i].name + '<br>' + tinders[i].photo + '<br>' +  tinders[i].scores + '<br>'));
    }
    
}

function generateRandom(maxVal)
{
    var x;
    var myArr = [];
    //create a random array
    for(var i = 0; i < maxVal; i++)
    {
        var num = Math.ceil(Math.random() * maxVal);
        myArr.push(num);                
    }
    var i = Math.trunc(Math.random() * maxVal);
    var random = myArr[i];
    return random;
}

