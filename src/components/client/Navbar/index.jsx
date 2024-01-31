import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { Logo_icon } from "../../../assets";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderMegaMenu.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const mockdata = [
  {
    title: "Video materials",
    description: "Check out the video content we made for you",
    path: "/video-materials",
    icon: <span className="fa-solid fa-film" />,
  },

  {
    title: "Articles",
    description: "Improve your knowladge by reading our articles",
    path: "/articles",
    icon: <span className="fa-solid fa-newspaper" />,
  },

  {
    title: "Useful resources",
    description: "Use our useful resources for more information",
    path: "/library",
    icon: <span className="fa-solid fa-layer-group" />,
  },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const client_token = sessionStorage.getItem("doctors-token");

  const links = mockdata.map((item) => (
    <Link key={item.title} to={item.path}>
      <UnstyledButton className={classes.subLink}>
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
    </Link>
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
              Home
            </Link>
            <Link
              to="/events"
              className={classes.link}
              style={{ fontSize: 16 }}
            >
              Events
            </Link>
            <Link to="/news" className={classes.link} style={{ fontSize: 16 }}>
              News
            </Link>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link} style={{ fontSize: 16 }}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Useful Materials
                    </Box>
                    <span className="fa-solid fa-chevron-down" />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Useful Materials</Text>
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
              Speakers
            </Link>
          </Group>

          <Group visibleFrom="sm">
            {client_token ? (
              <Button color={"red"} onClick={handleLogOut}>
                Log out
              </Button>
            ) : (
              <>
                <Link to={"/login"} className="focus:outline-none">
                  <Button variant="default">Log in</Button>
                </Link>
                <Link to={"/register"} className="focus:outline-none">
                  <Button color={"red"}>Sign up</Button>
                </Link>
              </>
            )}
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
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
            Home
          </Link>
          <Link
            to="/events"
            className={`${classes.link} mb-2`}
            style={{ fontSize: 18 }}
          >
            Events
          </Link>
          <Link
            to="/news"
            className={`${classes.link} mb-2`}
            style={{ fontSize: 18 }}
          >
            News
          </Link>
          <div className="ml-4">
            <UnstyledButton
              className={`${classes.link} mb-2`}
              style={{ fontSize: 18 }}
              onClick={toggleLinks}
            >
              <Center inline>
                <Box component="span" mr={5}>
                  Useful Materials
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
            Speakers
          </Link>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
