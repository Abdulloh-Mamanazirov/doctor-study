import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { test } = useSelector((state) => state);
  const percentage = 90;
  const strokeDasharray = `${percentage}, 100`;

  return (
    <section className="flex items-center py-5 lg:py-10">
      <div className="max-w-5xl px-4 py-4 mx-auto text-left lg:py-10 ">
        <div className="flex items-center justify-center">
          <svg
            className={`w-64 h-64 transform -rotate-90 ${
              percentage >= 80
                ? "text-green-400"
                : percentage > 60
                ? "text-blue-500"
                : percentage > 40
                ? "text-yellow-400"
                : percentage > 20
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
                percentage >= 80
                  ? "text-green-400"
                  : percentage > 60
                  ? "text-blue-500"
                  : percentage > 40
                  ? "text-yellow-400"
                  : percentage > 20
                  ? "text-orange-500"
                  : "text-red-500"
              }`}
              strokeWidth="4"
              strokeDasharray={strokeDasharray}
              strokeLinecap="round"
              fill="transparent"
              r="16"
              cx="18"
              cy="18"
            />
          </svg>
          <div className="absolute text-4xl font-bold">9/10</div>
        </div>
        <h3 className="text-3xl mt-3">
          {t("score")} {percentage}%
        </h3>
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
