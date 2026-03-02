// History.jsx – FitStack Workout History page

import WorkoutList from '../components/WorkoutList'

function History({ workouts = [] }) {
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

            {/* Filters (UI Placeholder for future) */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
                {['All', 'Strength', 'Cardio', 'Mobility'].map((filter) => (
                    <button
                        key={filter}
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border ${filter === 'All'
                            ? 'bg-green-600 border-green-600 text-white shadow-md'
                            : 'bg-white border-gray-200 text-gray-500 hover:border-green-400 hover:text-green-600'
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <WorkoutList workouts={workouts} />
        </div>
    )
}

export default History
