import {useState} from "react"
import {questions} from "./questions/questions.js"
import "./style.css"


function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleAnswer(isCorret) {
    if (isCorret) {
      setScore(score + 1);
    }
    const nextQuestions = currentQuestion + 1;
    if (nextQuestions < questions.length) {
      setCurrentQuestion(nextQuestions)
    }else {
      setShowScore(true);
    }
  }


  return (
    <section className="App">
      <div className="app-container">
        {showScore ? (
          <article className="container">
            <p>Voce pontuou {score} de {questions.length}</p>
          </article>
        ):(
          <>
            <article className="questions-container">
                <div className="questions">
                  <p>Questão {currentQuestion + 1} </p>/{questions.length}
                </div>
                <div className="questions-text">
                  {questions[currentQuestion].questionsText}
                </div>
            </article>
            <article className="question-article">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption, index) =>(
                      <button
                          onClick={() => handleAnswer(answerOption.isCorret)}
                          key={index} >
                          {answerOption.answerText}
                      </button>
                   ))
                }
            </article>
          </>
        )}
      </div>
    </section>
  );
}

export default App;
