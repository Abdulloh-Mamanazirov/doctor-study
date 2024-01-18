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
    element: admin_token ? <AdminDashboard /> : <Login />,
  },
  {
    path: "/admin/news",
    element: admin_token ? <AdminNews /> : <Login />,
  },
  {
    path: "/admin/events",
    element: admin_token ? <AdminEvents /> : <Login />,
  },
  {
    path: "/admin/users",
    element: admin_token ? <AdminUsers /> : <Login />,
  },
  {
    path: "/admin/video-materials",
    element: admin_token ? <AdminVideos /> : <Login />,
  },
  {
    path: "/admin/articles",
    element: admin_token ? <AdminArticles /> : <Login />,
  },
  {
    path: "/admin/library",
    element: admin_token ? <AdminLibrary /> : <Login />,
  },
  {
    path: "/admin/speakers",
    element: admin_token ? <AdminSpeakers /> : <Login />,
  },
  {
    path: "/admin/partners",
    element: admin_token ? <AdminPartners /> : <Login />,
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
