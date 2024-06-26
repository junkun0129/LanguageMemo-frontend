import React, { useEffect, useRef, useState } from "react";
import { deleteWordApi, getWordsApi, registerWordApi } from "./apis/words";

type Word = {
  word_id: string;
  word_name: string;
  word_name_jp: string;
};
function App() {
  const [words, setwords] = useState<Word[]>([]);

  const nameRef = useRef<HTMLInputElement>(null);
  const nameJpRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    updateWords();
  }, []);

  const updateWords = async () => {
    getWordsApi().then((data) => {
      console.log(data, "data");
      setwords(data.data as Word[]);
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const nameValue = nameRef.current?.value;
    const nameJpValue = nameJpRef.current?.value;
    if (!nameValue && !nameJpValue) return;
    const body = {
      word_name: nameValue,
      word_name_jp: nameJpValue,
    };
    const res = await registerWordApi(body);
    updateWords();
    console.log(res);
  };

  const handleOnDeleteClick = async (id: string) => {
    const body = { word_id: id };
    const res = await deleteWordApi(body);
    console.log(res);
    updateWords();
  };
  return (
    <div>
      {words?.map((item) => (
        <div className="flex">
          <div>{item.word_name}</div>
          <div>：</div>
          <div>{item.word_name_jp}</div>
          <button onClick={() => handleOnDeleteClick(item.word_id)}>✕</button>
        </div>
      ))}
      <div className=" bg-red-50">
        <form onSubmit={handleSubmit}>
          <input style={{ border: "black solid 1px" }} ref={nameRef} />
          <input style={{ border: "black solid 1px" }} ref={nameJpRef} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
