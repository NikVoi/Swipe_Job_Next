'use client'

import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import styles from './ChoseCategory.module.scss'
import { data } from './choose.data'

export default function ChoseCategory() {
	const [selectedBlock, setSelectedBlock] = useState<string | null>(null)

	const handleBlockClick = (blockId: string) => {
		setSelectedBlock(blockId)
	}

	const [isAnimationVisible, setIsAnimationVisible] = useState(false)
	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	})

	useEffect(() => {
		if (inView) {
			setIsAnimationVisible(true)
		}
	}, [inView])

	return (
		<section className={styles.categories} ref={ref}>
			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				animate={{
					opacity: isAnimationVisible ? 1 : 0,
					y: isAnimationVisible ? 0 : -20,
				}}
				transition={{ duration: 0.5 }}
			>
				Chose Categories
			</motion.h2>

			<div className={styles.wrapper}>
				{data.map((item, index) => (
					<motion.div
						key={item.value}
						className={classNames(styles.item, {
							[styles.active]: selectedBlock === item.value,
						})}
						onClick={() => handleBlockClick(item.value)}
						initial={{ opacity: 0, x: -50 }}
						animate={{
							opacity: isAnimationVisible ? 1 : 0,
							x: isAnimationVisible ? 0 : -50,
						}}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<div className={styles.ico}>{item.ico}</div>
						<div className={styles.text}>
							<h3>{item.value}</h3>
							<h4>100 job active</h4>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	)
}
