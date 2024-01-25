import {
  ActionIcon,
  Card,
  Group,
  Image,
  Menu,
  SimpleGrid,
  Text,
  rem,
} from "@mantine/core";

const images = [
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
];

function index() {
  return (
    <div className="mx-auto  flex min-h-[840px] min-w-full max-w-screen-lg flex-col gap-8 rounded-lg bg-white shadow-2xl md:container md:mt-10">
      <Card withBorder shadow="sm" radius="md">
        <Card.Section withBorder inheritPadding py="xs">
          <Group justify="space-between">
            <Text fw={500}>Review pictures</Text>
            <Menu withinPortal position="bottom-end" shadow="sm">
              <Menu.Target>
                <ActionIcon variant="subtle" color="gray">
                  <span
                    className="fa-solid fa-ellipsis-vertical"
                    style={{ width: rem(16), height: rem(16) }}
                  />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item
                  leftSection={
                    <span
                      className="fa-solid fa-eye"
                      style={{ width: rem(14), height: rem(14) }}
                    />
                  }
                >
                  Preview all
                </Menu.Item>
                <Menu.Item
                  leftSection={
                    <span
                      className="fa-solid fa-trash"
                      style={{ width: rem(14), height: rem(14) }}
                    />
                  }
                  color="red"
                >
                  Delete all
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Card.Section>

        <Text mt="sm" c="dimmed" size="sm">
          <Text span inherit c="var(--mantine-color-anchor)">
            200+ images uploaded
          </Text>{" "}
          since last visit, review them to select which one should be added to
          your gallery
        </Text>

        <Card.Section mt="sm">
          <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png" />
        </Card.Section>

        <Card.Section inheritPadding mt="sm" pb="md">
          <SimpleGrid cols={3}>
            {images.map((image) => (
              <Image src={image} key={image} radius="sm" />
            ))}
          </SimpleGrid>
        </Card.Section>
      </Card>
    </div>
  );
}
export default index;
// <div className="mx-auto  flex min-h-[840px] min-w-full max-w-screen-lg flex-col gap-8 rounded-lg bg-white shadow-2xl md:container md:mt-10">
//   admin news page
// </div>
