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
 * Fetches names and IDs from exerciseinfo.
 * We fetch a larger batch (100+) to ensure English results are included.
 */
export async function fetchExercises() {
    try {
        console.log('🔄 Fetching exercises from WGER...');

        // Use exerciseinfo which contains names. 
        // We use language=2 but fetch more items as the API filter can be loose.
        const response = await fetch(`${WGER_BASE_URL}/exerciseinfo/?language=2&limit=200`, {
            headers: API_HEADERS,
        })

        if (!response.ok) {
            throw new Error(`WGER API error: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()

        if (!data || !data.results) {
            throw new Error('Invalid response format from WGER API')
        }

        // 1. Filter for items that actually have a name string
        // 2. Prioritize items where language is 2 (English)
        const englishItems = data.results.filter(item =>
            item &&
            typeof item.name === 'string' &&
            item.name.trim().length > 0 &&
            item.language === 2
        );

        // Fallback: If no English items found in the batch, take any valid named items
        const resultsToUse = englishItems.length > 0
            ? englishItems
            : data.results.filter(item => item && typeof item.name === 'string' && item.name.trim().length > 0);

        // Sort alphabetically with a very safe compare
        const sortedResults = resultsToUse.sort((a, b) => {
            const nameA = a.name || "";
            const nameB = b.name || "";
            return nameA.localeCompare(nameB);
        });

        console.log(`✅ ${sortedResults.length} exercises ready (from ${data.results.length} raw results)`);

        // Final sanity check: if still 0, at least don't crash the UI
        return sortedResults;
    } catch (error) {
        console.error('❌ Failed to fetch exercises:', error);
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
