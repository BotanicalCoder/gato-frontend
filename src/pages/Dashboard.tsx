import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../api/me";

export default function Dashboard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["me"],
    queryFn: getProfile,
  });

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="card">
        <h2 className="arcade-title mb-3 text-base">Player Profile</h2>
        {isLoading
          ? "Loading..."
          : error
          ? "Failed to load profile"
          : data && (
              <div className="grid gap-2">
                <div className="kpi">
                  <strong className="min-w-[120px]">Name</strong>{" "}
                  {data.displayName}
                </div>
                <div className="kpi">
                  <strong className="min-w-[120px]">Email</strong> {data.email}
                </div>
                <div className="kpi">
                  <strong className="min-w-[120px]">Points</strong>{" "}
                  <span className="font-extrabold text-yellow-300">
                    {data.points}
                  </span>
                </div>
                <div className="kpi">
                  <strong className="min-w-[120px]">Streak</strong> 🔥{" "}
                  {data.streakCount}
                </div>
              </div>
            )}
      </div>
      <div className="card">
        <h2 className="arcade-title mb-3 text-base">Badges</h2>
        {isLoading ? (
          "..."
        ) : error ? (
          "..."
        ) : (
          <div className="flex flex-wrap gap-2">
            {data?.badges?.length ? (
              data.badges.map((b, i) => (
                <div key={i} className="badge">
                  <span className="dot"></span>
                  {b.split("_").join(" ")}
                </div>
              ))
            ) : (
              <div className="badge">No badges yet</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
