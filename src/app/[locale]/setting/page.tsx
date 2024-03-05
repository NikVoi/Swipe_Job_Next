'use client'

import CustomModal from '@/components/NavBar/NavBar'
import Setting from '@/components/Setting/Setting'
import NavButton from '@/components/UI/NavButton/NavButton'
import { useDarkModeContext } from '@/context/DarkModeContext'

import useModal from '@/hooks/useModal'
import { useLocale, useMessages } from 'next-intl'

export default function SettingPage() {
	const { modalIsOpen, openModal, closeModal } = useModal()
	const { isDarkMode } = useDarkModeContext()

	const messages = useMessages()
	const locale = useLocale()

	return (
		<main
			className={`relative flex flex-col h-full ${isDarkMode ? 'dark' : ''}`}
		>
			<NavButton onOpen={openModal} />

			<CustomModal isOpen={modalIsOpen} onClose={closeModal} />

			<Setting />
		</main>
	)
}
