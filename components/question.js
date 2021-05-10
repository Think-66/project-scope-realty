import React, { useState } from "react";

const Question = ({ question, onNextClicked }) => {
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});

  const onOptionClicked = (option) => {
    setAnswered(true);
    setSelectedOption(option);
  };

  const isCorrect = (option) => {
    // return option === question.answer;
    return option.is_correct;
  };

  const resetQuestion = () => {
    setAnswered(false);
    setSelectedOption({});
    onNextClicked(selectedOption);
  };

  const optionClass = (option, answered, selectedOption) => {
    if (answered && option.is_correct && selectedOption.id == option.id) {
      return "text-success";
    }
    if (answered && !option.is_correct && selectedOption.id == option.id) {
      return "text-warning";
    }
    return "";
  };

  return (
    <div className="question">
      {/* <div className="question-image-holder">
        <img className="question-image" src={question.image ? question.image.downloadUrl : ''} alt={question} />
      </div> */}
      <section>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="newyork-tab"
            role="tabpanel"
            aria-labelledby="newyork-tab"
          >
            <div className="col-lg-12 question-head">
              <div className="col-lg-8 col-md-9">
                <h4>{question.question}</h4>
              </div>
              <div className="col-lg-4 col-md-3 idcontent_wrap">
                <span>ID #{question.id}</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="question-text-holder">
          {answered && <button onClick={resetQuestion}>Next</button>}
          <h4 className="question-text">{question.question}</h4>
        </div> */}

        <div className="questioncontent_wrap">
          <h4>Question</h4>
          <p>{question.remediation}</p>
        </div>
        <div className="answer_wrap">
          <h4>Answer</h4>

          {question.options.map((option, index) => {
            return (
              <>
                <input
                  key={index}
                  disabled={answered}
                  id={`answer-options-${index}`}
                  name="answeroptions"
                  onClick={() => setSelectedOption(option)}
                  type="radio"
                  className={`question-option`}
                />
                <label
                  htmlFor={`answer-options-${index}`}
                  className={optionClass(option, answered, selectedOption)}
                >
                  {option.value}
                  <span
                    className={`pl-4 ${
                      isCorrect(option) ? "text-success" : ""
                    }`}
                  >
                    {answered ? (isCorrect(option) ? "✔" : "X") : ""}
                  </span>
                </label>
                <br />
              </>
            );
          })}
        </div>

        <div className="col-lg-12 checkanswer_wrap mb-5">
          <div className="col-lg-6 col-md-6 col-xs-12">
            {answered ? (
              <button
                className="nexttab btn"
                onClick={() => onNextClicked({ question, selectedOption })}
              >
                Next
              </button>
            ) : (
              <button className="nexttab btn" onClick={() => setAnswered(true)}>
                CHECK ANSWER
              </button>
            )}
          </div>
          <div className="col-lg-4 col-md-4 col-xs-12 feedback_wrap">
            <a href="#">PROVIDE FEEDBACK</a>
          </div>
          <div className="col-lg-2 col-md-2  col-xs-12 feedback_wrap">
            <a href> EXIT</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Question;
