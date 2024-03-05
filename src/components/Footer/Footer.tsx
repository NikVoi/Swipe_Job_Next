'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaTelegram } from 'react-icons/fa6'
import { useInView } from 'react-intersection-observer'

import styles from './Footer.module.scss'

import Logo from '@/assets/logo.png'
import { useTranslations } from 'next-intl'

export default function Footer() {
	const [isFooterVisible, setIsFooterVisible] = useState(false)
	const t = useTranslations('MainPage')
	const { ref, inView } = useInView({
		threshold: 0.5,
	})

	useEffect(() => {
		if (inView) {
			setIsFooterVisible(true)
		}
	}, [inView])

	return (
		<footer ref={ref} className={styles.footer}>
			<motion.div
				className={styles.top}
				initial={{ opacity: 0, y: 50 }}
				animate={{
					opacity: isFooterVisible ? 1 : 0,
					y: isFooterVisible ? 0 : 50,
				}}
				transition={{ duration: 0.5 }}
			>
				<motion.div
					className={styles.item}
					initial={{ opacity: 0, y: 50 }}
					animate={{
						opacity: isFooterVisible ? 1 : 0,
						y: isFooterVisible ? 0 : 50,
					}}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<div className={styles.logo}>
						<Link href='/'>
							<Image src={Logo} alt='logo' />
						</Link>
					</div>
					<h3>{t('FooterTitle')}</h3>
				</motion.div>

				<motion.div
					className={styles.item}
					initial={{ opacity: 0, y: 50 }}
					animate={{
						opacity: isFooterVisible ? 1 : 0,
						y: isFooterVisible ? 0 : 50,
					}}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<h2>{t('FooterAboutUs')}</h2>

					<div className={styles.nav}>
						<Link href='https://github.com/NikVoi'> {t('FooterDev')} </Link>
						<Link href='#'> {t('FooterAbout')} </Link>
					</div>
				</motion.div>

				<motion.div
					className={styles.item}
					initial={{ opacity: 0, y: 50 }}
					animate={{
						opacity: isFooterVisible ? 1 : 0,
						y: isFooterVisible ? 0 : 50,
					}}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<div className={styles.link}>
						<Link href='https://github.com/NikVoi' target='_blank'>
							<BsGithub />
						</Link>
					</div>
					<div className={styles.link}>
						<Link href='https://t.me/Nik_Voi' target='_blank'>
							<FaTelegram />
						</Link>
					</div>
				</motion.div>
			</motion.div>

			<motion.div
				className={styles.bottom}
				initial={{ opacity: 0, y: 50 }}
				animate={{
					opacity: isFooterVisible ? 1 : 0,
					y: isFooterVisible ? 0 : 50,
				}}
				transition={{ duration: 0.5, delay: 0.4 }}
			>
				{t('FooterCopyright')}
			</motion.div>
		</footer>
	)
}
