const generateMemeBtn = document.querySelector(".meme-generator .meme-gen-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

let updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = author;
};

let generateMeme = () => {
  fetch("https://api.imgflip.com/get_memes")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const memes = data.data.memes;
      const randomIndex = Math.floor(Math.random() * memes.length);
      const randomMeme = memes[randomIndex];
      
      const memeUrl = randomMeme.url;
      const memeId = randomMeme.id;
      const memeName = randomMeme.name;
      
      updateDetails(memeUrl, memeId, memeName);
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);
