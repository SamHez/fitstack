// Navbar.jsx – FitStack top navigation with liquid glass effect

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/30 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img
                        src="/fitstack-logo.png"
                        alt="FitStack Logo"
                        className="h-10 w-auto object-contain"
                    />
                    <span className="text-xl font-bold text-gray-800 tracking-tight">
                        Fit<span className="text-green-600">Stack</span>
                    </span>
                </div>

                {/* Nav Links */}
                <ul className="flex items-center gap-6 text-sm font-medium text-gray-600">
                    <li>
                        <a href="/" className="hover:text-green-600 transition-colors duration-200">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/add-workout" className="hover:text-green-600 transition-colors duration-200">
                            Add Workout
                        </a>
                    </li>
                    <li>
                        <a href="/history" className="hover:text-green-600 transition-colors duration-200">
                            History
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
