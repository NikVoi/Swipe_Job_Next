'use client'

import { useEffect, useState } from 'react'

import { navItem } from '@/data/setting/navItem'
import { IoClose } from 'react-icons/io5'
import Notification from './Content/Notification/Notification'
import Preference from './Content/Preference/Preference'
import Security from './Content/Security/Security'
import Navigation from './NavigationSetting/Navigation'
import styles from './Setting.module.scss'

const Setting: React.FC = () => {
	const [activeItem, setActiveItem] = useState<string>('Account preference')
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
	const [showNavigation, setShowNavigation] = useState<boolean>(
		window.innerWidth >= 768
	)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
			setShowNavigation(window.innerWidth >= 768)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const handleItemClick = (item: string) => {
		setActiveItem(item)
		if (windowWidth < 768) {
			setShowNavigation(false)
		}
	}

	const closeSettings = () => {
		setActiveItem('')
		if (windowWidth < 768) {
			setShowNavigation(true)
		}
	}

	return (
		<section className={styles.setting}>
			{showNavigation && (
				<Navigation
					activeItem={activeItem}
					onItemClick={handleItemClick}
					data={navItem}
				/>
			)}

			{activeItem && (
				<section className={styles.wrapper}>
					{activeItem === 'Account preference' && <Preference />}
					{activeItem === 'Sign in & security' && <Security />}
					{activeItem === 'Notification' && <Notification />}
					<button onClick={closeSettings} className={styles.close}>
						<IoClose />
					</button>
				</section>
			)}
		</section>
	)
}

export default Setting
