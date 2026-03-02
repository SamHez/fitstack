// AddWorkout.jsx – Page for adding a new workout session

import WorkoutForm from '../components/WorkoutForm'

function AddWorkout({ addWorkout }) {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[80vh] flex flex-col justify-center">
            <div className="w-full">
                {/* Simple Back Button UI */}
                <div className="mb-8">
                    <a href="/" className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-green-600 transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Dashboard
                    </a>
                </div>

                {/* Pass the addWorkout function down to the form */}
                <WorkoutForm addWorkout={addWorkout} />
            </div>
        </div>
    )
}

export default AddWorkout
