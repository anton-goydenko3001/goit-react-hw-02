import style from "./Options.module.css";

export default function Options({
  totalFeedback,
  updateFeedback,
  resetFeedback,
}) {
  return (
    <div className={style.reviewsButtonContainer}>
      <button
        className={style.reviewsButton}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={style.reviewsButton}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={style.reviewsButton}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 ? (
        <button className={style.reviewsButton} onClick={resetFeedback}>
          Reset
        </button>
      ) : null}
    </div>
  );
}
