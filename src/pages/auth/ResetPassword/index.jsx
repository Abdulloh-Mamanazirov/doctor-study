import axios from "axios";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, PasswordInput, Text, Title } from "@mantine/core";
import { toast } from "react-toastify";

const index = () => {
  const { search } = useLocation();
  const [loading, setLoading] = useState(false);
  const [match, setMatch] = useState(true);

  async function handleSubmit(e) {
    e.preventDefault();
    const uuid = search.split("=")[1];
    const { password, prePassword } = e.target;
    const data = {
      verificationCode: uuid,
      password: password.value,
      prePassword: prePassword.value,
    };
    if (password.value !== prePassword.value) {
      return setMatch(false);
    } else {
      setMatch(true);
      setLoading(true);
      const response = await axios
        .post("auth/reset-forgotten-password", data)
        .finally(() => {
          setLoading(false);
        });
      if (response.data.success) {
        toast.success("Password changed successfully");
        window.location.replace("/login");
      } else {
        toast.error("Authentication failed");
      }
    }
  }

  return (
    <div className="login-bg pt-20 md:pt-28">
      <div className="absolute inset-0 bg-black/30" />
      <div className="bg-white/50 backdrop-blur-md rounded-md w-11/12 md:w-1/3 mx-auto z-20 p-2">
        <div>
          <form onSubmit={handleSubmit} className="relative">
            <Title order={2} ta="center" mt="md" mb={50}>
              Reset password!
            </Title>

            <PasswordInput
              label="Password"
              placeholder="********"
              size="md"
              name="password"
              required
            />
            <PasswordInput
              label="Reenter Password"
              placeholder="********"
              size="md"
              mt={10}
              name="prePassword"
              required
            />
            {!match && <Text color="red">Passwords do not match</Text>}
            <Button
              loading={loading}
              loaderProps={{ type: "dots" }}
              color={"red"}
              fullWidth
              mt="xl"
              size="md"
              type="submit"
            >
              Submit
            </Button>
            <div>
              <Text ta="center" mt="md">
                Back to{" "}
                <Link
                  to={"/login"}
                  fw={700}
                  className="text-primary-desc font-semibold hover:underline"
                >
                  Log in
                </Link>{" "}
                page
              </Text>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
