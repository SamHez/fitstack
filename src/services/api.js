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
 * Fetches a list of exercises with names and descriptions. 
 * endpoint: exerciseinfo/
 * language=2 (English)
 */
export async function fetchExercises() {
    try {
        // Fetch verified English exercises using exerciseinfo/ for names
        const response = await fetch(`${WGER_BASE_URL}/exerciseinfo/?language=2&limit=50`, {
            headers: API_HEADERS,
        })

        if (!response.ok) {
            throw new Error(`WGER API error: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        // Extract results and sort alphabetically for the dropdown
        // The results array in exerciseinfo contains objects with a 'name' field
        const results = data.results.sort((a, b) => a.name.localeCompare(b.name))

        console.log('✅ Exercises fetched successfully from exerciseinfo/')
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
