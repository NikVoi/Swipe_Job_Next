'use client'

import classNames from 'classnames'

import { useDarkModeContext } from '@/context/DarkModeContext'
import DarkThemeButton from '../DarkThemeButton/DarkThemeButton'
import styles from './Auth.module.scss'
import AuthAction from './AuthAction/authAction'
import AuthSlider from './AuthSlider/AuthSlider'

export default function Auth() {
	const { isDarkMode } = useDarkModeContext()

	return (
		<section
			className={classNames(
				styles.auth,
				`${isDarkMode ? 'dark' : ''} relative`
			)}
		>
			<AuthAction />
			<AuthSlider />

			<DarkThemeButton />
		</section>
	)
}
