import {
  rem,
  Box,
  Text,
  Group,
  Button,
  Drawer,
  Center,
  Burger,
  Divider,
  Collapse,
  ThemeIcon,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  UnstyledButton,
  useMantineTheme,
  Avatar,
  Menu,
} from "@mantine/core";
import { useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Logo_icon } from "../../../assets";
import { Link, useLocation } from "react-router-dom";
import classes from "./HeaderMegaMenu.module.css";
import { LanguagePicker } from "./language";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { pathname } = useLocation();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const { t } = useTranslation();
  const client_token = sessionStorage.getItem("doctors-token");

  const navData = [
    {
      title: t("video_materials_link"),
      description: t("video_materials_desc"),
      path: "/video-materials",
      icon: <span className="fa-solid fa-film" />,
    },

    {
      title: t("article_materials_link"),
      description: t("article_materials_desc"),
      path: "/articles",
      icon: <span className="fa-solid fa-newspaper" />,
    },

    {
      title: t("resources_materials_link"),
      description: t("resources_materials_desc"),
      path: "/library",
      icon: <span className="fa-solid fa-layer-group" />,
    },
  ];

  const links = navData.map((item) => (
    <UnstyledButton
      component={Link}
      key={item.title}
      to={item.path}
      className={classes.subLink}
    >
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          {item?.icon}
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  useEffect(() => {
    closeDrawer();
  }, [pathname]);

  function handleLogOut() {
    sessionStorage.removeItem("doctors-token");
    window.location.reload();
  }

  return (
    <Box
      py={10}
      className="z-50 w-full fixed top-0 bg-red-100/80 backdrop-blur shadow-md shadow-black/10"
    >
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link to={"/"} className="flex items-center gap-2">
            <img src={Logo_icon} alt="Doctor study logo" width={100} />
            <h3 className="font-serif font-semibold text-3xl text-red-900 whitespace-nowrap hidden sm:block">
              Doctor-S
            </h3>
          </Link>
          <Group h="100%" gap={0} visibleFrom="sm">
            <Link to="/" className={classes.link} style={{ fontSize: 16 }}>
              {t("home_link")}
            </Link>
            <Link
              to="/events"
              className={classes.link}
              style={{ fontSize: 16 }}
            >
              {t("events_link")}
            </Link>
            <Link to="/news" className={classes.link} style={{ fontSize: 16 }}>
              {t("news_link")}
            </Link>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <button className={classes.link} style={{ fontSize: 16 }}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      {t("materials_link")}
                    </Box>
                    <span className="fa-solid fa-chevron-down" />
                  </Center>
                </button>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>{t("materials_link")}</Text>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} verticalSpacing={15}>
                  {links}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link
              to="/speakers"
              className={classes.link}
              style={{ fontSize: 16 }}
            >
              {t("speakers_link")}
            </Link>
          </Group>

          <Group visibleFrom="sm">
            <LanguagePicker />
            {client_token ? (
              /*
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <Avatar
                    role={"button"}
                    variant={"white"}
                    radius="xl"
                    color={"black"}
                    bg={"#fff"}
                  />
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    component={Link}
                    to="/my-profile"
                    leftSection={<span className="fa-solid fa-user-circle" />}
                  >
                    {t("view")}
                  </Menu.Item>
                  <Menu.Item
                    color={"red"}
                    onClick={handleLogOut}
                    leftSection={
                      <span className="fa-solid fa-arrow-right-from-bracket" />
                    }
                  >
                    {t("logout")}
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
              */
              <Button
                color={"red"}
                onClick={handleLogOut}
                leftSection={
                  <span className="fa-solid fa-arrow-right-from-bracket" />
                }
              >
                {t("logout")}
              </Button>
            ) : (
              <>
                <Link to={"/login"} className="focus:outline-none">
                  <Button variant="default">{t("login")}</Button>
                </Link>
                <Link to={"/register"} className="focus:outline-none">
                  <Button color={"red"}>{t("signup")}</Button>
                </Link>
              </>
            )}
          </Group>

          <Group hiddenFrom={"sm"} className="sm:hidden">
            <LanguagePicker />
            <Burger opened={drawerOpened} onClick={toggleDrawer} />
          </Group>
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={<img src={Logo_icon} alt="Doctor study logo" width={70} />}
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea mx="-md">
          <Divider my="sm" />
          <Link
            to="/"
            className={`${classes.link} mb-2`}
            style={{ fontSize: 18 }}
          >
            {t("home_link")}
          </Link>
          <Link
            to="/events"
            className={`${classes.link} mb-2`}
            style={{ fontSize: 18 }}
          >
            {t("events_link")}
          </Link>
          <Link
            to="/news"
            className={`${classes.link} mb-2`}
            style={{ fontSize: 18 }}
          >
            {t("news_link")}
          </Link>
          <div className="ml-4">
            <UnstyledButton
              className={`${classes.link} mb-2`}
              style={{ fontSize: 18 }}
              onClick={toggleLinks}
            >
              <Center inline>
                <Box component="span" mr={5}>
                  {t("materials_link")}
                </Box>
                <span
                  className="fa-solid fa-chevron-down"
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
          </div>
          <Link
            to="/speakers"
            className={`${classes.link} mb-2`}
            style={{ fontSize: 18 }}
          >
            {t("speakers_link")}
          </Link>
          {/* <Link
            to="/my-profile"
            className={`${classes.link} mb-2`}
            style={{ fontSize: 18 }}
          >
            {t("view")}
          </Link> */}

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            {client_token ? (
              <Button color={"red"} onClick={handleLogOut}>
                {t("logout")}
              </Button>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link to={"/login"} className="w-full focus:outline-none">
                  <Button variant="default" fullWidth>
                    {t("login")}
                  </Button>
                </Link>
                <Link to={"/register"} className="w-full focus:outline-none">
                  <Button color={"red"} fullWidth>
                    {t("signup")}
                  </Button>
                </Link>
              </div>
            )}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
