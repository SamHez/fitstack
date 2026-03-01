// Footer.jsx – FitStack footer

function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-8 mt-auto">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <img src="/fitstack-logo.png" alt="FitStack" className="h-6 w-auto opacity-70" />
                        <span className="text-gray-400 font-medium text-sm transition-colors cursor-default">
                            FitStack Fitness Tracker
                        </span>
                    </div>

                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} <span className="font-semibold text-green-600/80">FitStack</span>.
                        Built for ALX Frontend Capstone.
                    </p>

                    <div className="flex gap-6 text-xs text-gray-400 font-medium">
                        <a href="#" className="hover:text-green-600 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-green-600 transition-colors">Terms</a>
                        <a href="https://wger.de/en/software/api" target="_blank" rel="noreferrer" className="hover:text-green-600 transition-colors">
                            WGER API
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
