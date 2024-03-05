'use client'

import { MdOutlineNightlight } from 'react-icons/md'

import { useDarkModeContext } from '@/context/DarkModeContext'
import styles from './DarkThemeButton.module.scss'

export default function DarkThemeButton() {
	const { toggleSwitch, isDarkMode } = useDarkModeContext()

	return (
		<button className={styles.dark} onClick={toggleSwitch}>
			<MdOutlineNightlight />
		</button>
	)
}
