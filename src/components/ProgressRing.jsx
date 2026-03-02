// ProgressRing.jsx – Scalable SVG progress ring
function ProgressRing({ radius, stroke, progress, color = "stroke-green-500" }) {
    const normalizedRadius = radius - stroke * 2
    const circumference = normalizedRadius * 2 * Math.PI
    const strokeDashoffset = circumference - (progress / 100) * circumference

    return (
        <svg
            height={radius * 2}
            width={radius * 2}
            className="transform -rotate-90"
        >
            {/* Background Circle */}
            <circle
                stroke="currentColor"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                className="text-gray-100"
            />
            {/* Progress Circle */}
            <circle
                stroke="currentColor"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference + ' ' + circumference}
                style={{ strokeDashoffset }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                className={`${color} transition-all duration-700 ease-out rounded-full`}
                strokeLinecap="round"
            />
        </svg>
    )
}

export default ProgressRing
