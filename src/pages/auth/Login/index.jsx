import {
  Button,
  Checkbox,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Index() {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const { email, password } = e.target;
      const response = await axios
        .post("http://82.97.242.32:8081/api/auth/authenticate", {
          email: email.value,
          password: password.value,
        })
        .finally(() => {
          setLoading(false);
        });
      if (response.data.access_token) {
        setToken(response.data.access_token);
        toast.success("Authentication successful");
        sessionStorage.setItem(
          "doctors-admin-token",
          response.data.access_token
        );
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
    <div className="login-bg pt-20 md:pt-28">
      <div className="absolute inset-0 bg-black/30" />
      <div className="w-11/12 md:w-1/3 mx-auto z-20">
        <div>
          <form onSubmit={handleSubmit} radius={0} p={30} className="relative">
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
            <button
              type="button"
              className="mt-2 text-primary-desc hover:underline"
            >
              Forgot password?
            </button>
            <Button color={"red"} fullWidth mt="xl" size="md" type="submit">
              Login
            </Button>
            <div>
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
