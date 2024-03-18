'use client'

import Messenger from '@/components/Messenger/Messenger'
import CustomModal from '@/components/NavBar/NavBar'
import NavButton from '@/components/UI/NavButton/NavButton'
import { useDarkModeContext } from '@/context/DarkModeContext'
import useModal from '@/hooks/useModal'

export default function MessengerPage() {
	const { modalIsOpen, openModal, closeModal } = useModal()
	const { isDarkMode } = useDarkModeContext()

	return (
		<main
			className={`relative flex flex-col h-full overflow-hidden ${
				isDarkMode ? 'dark' : ''
			}`}
		>
			<NavButton onOpen={openModal} />

			<CustomModal isOpen={modalIsOpen} onClose={closeModal} />

			<Messenger />
		</main>
	)
}
