import React, { useEffect } from "react";

import { findWordsFromLargeStr } from "./utils";
import { dataExample, API } from "./constants";

import "./styles.css";

const App = () => {
  const [cats, setCats] = React.useState(null);
  const [words, setWords] = React.useState(null);

  useEffect(() => {
    if (!words) {
      fetch("https://catfact.ninja/fact")
        .then((response) => response.json())
        .then(({ fact }) =>
          setWords({
            ...words,
            clipped: findWordsFromLargeStr(fact) || dataExample.clipped,
            text: fact || dataExample.text
          })
        );
    }
  }, [words]);

  useEffect(() => {
    if (words && !cats) {
      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${words.clipped}&limit=1`
      )
        .then((response) => response.json())
        .then(({ data }) =>
          setCats({
            alt: data[0]?.title || dataExample.src,
            src: data[0]?.images?.original?.url || dataExample.src
          })
        );
    }
  }, [words, cats]);

  if (!cats) return <p>No hay información para mostrar.</p>;

  return (
    <div className="container">
      <img width="300" alt={cats.alt} src={cats.src} />
      <h1>{words.text}</h1>
    </div>
  );
};

export default App;
