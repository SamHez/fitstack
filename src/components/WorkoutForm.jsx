// WorkoutForm.jsx – UI and logic for logging a workout
import { useState, useEffect } from 'react'
import { fetchExercises } from '../services/api'

function WorkoutForm({ addWorkout }) {
    const [exercises, setExercises] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Form state
    const [exercise, setExercise] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')

    // Fetch exercises from API on mount
    useEffect(() => {
        async function loadExercises() {
            try {
                const data = await fetchExercises()
                setExercises(data)
                setLoading(false)
            } catch (err) {
                setError('Failed to load exercises. Please try again.')
                setLoading(false)
            }
        }
        loadExercises()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        // Basic validation
        if (!exercise || !sets || !reps || !weight) {
            alert('Please fill in all fields.')
            return
        }

        // Create new workout object
        const newWorkout = {
            id: Date.now(),
            exercise,
            sets: parseInt(sets),
            reps: parseInt(reps),
            weight: parseFloat(weight),
            date: new Date().toLocaleDateString(),
        }

        // Add to global state
        addWorkout(newWorkout)

        // Reset form
        setExercise('')
        setSets('')
        setReps('')
        setWeight('')

        alert('Workout logged successfully!')
    }

    return (
        <div className="backdrop-blur-md bg-white/70 rounded-3xl shadow-xl p-8 border border-white/40 max-w-xl mx-auto">
            <h2 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                </span>
                Log Workout
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Exercise Selection */}
                <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                        Exercise
                    </label>
                    <div className="relative">
                        <select
                            className="w-full bg-white/50 border border-gray-100 rounded-2xl px-5 py-4 text-gray-700 font-bold focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all outline-none appearance-none cursor-pointer disabled:opacity-50"
                            value={exercise}
                            disabled={loading || error}
                            onChange={(e) => setExercise(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                {loading ? 'Loading exercises...' : error ? 'Error loading data' : 'Select an exercise'}
                            </option>
                            {exercises.map((ex) => (
                                <option key={ex.id} value={ex.name}>{ex.name}</option>
                            ))}
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    {error && <p className="text-red-500 text-xs mt-2 ml-1 font-medium">{error}</p>}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1 text-center">
                            Sets
                        </label>
                        <input
                            type="number"
                            placeholder="0"
                            value={sets}
                            onChange={(e) => setSets(e.target.value)}
                            required
                            min="1"
                            className="w-full bg-white/50 border border-gray-100 rounded-2xl px-4 py-4 text-center text-gray-700 font-black focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1 text-center">
                            Reps
                        </label>
                        <input
                            type="number"
                            placeholder="0"
                            value={reps}
                            onChange={(e) => setReps(e.target.value)}
                            required
                            min="1"
                            className="w-full bg-white/50 border border-gray-100 rounded-2xl px-4 py-4 text-center text-gray-700 font-black focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1 text-center">
                            Weight <span className="text-[10px] opacity-60">(kg)</span>
                        </label>
                        <input
                            type="number"
                            placeholder="0"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            required
                            min="0"
                            step="0.5"
                            className="w-full bg-white/50 border border-gray-100 rounded-2xl px-4 py-4 text-center text-gray-700 font-black focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all outline-none"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading || error}
                    className="w-full py-5 bg-green-600 hover:bg-green-700 text-white font-black rounded-2xl shadow-lg shadow-green-100 transition-all hover:-translate-y-0.5 mt-4 disabled:opacity-50"
                >
                    Save Logged Workout
                </button>
            </form>

            <p className="text-center text-xs text-gray-400 mt-6 font-medium">
                Data will be saved to your history.
            </p>
        </div>
    )
}

export default WorkoutForm
