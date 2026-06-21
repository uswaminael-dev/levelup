export default function AchievementCard({
  achievement,
  unlocked
}) {

  return (

    <div
      className={`
      glass
      p-5
      ${
      unlocked
      ? ""
      : "opacity-40"
      }
      `}
    >

      <h3
      className="
      text-xl
      font-bold
      "
      >
      {achievement.title}
      </h3>

      <p>
      {achievement.description}
      </p>

      <p
      className="
      mt-2
      "
      >
      {
      unlocked
      ? "✅ Unlocked"
      : "🔒 Locked"
      }
      </p>

    </div>

  );

}