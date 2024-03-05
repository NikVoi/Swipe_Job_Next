'use client'

import Preference from './Content/Preference/Preference'
import Navigation from './NavigationSetting/Navigation'
import styles from './Setting.module.scss'

import { navItem } from '@/data/setting/navItem'
import { useState } from 'react'
import Notification from './Content/Notification/Notification'
import Security from './Content/Security/Security'

const Setting: React.FC = () => {
	const [activeItem, setActiveItem] = useState<string>('Account preference')
	const [settingsOpen, setSettingsOpen] = useState<boolean>(false)

	const handleItemClick = (item: string) => {
		setActiveItem(item)
		setSettingsOpen(true)
	}

	const closeSettings = () => {
		setSettingsOpen(false)
		setActiveItem('Account preference') // Reset active item when settings are closed
	}

	return (
		<section className={styles.setting}>
			{!settingsOpen && (
				<Navigation
					activeItem={activeItem}
					onItemClick={handleItemClick}
					data={navItem}
				/>
			)}

			{settingsOpen && (
				<>
					{activeItem === 'Account preference' && <Preference />}
					{activeItem === 'Sign in & security' && <Security />}
					{activeItem === 'Notification' && <Notification />}
					<button onClick={closeSettings}>Close Settings</button>
				</>
			)}
		</section>
	)
}

export default Setting
