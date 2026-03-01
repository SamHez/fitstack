// api.js – FitStack API service for WGER Workout Manager

const WGER_BASE_URL = 'https://wger.de/api/v2'
// API Key provided by the user
const API_KEY = '61f324681cdaa93eaa8407f240c874b2a0893d37'

const API_HEADERS = {
    'Authorization': `Token ${API_KEY}`,
    'Accept': 'application/json',
}

/**
 * fetchExercises
 * Fetches a list of exercises. 
 * language=2 (English), status=2 (Verified)
 */
export async function fetchExercises() {
    try {
        // Fetch verified English exercises
        const response = await fetch(`${WGER_BASE_URL}/exercise/?language=2&status=2&limit=50`, {
            headers: API_HEADERS,
        })

        if (!response.ok) {
            throw new Error(`WGER API error: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        // Extract results and sort alphabetically for the dropdown
        const results = data.results.sort((a, b) => a.name.localeCompare(b.name))

        console.log('✅ Exercises fetched successfully')
        return results
    } catch (error) {
        console.error('❌ Failed to fetch exercises:', error)
        throw error
    }
}

/**
 * fetchMuscleGroups
 * Fetches muscle groups.
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
