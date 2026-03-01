// Footer.jsx – FitStack footer

function Footer() {
    return (
        <footer className="backdrop-blur-md bg-white/70 border-t border-white/30 shadow-inner mt-auto">
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} <span className="font-semibold text-green-600">FitStack</span>. All rights reserved.
                </p>
                <p className="text-xs text-gray-400">Powered by WGER Workout Manager API</p>
            </div>
        </footer>
    )
}

export default Footer
