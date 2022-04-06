import { useState, useEffect } from "react";
import InputText from "../../components/InputText/InputText.component";
import OutputImg from "../../components/OutputImg/OutputImg.component";

const Main = () => {
  const [allMemeImages, setAllMemeImages] = useState({});

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const getMemeImage = () => {
    const randomMemes = allMemeImages.map((meme) => meme.url);
    let draw = randomMemes[Math.floor(Math.random() * randomMemes.length)];
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: draw }));
  };

  useEffect(() => {
    async function getMemes() {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setAllMemeImages(data.data.memes);
    }
    getMemes();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const onClickHandler = () => getMemeImage();

  return (
    <main style={{ backgroundColor: "white" }}>
      <InputText
        text="Get a new meme image"
        handler={onClickHandler}
        handleChange={handleChange}
        topText={meme.topText}
        bottomText={meme.bottomText}
        name1="topText"
        name2="bottomText"
        makeMeme={handleSubmit}
      />
      <OutputImg
        url={meme.randomImage}
        top={meme.topText}
        bottom={meme.bottomText}
      />
    </main>
  );
};

export default Main;
