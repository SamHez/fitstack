// AddWorkout.jsx – Page for adding a new workout session

import WorkoutForm from '../components/WorkoutForm'

function AddWorkout() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
            <div className="w-full">
                {/* Simple Back Button UI */}
                <div className="max-w-xl mx-auto mb-8">
                    <a href="/" className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-green-600 transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Dashboard
                    </a>
                </div>

                <WorkoutForm />
            </div>
        </div>
    )
}

export default AddWorkout
