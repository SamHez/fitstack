// api.js – FitStack API service
// Week 1: Test connection to the WGER public REST API

const WGER_BASE_URL = 'https://wger.de/api/v2'

/**
 * fetchExerciseList
 * Fetches a list of exercises from the WGER API and logs the result.
 * Week 1 – console.log only, no return value used in UI yet.
 */
export async function fetchExerciseList() {
    try {
        const response = await fetch(`${WGER_BASE_URL}/exercise/?format=json&language=2&limit=10`)

        if (!response.ok) {
            throw new Error(`WGER API error: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        console.log('✅ WGER API connection successful!')
        console.log('Exercise data:', data)

        return data
    } catch (error) {
        console.error('❌ Failed to connect to WGER API:', error)
        throw error
    }
}

/**
 * fetchMuscleGroups
 * Fetches muscle groups from the WGER API.
 * Week 1 – console.log only.
 */
export async function fetchMuscleGroups() {
    try {
        const response = await fetch(`${WGER_BASE_URL}/muscle/?format=json`)

        if (!response.ok) {
            throw new Error(`WGER API error: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        console.log('✅ Muscle groups fetched successfully!')
        console.log('Muscle groups:', data)

        return data
    } catch (error) {
        console.error('❌ Failed to fetch muscle groups:', error)
        throw error
    }
}

// ─── WEEK 1 API TEST ────────────────────────────────────────────────────────
// Calling both functions on module load to verify connectivity.
// Remove or comment out these calls in Week 2 when wiring up real UI state.
fetchExerciseList()
fetchMuscleGroups()
