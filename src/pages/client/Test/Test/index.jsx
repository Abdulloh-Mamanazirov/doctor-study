import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAnswer } from "../../../../redux/test";
import Timer from "./components/Timer";

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

const QuestionCard = ({ data }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

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
  const { id } = useParams();
  const [data, setData] = useState([]);

  async function getData() {
    await axios
      .get(`tests/material/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        return;
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="flex flex-col items-start gap-5 max-w-7xl px-4 mx-auto text-left py-5 lg:py-10">
      {data?.length > 0 && (
        <div className="w-full grid place-items-center">
          <Timer questionsLength={data?.length} />
        </div>
      )}
      <div className="w-full">
        <QuestionCard data={data} />
      </div>
    </section>
  );
};

export default index;
