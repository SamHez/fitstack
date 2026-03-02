import { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        {
            name: 'Home',
            href: '/',
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        },
        {
            name: 'Create',
            href: '/add-workout',
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        },
        {
            name: 'History',
            href: '/history',
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        },
    ]

    return (
        <nav className="sticky top-0 z-[100] glass-card border-b border-white/20 shadow-lg">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <a href="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
                        <div className="p-1 rounded-xl bg-green-500 group-hover:bg-green-400 transition-colors shadow-lg shadow-green-500/20">
                            <img
                                src="/fitstack-logo1.png"
                                alt="FitStack Logo"
                                className="h-7 w-auto invert brightness-0"
                            />
                        </div>
                        <span className="text-2xl font-black text-gray-900 tracking-tight hidden sm:block">
                            Fit<span className="text-green-600">Stack</span>
                        </span>
                    </a>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="flex items-center gap-2 text-base font-black text-gray-600 hover:text-green-600 transition-all hover:-translate-y-0.5"
                            >
                                <span className="text-green-500/60 group-hover:text-green-500 transition-colors">{link.icon}</span>
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-3 rounded-2xl bg-gray-50 text-gray-900 border border-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all active:scale-95"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <div className={`md:hidden absolute w-full transition-all duration-300 ease-in-out border-b border-gray-200 shadow-2xl overflow-hidden ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}>
                <div className="bg-white flex flex-col p-6 gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-gray-50 hover:bg-green-50 text-xl font-bold text-gray-900 border border-gray-100 transition-all hover:pl-8 active:scale-[0.98]"
                        >
                            <span className="text-green-600">{link.icon}</span>
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
