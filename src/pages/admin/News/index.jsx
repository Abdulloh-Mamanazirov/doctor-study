import {
  ActionIcon,
  Button,
  Card,
  Group,
  Image,
  Menu,
  Text,
  rem,
} from "@mantine/core";
import SeeAll from "./SeeAll";
import PostNews from "./PostNews";

function index() {
  return (
    <div>
      <PostNews />

      <div className="md:mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-3">
        <Card withBorder shadow="sm" radius="md">
          <Card.Section withBorder inheritPadding py="xs">
            <Group justify="space-between">
              <Text fw={500}>News Title</Text>
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
                  <Menu.Item>
                    <div>
                      <SeeAll />
                    </div>
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
                  <Menu.Item
                    leftSection={
                      <span
                        className="fa-solid fa-edit"
                        style={{ width: rem(14), height: rem(14) }}
                      />
                    }
                    color="blue"
                  >
                    Tahrirlash
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Card.Section>
          <Text mt="sm" c="dimmed" size="sm">
            title in desc
          </Text>
          <Card.Section mt="sm">
            <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png" />
          </Card.Section>
        </Card>
      </div>
    </div>
  );
}
export default index;
