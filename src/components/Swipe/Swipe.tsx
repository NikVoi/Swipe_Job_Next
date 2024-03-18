'use client'

import { createRef, useMemo, useRef, useState } from 'react'
import { BiDislike, BiLike } from 'react-icons/bi'
import { RiArrowGoBackFill, RiInformationFill } from 'react-icons/ri'
import TinderCard from 'react-tinder-card'

import ItemCard from './ItemCard/ItemCard'
import styles from './Swipe.module.scss'

const db = [
	{
		id: 1,
		name: 'Richard Hendricks',
		vacancy: 'Programmer',
		JSX: <ItemCard />,
	},
	{
		name: 'Erlich Bachman',
		JSX: <ItemCard />,
	},
	{
		name: 'Monica Hall',
		JSX: <ItemCard />,
	},
	{
		name: 'Jared Dunn',
		JSX: <ItemCard />,
	},
	{
		name: 'Dinesh Chugtai',
		JSX: <ItemCard />,
	},
]

interface SwipeItem {
	name: string
	JSX: JSX.Element
}

export default function Swipe() {
	const [items, setItems] = useState<SwipeItem[]>(db)

	const [currentIndex, setCurrentIndex] = useState<number>(db.length - 1)
	const [lastDirection, setLastDirection] = useState<string | undefined>()
	const currentIndexRef = useRef<number>(currentIndex)

	const childRefs = useMemo(
		() =>
			Array(db.length)
				.fill(0)
				.map(i => createRef<any>()),
		[]
	)
	const updateCurrentIndex = (val: number) => {
		setCurrentIndex(val)
		currentIndexRef.current = val
	}

	const canGoBack = currentIndex < db.length - 1

	const canSwipe = currentIndex >= 0

	const swiped = (direction: any, nameToDelete: string, index: number) => {
		setLastDirection(direction)
		updateCurrentIndex(index - 1)
	}

	const outOfFrame = (name: string, idx: number) => {
		console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
		const currentRef = childRefs[idx].current as any
		if (currentIndexRef.current >= idx && currentRef) {
			currentRef.restoreCard()
		}
	}

	const swipe = async (dir: string) => {
		if (canSwipe && currentIndex < db.length) {
			await (childRefs[currentIndex].current as any).swipe(dir)
		}
	}

	const goBack = async () => {
		if (!canGoBack) return
		const newIndex = currentIndex + 1
		updateCurrentIndex(newIndex)
		await (childRefs[newIndex].current as any).restoreCard()
	}

	return (
		<section className={styles.swipe}>
			<section className={styles.wrapper}>
				{items.map((item, index) => (
					<TinderCard
						ref={childRefs[index]}
						className={styles.card}
						key={item.name}
						onSwipe={dir => swiped(dir, item.name, index)}
						onCardLeftScreen={() => outOfFrame(item.name, index)}
					>
						{item.JSX}
					</TinderCard>
				))}
			</section>

			<section className={styles.action}>
				<button className={styles.button} onClick={() => swipe('left')}>
					<BiDislike />
				</button>
				<button className={styles.button} onClick={() => goBack()}>
					<RiArrowGoBackFill />
				</button>

				<button className={styles.button}>
					<RiInformationFill />
				</button>

				<button className={styles.button} onClick={() => swipe('right')}>
					<BiLike />
				</button>
			</section>
		</section>
	)
}
