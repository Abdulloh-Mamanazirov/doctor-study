import { Container, Title, Text, List, ThemeIcon, rem } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import classes from "./HeroBullets.module.css";

function About() {
  const { t } = useTranslation();

  return (
    <Container size="md">
      <div className={"grid md:grid-cols-2 items-center py-24"}>
        <div className="w-full h-full hidden md:block">
          <img
            src={
              "https://codeblue.galencentre.org/wp-content/uploads/2023/02/Town-hall-Feb-23_twittimc-min.jpg"
            }
            alt="doctor study"
            className={"w-full h-full rounded-lg object-cover"}
          />
        </div>
        <div className={classes.content}>
          <Title className={classes.title}>{t("home.webinar.title")}</Title>
          <Text c="dimmed" mt="md">
            {t("home.webinar.desc")}
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon color={"red"} size={20} radius="xl">
                <span
                  className="fa-solid fa-check"
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <p>{t("home.webinar.points.n1")}</p>
            </List.Item>
            <List.Item>
              <p>{t("home.webinar.points.n2")}</p>
            </List.Item>
          </List>
          <div className="mt-5">
            <Link
              to={"/events"}
              className="bg-red-400 text-white py-2 px-5 rounded-lg"
            >
              {t("seemore")}
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default About;
