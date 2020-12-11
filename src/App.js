import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍈": "Melon",
  "🍋": "Lemon",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🫐": "Blueberries",
  "🥝": "Kiwi Fruit",
  "🫒": "Olive",
  "🥑": "Avocado",
  "🍆": "Eggplant",
  "🌽": "Ear of Corn",
  "🫑": "Bell Pepper",
  "🥒": "Cucumber",
  "🥬": "Leafy Green",
  "🥖": "Baguette Bread",
  "🫓": "Flatbread",
  "🥨": "Pretzel",
  "🥯": "Bagel",
  "🧇": "Waffle",
  "🧀": "Cheese Wedge",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🌯": "Burrito",
  "🫔": "Tamale",
  "🥙": "Stuffed Flatbread",
  "🧆": "Falafel",
  "🍳": "Cooking",
  "🥘": "Shallow Pan of Food",
  "🍲": "Pot of Food",
  "🫕": "Fondue",
  "🥣": "Bowl with Spoon",
  "🥗": "Green Salad",
  "🍿": "Popcorn",
  "🧈": "Butter",
  "🧂": "Salt",
  "🥫": "Canned Food",
  "🍱": "Bento Box",
  "🍘": "Rice Cracker",
  "🍙": "Rice Ball",
  "🍚": "Cooked Rice",
  "🍛": "Curry Rice",
  "🍜": "Steaming Bowl",
  "🍝": "Spaghetti",
  "🍠": "Roasted Sweet Potato",
  "🍢": "Oden",
  "🍣": "Sushi",
  "🍤": "Fried Shrimp",
  "🍥": "Fish Cake with Swirl",
  "🥮": "Moon Cake",
  "🍡": "Dango",
  "🥟": "Dumpling",
  "🥠": "Fortune Cookie",
  "🥡": "Takeout Box",
  "🦪": "Oyster",
  "🍦": "Soft Ice Cream"
};

const emojiArray = Object.keys(emojiDictionary);

export default function App() {
  const [emojiMeaning, setMeaning] = useState("");

  function emojiInputHandler() {
    let userInput = event.target.value;
    let meaning = emojiDictionary[userInput];
    // if user is looking for emoji which is not in `emojiDictonary`
    if (meaning === undefined) {
      meaning = "sorry we don't have this emoji in our database 😟";
    }
    // after looking for some emojin when user clear the input
    if (userInput === "") {
      meaning = "";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <div className="app-heading">This is Foodomoji</div>
      <input className="app-input" onChange={emojiInputHandler}></input>
      <div className="app-emoji-meaning">{emojiMeaning}</div>
      <div className="app-emoji-collection">
        {emojiArray.map((emoji) => {
          return (
            <span
              key={emoji}
              className="app-emoji"
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
