import Description from "../Description/Description";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import Feedback from "../Feedback/Feedback";
import "./App.css";

import { useState, useEffect } from "react";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedClicks = localStorage.getItem("my-clicks");
    return savedClicks != null
      ? JSON.parse(savedClicks)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem("my-clicks", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  const updateFeedback = (typeFeedback) => {
    setFeedback((feedback) => ({
      ...feedback,
      [typeFeedback]: feedback[typeFeedback] + 1,
    }));
  };
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          types={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
