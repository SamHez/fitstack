// Navbar.jsx – FitStack top navigation with liquid glass effect

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/10 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                        <img
                            src="/fitstack-logo.png"
                            alt="FitStack Logo"
                            className="h-8 w-auto"
                        />
                        <span className="text-xl font-bold text-gray-900 tracking-tight hidden sm:block">
                            Fit<span className="text-green-600">Stack</span>
                        </span>
                    </div>

                    {/* Nav Links */}
                    <div className="flex items-center gap-3 sm:gap-8">
                        <a href="/" className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors">
                            Home
                        </a>
                        <a href="/add-workout" className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors">
                            Add Workout
                        </a>
                        <a href="/history" className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors">
                            History
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
