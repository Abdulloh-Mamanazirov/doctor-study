import {
  Home,
  Login,
  Events,
  NewsId,
  VideoId,
  Speakers,
  NewsMain,
  Register,
  VideoMain,
  LibraryId,
  ArticleId,
  ArticleMain,
  LibraryMain,
  // admin pages
  AdminDashboard,
  AdminNews,
  AdminEvents,
  AdminUsers,
  AdminVideos,
  AdminArticles,
  AdminLibrary,
  AdminSpeakers,
  AdminPartners,
} from "../pages";

const admin_token = sessionStorage.getItem("doctors-admin-token");
const client_token = sessionStorage.getItem("doctors-token");

export const ADMIN = [
  {
    path: "/admin",
    title: "AdminDashboard",
    element: admin_token ? <AdminDashboard /> : <Login />,
    icon: <span className="fa-solid fa-house" />,
  },
  {
    path: "/admin/news",
    title: "News",
    element: admin_token ? <AdminNews /> : <Login />,
    icon: <span className="fa-solid fa-newspaper" />,
  },
  {
    path: "/admin/events",
    title: "AdminEvents",
    element: admin_token ? <AdminEvents /> : <Login />,
    icon: <span className="fa-solid fa-calendar-days" />,
  },
  {
    path: "/admin/users",
    title: "AdminUsers",
    element: admin_token ? <AdminUsers /> : <Login />,
    icon: <span className="fa-solid fa-user" />,
  },
  {
    path: "/admin/video-materials",
    title: "Video-materials",
    element: admin_token ? <AdminVideos /> : <Login />,
    icon: <span className="fa-solid fa-video" />,
  },
  {
    path: "/admin/articles",
    title: "AdminArticles",
    element: admin_token ? <AdminArticles /> : <Login />,
    icon: <span className="fa-solid fa-paperclip" />,
  },
  {
    path: "/admin/library",
    title: "AdminLibrary",
    element: admin_token ? <AdminLibrary /> : <Login />,
    icon: <span className="fa-solid fa-book" />,
  },
  {
    path: "/admin/speakers",
    title: "AdminSpeakers",
    element: admin_token ? <AdminSpeakers /> : <Login />,
    icon: <span className="fa-solid fa-bullhorn" />,
  },
  {
    path: "/admin/partners",
    title: "Partners",
    element: admin_token ? <AdminPartners /> : <Login />,
    icon: <span className="fa-solid fa-handshake" />,
  },
];

export const CLIENT = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/events",
    element: <Events />,
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
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
