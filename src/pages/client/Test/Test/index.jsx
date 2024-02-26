import { useState } from "react";
import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAnswer, resetAnswers } from "../../../../redux/test";

const AnswerButton = ({ ind, value, onClick }) => {
  function getLetter(n) {
    switch (n) {
      case 0:
        return "A";
      case 1:
        return "B";
      case 2:
        return "C";
      case 3:
        return "D";
      default:
        break;
    }
  }

  return (
    <div
      onClick={onClick}
      role={"button"}
      className="flex items-start gap-3 py-2 px-3 border-2 rounded-lg hover:bg-sky-50"
    >
      <div className="flex items-center gap-1.5">
        <p className="font-bold font-mono">{getLetter(ind)}</p>
        <input
          type="radio"
          name="answer_button"
          id={"answer_button_" + ind}
          className="scale-150 mt-1"
        />
      </div>
      <label
        htmlFor={"answer_button_" + ind}
        className="w-full"
        role={"button"}
      >
        {" "}
        {value}
      </label>
    </div>
  );
};

const QuestionCard = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const data = [
    {
      id: 1,
      question:
        "Can you name the city that serves as the capital of the North American country known as Canada?",
      options: [
        "Toronto, the largest city in Canada",
        "Vancouver, a major city in western Canada",
        "Ottawa, located in eastern Ontario",
        "Montreal, the largest city in Canada's Quebec province",
      ],
      correct: "Ottawa, located in eastern Ontario",
    },
    {
      id: 2,
      question:
        "What is the capital city of the European country France, known for its culture, fashion, and history?",
      options: [
        "Paris, the city of love and home to the Eiffel Tower",
        "London, the capital of the United Kingdom",
        "Berlin, the capital of Germany known for its Berlin Wall",
        "Madrid, the capital of Spain known for its vibrant culture",
      ],
      correct: "Paris, the city of love and home to the Eiffel Tower",
    },
    {
      id: 3,
      question:
        "Can you calculate the square root of the number 81, a perfect square?",
      options: [
        "7, which is the square root of 49",
        "8, which is the square root of 64",
        "9, which is the square root of 81",
        "10, which is the square root of 100",
      ],
      correct: "9, which is the square root of 81",
    },
    {
      id: 4,
      question:
        "What is the chemical symbol for the element Hydrogen, the lightest and most abundant element in the universe?",
      options: [
        "H, the symbol for Hydrogen",
        "He, the symbol for Helium",
        "Hy, not a symbol for any known element",
        "Ho, the symbol for Holmium",
      ],
      correct: "H, the symbol for Hydrogen",
    },
    {
      id: 5,
      question:
        "Which planet in our solar system is often referred to as the Red Planet due to its reddish appearance?",
      options: [
        "Earth, our home planet",
        "Venus, the second planet from the sun",
        "Mars, the fourth planet from the sun",
        "Jupiter, the largest planet in our solar system",
      ],
      correct: "Mars, the fourth planet from the sun",
    },
  ];
  const handleNext = () => {
    dispatch(
      addAnswer({
        question: data[currentQuestion].question,
        answer: selectedAnswer,
        correct: data[currentQuestion].correct,
      })
    );
    setSelectedAnswer(null);
    if (currentQuestion !== data?.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleFinish = () => {
    dispatch(
      addAnswer({
        question: data[currentQuestion].question,
        answer: selectedAnswer,
        correct: data[currentQuestion].correct,
      })
    );

    navigate("/finish");
  };

  return (
    <div className="w-full">
      <h4 className="text-3xl border rounded-lg p-2">
        {currentQuestion + 1}. {data[currentQuestion]?.question}
      </h4>
      <div className="grid md:grid-cols-2 gap-5 py-3">
        {data[currentQuestion]?.options.map((answer, ind) => (
          <AnswerButton
            key={ind}
            ind={ind}
            value={answer}
            onClick={() => setSelectedAnswer(answer)}
          />
        ))}
      </div>
      <div className="flex items-center gap-5 justify-end">
        <Button
          variant={"outline"}
          onClick={() => {
            if (currentQuestion !== 0) setCurrentQuestion(currentQuestion - 1);
          }}
        >
          <span className="fa-solid fa-arrow-left pr-2" /> {t("previous")}
        </Button>
        {currentQuestion === data.length - 1 ? (
          <Button onClick={handleFinish} disabled={!selectedAnswer}>
            {t("finish")}
          </Button>
        ) : (
          <Button onClick={handleNext} disabled={!selectedAnswer}>
            {t("next")}
            <span className="fa-solid fa-chevron-right pl-2" />
          </Button>
        )}
      </div>
    </div>
  );
};

const index = () => {
  return (
    <section className="flex items-center py-5 lg:py-10">
      <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto text-left lg:py-10 ">
        <QuestionCard />
      </div>
    </section>
  );
};

export default index;
