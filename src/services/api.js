// api.js – FitStack API service for WGER Workout Manager

const WGER_BASE_URL = 'https://wger.de/api/v2'
const API_KEY = '61f324681cdaa93eaa8407f240c874b2a0893d37'

const API_HEADERS = {
    'Authorization': `Token ${API_KEY}`,
    'Accept': 'application/json',
}

// Curated list of the most common gym exercises
// This ensures a clean, relevant dropdown instead of random API items
const COMMON_EXERCISES = [
    'Barbell Bench Press',
    'Incline Dumbbell Press',
    'Decline Bench Press',
    'Cable Chest Fly',
    'Push-Up',
    'Dumbbell Fly',
    'Barbell Back Squat',
    'Front Squat',
    'Leg Press',
    'Romanian Deadlift',
    'Leg Extension',
    'Leg Curl',
    'Walking Lunges',
    'Calf Raises',
    'Conventional Deadlift',
    'Sumo Deadlift',
    'Pull-Up',
    'Chin-Up',
    'Barbell Row',
    'Dumbbell Row',
    'Lat Pulldown',
    'Seated Cable Row',
    'Face Pull',
    'Overhead Press',
    'Dumbbell Shoulder Press',
    'Lateral Raise',
    'Front Raise',
    'Upright Row',
    'Barbell Curl',
    'Dumbbell Curl',
    'Hammer Curl',
    'Preacher Curl',
    'Tricep Pushdown',
    'Skull Crusher',
    'Dips',
    'Overhead Tricep Extension',
    'Plank',
    'Crunch',
    'Leg Raise',
    'Russian Twist',
    'Cable Crunch',
    'Ab Wheel Rollout',
    'Arnold Press',
    'Hack Squat',
    'Bulgarian Split Squat',
    'Hip Thrust',
    'Glute Bridge',
    'Chest Supported Row',
    'Seated Leg Curl',
]

/**
 * fetchExercises
 * Returns the curated list of common exercises.
 * Falls back to fetching from the WGER API if needed.
 */
export async function fetchExercises() {
    // Return the curated list directly — no API needed for the dropdown
    const exercises = COMMON_EXERCISES.map((name, index) => ({
        id: index + 1,
        name,
    }))

    console.log(`✅ ${exercises.length} exercises ready for dropdown`)
    return exercises
}

/**
 * fetchMuscleGroups
 * Fetches muscle groups from WGER API.
 */
export async function fetchMuscleGroups() {
    try {
        const response = await fetch(`${WGER_BASE_URL}/muscle/`, {
            headers: API_HEADERS,
        })

        if (!response.ok) {
            throw new Error(`WGER API error: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        return data.results
    } catch (error) {
        console.error('❌ Failed to fetch muscle groups:', error)
        throw error
    }
}
