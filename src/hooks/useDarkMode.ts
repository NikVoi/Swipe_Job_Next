'use client'

import { useState } from 'react'

type TypeDarkMode = () => {
	isDarkMode: boolean
	toggleSwitch: () => void
}

const useDarkMode: TypeDarkMode = () => {
	const [isDarkMode, setDarkMode] = useState(false)

	const toggleSwitch = () => {
		setDarkMode(!isDarkMode)
	}

	// useEffect(() => {
	// 	const theme = localStorage.getItem('theme')
	// 	if (theme === 'dark') setDarkMode(true)
	// }, [])

	// useEffect(() => {
	// 	if (isDarkMode) {
	// 		document.documentElement.classList.add('dark')
	// 		localStorage.setItem('theme', 'dark')
	// 	} else {
	// 		document.documentElement.classList.remove('dark')
	// 		localStorage.setItem('theme', 'dark')
	// 	}
	// }, [isDarkMode])

	return {
		isDarkMode,
		toggleSwitch,
	}
}

export default useDarkMode
