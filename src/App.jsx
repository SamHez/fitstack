import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AddWorkout from './pages/AddWorkout'
import History from './pages/History'
import { useState, useEffect, useRef } from 'react'

function App() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    // Initialize workouts directly from localStorage — no async useEffect needed.
    // This avoids a race condition where the "save" effect fires before the "load" effect,
    // overwriting stored data with an empty array on first render.
    const [workouts, setWorkouts] = useState(() => {
        try {
            const saved = localStorage.getItem('fitstack_workouts')
            return saved ? JSON.parse(saved) : []
        } catch (e) {
            console.error('Failed to load workouts from localStorage:', e)
            return []
        }
    })

    // Track whether the initial load is done before saving
    const isFirstRender = useRef(true)

    // Save workouts to localStorage whenever they change — but skip the first render
    // (because on first render, workouts already came FROM localStorage)
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        localStorage.setItem('fitstack_workouts', JSON.stringify(workouts))
    }, [workouts])

    useEffect(() => {
        const handleLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', handleLocationChange)
        return () => window.removeEventListener('popstate', handleLocationChange)
    }, [])

    const addWorkout = (newWorkout) => {
        // Add new workout to the beginning of the list
        setWorkouts(prev => [newWorkout, ...prev])
    }

    const toggleWorkout = (id) => {
        setWorkouts(prev => prev.map(w =>
            w.id === id ? { ...w, completed: !w.completed } : w
        ))
    }

    const renderPage = () => {
        switch (currentPath) {
            case '/add-workout':
                return <AddWorkout addWorkout={addWorkout} />
            case '/history':
                return <History workouts={workouts} toggleWorkout={toggleWorkout} />
            default:
                return <Home workouts={workouts} toggleWorkout={toggleWorkout} />
        }
    }

    return (
        <div className="min-h-screen flex flex-col bg-brand-50">
            <Navbar />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer />
        </div>
    )
}

export default App
