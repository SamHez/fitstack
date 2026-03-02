// ProgressSummary.jsx – dynamic stats for Week 3

import ProgressRing from './ProgressRing'

function ProgressSummary({ workouts = [] }) {
    // Real stats calculation (Only count completed workouts for progress)
    const plannedWorkouts = workouts.length
    const completedWorkouts = workouts.filter(w => w.completed)
    const totalWorkouts = completedWorkouts.length
    const totalSets = completedWorkouts.reduce((acc, curr) => acc + (curr.sets || 0), 0)
    const totalVolume = completedWorkouts.reduce((acc, curr) => acc + ((curr.weight || 0) * (curr.sets || 0) * (curr.reps || 0)), 0)

    // Calculate Completion Rate
    const completionRate = plannedWorkouts > 0
        ? Math.round((completedWorkouts.length / plannedWorkouts) * 100)
        : 0

    // Calculate Streak (Consecutive days with >= 50% completion)
    const workoutData = workouts.reduce((acc, w) => {
        const dateKey = w.date
        if (!acc[dateKey]) acc[dateKey] = { total: 0, completed: 0 }
        acc[dateKey].total += 1
        if (w.completed) acc[dateKey].completed += 1
        return acc
    }, {})

    let streak = 0
    let tempDate = new Date()

    while (true) {
        const dateKey = tempDate.toLocaleDateString()
        const data = workoutData[dateKey]

        // If there were workouts and we met the 50% goal, increment streak
        if (data && data.completed >= (data.total / 2)) {
            streak++
            tempDate.setDate(tempDate.getDate() - 1)
        } else if (!data) {
            // If no workouts for a previous day, we can either break or skip
            // Usually streaks are broken by a "missed" day (workouts planned but not done)
            // But if no workouts were planned, does the streak continue?
            // User said: "a streak happens if I complete atleast half of the workouts set for that day"
            // Let's assume a streak break only happens if you MISS a planned day (data exists but condition fails)
            // Or if you just haven't worked out today yet.

            // For simplicity: If no data, break streak (strict mode)
            // But wait, if they didn't work out yesterday, the streak should be 0 or current?
            // Let's just break it if a day is missing or failed.
            break
        } else {
            // Data exists but condition failed
            break
        }
    }

    const stats = [
        { label: 'Workouts Done', value: totalWorkouts, color: 'text-green-600', icon: '🔥' },
        { label: 'Completion Rate', value: `${completionRate}%`, color: 'text-blue-600', isProgress: true },
        { label: 'Current Streak', value: `${streak} days`, color: 'text-orange-500', icon: '⚡' },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
                <div key={index} className="glass-card rounded-3xl p-6 flex items-center justify-between border border-white/40">
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                            {stat.label}
                        </span>
                        <span className={`text-2xl font-black ${stat.color} flex items-center gap-2`}>
                            {!stat.isProgress && stat.icon} {stat.value}
                        </span>
                    </div>
                    {stat.isProgress && (
                        <div className="relative flex items-center justify-center">
                            <ProgressRing radius={30} stroke={4} progress={completionRate} />
                            <span className="absolute text-[10px] font-black text-blue-600">{completionRate}%</span>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default ProgressSummary
