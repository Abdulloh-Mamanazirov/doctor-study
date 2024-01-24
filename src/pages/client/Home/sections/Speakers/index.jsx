import { Container, Title, Text, List, ThemeIcon, rem } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./HeroBullets.module.css";

function About() {
  return (
    <Container size="md">
      <div className={"grid md:grid-cols-2 items-center py-24"}>
        <div className="w-full h-full hidden md:block">
          <img
            src={
              "https://10web-site.ai/24/wp-content/uploads/sites/27/2024/01/danny-g-htYDlrrKfuM-unsplash_VLISPr1P.webp"
            }
            alt="doctor study"
            className={"w-full h-full rounded-lg object-cover"}
          />
        </div>
        <div className={classes.content}>
          <Title className={classes.title}>
            Improving Medical Education with{" "}
            <span className={classes.highlight}>Doktor-S</span> Webinars
          </Title>
          <Text c="dimmed" mt="md">
            Learn how Doktor-S’s medical webinars have transformed medical
            education, bringing leading authoritative experts to the forefront,
            and supporting practitioners to stay updated with the latest
            developments in modern evidence-based medicine.
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
              <p>Access to leading authoritative experts in-country</p>
            </List.Item>
            <List.Item>
              <p>Stay up-to-date with modern evidence-based medicine</p>
            </List.Item>
          </List>
          <div className="mt-5">
            <Link
              to={"/speakers"}
              className="bg-red-400 text-white py-2 px-5 rounded-lg"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default About;
