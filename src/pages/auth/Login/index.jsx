import { Button, PasswordInput, Text, TextInput, Title } from "@mantine/core";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Index() {
  const [loading, setLoading] = useState(false);
  const [forgotPass, setForgotPass] = useState(false);

  async function handleLogIn(e) {
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
        sessionStorage.setItem("doctors-token", response.data.access_token);
        sessionStorage.setItem("doctors-user-id", response.data.id);
        if (window.location.pathname === "/login") {
          window.location.replace("/");
        } else {
          window.location.reload();
        }
      } else {
        toast.error("Authentication failed");
      }
    } catch (error) {
      toast.error("Error during authentication:");
    }
  }

  async function handleSendingEmailToRestorePassword(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const { email } = e.target;
      const formData = new FormData();
      formData.append("email", email.value);
      const response = await axios
        .post("auth/forgot-password", formData)
        .finally(() => {
          setLoading(false);
        });

      if (response.data.success) {
        toast.success("Email sent to your mail address");
      } else {
        toast.error("Authentication failed");
      }
    } catch (error) {
      toast.error("Error during authentication:");
    }
  }

  if (sessionStorage.getItem("doctors-admin-token")) {
    return window.location.replace("/admin");
  }

  return (
    <div className="login-bg pt-20 md:pt-28">
      <div className="absolute inset-0 bg-black/30" />
      <div className="bg-white/50 backdrop-blur-md rounded-md w-11/12 md:w-1/3 mx-auto z-20 p-2">
        <div>
          {forgotPass ? (
            <form
              onSubmit={handleSendingEmailToRestorePassword}
              radius={0}
              p={30}
              className="relative"
            >
              <Title order={2} ta="center" mt="md" mb={50}>
                Restore password!
              </Title>

              <TextInput
                label="Email address"
                placeholder="hello@gmail.com"
                size="md"
                name="email"
                required
                type={"email"}
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
                Send email
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
          ) : (
            <form onSubmit={handleLogIn} radius={0} p={30} className="relative">
              <Title order={2} ta="center" mt="md" mb={50}>
                Welcome back!
              </Title>

              <TextInput
                label="Email address"
                placeholder="hello@gmail.com"
                size="md"
                name="email"
                required
                type={"email"}
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
                onClick={() => setForgotPass(true)}
                className="mt-2 text-primary-desc hover:underline"
              >
                Forgot password?
              </button>
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
          )}
        </div>
      </div>
    </div>
  );
}
