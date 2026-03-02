// WorkoutCard.jsx – single workout entry UI for Week 2

function WorkoutCard({ workout, toggleWorkout }) {
    if (!workout) return null

    const isCompleted = workout.completed === true

    return (
        <div className={`rounded-2xl shadow-sm p-5 border flex items-center justify-between hover:shadow-md transition-all group overflow-hidden relative ${isCompleted ? 'bg-green-50/50 border-green-200/50 opacity-75' : 'glass-card'}`}>
            <div className="flex items-center gap-4 flex-1">
                {/* Checkbox */}
                <button
                    onClick={() => toggleWorkout(workout.id)}
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${isCompleted ? 'bg-green-500 border-green-500 text-white' : 'border-gray-200 hover:border-green-400'}`}
                >
                    {isCompleted && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                </button>

                <div className="flex flex-col gap-1">
                    <h3 className={`text-lg font-bold transition-colors ${isCompleted ? 'text-gray-400 line-through' : 'text-gray-800 group-hover:text-green-600'}`}>
                        {workout.exercise}
                    </h3>
                    <span className="text-xs font-semibold text-gray-400 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {workout.date}
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-4 text-right">
                <div className="flex flex-col">
                    <span className={`text-lg font-black ${isCompleted ? 'text-gray-400' : 'text-gray-700'}`}>
                        {workout.sets} <span className="text-xs text-gray-400 font-medium">sets</span>
                    </span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Volume</span>
                </div>

                <div className="h-8 w-[1px] bg-gray-100"></div>

                <div className="flex flex-col min-w-[3rem]">
                    <span className={`text-lg font-black ${isCompleted ? 'text-gray-400' : 'text-green-600'}`}>
                        {workout.weight}<span className="text-xs font-medium">kg</span>
                    </span>
                    <span className="text-xs font-medium text-gray-400 italic">@{workout.reps}</span>
                </div>
            </div>

            {/* Subtle accent bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 transition-colors ${isCompleted ? 'bg-green-500' : 'bg-green-500/10 group-hover:bg-green-500'}`}></div>
        </div>
    )
}

export default WorkoutCard
