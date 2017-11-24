const Discord = require("discord.js");
const client = new Discord.Client();
var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var riddleeasy = ["Q: What has a foot but no legs?",
"Q: Poor people have it. Rich people need it. If you eat it you die. What is it?",
 "Q: What comes down but never goes up?",
  "Q: I’m tall when I’m young and I’m short when I’m old. What am I?", 
  "Q: Mary’s father has 5 daughters – Nana, Nene, Nini, Nono. What is the fifth daughters name?",
   "Q: How can a pants pocket be empty and still have something in it?",
  "Q: In a one-story pink house, there was a pink person, a pink cat, a pink fish, a pink computer, a pink chair, a pink table, a pink telephone, a pink shower– everything was pink! What color were the stairs?",
"Q: A dad and his son were riding their bikes and crashed. Two ambulances came and took them to different hospitals. The man’s son was in the operating room and the doctor said, “I can’t operate on you. You’re my son.” How is that possible?",
"Q: What goes up when rain comes down?",
"Q: What is the longest word in the dictionary?",
"Q: If I drink, I die. If i eat, I am fine. What am I?",
"Q: Throw away the outside and cook the inside, then eat the outside and throw away the inside. What is it?",
"Q: What word becomes shorter when you add two letters to it?",
"Q: What travels around the world but stays in one spot?",
"Q: What occurs once in a minute, twice in a moment and never in one thousand years?",
"Q: What has 4 eyes but can’t see?",
"Q: If I have it, I don’t share it. If I share it, I don’t have it. What is it?",
"Q: Take away my first letter, and I still sound the same. Take away my last letter, I still sound the same. Even take away my letter in the middle, I will still sound the same. I am a five letter word. What am I?",
"Q: What has hands but can not clap?",
"Q: What can you catch but not throw?",
"Q: A house has 4 walls. All of the walls are facing south, and a bear is circling the house. What color is the bear?",
"Q: What is at the end of a rainbow?",
"Q: What is as light as a feather, but even the world’s strongest man couldn’t hold it for more than a minute?",
"Q: What starts with the letter “t”, is filled with “t” and ends in “t”?",
"Q: What is so delicate that saying its name breaks it?",
"Q: You walk into a room with a match, a karosene lamp, a candle, and a fireplace. Which do you light first?",
"Q: A man was driving his truck. His lights were not on. The moon was not out. Up ahead, a woman was crossing the street. How did he see her?",
"Q: What kind of tree can you carry in your hand?",
"Q: If an electric train is travelling south, which way is the smoke going?",
"Q: You draw a line. Without touching it, how do you make the line longer?",
"Q: What has one eye but cannot see?",
"Q: A man leaves home and turns left three times, only to return home facing two men wearing masks. Who are those two men?",
"Q: Which weighs more, a pound of feathers or a pound of bricks?",
"Q: How many months have 28 days?",
"Q: A frog jumped into a pot of cream and started treading. He soon felt something solid under his feet and was able to hop out of the pot. What did the frog feel under his feet?",
"Q: A horse is on a 24 foot chain and wants an apple that is 26 feet away. How can the horse get to the apple?",
"Q: If a blue house is made out of blue bricks, a yellow house is made out of yellow bricks and a pink house is made out of pink bricks, what is a green house made of?",
"Q: We see it once in a year, twice in a week, and never in a day. What is it?",
"Q: Mr. Blue lives in the blue house, Mr. Pink lives in the pink house, and Mr. Brown lives in the brown house. Who lives in the white house?",
"Q: They come out at night without being called, and are lost in the day without being stolen. What are they?",
"Q: How do you make the number one disappear?",
"Q; What goes up but never comes down?"
]

var riddlegood = ["Q; What has a bed but does not sleep, and can run but cannot walk?",
  "Q; You can drop me from the tallest building and I’ll be fine, but if you drop me in water I die. What am I?",
  "Q; When does yesterday come after today?",
  "Q; You bury me when I’m alive and dig me up when I’m dead. What am I?",
  "Q; I have an eye but cannot see. I am fast but I have no limbs. What am I?",
  "Q; I can be written, I can be spoken, I can be exposed, I can be broken. What am I?",
  "Q; Everyone has me except for a few. You may not be able to identify me but I can always identify you. What am I?",
  "Q; Sometimes I walk in front of you. Sometimes I walk behind you. It is only in the dark that I ever leave you. What am I?",
  "Q; How can you say “Robert and Richard Purchased A Rottweiler”, without using any R’s?",
  "Q; A boy throws a baseball. It travels 40 feet and then goes right back to the boy. How is that possible?",
  "Q; It weighs next to nothing but no one can hold it for long. What is it?",
  "Q; What has 13 hearts, but no other organs?",
  "Q; What never asks questions but is often answered?",
  "Q; Why is the letter B always cool?",
  "Q; Every night I’m told what to do and each morning I do what I’m told, but I still do not escape your scold. What am I?",
  "Q; If your aunt’s brother is not your uncle, what relation is he to you?",
  "Q; Can you name three consecutive days without using Sunday, Wednesday and Friday?",
  "Q; A is the father of B, but B is not the son of A. How is that possible?",
  "Q; What kind of coat is best put on wet?",
  "Q; On which day of the year do fewest people die?",
  "Q; What gets wetter the longer it is left out in the sun?",
  "Q; I am first on earth, second in heaven. I appear twice in a week, never in a month, but once in a year What am I?",
  "Q; What can always be measured but never can be seen?",
  "Q; It is a Sunday morning and a man comes to find his wife dead. The maid said she was cleaning the kitchen, the mailman said he was delivering mail, the nanny said he was teaching the kids, and the farmer said he was harvesting his crops. Who done it?",
  "Q; What question can you ask where you can get different answers every time but all the answers being correct?",
  "Q; You walk a mile south, a mile east and then a mile north. You end up in exact same spot you started. Where are you?",
  "Q; Everyone is attracted to me and everybody falls for me. What am I?",
  "Q; What must you give before you can keep it?",
  "Q; What did the pig say when the farmer caught him by the tail?",
  "Q; What can you add to the number one to make it disappear?",
  "Q; I am the son of your grandmother and grandfather but not your uncle. Who am I?",
  "Q; What is something you can give away as many times you want without ever losing it?",
  "Q; What man can shave 10 times a day and still have a beard?",
  "Q; Which word contains all 26 letters?",
  "Q; What two letters in the alphabet say goodbye?",
  "Q; A man was cleaning the windows of a four story building. He slipped and fell off the ladder, but wasn’t hurt. How is that possible?",
  "Q; What do you throw out when you want to use it, but take in when you don’t want to use it?",
  "Q; You use a knife to slice my head and weep beside me when I am dead. What am I?",
  "Q; I am always in front of you but yet I am never here. What am I?",
  "Q; A ship is filled with people yet there is not a single person on board. How can that be?",
  "Q; What does everyone know how to open but not how to close?",
  "Q; You use it between your head and your toes, the more it works the thinner it grows. What is it?",
  "Q; What is put on a table, cut, but never eaten?",
  "Q; I run but cannot walk, sometimes sing but never talk. What am I?",
  "Q; What can fly without wings?",
  "Q; I am needed in life but not in death. You can’t have fun without me. What am I?",
  "Q; Sometimes I am light, sometimes I am dark. Most people like me. What am I?",
  "Q; A man purchased a $10,000 car but he didn’t have to pay a penny. How did he do it?",
  "Q; What has no lid, hinges or key, yet golden treasure can be found inside?",
  "Q; How many animals of each species did Moses take on the ark with him?" 
]

var riddlekids = ["Q; Why did the boy bury his flashlight?",
"Q; What time is it when an elephant sits on your fence?",
"Q; Which is faster, hot or cold?",
"Q; What do Henry the Eighth and Kermit the Frog have in common?",
"Q; What is the Easter bunny’s favorite kind of music?",
"Q; Where does the Easter bunny like to eat breakfast?",
"Q; What do frogs order when they go to a restaurant?",
"Q; What do you do if your golden retriever gets sick?",
"Q; What did the baby corn say to its mother?",
"Q; What is the sun’s favorite day of the week?",
"Q; What color can you eat?",
"Q; Where do polar bears go to vote?",
"Q; Where do salads try on clothes?",
"Q; Why don’t cows get sick very often?",
"Q; What did the panda bear get when it fell out of the tree?",
"Q; What building has the most stories?",
"Q; What is a kangaroo’s favorite year?",
"Q; Why did the woman take an elephant to the airport instead of a taxi?",
"Q; What do you call a bear with no teeth?",
"Q; Where do fish keep their money?",
"Q; What did one wall say to the other?",
"Q; What has no beginning, end, or middle?",
"Q; What table you can eat?",
"Q; Where should you put a noisy dog?",
"Q; What dress does everyone have, but no one wears?",
"Q; I am easy to get into but hard to get out of. What am I?",
"Q; What do you call a rabbit with fleas?",
"Q; What has to be broken before you can use it?",
"Q; What kind of tree can you carry in your hand?",
"Q; What has 4 eyes but can’t see?",
"Q; What’s orange and sounds like a parrot?",
"Q; What kind of room has no doors or windows?",
"Q; What kind of dog keeps the best time?",
"Q; What asks but never answers?",
"Q; What can you catch but can not throw?",
"Q; What has a foot but no legs?"

]

var riddlefunny = ["Q; What do you get when you mix a snowman and a wolf?",
"Q; There are ten cats on a boat. One jumps off. How many are left?",
"Q; What do you call a cow with no legs?",
"Q; What type of shoes do spies wear?",
"Q; Why do French people like to eat snails?",
"Q; What do you call somebody with no body and no nose?",
"Q; What do spiders in Silicon Valley want to be when they grow up?",
"Q; How do football players stay cool during games?",
"Q; Why do Chinese men eat more rice than Japanese men?",
"Q; What kind of vegetable is unpopular on board ships?",
"Q; What is Marie Curie’s favorite food?",
"Q; Say the following: roast, boast, coast, post. What do you put in a toaster?",
"Q; You walk into a room and see a rabbit holding a carrot, a pig eating slop, and a chimpanzee holding a banana. Which is the smartest the smartest animal in the room?",
"Q; What do babies and basketball players have in common?",
"Q; What does an envelope say when you lick it?",
"Q; How many men were born last year?",
"Q; What never gets any wetter no matter how hard it rains?",
"Q; What does an island and the letter T have in common?",
"Q; What do you get when you cross an elephant with a rhino?",
"Q; Why did Cinderella get kicked off the football team?",
"Q; What three letters change a girl into a woman?",
"Q; Be quick and say the first thing that comes to your head. What do cows drink?",
"Q; What’s the difference between a politician and a flying pig?",
"Q; Which berry makes a harsh noise?",
"Q; A doctor and a bus driver are both in love the same woman. The bus driver had to take a trip for a week. Before leaving he gave the woman seven apples. Why?",
"Q; What do you get when you mix lemons with gun powder?",
"Q; What is big and yellow and comes in the morning to brighten mom’s day?",
"Q; What has wheels and flies but is not an aircraft?",
"Q; What has a bottom at the top?",
"Q; A barrel of water weighs 75 pounds. What must you add to it to make it weigh 60 pounds?",
"Q; What is black and white and has wheels?",
"Q; Why are teddy bears never hungry?",
"Q; Which word in the dictionary is spelled incorrectly?",
"Q; What are the strongest days of the week?",
"Q; Why do communists write everything in lower case?",
"Q; What is it called when Batman skips church?",
"Q; What does an angel use to start a fire?",
"Q; What do Eskimos get from sitting on the ice for way too long?",
"Q; What do you call a boomerang that doesn’t work?",
"Q; Why do cows have hooves instead of feet?",
"Q; What does an orange do when it takes a rest?",
"Q; What is the easiest way to keep water from running?",
"Q; Why was the math book always so depressed?",
"Q; What was the first man made invention that could see through a wall?",
"Q; Why did the lemon disapprove of his daughter?",
"Q; What’s the last thing that goes through a bug’s mind as it hits the windshield?",
"Q; What’s in a man’s pants that you won’t find in a girl’s dress?",
"Q; What time is it when the clock strikes 13?",
"Q; What does a vegetarian zombie eat?",
"Q; What did the big candle say to the little candle?" 
]


var riddlebest = ["Q; What turns everything around but does not move?",
"Q; I know a word of letters three. Add two and fewer there will be. What is the word?",
"Q; If a cat can jump 5 feet high, then why can’t it jump through a window that is 3 feet high?",
"Q; What do you call a dozen rabbits in a row walking backward?",
"Q; You answer me, but I never ask you a question. What am I?",
"Q; If you jump off a two story building where to you land?",
"Q; What is the easiest way to double your money?",
"Q; What is harder to catch the faster you run?",
"Q; What walks on four feet in the morning, two in the afternoon and three at night?",
"Q; Before Mt. Everest was discovered, what was the highest mountain in the world?",
"Q; What connects two people but only touches one?",
"Q; Who gets paid when they drive away their customers?",
"Q; If an airplane crashed exactly on the border of the United States and Canada, where would the survivors be buried?",
"Q; How far can you run into the woods?",
"Q; Imagine you are in a room with no doors or windows, how do you get out?",
"Q; What belongs to you but other people use it more than you do?",
"Q; The more it dries, the wetter it becomes. What is it?",
"Q; What word is always pronounced wrong?",
"Q; A farmer has 10 cows, all but six die, how many are left?"
]



var riddlehard = ["Q; What spends the day at the window, goes to the table for meals and hides at night?",
"Q; Most people need it, some ask for it, some give it, but almost nobody takes it. What is it?",
"Q; I turn around once. What is out will not get in. I turn around again. What is in will not get out. What am I?",
"Q; What goes into the water black and comes out red?",
"Q; How can you give someone $83 using exactly 7 bills, without using any one dollar bills?",
"Q; Two girls were born to the same mother, on the same day, at the same time, in the same month and year and yet they’re not twins. How can this be?",
"Q; What two letters can you use to spell the word candy?",
"Q; I always follow my brother but you cannot see me, only him. You cannot hear him but you can hear me. What are we?",
"Q; How do you make the number 7 even without addition, subtraction, multiplication or division?",
"Q; If it’s information you seek, come and see me. If it’s pairs of letters you need, I have consecutively three. What am I?",
"Q; I go up and I go down, towards the sky and the ground. I’m present and past tense too, Let’s go for a ride, me and you. What am I?",
"Q; Which word does not belong in the following list: Stop prop crop shop drop or flop?",
"Q; What falls but does not break, and what breaks but does not fall?",
"Q; What word looks the same upside down and backwards?",
"Q; Two German's are standing on a bridge one is the father of the other ones son. What is the relation between them?",
"Q; It is said among my people that some things are improved by death. Tell me, what stinks while living but in death smells good?",
"Q; Whoever makes me, tells me not. Whoever takes me, knows me not. Whoever knows me, wants me not. What am I?",
"Q; What flies when it’s born, lies when it’s alive, and runs when it’s dead?",
"Q; I am a protector. I sit on a bridge. One person can see right through me, while others wonder what I hide. What am I?",
"Q; Two bodies have I, though both joined in one. The more I stand still the faster I run. What am I?",
"Q; I contain five little items of an everyday sort. You can find all five in a tennis court. What am I?",
"Q; I have keys but no locks. I have space but no room. You can enter but cant go outside. What am I?",
"Q; What is broken if you can’t break it?",
"Q; There is a word and six letters it contains. Take one away and twelve is what remains. What word is it?",
"Q; I can tear down mountains, or build them up. I can blind a man, or enable him to see. What am I?",
"Q; A man went to a bar and asked the barman for a glass of water. The barman pointed a gun at him. The man said thank you and left. Why?",
"Q; What word when read from left to right is a ruler but when read right to left is a servant?",
"Q; What is the next letter in this sequence: JFMAMJJASON_ ?",
"Q; If you tell me the truth I will kill you with my sword, if you tell me a lie I will kill you with my spell. What must you say to survive?",
"Q; When the day after tomorrow is yesterday, today will be as far from Wednesday as today was from Wednesday when the day before yesterday was tomorrow. What is the day after this day?",
"Q; It is there from the very start and will be there until the end. To end you must cross over and you must pass through it to begin.",
"Q; What starts with a T ends with a T and is full of T?",
"Q; I touch the Earth, I touch the sky, but if I touch you, you’ll likely die. What am I?",
"Q; Take away my first letter and I sound the same. Take away my last letter, I still sound the same. Take away my letter in the middle, I will still sound the same. I am a 5 letter word. What am I?",
"Q; Why did the girl throw a stick of butter out of her window?",
"Q; What jumps when it walks but sits when it stands?",
"Q; I start with “e” end with “e”. I have whole countries inside me. What am I?",
"Q; I never speak unless spoken to, many have heard me but none have seen me. What am I?",
"Q; What can fill an entire room without taking up any space?",
"Q; What walks on its head all day?",
"Q; You can touch me but you probably wouldn’t want to. I can see you but you can’t see me. What am I?",
"Q; At night they come without being fetched. By day they are lost without being stolen. What are they?",
"Q; I no longer have eyes, but once I did see. Once I had thoughts, but now I’m white and empty. What am I?",
"Q; Walk on the living, they don’t even mumble. Walk on the dead, they mutter and grumble. What are they?",
"Q; It belongs to you but you don’t use it. It does not belong to other people but they use it. What is it?",
"Q; What can you hold in your right hand but never in your left hand?",
"Q; You can easily touch me but not see me. You can throw me out but never away. What am I?",
"Q; What is the difference between a school boy studying and a farmer watching his cattle?",
"Q; What is black when you buy it, red when you use it, and gray when you throw it away?",
"Q; If the Vice President of the United States dies, who becomes President?" 
]


var brainteaser = ["Q; A woman lives alone in a farmhouse. Two prison escapees intend to kill whoever they see in the farmhouse that night and hideout there. That night, the attack happened but the woman survived. How is that possible?",
"Q; A girl goes to her mother’s funeral and meets the man of her dreams but she doesn’t get his name or number. Nobody knows who the man is. Three days later the girl kills her own sister. Why?",
"Q; When I take five and add six, I get eleven, but when I take six and add seven, I get one. What am I?",
"Q; A woman is sitting in her hotel room when there is a knock at the door. She opens the door to find a man whom she has never seen before. The man said “oh I’m sorry, I thought this was my room.” He then went down the hallway and took the elevator. The woman went back into her room and phoned security. Why?",
"Q; A man is trapped in a room. The room has only two possible exits: two doors. Through the first door there is a room constructed from magnifying glass. The blazing hot sun instantly fries anything or anyone that enters. Through the second door there is a fire-breathing dragon. How does the man escape?",
"Q; What do the following words have in common: Racecar, Civic, Eye, Level?",
"Q; Mary was born on December 25th, yet her birthday is always in the summer. How is this possible?",
"Q; A town has only two barbers. One of the barbers has a nice, tidy haircut, and the other has a shaggy, messy haircut. Which barber should you go to?",
"Q; Two men had lunch together and order iced teas to drink. One man had five during lunch while the other man had only one. All of the drinks were poisoned. The man that had only one drink died but the man that had five drinks survived. How can that be?",
"Q; Five men went into a church in the pouring rain. None of the men had an umbrella but one man did not get wet. How is that possible?",
"Q; Two men are playing chess. They play five games. Each man wins three games. How is that possible?",
"Q; Two men are playing chess. They play five games. Each man wins three games. How is that possible?",
"Q; A bus driver goes the wrong way on a one way street. He passes the cops but they don’t stop him. Why?",
"Q; A farmer has a wolf, a chicken, and a bag of grain he needs to get accross a river. He has one boat to take them all across. He can only take one at a time. He cant leave the wolf alone with chicken or the chicken alone with grain. How does he do it?",
"Q; A man shot his wife, soaked her in acid, then 10 minutes later took her out to dinner. How did he do it?",
"Q; A boy and his father are in a car crash. The father dies and the boy is rushed to the hospital. They surgeon see’s the boy and says I cannot operate on him, he is my son. Who is the surgeon?",
"Q; What is in seasons, seconds, centuries and minutes but not in decades, years or days?",
"Q; An archaeologist digs up two perfectly preserved bodies. He immediately identifies them as Adam and Eve. How can he tell they are Adam and Eve?",
"Q; A square house is being circled by a large bear. All of the walls of the house face South. What color is the bear?",
"Q; What is weightless but takes two people to hold it?",
"Q; What English word sounds the same even after you take away four of its five letters?",
"Q; A man leaves home and turns left three times. When he returns home he finds two men wearing masks. Who are the two men?",
"Q; Thirty-two white horses on a red hill. When you talk, they move. When you’re silent, they stand still. They can be lost, but replaced only once.",
"Q; A hobo can make a new cigarette from 4 cigarette buts. If the hobo finds 16 cigarette butts, how many cigarettes can he make?",
"Q; What are four days of the week that begin with the letter “T”?",
"Q; The rungs of a 10 foot ladder attached to a ship are 1 foot apart. If the water is rising at the rate of two foot an hour, how long will it take until the water covers over the ladder?",
"Q; You have a dime and a dollar. You buy a dog and a collar. The dog costs one dollar more than the collar. How much is the collar?",
"Q; A doctor gives you 5 pills and tells you to take one every 30 minutes. How long will it take you to finish the pills if you follow the doctors orders?",
"Q; The person who makes it, has no need of it. The person who buys it, has no use for it. The person who uses it can neither see nor feel it. What is it?",
"Q; A sundial is the timepiece with the least amount of moving parts. What is the timepiece with the greatest amount of moving parts?",
"Q; A cyclist in a cross-country race, just before the crossing finish line overtakes the person in second place. What place did the cyclist finish in?",
"Q; You throw away the outside then eat the inside. Then you throw away the outside and eat the inside. What is it?"
]


var riddlemath = ["Q; There was a girl half my age when I was 12, now I am 64, how old is she?",
"Q; Math time. If you are cold where do you go to become hot?",
"Q; How can you give someone $83 using exactly 7 bills, without using any one dollar bills?",
"Q; You want to purchase 3-cent stamps. You’re at the post office and waiting in line for your turn. How many 3-cent stamps you will get in a dozen?",
"Q; 6 = 12, 3= 6, but 5 does not = 10, how come?",
"Q; What is the next number in the following series: 100 365 24 60?",
"Q; Divide 20 by half and add 30, what do you get?",
"Q; How can you take away 1 from 19 and the result would be the number 20?",
"Q; What three number result in the same answer whether they are added together or multiplied?",
"Q; When can you add 2 to 11 and get 1 as the answer?",
"Q; Why was the math book always so depressed?",
"Q; If 3 salesmen can sell three cars in seven minutes, how many cars can six salesmen sell in seventy minutes?",
"Q; What 3 digit number will give you the same answer whether you subtract 5 or divide by 5?",
"Q; Joe has been hired to paint the numbers 1 through 100 on 100 apartments. How many times will he paint the number 8?",
"Q; Your mother’s brother’s only brother-in-law is asleep on your couch. Who is asleep on your couch?",
"Q; Mr. Smith has 4 daughters. Each of his daughters has a brother. How many children does Mr. Smith have?",
"Q; My age today is three times what it will be three years from now minus three times what my age was three years ago. How old am I?",
"Q; How much dirt is there in a hole that is 3 ft deep, and 9 inches in diameter?",
"Q; Which weighs more, a pound of feathers or a pound of bricks?",
"Q; What has 3 feet but cannot walk?",
"Q; What number do you get when you multiply all of the numbers on a telephone’s dial pad?",
"Q; What three numbers give the same answer when multiplied together or added together?",

]

   function randomRiddleEasy() {
    return riddleeasy[Math.floor(Math.random() * riddleeasy.length)];
  };
  il.add(randomRiddleEasy, []);
  
  il.run();

  function randomRiddleHard() {
    return riddlehard[Math.floor(Math.random() * riddlehard.length)];
  };
  il.add(randomRiddleHard, []);
  
  il.run();

function randomRiddleFun() {
    return riddlefunny[Math.floor(Math.random() * riddlefunny.length)];
  };
  il.add(randomRiddleFun, []);
  
  il.run();

  function randomRiddleBest() {
    return riddlebest[Math.floor(Math.random() * riddlebest.length)];
  };
  il.add(randomRiddleBest, []);
  
  il.run();

  function randomRiddleGood() {
    return riddlegood[Math.floor(Math.random() * riddlegood.length)];
  };
  il.add(randomRiddleGood, []);
  
  il.run();

  function randomRiddleKids() {
    return riddlekids[Math.floor(Math.random() * riddlekids.length)];
  };
  il.add(randomRiddleKids, []);
  
  il.run();

  function randomRiddleMath() {
    return riddlemath[Math.floor(Math.random() * riddlemath.length)];
  };
  il.add(randomRiddleMath, []);
  
  il.run();

  function randomRiddleBT() {
    return brainteaser[Math.floor(Math.random() * brainteaser.length)];
  };
  il.add(randomRiddleBT, []);
  
  il.run();

client.on('message', msg => {
  if (msg.content === '!kids riddle') {
    msg.reply(randomRiddleKids());
  }
});

client.on('message', msg => {
  if (msg.content === '!hard riddle') {
    msg.reply(randomRiddleHard());
  }
});

client.on('message', msg => {
  if (msg.content === '!math riddle') {
    msg.reply(randomRiddleMath());
  }
});

client.on('message', msg => {
  if (msg.content === '!good riddle') {
    msg.reply(randomRiddleGood());
  }
});

client.on('message', msg => {
  if (msg.content === '!funny riddle') {
    msg.reply(randomRiddleFun());
  }
});

client.on('message', msg => {
  if (msg.content === '!best riddle') {
    msg.reply(randomRiddleBest());
  }
});

client.on('message', msg => {
  if (msg.content === '!brain teaser') {
    msg.reply(randomRiddleBT());
  }
});

client.on('message', msg => {
  if (msg.content === '!easy riddle') {
    msg.reply(randomRiddleEasy());
  }
});
client.on('message', msg => {
  if (msg.content === '!help') {
  msg.reply("```**Commands ! **```"+
    "```!easy riddle = Easy Riddles, :smirk: ```" +
     "```!hard riddle = Hard Riddles,:thinking:  ```" +
      "```!best riddle = Best Riddles,:smile: ```" +
      "```!brain teaser = Brain Teaser's, :confounded: ```" +
       "```!math riddle = Math Riddles, :nerd: ```" +
        "```!funny riddle = Funny Riddles, :joy: ```"+
         "```!good riddle = Good Riddles, :smiley: ```" +
          "```!kids riddle = Kid's Riddles :baby:  ```");
  }
});

client.login(process.env.BOT_TOKEN);

