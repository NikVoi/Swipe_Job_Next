'use client'

import CustomModal from '@/components/NavBar/NavBar'
import Swipe from '@/components/Swipe/Swipe'
import NavButton from '@/components/UI/NavButton/NavButton'
import { useDarkModeContext } from '@/context/DarkModeContext'
import useModal from '@/hooks/useModal'

export default function SwipePage() {
	const { modalIsOpen, openModal, closeModal } = useModal()
	const { isDarkMode } = useDarkModeContext()

	return (
		<main
			className={`relative flex flex-col h-full ${isDarkMode ? 'dark' : ''}`}
		>
			<NavButton onOpen={openModal} />

			<CustomModal isOpen={modalIsOpen} onClose={closeModal} />

			<Swipe />
		</main>
	)
}
