import React, { useState } from "react";
import { addActivity} from "../services/api"; // adjust if needed

const ActivityForm = ({ onActivityAdded, onActivityDeleted }) => {
  const [activity, setActivity] = useState({
    type: "RUNNING",
    duration: "",
    caloriesBurned: "",
    additionalMetrics: {},
  });

  const [deleteId, setDeleteId] = useState("");
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const handleChange = (field) => (e) => {
    setActivity((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoadingAdd(true);
      await addActivity({
        ...activity,
        duration: Number(activity.duration),
        caloriesBurned: Number(activity.caloriesBurned),
      });
      if (onActivityAdded) onActivityAdded();
      setActivity({
        type: "RUNNING",
        duration: "",
        caloriesBurned: "",
        additionalMetrics: {},
      });
    } catch (err) {
      console.error("Error adding activity:", err);
    } finally {
      setLoadingAdd(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      setLoadingDelete(true);
      await deleteActivity(deleteId); // make sure this exists in your API
      if (onActivityDeleted) onActivityDeleted(deleteId);
      setDeleteId("");
    } catch (err) {
      console.error("Error deleting activity:", err);
    } finally {
      setLoadingDelete(false);
    }
  };

  return (
    <section className="w-full bg-slate-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 md:p-8">
          <div className="mb-6 flex flex-col gap-1">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Log your activity
            </h2>
            <p className="text-sm text-slate-600">
              Track your workouts so FitAI can generate smarter, more accurate
              recommendations.
            </p>
          </div>

          {/* Add Activity Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Activity Type */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="activity-type"
                className="text-sm font-medium text-slate-800"
              >
                Activity Type
              </label>
              <select
                id="activity-type"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                value={activity.type}
                onChange={handleChange("type")}
              >
                <option value="RUNNING">Running</option>
                <option value="WALKING">Walking</option>
                <option value="CYCLING">Cycling</option>
              </select>
            </div>

            {/* Duration + Calories */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="duration"
                  className="text-sm font-medium text-slate-800"
                >
                  Duration (minutes)
                </label>
                <input
                  id="duration"
                  type="number"
                  min="0"
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  value={activity.duration}
                  onChange={handleChange("duration")}
                  placeholder="e.g. 30"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="calories"
                  className="text-sm font-medium text-slate-800"
                >
                  Calories burned
                </label>
                <input
                  id="calories"
                  type="number"
                  min="0"
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  value={activity.caloriesBurned}
                  onChange={handleChange("caloriesBurned")}
                  placeholder="e.g. 250"
                />
              </div>
            </div>

            {/* Add Button */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={loadingAdd}
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-300/60 hover:bg-emerald-400 active:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70 transition"
              >
                {loadingAdd ? "Adding..." : "Add Activity"}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="my-6 h-px bg-slate-200" />

          {/* Delete Activity */}
          {/* <div className="space-y-3">
            <p className="text-sm font-medium text-slate-800">
              Delete an activity
            </p>
            <div className="grid gap-3 md:grid-cols-[1.5fr_auto]">
              <input
                type="text"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Enter activity ID to delete"
                value={deleteId}
                onChange={(e) => setDeleteId(e.target.value)}
              />
              <button
                type="button"
                onClick={handleDelete}
                disabled={!deleteId || loadingDelete}
                className="inline-flex items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-red-300/60 hover:bg-red-400 active:bg-red-600 disabled:cursor-not-allowed disabled:opacity-70 transition"
              >
                {loadingDelete ? "Deleting..." : "Delete Activity"}
              </button>
            </div>
            <p className="text-xs text-slate-500">
              Use the ID from your activity list or detail view to remove an
              entry.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ActivityForm;
