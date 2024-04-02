import { useNavigate } from "react-router-dom";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const navigate = useNavigate();
  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp,
    onExpire: () => navigate("/finish"),
  });

  return (
    <div className="border rounded-md p-2 shadow-lg">
      <div className="text-4xl font-semibold">
        <span>{hours}</span>:
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
    </div>
  );
}

export default function Timer({ questionsLength }) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + questionsLength * 60); // 1 minute for each question
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
