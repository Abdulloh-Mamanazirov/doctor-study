import React, { useState } from "react";
import { Button, Text, TextInput, Title } from "@mantine/core";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setFirstName,
  setJob,
  setLastName,
  setWorkLocation,
} from "../../../redux/register";
import RegisterInput from "./RegisterInput";

const Index = () => {
  const dispatch = useDispatch();
  const { register } = useSelector((state) => state);
  const navigate = useNavigate();
  const [hiddenMessage, setHiddenMessage] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    const { first_name, last_name, work_location, job, password, email } =
      register;
    const data = {
      first_name,
      last_name,
      work_location,
      job,
      email,
      password,
    };
    try {
      const response = await axios.post("auth/register", data);

      if (response.status === 200) {
        toast.success("Check your email to verify your account");
        if (response.data.success) {
          setHiddenMessage(true);
        }
      }
    } catch (error) {
      toast.error("Error during see your email registration:", error);
    }
  }

  return (
    <div className="register-bg pb-[88px] relative min-h-screen">
      <div className="absolute inset-0 bg-black/30" />
      <div className="bg-white/50  backdrop-blur-md   rounded-md w-11/12 md:w-1/2 lg:w-1/3 mx-auto z-20 relative md:top-10">
        {hiddenMessage ? (
          <div className="w-full grid place-items-center h-[90vh]">
            <div className="text-center">
              <span className="fa-solid fa-check-circle text-emerald-700 text-5xl" />
              <h3 className="text-xl md:text-3xl font-bold">
                Check your email <br /> to verify your account
              </h3>
              <div className="flex items-center justify-center gap-3 mt-3">
                <Button
                  onClick={() => {
                    window.location.reload();
                    setHiddenMessage(false);
                  }}
                >
                  Back to Registration page
                </Button>
              </div>
            </div>
          </div>
        ) : (
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
              value={register.first_name}
              onChange={(e) => dispatch(setFirstName(e.target.value))}
            />
            <TextInput
              type="text"
              label="Last Name"
              placeholder="Last Name"
              size="md"
              name="last_name"
              required
              value={register.last_name}
              onChange={(e) => dispatch(setLastName(e.target.value))}
              mt="md"
            />
            <TextInput
              type="text"
              label="Work Location"
              placeholder="work_location"
              size="md"
              name="work_location"
              required
              value={register.work_location}
              onChange={(e) => dispatch(setWorkLocation(e.target.value))}
            />
            <TextInput
              type="text"
              label="Job"
              placeholder="job"
              size="md"
              name="job"
              required
              value={register.job}
              onChange={(e) => dispatch(setJob(e.target.value))}
            />

            <TextInput
              label="Email address"
              placeholder="hello@gmail.com"
              size="md"
              name="email"
              type="email"
              value={register.email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              required
            />
            <RegisterInput />

            <Button color={"red"} fullWidth mt="xl" size="md" type="submit">
              Register
            </Button>
            {hiddenMessage && (
              <Text ta="center" mt="md" color={"blue"}>
                {hiddenMessage}
              </Text>
            )}
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
        )}
      </div>
    </div>
  );
};

export default Index;
