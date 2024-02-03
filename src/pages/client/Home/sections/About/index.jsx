import { Container, Title, Text, List, ThemeIcon, rem } from "@mantine/core";
import { useTranslation } from "react-i18next";
import classes from "./HeroBullets.module.css";

function About() {
  const { t, i18n } = useTranslation();
  return (
    <Container size="md">
      <div className={"grid md:grid-cols-2 items-center py-24"}>
        <div className={classes.content}>
          <Title className={classes.title}>
            {t("home.about.title") + " "}{" "}
            {i18n.language !== "uz" && (
              <>
                <span className={classes.highlight}>Doktor-S</span> Medical
              </>
            )}
          </Title>
          <Text c="dimmed" mt="md">
            {t("home.about.desc")}
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
              <b>{t("home.about.points.n1")}</b>
            </List.Item>
            <List.Item>
              <b>{t("home.about.points.n2")}</b>
            </List.Item>
            <List.Item>
              <b>{t("home.about.points.n3")}</b>
            </List.Item>
            <List.Item>
              <b>{t("home.about.points.n4")}</b>
            </List.Item>
          </List>
        </div>
        <div className="w-full h-full hidden md:block">
          <img
            src={
              "https://thumbs.dreamstime.com/b/doctors-hospital-corridor-nurse-pushing-gurney-stretcher-bed-male-senior-female-patient-32154012.jpg"
            }
            alt="doctor study"
            className={"w-full h-full rounded-lg object-cover"}
          />
        </div>
      </div>
    </Container>
  );
}

export default About;
