import { useState } from 'react'
import WorkoutList from '../components/WorkoutList'

function History({ workouts = [], toggleWorkout }) {
    const [activeFilter, setActiveFilter] = useState('All')

    const filterWorkouts = () => {
        const now = new Date()
        const todayStr = now.toLocaleDateString()
        const yesterday = new Date(now)
        yesterday.setDate(now.getDate() - 1)
        const yesterdayStr = yesterday.toLocaleDateString()

        const tomorrow = new Date(now)
        tomorrow.setDate(now.getDate() + 1)
        const tomorrowStr = tomorrow.toLocaleDateString()

        const sevenDaysAgo = new Date(now)
        sevenDaysAgo.setDate(now.getDate() - 7)

        return workouts.filter(w => {
            if (activeFilter === 'All') return true
            if (activeFilter === 'Today') return w.date === todayStr
            if (activeFilter === 'Yesterday') return w.date === yesterdayStr
            if (activeFilter === 'Tomorrow') return w.date === tomorrowStr
            if (activeFilter === 'Last 7 Days') {
                const workoutDate = new Date(w.date)
                return workoutDate >= sevenDaysAgo && workoutDate <= now
            }
            return true
        })
    }

    const filteredWorkouts = filterWorkouts()

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Simple Back Button UI */}
            <div className="mb-8">
                <a href="/" className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-green-600 transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Dashboard
                </a>
            </div>

            <div className="mb-12">
                <h1 className="text-4xl font-black text-gray-900 mb-2">Workout History</h1>
                <p className="text-gray-500 font-medium">Review your past sessions and track your consistency.</p>
            </div>

            {/* Filters */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
                {['All', 'Today', 'Yesterday', 'Tomorrow', 'Last 7 Days'].map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border whitespace-nowrap ${activeFilter === filter
                            ? 'bg-green-600 border-green-600 text-white shadow-md'
                            : 'bg-white border-gray-200 text-gray-500 hover:border-green-400 hover:text-green-600'
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <WorkoutList workouts={filteredWorkouts} toggleWorkout={toggleWorkout} />
        </div>
    )
}

export default History
