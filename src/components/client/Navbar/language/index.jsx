import { useState } from "react";
import { UnstyledButton, Menu, Image, Group } from "@mantine/core";
import classes from "./LanguagePicker.module.css";
import { Ru, Uk, Uz } from "../../../../assets";

const data = [
  { key: "en", label: "English  ", image: Uk },
  { key: "uz", label: "O'zbek  ", image: Uz },
  { key: "ru", label: "Русский", image: Ru },
];

export function LanguagePicker() {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      leftSection={<Image src={item.image} width={10} height={10} />}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));
  console.log(selected);
  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <div className="bg-white rounded-md">
        <Menu.Target>
          <UnstyledButton
            p={8}
            className={classes.control}
            data-expanded={opened || undefined}
          >
            <Group gap="xs" className="mr-2">
              <img src={selected.image} width={22} height={22} alt="flag" />
              <span className={classes.label}>{selected.label}</span>
            </Group>
            <span
              size="1rem"
              className={`${classes.icon} fa-solid fa-chevron-down`}
              stroke={1.5}
            />
          </UnstyledButton>
        </Menu.Target>
      </div>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}
