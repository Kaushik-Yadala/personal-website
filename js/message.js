let text_box = document.getElementById("text_box");

text_box.addEventListener("input", function () {
  let text = text_box.value;
  // console.log(text);

  // ------------ COUNTS --------------------
  let words = text.split(/[ \n,.]/g).filter((word) => word.trim() !== "");

  // getting the word count
  if (words.length > 10000) {
    let wordDiv = document.getElementById("words");
    let wP = wordDiv.getElementsByTagName("p");

    wP[0].innerText = `Words: ${words.length}`;

    // getting the letter count
    let letterRegex = /[a-zA-Z]/g;
    let letterDiv = document.getElementById("letters");
    let lP = letterDiv.getElementsByTagName("p");

    try {
      lP[0].innerText = `Letters: ${text.match(letterRegex).length}`;
    } catch (err) {
      lP[0].innerText = `Letters: 0`;
    }

    let numberRegex = /[0-9]/g;
    let numberDiv = document.getElementById("numbers");
    let nuP = numberDiv.getElementsByTagName("p");

    try {
      nuP[0].innerText = `Numbers: ${text.match(numberRegex).length}`;
    } catch (err) {
      nuP[0].innerText = `Numbers: 0`;
    }

    // getting the space count
    let spaceRegex = / /g;
    let spaceDiv = document.getElementById("spaces");
    let sP = spaceDiv.getElementsByTagName("p");

    try {
      sP[0].innerText = `Spaces: ${text.match(spaceRegex).length}`;
    } catch (err) {
      sP[0].innerText = `Spaces: 0`;
    }

    // getting the newline count
    let nlRegex = /[\n]/g;
    let nlDiv = document.getElementById("newlines");
    let nlP = nlDiv.getElementsByTagName("p");

    try {
      nlP[0].innerText = `Newlines: ${text.match(nlRegex).length}`;
    } catch (err) {
      nlP[0].innerText = `Newlines: 0`;
    }

    // special symbols
    // As numbers are not specifically asked, they are being included as part of the special symbols, basically everything that has not has been counted before will be a part of this count

    let sRegex = /[a-zA-z0-9 \n]/g;
    let sDiv = document.getElementById("special");
    let ssP = sDiv.getElementsByTagName("p");

    try {
      ssP[0].innerText = `Special Symbols: ${text.length - text.match(sRegex).length}`;
    } catch (err) {
      ssP[0].innerText = `Special Symbols: 0`;
    }

    // ------------ PRONOUNS --------------------
    const pronouns = [
      "I",
      "me",
      "my",
      "mine",
      "myself",
      "we",
      "us",
      "our",
      "ours",
      "ourselves",
      "you",
      "your",
      "yours",
      "yourself",
      "yourselves",
      "they",
      "them",
      "their",
      "theirs",
      "themselves",
      "he",
      "him",
      "his",
      "himself",
      "she",
      "her",
      "hers",
      "herself",
      "it",
      "its",
      "itself",
      "who",
      "whom",
      "whose",
      "what",
      "which",
      "this",
      "that",
      "these",
      "those",
      "everyone",
      "everybody",
      "anyone",
      "anybody",
      "someone",
      "somebody",
      "no one",
      "nobody",
    ];

    let pronounMap = new Map();

    for (let word of words) {
      if (pronouns.includes(word.toLowerCase())) {
        let count = pronounMap.get(word.toLowerCase()) || 0;
        pronounMap.set(word.toLowerCase(), count + 1);
      }
    }

    let pronounDiv = document.getElementById("pronouns");
    let pronounP = pronounDiv.getElementsByTagName("p");

    let pronounRes = "";
    for (let [key, value] of pronounMap) {
      pronounRes += `${key}: ${value}<br>`;
    }

    pronounP[0].innerHTML = pronounRes;

    console.log(pronounMap);

    // ------------ PREPOSITIONS --------------------

    const Prepositions = [
      "about",
      "above",
      "according to",
      "across",
      "after",
      "against",
      "ahead of",
      "along",
      "along with",
      "amid",
      "among",
      "amongst",
      "apart from",
      "around",
      "as",
      "as far as",
      "as of",
      "as well as",
      "at",
      "atop",
      "because of",
      "before",
      "behind",
      "below",
      "beneath",
      "beside",
      "besides",
      "between",
      "beyond",
      "but",
      "by",
      "by means of",
      "circa",
      "concerning",
      "despite",
      "down",
      "due to",
      "during",
      "except",
      "except for",
      "excluding",
      "following",
      "for",
      "from",
      "in",
      "in accordance with",
      "in addition to",
      "in case of",
      "in front of",
      "in lieu of",
      "in place of",
      "in spite of",
      "inside",
      "instead of",
      "into",
      "like",
      "minus",
      "near",
      "next to",
      "notwithstanding",
      "of",
      "off",
      "on",
      "on account of",
      "on behalf of",
      "on top of",
      "onto",
      "opposite",
      "out",
      "out of",
      "outside",
      "over",
      "past",
      "per",
      "plus",
      "regarding",
      "round",
      "save",
      "since",
      "than",
      "through",
      "throughout",
      "till",
      "to",
      "toward",
      "towards",
      "under",
      "underneath",
      "unlike",
      "until",
      "up",
      "upon",
      "versus",
      "via",
      "with",
      "within",
      "without",
    ];

    let prepositionMap = new Map();

    for (let word of words) {
      if (Prepositions.includes(word.toLowerCase())) {
        let count = prepositionMap.get(word.toLowerCase()) || 0;
        prepositionMap.set(word.toLowerCase(), count + 1);
      }
    }

    let prepositionDiv = document.getElementById("prepositions");
    let prepositionP = prepositionDiv.getElementsByTagName("p");

    let prepositionRes = "";
    for (let [key, value] of prepositionMap) {
      prepositionRes += `${key}: ${value}<br>`;
    }

    prepositionP[0].innerHTML = prepositionRes;

    // ------------ INDEFINITE ARTICLES --------------------
    const articles = ["a", "an"];

    let articleMap = new Map();

    for (let word of words) {
      if (articles.includes(word.toLowerCase())) {
        let count = articleMap.get(word.toLowerCase()) || 0;
        articleMap.set(word.toLowerCase(), count + 1);
      }
    }

    let articleDiv = document.getElementById("articles");
    let articleP = articleDiv.getElementsByTagName("p");

    let articleRes = "";
    for (let [key, value] of articleMap) {
      articleRes += `${key}: ${value}<br>`;
    }

    articleP[0].innerHTML = articleRes;
  }
});
