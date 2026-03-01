// Home.jsx – FitStack Home page (placeholder for Week 1)

import ProgressSummary from '../components/ProgressSummary'
import WorkoutList from '../components/WorkoutList'

function Home() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            {/* Hero */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
                    Welcome to <span className="text-green-600">FitStack</span>
                </h1>
                <p className="text-gray-500 text-base max-w-md mx-auto">
                    Track your workouts, monitor progress, and stay consistent — all in one place.
                </p>
            </div>

            {/* Sections */}
            <div className="grid gap-6">
                <ProgressSummary />
                <WorkoutList />
            </div>
        </div>
    )
}

export default Home
