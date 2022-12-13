/*
The API privides followings
---------------------------
"created_at":"2022-07-27T00:47:35.036Z",
"updated_at":"2022-07-27T00:47:35.036Z",
"category_id":453,
"game_id":2419,
"invalid_count":null,

"category":{
"id":453,
"title":"food & drink",
"created_at":"2022-07-27T00:24:47.974Z",
"updated_at":"2022-07-27T00:24:47.974Z",
"clues_count":321}
---------------------------

We need to extract information.
}
*/

import "./App.css";
import { useState, useEffect } from "react";
const url = `https://jservice.io/api/random`;


// --Following is manually add and deduct points from individuale participant

function SetScorePoints() {
  const points = 100
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + points);
  };

  const handleDecrement = () => {
    setCount(count - points);
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <p className="title">Welcome to Jeopardy!</p>
      <p className="scoreP">
      <span className="score-play">Score: </span><span className="point">{count}</span>
      </p><br /><br />
      <section>
        <button className="decrease" onClick={handleDecrement}>Decrease</button>
        <button className="increase" onClick={handleIncrement}>Increase</button>
        <button className="reset" onClick={handleReset}>Reset</button><br/>
        <span className="score-play"> Let's Play</span>
      </section>
    </>
  );
}

//  ----- This button reveals the qoute (answer to the question) that system 
//        present`s to the player to guess the related question
function Answer({ answer }) {// answer not changeable
  const loaded = () => {
    return (
      <>
        <h1>{answer.question}</h1>
        <h1 className="category">Category: {answer.category.title}</h1>
        <h1 className="points">Points: {answer.value}</h1>
      </>
    )
  }
  const loading = () => {
    return <h1>Nada ...Loading</h1>
  }
  return answer ? loaded() : loading()
}

// ---This button reveals the question that player need to guess
function CategoryButton(props) {
  const handleClick = () => {
  props.getAnswer()
  props.setQuestion("")
}
return (
  <div >
    <button className="selectCategory" onClick={handleClick}>
      Select a Random Category and Points
    </button>
  </div>
);
};

//  ----- Provided the answer (qoute) This reveals the question that player need to guess
function WhatIsButton({ answer, question, setQuestion }) {
  const loaded = () => {
    const handleClick = () => {
      setQuestion(answer.answer)
    }
    return (
      <>
        <button className="getQuestion" onClick={handleClick}>Click to Reveal Question</button>
        <h1>What is ...  {question} </h1>
      </>
    )
  }
  const loading = () => {
    return <h1> Nada ... Loading</h1>
  }
  return answer ? loaded() : loading()
}

// --This the App that brings all together
function App() {
  const [qoute, setRandomqoute] = useState(null);

  const getAnswerFromAPI = async () => {
    try{
    const response = await fetch(url);
    const data = await response.json();

    setRandomqoute(data[0]);
    } catch(err){
    console.log(err)
    }
  };

  useEffect(() => { getAnswerFromAPI();}, ["  "]);

  const [question, setQuestion] = useState("");

  return (
    <div>
        <SetScorePoints />
        <CategoryButton getAnswer={getAnswerFromAPI} setQuestion={setQuestion} className="answerDiv"/>
        <Answer answer={qoute} />
        {/* // answer, question, category objects in an array Pprovided by API */}
        <WhatIsButton setQuestion={setQuestion} question={question} answer={qoute} />
    </div>
  );
} 

export default App;
