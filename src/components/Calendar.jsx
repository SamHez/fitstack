// Calendar.jsx – A simple streak-tracking calendar for FitStack
import { useState } from 'react'

function Calendar({ workouts = [] }) {
    const [currentDate, setCurrentDate] = useState(new Date())

    // Group workouts by date for easier lookup
    // Date key format: "M/D/YYYY" (matches toLocaleDateString())
    const workoutData = workouts.reduce((acc, w) => {
        const dateKey = w.date
        if (!acc[dateKey]) acc[dateKey] = { total: 0, completed: 0 }
        acc[dateKey].total += 1
        if (w.completed) acc[dateKey].completed += 1
        return acc
    }, {})

    // Calendar helper functions
    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate()
    const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay()

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const daysInMonth = getDaysInMonth(year, month)
    const firstDay = getFirstDayOfMonth(year, month)

    const monthName = currentDate.toLocaleString('default', { month: 'long' })
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
    const blanks = Array.from({ length: firstDay }, (_, i) => i)

    const isDaySuccessful = (day) => {
        const dateKey = new Date(year, month, day).toLocaleDateString()
        const data = workoutData[dateKey]
        if (!data) return null
        return data.completed >= (data.total / 2)
    }

    return (
        <div className="glass-card rounded-3xl p-6 border border-white/40 max-w-sm mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-black text-gray-800">{monthName} {year}</h3>
                <div className="flex gap-2">
                    <button
                        onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                    <div key={d} className="text-[10px] font-black text-gray-400 text-center uppercase py-1">{d}</div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
                {blanks.map(b => <div key={`b-${b}`} />)}
                {days.map(day => {
                    const status = isDaySuccessful(day)
                    return (
                        <div
                            key={day}
                            className={`aspect-square flex items-center justify-center text-xs font-bold rounded-lg transition-all relative group cursor-default
                                ${status === true ? 'bg-green-500 text-white shadow-sm shadow-green-200' :
                                    status === false ? 'bg-red-50 text-red-500 border border-red-100' :
                                        'text-gray-400 hover:bg-gray-50'}`}
                        >
                            {day}
                            {status !== null && (
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                                    {workoutData[new Date(year, month, day).toLocaleDateString()].completed} / {workoutData[new Date(year, month, day).toLocaleDateString()].total} Completed
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Streak Met
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    Missed
                </div>
            </div>
        </div>
    )
}

export default Calendar
