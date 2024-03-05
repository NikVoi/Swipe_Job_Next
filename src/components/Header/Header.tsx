'use client'

import classNames from 'classnames'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/assets/logo.png'
import { useLocale, useTranslations } from 'next-intl'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import Button from '../UI/Button/Button'
import styles from './Header.module.scss'

export default function Header() {
	const t = useTranslations('MainPage')
	const locale = useLocale()

	return (
		<motion.header
			className={classNames(styles.header, '')}
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Link href='/'>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className={styles.logo}
				>
					<Image src={Logo} alt='logo' />
				</motion.div>
			</Link>

			<LanguageSwitcher />

			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5, delay: 0.4 }}
				className={styles.sing}
			>
				<Link href={`/${locale}/auth`}>
					<Button text={t('LogIn')} />
				</Link>

				<Link href={`/${locale}/auth`}>
					<Button text={t('SingIn')} />
				</Link>
			</motion.div>
		</motion.header>
	)
}
