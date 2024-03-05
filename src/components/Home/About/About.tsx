'use client'

import classNames from 'classnames'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MdMapsHomeWork } from 'react-icons/md'

import img from '@/assets/home/women-1.png'
import { useTranslations } from 'next-intl'
import styles from './About.module.scss'
import { useClient } from './useClient'

export default function About() {
	const isLoaded = useClient()

	const t = useTranslations('MainPage')

	return (
		<section className={classNames(styles.about, ``)}>
			<div className={styles.text}>
				<motion.h2
					className={styles.title}
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
				>
					<span className={styles.bg}>{t('AboutTitleGrad_1')}</span>{' '}
					{t('AboutTitleStart')} -{' '}
					<span className={styles.bg}>{t('AboutTitleBold')}</span>{' '}
					{t('AboutTitleEnd')}{' '}
					<span className={styles.bg}> {t('AboutTitleGrad_2')}</span>
				</motion.h2>

				<motion.h3
					className={styles.description}
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.5 }}
				>
					{t('AboutDescription')}
				</motion.h3>
			</div>

			<motion.div
				className={styles.picture}
				initial={{ opacity: 0 }}
				animate={{ opacity: isLoaded ? 1 : 0 }}
				transition={{ duration: 1 }}
			>
				<motion.div
					className={styles.circle}
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				></motion.div>

				<motion.div
					className={styles.profile}
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
				>
					<div className={styles.avatar}>
						<MdMapsHomeWork />
					</div>
					<div className={styles.name}>10.5K</div>
					<div className={styles.categories}>{t('AboutJob')}</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
				>
					<Image src={img} alt='women' />
				</motion.div>
			</motion.div>
		</section>
	)
}
