// WorkoutForm.jsx – UI for logging a workout

function WorkoutForm() {
    const exercises = [
        'Bench Press',
        'Squats',
        'Deadlift',
        'Overhead Press',
        'Barbell Row',
        'Dumbbell Lateral Raise',
    ]

    return (
        <div className="backdrop-blur-md bg-white/70 rounded-3xl shadow-xl p-8 border border-white/40 max-w-xl mx-auto">
            <h2 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                </span>
                Log Workout
            </h2>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Exercise Selection */}
                <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                        Exercise
                    </label>
                    <select className="w-full bg-white/50 border border-gray-100 rounded-2xl px-5 py-4 text-gray-700 font-bold focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all outline-none appearance-none cursor-pointer">
                        <option value="" disabled selected>Select an exercise</option>
                        {exercises.map((ex) => (
                            <option key={ex} value={ex}>{ex}</option>
                        ))}
                    </select>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1 text-center">
                            Sets
                        </label>
                        <input
                            type="number"
                            placeholder="0"
                            className="w-full bg-white/50 border border-gray-100 rounded-2xl px-4 py-4 text-center text-gray-700 font-black focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1 text-center">
                            Reps
                        </label>
                        <input
                            type="number"
                            placeholder="0"
                            className="w-full bg-white/50 border border-gray-100 rounded-2xl px-4 py-4 text-center text-gray-700 font-black focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1 text-center">
                            Weight <span className="text-[10px] opacity-60">(kg)</span>
                        </label>
                        <input
                            type="number"
                            placeholder="0"
                            className="w-full bg-white/50 border border-gray-100 rounded-2xl px-4 py-4 text-center text-gray-700 font-black focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all outline-none"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="button"
                    className="w-full py-5 bg-green-600 hover:bg-green-700 text-white font-black rounded-2xl shadow-lg shadow-green-100 transition-all hover:-translate-y-0.5 mt-4"
                >
                    Save Logged Workout
                </button>
            </form>

            <p className="text-center text-xs text-gray-400 mt-6 font-medium">
                Data will be saved to your history.
            </p>
        </div>
    )
}

export default WorkoutForm
