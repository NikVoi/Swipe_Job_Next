'use client'

import CustomModal from '@/components/NavBar/NavBar'
import Profile from '@/components/Profile/Profile'
import NavButton from '@/components/UI/NavButton/NavButton'
import { useDarkModeContext } from '@/context/DarkModeContext'
import useModal from '@/hooks/useModal'
import { useLocale, useMessages } from 'next-intl'

export default function ProfilePage() {
	const messages = useMessages()
	const locale = useLocale()

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

			<Profile />
		</main>
	)
}
