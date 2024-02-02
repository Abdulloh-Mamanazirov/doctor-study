import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbacking: "ru",
  lng: "ru",
  resources: {
    en: {
      translation: {
        // Navigation
        home_link: "Home",
        events_link: "Events",
        news_link: "News",
        materials_link: "Useful Materials",
        video_materials_link: "Video Materials",
        video_materials_desc: "Check out the video content we made for you",
        article_materials_link: "Articles",
        article_materials_desc:
          "Improve your knowledge by reading our articles",
        resources_materials_link: "Useful literature",
        resources_materials_desc:
          "Use our useful resources for more information",
        speakers_link: "Speakers",

        // Words
        login: "Log in",
        signup: "Sign up",
        logout: "Log out",
        pages: "Pages",
        follow: "Follow us",
        rights: "All rights are reserved",
        participate: "Participate",
        seemore: "See more",
      },
    },
    uz: {
      translation: {
        // Navigation
        home_link: "Bosh Sahifa",
        events_link: "Tadbirlar",
        news_link: "Yangiliklar",
        materials_link: "Foydali materiallar",
        video_materials_link: "Video materiallar",
        video_materials_desc:
          "Siz uchun tayyorlagan video kontentimizni ko'ring",
        article_materials_link: "Maqolalar",
        article_materials_desc:
          "Bizning maqolalarimizni o'qib, bilimingizni oshiring",
        resources_materials_link: "Foydali adabiyotlar",
        resources_materials_desc:
          "Qo'shimcha ma'lumot olish uchun foydali manbaalarimizdan foydalaning",
        speakers_link: "So'zlovchilar",

        // Words
        login: "Kirish",
        signup: "Ro'yxatdan o'tish",
        logout: "Chiqish",
        pages: "Sahifalar",
        follow: "Bizni kuzating",
        rights: "Barcha huquqlar himoyalangan",
        participate: "Qatnashish",
        seemore: "Ko'proq ko'rish",
      },
    },
    ru: {
      translation: {
        // Navigation
        home_link: "Главная страница",
        events_link: "Мероприятия",
        news_link: "Новости",
        materials_link: "Полезные Материалы",
        video_materials_link: "Видео Материалы",
        video_materials_desc:
          "Посмотрите видеоконтент, который мы сделали для вас",
        article_materials_link: "Статьи",
        article_materials_desc:
          "Совершенствуйте свои знания, читая наши статьи",
        resources_materials_link: "Полезная литература",
        resources_materials_desc:
          "Используйте наши полезные ресурсы для получения дополнительной информации",
        speakers_link: "Спикеры",

        // Words
        login: "Войти",
        signup: "Зарегистрироваться",
        logout: "Выйти",
        pages: "Страницы",
        follow: "Подписывайтесь на нас",
        rights: "Все права защищены",
        participate: "Участвовать ",
        seemore: "Узнать больше",
      },
    },
  },
});

export default i18n;
