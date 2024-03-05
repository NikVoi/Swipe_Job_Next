'use client'

import { useState } from 'react'

type TypeUseModalHook = () => {
	modalIsOpen: boolean
	openModal: () => void
	closeModal: () => void
}

const useModal: TypeUseModalHook = () => {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

	const openModal = () => {
		setModalIsOpen(true)
	}

	const closeModal = () => {
		setModalIsOpen(false)
	}

	return {
		modalIsOpen,
		openModal,
		closeModal,
	}
}

export default useModal
