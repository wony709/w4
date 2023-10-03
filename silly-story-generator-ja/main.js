const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "気温 華氏94度で外は寒かった。 :insertx:は出かけた。 :inserty:についた。 :insertz: 体重300ポンドの:insertx:は驚いたが、ボブは驚かなかった。 :inserty:ではよくあることだった。";
const insertX = ["ブチャラティ", "カナメ", "てん"];
const insertY = ["ディズニーランド", "スターバックス", "東京都庁"];
const insertZ = ["水で溢れかえっていた。", "人々が皆ボックスステップを踏んでいた。", "人は皆後ろ向きに歩いていた。"];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("ボブ", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} kg`;
    const temperature =  `摂氏${Math.round((40-32) * 5 / 9)}`;
    newStory = newStory.replace("華氏94", temperature);
    newStory = newStory.replace("300ポンド", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
