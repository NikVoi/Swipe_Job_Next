'use client'

import useDarkMode from '@/hooks/useDarkMode'
import React, { createContext, useContext } from 'react'

interface DarkModeContextType {
	isDarkMode: boolean
	toggleSwitch: () => void
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
	undefined
)

interface DarkModeProviderProps {
	children: React.ReactNode
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
	children,
}) => {
	const darkMode = useDarkMode()

	return (
		<DarkModeContext.Provider value={darkMode}>
			{children}
		</DarkModeContext.Provider>
	)
}

export const useDarkModeContext = () => {
	const context = useContext(DarkModeContext)
	if (!context) {
		throw new Error('useDarkModeContext must be used within a DarkModeProvider')
	}
	return context
}
