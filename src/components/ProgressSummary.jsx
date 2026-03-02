// ProgressSummary.jsx – dynamic stats for Week 3

function ProgressSummary({ workouts = [] }) {
    // Real stats calculation
    const totalWorkouts = workouts.length
    const totalSets = workouts.reduce((acc, curr) => acc + (curr.sets || 0), 0)
    const totalVolume = workouts.reduce((acc, curr) => acc + ((curr.weight || 0) * (curr.sets || 0) * (curr.reps || 0)), 0)

    const stats = [
        { label: 'Total Workouts', value: totalWorkouts, color: 'text-green-600' },
        { label: 'Total Sets', value: totalSets, color: 'text-blue-600' },
        { label: 'Total Volume', value: `${Math.round(totalVolume).toLocaleString()}kg`, color: 'text-orange-500' },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="backdrop-blur-md bg-white/70 rounded-2xl shadow-sm p-6 border border-white/40 flex flex-col items-center justify-center hover:shadow-md transition-shadow"
                >
                    <span className={`text-3xl font-extrabold ${stat.color} mb-1`}>{stat.value}</span>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</span>
                </div>
            ))}
        </div>
    )
}

export default ProgressSummary
