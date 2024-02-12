import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { image_url } from "../../../../constants";
import { toast } from "react-toastify";

const index = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  async function handleRegisterForWebinar() {
    const user_id = sessionStorage.getItem("doctors-user-id");
    const token = sessionStorage.getItem("doctors-token");
    if (!user_id || !token) return window.location.replace("/login");

    setLoading(true);
    const response = await axios
      .request({
        method: "POST",
        url: `webinars/${state?.id}/users/${user_id}`,
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .finally(() => setLoading(false));
    if (response.status === 200) {
      toast.success("Ro'yxatdan o'tildi");
      navigate(-1);
    }
  }

  return (
    <div className="max-w-6xl px-4 py-4 mx-auto">
      <div className="text-left lg:py-10 grid md:grid-cols-2 gap-2">
        <img
          src={image_url + state?.file}
          alt="doctor-s news image"
          className="w-full max-h-96 object-cover"
        />
        <div>
          <h1 className="text-xl md:text-3xl font-bold text-primary-tite mt-5">
            {state?.[`title_${lang}`]}
          </h1>
          <p className="text-md mt-5">{state?.[`description_${lang}`]}</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 my-3">
        <div className="border rounded-xl p-2">
          <p className="text-xl font-semibold text-primary-tite">
            <span className="fa-solid fa-location-dot text-sm" /> Location:
          </p>
          <p className="ml-7 font-mono text-lg">{state?.city}</p>
          <p className="text-xl font-semibold text-primary-tite">
            {" "}
            <span className="fa-solid fa-calendar text-sm" /> Date:
          </p>
          <p className="ml-7 font-mono text-lg">
            {new Date(state?.time).toLocaleString()}
          </p>
        </div>
        <div className="border rounded-xl p-2">
          <p className="text-xl font-semibold text-primary-tite">
            <span className="fa-solid fa-globe text-sm" /> Format:
          </p>
          {state?.online ? (
            <p className="ml-7 font-mono text-lg">Online</p>
          ) : (
            <p className="ml-7 font-mono text-lg">On site</p>
          )}
          <p className="text-xl font-semibold text-primary-tite">
            {" "}
            <span className="fa-solid fa-calendar text-sm" /> Field:
          </p>
          <p className="ml-7 font-mono text-lg">{state?.field}</p>
        </div>
        <div className="border rounded-xl p-2">
          <p className="text-xl font-semibold text-primary-tite">
            <span className="fa-solid fa-bullhorn text-sm" /> Speakers:
          </p>
          <div className="ml-7">
            <ol className="list-decimal">
              {state?.speakers?.map((item) => (
                <li key={item?.id} className="ml-7 font-mono text-lg">
                  {item?.fullName}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <Button
        size={"lg"}
        fullWidth
        loading={loading}
        loaderProps={{ type: "dots" }}
        onClick={handleRegisterForWebinar}
      >
        {t("participate")}
      </Button>
    </div>
  );
};

export default index;
