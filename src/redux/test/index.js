import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAnswers: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      const { question, answer } = action.payload;
      const existingAnswer = state.userAnswers.find(
        (item) => item.question === question
      );

      if (existingAnswer) {
        existingAnswer.answer = answer;
      } else {
        state.userAnswers.push({ question, answer });
      }
    },
    resetAnswers: (state) => {
      state.userAnswers = [];
    },
  },
});

export const { addAnswer, resetAnswers } = quizSlice.actions;

export default quizSlice.reducer;
