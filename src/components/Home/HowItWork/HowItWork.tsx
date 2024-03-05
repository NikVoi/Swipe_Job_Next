'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { MdDone } from 'react-icons/md'
import { useInView } from 'react-intersection-observer'

import styles from './HowItWork.module.scss'

import img from '@/assets/home/women-3.png'
import { useTranslations } from 'next-intl'

export default function HowItWork() {
	const t = useTranslations('MainPage')

	const [isAnimationVisible, setIsAnimationVisible] = useState(false)
	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	})

	const containerRef = useRef(null)

	useEffect(() => {
		if (inView) {
			setIsAnimationVisible(true)
		}
	}, [inView])

	return (
		<section className={styles.create} ref={ref}>
			<motion.div
				className={styles.picture}
				ref={containerRef}
				initial={{ opacity: 0, x: -20 }}
				animate={{
					opacity: isAnimationVisible ? 1 : 0,
					x: isAnimationVisible ? 0 : -20,
				}}
				transition={{ duration: 1 }}
			>
				<motion.div
					className={styles.circle}
					initial={{ opacity: 0, scale: 0 }}
					animate={{
						opacity: isAnimationVisible ? 1 : 0,
						scale: isAnimationVisible ? 1 : 0,
					}}
					transition={{ duration: 0.5, delay: 0.2 }}
				></motion.div>
				<motion.div
					className={styles.profile}
					initial={{ opacity: 0, x: -20 }}
					animate={{
						opacity: isAnimationVisible ? 1 : 0,
						x: isAnimationVisible ? 0 : -20,
					}}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<motion.div
						className={styles.avatar}
						initial={{ opacity: 0, scale: 0 }}
						animate={{
							opacity: isAnimationVisible ? 1 : 0,
							scale: isAnimationVisible ? 1 : 0,
						}}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						<MdDone />
					</motion.div>
					<motion.div
						className={styles.wrapper}
						initial={{ opacity: 0, x: -20 }}
						animate={{
							opacity: isAnimationVisible ? 1 : 0,
							x: isAnimationVisible ? 0 : -20,
						}}
						transition={{ duration: 0.5, delay: 0.8 }}
					>
						<div className={styles.name}>{t('HowBlock')}</div>
						<div className={styles.categories}>{t('HowBlockDesc')}</div>
					</motion.div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{
						opacity: isAnimationVisible ? 1 : 0,
						scale: isAnimationVisible ? 1 : 0,
					}}
					transition={{ duration: 0.5, delay: 1 }}
				>
					<Image src={img} alt='women' />
				</motion.div>
			</motion.div>

			<motion.div
				className={styles.info}
				initial={{ opacity: 0, x: 20 }}
				animate={{
					opacity: isAnimationVisible ? 1 : 0,
					x: isAnimationVisible ? 0 : 20,
				}}
				transition={{ duration: 1 }}
			>
				<motion.h3 animate={{ opacity: isAnimationVisible ? 1 : 0 }}>
					{t('HowSubTitle')}
				</motion.h3>
				<motion.h2 animate={{ opacity: isAnimationVisible ? 1 : 0 }}>
					{t('HowTitle')}
				</motion.h2>
				<motion.h4 animate={{ opacity: isAnimationVisible ? 1 : 0 }}>
					{t('HowDescription')}
				</motion.h4>
			</motion.div>
		</section>
	)
}
