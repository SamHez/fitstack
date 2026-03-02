// Home.jsx – FitStack Home page

import ProgressSummary from '../components/ProgressSummary'
import WorkoutList from '../components/WorkoutList'
import Calendar from '../components/Calendar'

function Home({ workouts = [], toggleWorkout }) {
    // Show only 3 most recent workouts on home
    const recentWorkouts = workouts.slice(0, 3)

    return (
        <div className="min-h-screen bg-hero-pattern pb-20">
            {/* Modern Hero Section - Full Width */}
            <section className="relative min-h-[500px] md:min-h-[600px] bg-gray-900 flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-emerald-600/10 to-transparent pointer-events-none"></div>
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[140px]"></div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-8 pb-32 md:pb-48">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
                                Peak <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">Performance</span> <br />
                                Simplified.
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 max-w-xl font-medium mb-10 leading-relaxed mx-auto md:mx-0">
                                Join Samuel Epodoi's ultimate fitness tracker. Log your lifts, track your streaks, and crush your goals.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a
                                    href="/add-workout"
                                    className="inline-flex items-center justify-center px-10 py-5 bg-green-500 hover:bg-green-400 text-gray-900 font-black rounded-2xl shadow-xl shadow-green-500/20 transition-all hover:-translate-y-1 active:translate-y-0"
                                >
                                    Plan Today's Lift
                                    <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
                                    </svg>
                                </a>
                                <a
                                    href="/history"
                                    className="inline-flex items-center justify-center px-10 py-5 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/10 transition-all hover:-translate-y-1"
                                >
                                    Log History
                                </a>
                            </div>
                        </div>

                        {/* Visual element (Glass card mockup) */}
                        <div className="hidden lg:block relative group">
                            <div className="absolute inset-0 bg-green-500 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            <div className="relative glass-card-dark p-8 rounded-[32px] w-[320px] border-white/5 rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-gray-900 font-bold text-lg">FE</div>
                                    <div>
                                        <div className="text-white font-bold text-base">Samuel Epodoi</div>
                                        <div className="text-green-500/80 text-xs font-black uppercase tracking-widest">Pro Athlete</div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full w-[85%] bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                    </div>
                                    <div className="flex justify-between text-[10px] font-black text-gray-500 uppercase tracking-widest">
                                        <span>Current Focus</span>
                                        <span className="text-green-500">85% Strength</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Dashboard Layout - Overlapping Container */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-32 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Left Column: Progress & Activity */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Weekly Progress */}
                        <section className="glass-card rounded-[40px] p-8 md:p-10 shadow-2xl border-white/40">
                            <h2 className="text-xs font-bold text-green-600 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-green-200"></span>
                                Performance Dashboard
                            </h2>
                            <ProgressSummary workouts={workouts} />
                        </section>

                        {/* Recent Activity */}
                        <section className="glass-card rounded-[40px] p-8 md:p-10 shadow-xl border-white/40">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-black text-gray-800">Latest Sessions</h2>
                                <a href="/history" className="text-sm font-bold text-green-600 hover:text-green-700 bg-green-50 px-4 py-2 rounded-full transition-colors">
                                    Show All
                                </a>
                            </div>
                            <WorkoutList workouts={recentWorkouts} toggleWorkout={toggleWorkout} />
                        </section>
                    </div>

                    {/* Right Column: Calendar */}
                    <aside className="sticky top-24">
                        <section className="glass-card rounded-[40px] p-8 md:p-10 shadow-xl border-white/40">
                            <h2 className="text-xs font-bold text-green-600 uppercase tracking-[0.2em] mb-6 flex items-center gap-2 lg:text-left">
                                <span className="w-8 h-[1px] bg-green-200"></span>
                                Consistency
                            </h2>
                            <Calendar workouts={workouts} />
                        </section>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default Home
