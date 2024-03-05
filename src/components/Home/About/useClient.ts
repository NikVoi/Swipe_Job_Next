'use client'

import { useEffect, useState } from 'react'

export function useClient() {
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoaded(true)
		}, 100)

		return () => clearTimeout(timer)
	}, [])

	return isLoaded
}
