var nouns;
nouns = [
    "ethel cain top me pls!",
    "this was one of my old projects",
     "i dont like minorities!",
     "uhh",
     "i dunno",
     "How to tell if im pregnent", 
     "How to prenounce dog-o-coin",
     "Why farts smell?",
     "all transfer bitcoin to dog-oe-coin",
     "ADAM MARRY",
     "I love hummas",
     "garry is sexy",
     "You love hummas",
     "they love hummas",
     "She loves hummas",
     "It loves hummas",
     "ham and hummas",
     "Bitch - female dog",
     "Andrew Tate is NOT HOT",
     "Hummas is god", "I am fat",
     "Brandon 2022",
     "Hello Mr Burne",
     "I killed myself to make this",
     "e",
     "Google.com website",
     "POSTER, I ATE A POSTER RIGHT",
     "Big cat chase night",
     "AHH MY THROAT IS DYING,",
     "MAH MAH MAH MEOW OWO",
     "Facebook.com- My grandson, Nathan.",
     "Kate Winslet cool.", 
     "Adderal max dose.. 165 lbs man... 20 years old?",
     "sully is very cool... and pretty?",
     "Jennifer!",
     "AidanTheBandit is poggers",
     "w",
     "Go to BanditCo now,",
     "muckman",
     "i dont know, whats its for, what is it for?",
     "pineapple, magpie",
     "chess is poggers",
     "i like eating cheese",
     "umm more,I dont know, Im scrared, fleter sucks",
     "why do you have so many exstentions",
     "legumes",
     "LEWIS GET OFF PCPARTS!!!",
     "Its the effort to come to school till 9:45",
     "im not weird!",
     "Bacon murdered richard nickson",
     "at some sort people sleep at this school",
     "ahh, there was once a child called fleter, he was every annoying and stole other peoples stuff.",
     "poggers",
     "lewis gets no bitches",
     "lewis gets lots of bitches",
     "robots r hot",
     "another reason to nerf miner",
     
    
    ];


function randGen() {
  return Math.floor(Math.random() * 5);
}

function sentence() {
  var rand1 = Math.floor(Math.random() * 55);
  
  var content = nouns[rand1];

  document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
};
sentence();
