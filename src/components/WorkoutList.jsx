// WorkoutList.jsx – list of static workouts for Week 2

import WorkoutCard from './WorkoutCard'

function WorkoutList({ workouts }) {
    // Use provided workouts or default mock data for now
    const mockWorkouts = workouts || [
        { id: 1, exercise: 'Bench Press', date: '2026-03-01', sets: 3, reps: 10, weight: 60 },
        { id: 2, exercise: 'Squats', date: '2026-02-28', sets: 4, reps: 8, weight: 80 },
        { id: 3, exercise: 'Deadlift', date: '2026-02-26', sets: 1, reps: 5, weight: 120 },
    ]

    return (
        <div className="space-y-4">
            {mockWorkouts.map((workout) => (
                <WorkoutCard key={workout.id} workout={workout} />
            ))}

            {mockWorkouts.length === 0 && (
                <div className="text-center py-10 text-gray-400 font-medium italic">
                    No workouts logged yet. Time to get moving!
                </div>
            )}
        </div>
    )
}

export default WorkoutList
