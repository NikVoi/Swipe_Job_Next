'use client'

import classNames from 'classnames'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { MdOutlineNightlight } from 'react-icons/md'

import styles from './NavBar.module.scss'
import { data } from './nav.data'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
}

const spring = {
	type: 'spring',
	stiffness: 700,
	damping: 30,
}

import img from '@/assets/gamer.png'
import { useDarkModeContext } from '@/context/DarkModeContext'
import { useLocale } from 'next-intl'

const CustomModal: FC<ModalProps> = ({ isOpen, onClose }) => {
	const { toggleSwitch, isDarkMode } = useDarkModeContext()
	const locale = useLocale()

	return (
		<section
			className={classNames(styles.modal, isOpen ? styles.open : styles.close)}
		>
			<div className={styles.navBar}>
				<div className={styles.avatar}>
					<Image src={img} alt='avatar' className={styles.image} />

					<div className={styles.name}>User name</div>
				</div>

				<div className={styles.hr} />

				<nav className={styles.nav}>
					{data.map(item => (
						<Link href={`${item.link}`} key={item.value}>
							<div className={classNames(styles.item)}>
								<span>{item.ico}</span>
								<span>{item.value}</span>
							</div>
						</Link>
					))}

					<div className={classNames(styles.action)} onClick={toggleSwitch}>
						<div className={styles.radio}>
							<span>
								<MdOutlineNightlight />
							</span>
							<span>Night Mode</span>
						</div>
						<div className={styles.switch} data-is={isDarkMode}>
							<motion.div
								className={styles.handle}
								layout
								transition={spring}
							/>
						</div>
					</div>
				</nav>
			</div>

			<div className={styles.holder} onClick={onClose}></div>
		</section>
	)
}

export default CustomModal
