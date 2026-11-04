/* My English World Ultimate
   Game Engine V1.0
*/

const Game = {
  player: {
    name: "Little Explorer",
    level: 1,
    coins: 0,
    stars: 0,
    experience: 0
  },

  fox: {
    name: "Foxy",
    mood: "happy",
    greeting: "Hello, my friend! Are you ready for an adventure?"
  },

  lessons: [
    {
      id: 1,
      title: "Hello, World!",
      words: ["Hello", "Hi", "Goodbye", "Thank you"],
      question: "How do you greet a friend?",
      answer: "Hello"
    },
    {
      id: 2,
      title: "Meet the Animals",
      words: ["Cat", "Dog", "Rabbit", "Elephant"],
      question: "Which animal says Woof?",
      answer: "Dog"
    },
    {
      id: 3,
      title: "My Family",
      words: ["Mother", "Father", "Sister", "Brother"],
      question: "Who is your mother?",
      answer: "Mother"
    }
  ],

  say(text) {
    if (!("speechSynthesis" in window)) {
      alert(text);
      return;
    }

    speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 0.85;
    speech.pitch = 1.15;

    speechSynthesis.speak(speech);
  },

  answer(correct) {
    if (correct) {
      this.player.coins += 10;
      this.player.stars += 1;
      this.player.experience += 10;
      return "Amazing! You did it!";
    }

    return "Good try! Let's try again!";
  }
};

window.Game = Game;

console.log("My English World Ultimate loaded!");
