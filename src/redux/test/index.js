import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answers: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      const { question, answer, correct } = action.payload;
      const existingAnswer = state.answers.find(
        (item) => item.question === question
      );

      if (existingAnswer) {
        existingAnswer.answer = answer;
      } else {
        state.answers.push({ question, answer, correct });
      }
    },
    resetAnswers: (state) => {
      state.answers = [];
    },
  },
});

export const { addAnswer, resetAnswers } = quizSlice.actions;

export default quizSlice.reducer;
