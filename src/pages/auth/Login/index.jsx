import {
  Text,
  Title,
  Button,
  Checkbox,
  TextInput,
  PasswordInput,
} from "@mantine/core";
import { Link } from "react-router-dom";

export default function index() {
  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = e.target;
    const data = {
      email: email.value,
      password: password.value,
    };
  }

  return (
    <div className="login-bg pt-20 md:pt-28">
      <div className="absolute inset-0 bg-black/30" />
      <div className="w-11/12 md:w-1/3 mx-auto z-20">
        <div>
          <form onSubmit={handleSubmit} radius={0} p={30}>
            <Title order={2} ta="center" mt="md" mb={50}>
              Welcome back!
            </Title>

            <TextInput
              label="Email address"
              placeholder="hello@gmail.com"
              size="md"
              name="email"
              required
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              mt="md"
              size="md"
              required
              name="password"
            />
            <Checkbox label="Keep me logged in" mt="xl" size="md" />
            <Button color={"red"} fullWidth mt="xl" size="md" type="submit">
              Login
            </Button>
            <div className="relative">
              <Text ta="center" mt="md">
                Don&apos;t have an account?{" "}
                <Link
                  to={"/register"}
                  fw={700}
                  className="text-primary-desc font-semibold hover:underline"
                >
                  Register
                </Link>
              </Text>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
