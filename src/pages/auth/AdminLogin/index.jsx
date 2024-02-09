import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, PasswordInput, TextInput, Title } from "@mantine/core";

export default function index() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const { email, password } = e.target;
      const response = await axios
        .post("auth/authenticate", {
          email: email.value,
          password: password.value,
        })
        .finally(() => {
          setLoading(false);
        });
      if (response.data.access_token) {
        toast.success("Authentication successful");
        sessionStorage.setItem(
          "doctors-admin-token",
          response.data.access_token
        );
        window.location.replace("/admin");
      } else {
        toast.error("Authentication failed");
      }
    } catch (error) {
      toast.error("Error during authentication:", error);
    }
  }

  if (sessionStorage.getItem("doctors-admin-token")) {
    return window.location.replace("/admin");
  }

  return (
    <div className="pt-20 md:pt-28">
      <div className="w-11/12 md:w-1/3 mx-auto z-20">
        <div>
          <form onSubmit={handleSubmit} radius={0} p={30} className="relative">
            <Title order={2} ta="center" mt="md" mb={50}>
              Welcome Admin !
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
            <Button
              loading={loading}
              loaderProps={{ type: "dots" }}
              color={"red"}
              fullWidth
              mt="xl"
              size="md"
              type="submit"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
