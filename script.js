const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

//search fruit list and if any letter from str matches any fruit name, return the fruit(s)
function search(str) {
  let results = [];
  //return empty array if no input
  if (str.length === 0) {
    return results;
  }
  //if case insensitive fruits include a character from str, add fruit to results
  fruit.forEach(function (fruits) {
    if (fruits.toLowerCase().includes(str.toLowerCase())) {
      results.push(fruits);
    }
  });
  //return first 3 results
  return results.slice(0, 3);
}
//add search to search handler to show list
function searchHandler(e) {
  //clear previous suggestions
  suggestions.innerHTML = "";
  //search input value on keyup
  const results = search(e.target.value);
  //incorporated showSuggestions to connect these
  showSuggestions(results);
}

function showSuggestions(results, inputVal) {
  //create new li to add to the list with search value for each result
  results.forEach(function (result) {
    const newLi = document.createElement("li");
    newLi.innerText = result;
    suggestions.appendChild(newLi);
  });
}

function useSuggestion(e) {
  //if target is an li, then change the main input's value to the value of what you clicked
  if (e.target.tagName === "LI") {
    input.value = e.target.innerText;
    // reset suggestions
    suggestions.innerHTML = "";
  }
}
//add mouseover hover effects in js
function highlight(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.add("has-suggestions");
  }
}
function unhighlight(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.remove("has-suggestions");
  }
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
suggestions.addEventListener("mouseover", highlight); //add mouseover
suggestions.addEventListener("mouseout", unhighlight); //add mouseout

//watched video for refresher and inspiration https://www.youtube.com/watch?v=pdyFf1ugVfk&ab_channel=GreatStack
