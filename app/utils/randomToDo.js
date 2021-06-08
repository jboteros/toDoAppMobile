/* @flow */

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const actions = [
  "call",
  "read",
  "dress",
  "buy",
  "ring",
  "hop",
  "skip",
  "jump",
  "look",
  "rob",
  "find",
  "fly",
  "go",
  "ask",
  "raise",
  "search",
];
const bridges = ["the", "a", "an", "my", "as", "by", "to", "in", "on", "with"];
const targets = [
  "dog",
  "doctor",
  "store",
  "dance",
  "jig",
  "friend",
  "enemy",
  "business",
  "bull",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Mom",
  "Dad",
];

const randomWord = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

export const randomToDo = (n: number) => {
  let data = [];

  for (let i = 0; i < n; i++) {
    const title = capitalizeFirstLetter(randomWord(actions));
    data.push({
      id: `${i} ${new Date().getTime().toString()}`,
      title,
      body: title + " " + randomWord(bridges) + " " + randomWord(targets),
      isDone: false,
    });
  }

  return data;
};
