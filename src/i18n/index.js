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

        // Home page
        home: {
          title: "Medical education portal",
          videos: {
            title: "video materials available",
            desc: "Use exclusive video materials developed by our experts",
          },
          events: {
            title: "face-to-face and online events",
            desc: "",
          },
          articles: {
            title: "online articles available",
            desc: "",
          },
          resources: {
            title: "useful resources",
            desc: "",
          },
          about: {
            title: "Welcome to",
            desc: "We are a leading provider of educational events in modern evidence-based medicine. Our medical webinars, news and materials are designed to keep you up-to-date with the latest developments in the medical world. Join us and stay informed.",
            points: {
              n1: "Medical Webinars",
              n2: "Medical News",
              n3: "Useful Materials",
              n4: "Conference",
            },
          },
          webinar: {
            title: "Improving Medical Education with Doktor-S Webinars",
            desc: "Learn how Doktor-S’s medical webinars have transformed medical education, bringing leading authoritative experts to the forefront, and supporting practitioners to stay updated with the latest developments in modern evidence-based medicine.",
            points: {
              n1: "Access to leading authoritative experts in-country",
              n2: "Stay up-to-date with modern evidence-based medicine",
            },
          },
        },

        // Words
        login: "Log in",
        signup: "Sign up",
        logout: "Log out",
        view: "View profile",
        pages: "Pages",
        follow: "Follow us",
        rights: "All rights are reserved",
        participate: "Participate",
        seemore: "See more",
        partners: "Partners",
        videos: "Videos",
        news: "News",
        articles: "Articles",
        library: "Library",
      },
    },
    uz: {
      translation: {
        // Navigation
        home_link: "Bosh ahifa",
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

        // Home page
        home: {
          title: "Tibbiy ta'lim portali",
          videos: {
            title: "video materiallar mavjud",
            desc: "Ekspertlar tomonidan ishlab chiqilgan video materiallardan foydalaning",
          },
          events: {
            title: "online va offline tadbirlar",
            desc: "",
          },
          articles: {
            title: "onlayn maqolalar mavjud",
            desc: "",
          },
          resources: {
            title: "foydali resurslar",
            desc: "",
          },
          about: {
            title: "Doktor-S Medical ga xush kelibsiz",
            desc: "Biz zamonaviy dalillarga asoslangan tibbiyot bo'yicha ta'lim tadbirlarining yetakchi provayderimiz. Bizning tibbiy veb-seminarlar, yangiliklar va materiallar sizni tibbiyot olamidagi so'nggi o'zgarishlardan xabardor qilish uchun mo'ljallangan. Bizga qo'shiling va xabardor bo'ling.",
            points: {
              n1: "Tibbiy veb-seminarlar",
              n2: "Tibbiyot yangiliklari",
              n3: "Foydali materiallar",
              n4: "Konferensiya",
            },
          },
          webinar: {
            title: "Doktor-S veb-seminarlari bilan tibbiy ta'limni yaxshilash",
            desc: "Doktor-Sning tibbiy veb-seminarlari tibbiy ta'limni qanday o'zgartirganini, etakchi nufuzli mutaxassislarni birinchi o'ringa olib chiqishni va amaliyotchilarni zamonaviy dalillarga asoslangan tibbiyotdagi so'nggi ishlanmalardan xabardor bo'lishda qo'llab-quvvatlashini bilib oling.",
            points: {
              n1: "Mamlakatdagi yetakchi nufuzli mutaxassislarga kirish",
              n2: "Zamonaviy dalillarga asoslangan tibbiyotdan xabardor bo'ling",
            },
          },
        },

        // Words
        login: "Kirish",
        signup: "Ro'yxatdan o'tish",
        logout: "Chiqish",
        view: "Profilni ko'rish",
        pages: "Sahifalar",
        follow: "Bizni kuzating",
        rights: "Barcha huquqlar himoyalangan",
        participate: "Qatnashish",
        seemore: "Ko'proq ko'rish",
        partners: "Hamkorlar",
        videos: "Videolar",
        news: "Yangiliklar",
        articles: "Maqolalar",
        library: "Kutubxona",
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

        // Home page
        home: {
          title: "Медицинский образовательный портал",
          videos: {
            title: "доступны видеоматериалы",
            desc: "Используйте эксклюзивные видеоматериалы, разработанные нашими специалистами",
          },
          events: {
            title: "очные и онлайн мероприятия",
            desc: "",
          },
          articles: {
            title: "доступны онлайн-статьи",
            desc: "",
          },
          resources: {
            title: "полезные ресурсы",
            desc: "",
          },
          about: {
            title: "Добро пожаловать в ",
            desc: "Мы являемся ведущим поставщиком образовательных мероприятий в области современной доказательной медицины. Наши медицинские вебинары, новости и материалы созданы для того, чтобы держать вас в курсе последних событий в мире медицины. Присоединяйтесь к нам и будьте в курсе.",
            points: {
              n1: "Медицинские вебинары",
              n2: "Медицинские новости",
              n3: "Полезные материалы",
              n4: "Конференция",
            },
          },
          webinar: {
            title:
              "Улучшайте медицинское образование с помощью вебинаров «Доктор-С»",
            desc: "Узнайте, как медицинские вебинары «Доктор-С» изменили медицинское образование, выведя на передний план ведущих авторитетных экспертов и помогая практикующим врачам оставаться в курсе последних достижений современной доказательной медицины.",
            points: {
              n1: "Доступ к ведущим авторитетным экспертам внутри страны",
              n2: "Будьте в курсе современной доказательной медицины",
            },
          },
        },

        // Words
        login: "Войти",
        signup: "Зарегистрироваться",
        logout: "Выйти",
        view: "Посмотреть профиль",
        pages: "Страницы",
        follow: "Подписывайтесь на нас",
        rights: "Все права защищены",
        participate: "Участвовать ",
        seemore: "Узнать больше",
        partners: "Партнеры",
        videos: "Видео",
        news: "Новости",
        articles: "Статьи",
        library: "Библиотека",
      },
    },
  },
});

export default i18n;
