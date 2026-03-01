// Home.jsx – FitStack Home page

import ProgressSummary from '../components/ProgressSummary'
import WorkoutList from '../components/WorkoutList'

function Home({ workouts = [] }) {
    // Show only 3 most recent workouts on home
    const recentWorkouts = workouts.slice(0, 3)

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <section className="text-center mb-16 px-4">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                    Level Up Your <span className="text-green-600">Fitness</span>
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium mb-8">
                    The simple, clean way to track your lifts and see your progress. No fluff, just gains.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/add-workout"
                        className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl shadow-lg shadow-green-200 transition-all hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Start New Workout
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </a>
                    <a
                        href="/history"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-bold rounded-2xl border border-gray-200 shadow-sm transition-all hover:-translate-y-0.5"
                    >
                        View History
                    </a>
                </div>
            </section>

            {/* Stats Summary */}
            <section className="mb-16">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 text-center">
                    Weekly Progress
                </h2>
                <ProgressSummary workouts={workouts} />
            </section>

            {/* Recent Activity */}
            <section>
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-black text-gray-800">Recent Workouts</h2>
                    <a href="/history" className="text-sm font-bold text-green-600 hover:text-green-700">
                        See all →
                    </a>
                </div>
                <WorkoutList workouts={recentWorkouts} />
            </section>
        </div>
    )
}

export default Home
