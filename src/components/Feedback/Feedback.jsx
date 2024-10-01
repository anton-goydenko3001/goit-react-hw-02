export default function Feedback({ types, totalFeedback, positiveFeedback }) {
  const { good, neutral, bad } = types;
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </>
  );
}
