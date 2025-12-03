import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getActivities } from "../services/api";

const ActivityList = ({ refresh }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchActivities = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await getActivities();
      setActivities(response.data || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load activities. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, [refresh]);

  // 🆕 Remove from UI only — no backend call
  const handleDeleteLocal = (id) => {
    setActivities((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <section className="w-full bg-slate-50 py-4">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between gap-2">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              Recent activities
            </h2>
            <p className="text-xs md:text-sm text-slate-500">
              Tap an activity to view full details.
            </p>
          </div>
          {loading && (
            <span className="text-xs text-emerald-600">Refreshing…</span>
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
            {error}
          </div>
        )}

        {/* Empty state */}
        {!loading && activities.length === 0 && !error && (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-4 py-6 text-center text-sm text-slate-500">
            No activities logged yet. Add your first one to see it here.
          </div>
        )}

        {/* Activities grid */}
        {activities.length > 0 && (
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="relative group text-left rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition flex flex-col px-4 py-3"
              >
                {/* 🆕 Delete button (top-right) */}
                <button
                  onClick={() => handleDeleteLocal(activity.id)}
                  className="absolute top-2 right-2 px-2 py-1 text-[10px] rounded-md bg-red-100 text-red-600 font-semibold hover:bg-red-200 hover:text-red-700 transition"
                >
                  Delete
                </button>

                {/* Make rest of card clickable */}
                <button
                  type="button"
                  onClick={() => navigate(`/activities/${activity.id}`)}
                  className="text-left flex flex-col flex-1"
                >
                  {/* Type pill + maybe date */}
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      {activity.type || "Activity"}
                    </span>
                    {activity.date && (
                      <span className="text-[11px] text-slate-400">
                        {new Date(activity.date).toLocaleDateString()}
                      </span>
                    )}
                  </div>

                  {/* Main numbers */}
                  <div className="mb-2 flex items-baseline justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Duration
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        {activity.duration} min
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Calories
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        {activity.caloriesBurned}
                      </p>
                    </div>
                  </div>

                  {/* Progress-style bar */}
                  <div className="mt-1">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                      <span>Session load</span>
                      <span className="text-emerald-600">
                        {Math.min(
                          100,
                          Math.round(
                            ((Number(activity.duration) || 0) +
                              (Number(activity.caloriesBurned) || 0) / 10) / 3
                          )
                        )}
                        %
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-emerald-400 to-emerald-600 group-hover:from-emerald-500 group-hover:to-emerald-700 transition-all"
                        style={{
                          width: `${Math.min(
                            100,
                            Math.round(
                              ((Number(activity.duration) || 0) +
                                (Number(activity.caloriesBurned) || 0) / 10) / 3
                            )
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ActivityList;
