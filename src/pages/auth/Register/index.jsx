import { Button, Text, TextInput, Title } from "@mantine/core";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import RegisterInput from "./RegisterInput";

const index = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const { first_name, last_name, work_location, job, email, password } =
      e.target.value;

    const data = {
      first_name: first_name.value,
      last_name: last_name.value,
      work_location: work_location.value,
      job: job.value,
      email: email.value,
      password: password.value,
    };

    try {
      const response = await axios.post(
        "http://82.97.242.32:8081/api/v1/auth/register",
        data
      );

      if (response.status === 200) {
        toast.log("Registration successful");
      } else {
        toast.error("Registration failed");
      }
    } catch (error) {
      toast.error("Error during registration:", error);
    }
  }

  return (
    <div className="back relative min-h-screen">
      <div className="absolute inset-0 bg-black/30" />
      <div className="bg-white/50  backdrop-blur-md  rounded-md w-11/12 md:w-1/3 mx-auto z-20 relative md:top-10">
        <form onSubmit={handleSubmit} radius={0} className="m-3">
          <Title order={2} ta="center" mt="md" p={10} mb={20}>
            Registration on the Doctor S portal!
          </Title>

          <TextInput
            type="text"
            label="First Name"
            placeholder="First Name"
            size="md"
            name="first_name"
            required
          />
          <TextInput
            type="text"
            label="Work Location"
            placeholder="work_location"
            size="md"
            name="work_location"
            required
          />
          <TextInput
            type="text"
            label="Job"
            placeholder="job"
            size="md"
            name="job"
            required
          />
          <TextInput
            type="text"
            label="Last Name"
            placeholder="Last Name"
            size="md"
            name="last_name"
            required
            mt="md"
          />

          <TextInput
            label="Email address"
            placeholder="hello@gmail.com"
            size="md"
            name="email"
            type="email"
            required
          />
          <RegisterInput />

          <Button color={"red"} fullWidth mt="xl" size="md" type="submit">
            Login
          </Button>
          <div className="relative">
            <Text ta="center" mt="md">
              Already have an account?{" "}
              <Link
                to={"/login"}
                fw={700}
                className="text-primary-desc font-semibold hover:underline"
              >
                Login
              </Link>
            </Text>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
