import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AddWorkout from './pages/AddWorkout'
import History from './pages/History'
import { useState, useEffect } from 'react'

function App() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    // Central state for all workouts
    const [workouts, setWorkouts] = useState([])

    // Load workouts from localStorage on mount
    useEffect(() => {
        const savedWorkouts = localStorage.getItem('fitstack_workouts')
        if (savedWorkouts) {
            try {
                setWorkouts(JSON.parse(savedWorkouts))
            } catch (e) {
                console.error("Failed to parse saved workouts:", e)
            }
        }
    }, [])

    // Save workouts to localStorage whenever they change
    useEffect(() => {
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
        setWorkouts([newWorkout, ...workouts])
    }

    const renderPage = () => {
        switch (currentPath) {
            case '/add-workout':
                return <AddWorkout addWorkout={addWorkout} />
            case '/history':
                return <History workouts={workouts} />
            default:
                return <Home workouts={workouts} />
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
