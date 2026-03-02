// WorkoutList.jsx – renders a list of workout cards

import WorkoutCard from './WorkoutCard'

function WorkoutList({ workouts = [], toggleWorkout }) {
    if (workouts.length === 0) {
        return (
            <div className="text-center py-12 text-gray-400 font-medium italic">
                No workouts logged yet. Time to get moving! 💪
            </div>
        )
    }

    return (
        <div className="space-y-4">
            {workouts.map((workout) => (
                <WorkoutCard
                    key={workout.id}
                    workout={workout}
                    toggleWorkout={toggleWorkout}
                />
            ))}
        </div>
    )
}

export default WorkoutList
