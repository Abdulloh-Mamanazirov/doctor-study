import {
  Home,
  Login,
  NewsId,
  VideoId,
  EventsId,
  Speakers,
  NewsMain,
  Register,
  VideoMain,
  LibraryId,
  ArticleId,
  EventsMain,
  ArticleMain,
  LibraryMain,
  ResetPassword,
  // admin pages
  AdminDashboard,
  AdminQuestion,
  AdminNews,
  AdminEvents,
  AdminUsers,
  AdminVideos,
  AdminArticles,
  AdminLibrary,
  AdminSpeakers,
  AdminPartners,
  AdminLogin,
  Test,
  Finish,
} from "../pages";

const admin_token = sessionStorage.getItem("doctors-admin-token");
const client_token = sessionStorage.getItem("doctors-token");

export const ADMIN = [
  {
    path: "/admin",
    title: "Dashboard",
    element: admin_token ? <AdminDashboard /> : <AdminLogin />,
    icon: <span className="fa-solid fa-house" />,
    show: true,
  },
  {
    path: "/admin/news",
    title: "News",
    element: admin_token ? <AdminNews /> : <AdminLogin />,
    icon: <span className="fa-solid fa-newspaper" />,
    show: true,
  },
  {
    path: "/admin/events",
    title: "Events",
    element: admin_token ? <AdminEvents /> : <AdminLogin />,
    icon: <span className="fa-solid fa-calendar-days" />,
    show: true,
  },
  {
    path: "/admin/users",
    title: "Users",
    element: admin_token ? <AdminUsers /> : <AdminLogin />,
    icon: <span className="fa-solid fa-user" />,
    show: true,
  },
  {
    path: "/admin/video-materials",
    title: "Video-materials",
    element: admin_token ? <AdminVideos /> : <AdminLogin />,
    icon: <span className="fa-solid fa-video" />,
    show: true,
  },
  {
    path: "/admin/articles",
    title: "Articles",
    element: admin_token ? <AdminArticles /> : <AdminLogin />,
    icon: <span className="fa-solid fa-paperclip" />,
    show: true,
  },
  {
    path: "/admin/library",
    title: "Library",
    element: admin_token ? <AdminLibrary /> : <AdminLogin />,
    icon: <span className="fa-solid fa-book" />,
    show: true,
  },
  {
    path: "/admin/speakers",
    title: "Speakers",
    element: admin_token ? <AdminSpeakers /> : <AdminLogin />,
    icon: <span className="fa-solid fa-bullhorn" />,
    show: true,
  },
  {
    path: "/admin/partners",
    title: "Partners",
    element: admin_token ? <AdminPartners /> : <AdminLogin />,
    icon: <span className="fa-solid fa-handshake" />,
    show: true,
  },
  {
    path: "/admin/question",
    title: "Test",
    element: admin_token ? <AdminQuestion /> : <AdminLogin />,
    icon: <span className="fa-solid fa-question" />,
    show: true,
  },
  {
    path: "/admin-login",
    element: <div>sadasd</div>,
    show: false,
  },
];

export const CLIENT = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/events",
    element: <EventsMain />,
  },
  {
    path: "/events/:id",
    element: client_token ? <EventsId /> : <Login />,
  },
  {
    path: "/speakers",
    element: <Speakers />,
  },
  {
    path: "/news",
    element: <NewsMain />,
  },
  {
    path: "/news/:id",
    element: <NewsId />,
  },
  {
    path: "/video-materials",
    element: client_token ? <VideoMain /> : <Login />,
  },
  {
    path: "/video-materials/:id",
    element: client_token ? <VideoId /> : <Login />,
  },
  {
    path: "/articles",
    element: client_token ? <ArticleMain /> : <Login />,
  },
  {
    path: "/articles/:id",
    element: client_token ? <ArticleId /> : <Login />,
  },
  {
    path: "/library",
    element: client_token ? <LibraryMain /> : <Login />,
  },
  {
    path: "/library/:id",
    element: client_token ? <LibraryId /> : <Login />,
  },
  {
    path: "/test/:id",
    element: client_token ? <Test /> : <Login />,
  },
  {
    path: "/finish",
    element: client_token ? <Finish /> : <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
];
