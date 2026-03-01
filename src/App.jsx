import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AddWorkout from './pages/AddWorkout'
import History from './pages/History'
import { useState, useEffect } from 'react'

function App() {
    // Simple "manual router" for ALX student level
    // This allows checking the UI of different pages without a router library yet
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const handleLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }

        // Direct clicks on <a> tags in our Navbar with hrefs like "/history"
        // will trigger a page reload which resets state, but we can handle it
        // for a simple static UI demo.
        window.addEventListener('popstate', handleLocationChange)
        return () => window.removeEventListener('popstate', handleLocationChange)
    }, [])

    const renderPage = () => {
        switch (currentPath) {
            case '/add-workout':
                return <AddWorkout />
            case '/history':
                return <History />
            default:
                return <Home />
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
