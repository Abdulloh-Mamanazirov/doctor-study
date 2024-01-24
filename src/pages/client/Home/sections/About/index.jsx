import { Container, Title, Text, List, ThemeIcon, rem } from "@mantine/core";
import classes from "./HeroBullets.module.css";

function About() {
  return (
    <Container size="md">
      <div className={"grid md:grid-cols-2 items-center py-24"}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Welcome to <span className={classes.highlight}>Doktor-S</span>{" "}
            Medical
          </Title>
          <Text c="dimmed" mt="md">
            We are a leading provider of educational events in modern
            evidence-based medicine. Our medical webinars, news and materials
            are designed to keep you up-to-date with the latest developments in
            the medical world. Join us and stay informed.
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
              <b>Medical Webinars</b>
            </List.Item>
            <List.Item>
              <b>Medical News</b>
            </List.Item>
            <List.Item>
              <b>Useful Materials</b>
            </List.Item>
            <List.Item>
              <b>Conference</b>
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
