'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import Button from '@/components/UI/Button/Button'
import styles from './CreateAccount.module.scss'

import avatar from '@/assets/home/avatar.png'
import img from '@/assets/home/women-2.png'
import { useTranslations } from 'next-intl'

export default function CreateAccount() {
	const [isAnimationVisible, setIsAnimationVisible] = useState(true)

	const t = useTranslations('MainPage')

	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	})

	const containerRef = useRef(null)
	const [animationDone, setAnimationDone] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (!animationDone && containerRef.current) {
				setIsAnimationVisible(true)
				setAnimationDone(true)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [animationDone])

	return (
		<section className={styles.create} ref={ref}>
			<motion.div
				className={styles.picture}
				ref={containerRef}
				initial={{ opacity: 0, x: -30 }}
				animate={{
					opacity: isAnimationVisible && inView ? 1 : 0,
					x: isAnimationVisible && inView ? 0 : -30,
				}}
				transition={{ duration: 1 }}
			>
				<motion.div
					className={styles.circle}
					initial={{ opacity: 0, scale: 0 }}
					animate={{
						opacity: isAnimationVisible && inView ? 1 : 0,
						scale: isAnimationVisible && inView ? 1 : 0,
					}}
					transition={{ duration: 0.5, delay: 0.2 }}
				></motion.div>
				<motion.div
					className={styles.profile}
					initial={{ opacity: 0, x: -30 }}
					animate={{
						opacity: isAnimationVisible && inView ? 1 : 0,
						x: isAnimationVisible && inView ? 0 : -30,
					}}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<motion.div
						className={styles.avatar}
						initial={{ opacity: 0, scale: 0 }}
						animate={{
							opacity: isAnimationVisible && inView ? 1 : 0,
							scale: isAnimationVisible && inView ? 1 : 0,
						}}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						<Image src={avatar} alt='avatar' />
					</motion.div>
					<motion.div
						className={styles.name}
						initial={{ opacity: 0, x: -30 }}
						animate={{
							opacity: isAnimationVisible && inView ? 1 : 0,
							x: isAnimationVisible && inView ? 0 : -30,
						}}
						transition={{ duration: 0.5, delay: 0.8 }}
					>
						{t('CreateName')}
					</motion.div>
					<motion.div
						className={styles.categories}
						initial={{ opacity: 0, x: -30 }}
						animate={{
							opacity: isAnimationVisible && inView ? 1 : 0,
							x: isAnimationVisible && inView ? 0 : -30,
						}}
						transition={{ duration: 0.5, delay: 1 }}
					>
						UI/UX Designer
					</motion.div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{
						opacity: isAnimationVisible && inView ? 1 : 0,
						scale: isAnimationVisible && inView ? 1 : 0,
					}}
					transition={{ duration: 0.5, delay: 1.2 }}
				>
					<Image src={img} alt='women' />
				</motion.div>
			</motion.div>

			<motion.div
				className={styles.info}
				initial={{ opacity: 0, x: 30 }}
				animate={{
					opacity: isAnimationVisible && inView ? 1 : 0,
					x: isAnimationVisible && inView ? 0 : 30,
				}}
				transition={{ duration: 1 }}
			>
				<motion.h3 animate={{ opacity: isAnimationVisible ? 1 : 0 }}>
					{t('CreateSubTitle')}
				</motion.h3>
				<motion.h2 animate={{ opacity: isAnimationVisible ? 1 : 0 }}>
					{t('CreateTitle')}
				</motion.h2>
				<motion.h4 animate={{ opacity: isAnimationVisible ? 1 : 0 }}>
					{t('CreateDescription')}
				</motion.h4>

				<motion.div animate={{ opacity: isAnimationVisible ? 1 : 0 }}>
					<Button text={t('CreateButton')} />
				</motion.div>
			</motion.div>
		</section>
	)
}
