import { Button } from "@mantine/core";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card = ({ ind, data }) => {
  return (
    <div className="w-full border rounded-lg p-2">
      <h4 className="text-xl font-semibold mb-2">
        {ind}. {data?.question}
      </h4>
      <hr />
      <div className="">
        <p className={`${data?.answer !== data?.correct && "text-red-500"}`}>
          {data?.answer}
        </p>
        <p className="text-green-600">{data?.correct}</p>
      </div>
    </div>
  );
};

const index = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { test } = useSelector((state) => state);
  const [result, setResult] = useState({ percentage: 0, number: 0 });

  function calculateCorrectAnswers(data) {
    let correctCount = 0;
    if (test?.answers.length === 0) return;

    for (let i = 0; i < data.length; i++) {
      if (data[i].answer === data[i].correct) {
        correctCount++;
      }
    }

    let percentageCorrect = (correctCount / data.length) * 100;

    setResult({
      number: correctCount,
      percentage: percentageCorrect,
    });
  }

  useEffect(() => {
    calculateCorrectAnswers(test?.answers);
  }, []);

  return (
    <section className="flex items-center py-5 lg:py-10">
      <div className="max-w-5xl px-4 py-4 mx-auto text-left lg:py-10">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <svg
              className={`w-64 h-64 transform -rotate-90 ${
                result.percentage >= 80
                  ? "text-green-400"
                  : result.percentage > 60
                  ? "text-blue-500"
                  : result.percentage > 40
                  ? "text-yellow-400"
                  : result.percentage > 20
                  ? "text-orange-500"
                  : "text-red-500"
              }`}
              viewBox="0 0 36 36"
            >
              <circle
                className="w-full h-full stroke-current text-gray-200"
                strokeWidth="4"
                fill="transparent"
                r="16"
                cx="18"
                cy="18"
              />
              <circle
                className={`w-full h-full stroke-current ${
                  result.percentage >= 80
                    ? "text-green-400"
                    : result.percentage > 60
                    ? "text-blue-500"
                    : result.percentage > 40
                    ? "text-yellow-400"
                    : result.percentage > 20
                    ? "text-orange-500"
                    : "text-red-500"
                }`}
                strokeWidth="4"
                strokeDasharray={`${result.percentage}, 100`}
                strokeLinecap="round"
                fill="transparent"
                r="16"
                cx="18"
                cy="18"
              />
            </svg>
            <div className="absolute text-4xl font-bold">
              {result.number}/{test?.answers?.length}
            </div>
          </div>
          <h3 className="text-3xl mt-3">
            {t("score")} {result.percentage}%
          </h3>
        </div>

        <div className="flex flex-col gap-5 my-10">
          {test?.answers?.map((item, ind) => {
            return <Card key={ind} ind={ind + 1} data={item} />;
          })}
        </div>

        <div className="flex items-center gap-5 justify-center mt-5">
          <Button variant={"outline"} onClick={() => navigate("/articles")}>
            {t("articles")}
          </Button>
          <Button
            variant={"outline"}
            onClick={() => navigate("/video-materials")}
          >
            {t("video_materials_link")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default index;
