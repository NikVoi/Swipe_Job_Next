'use client'

import { useState } from 'react'
import { BiDislike, BiLike } from 'react-icons/bi'
import TinderCard from 'react-tinder-card'

import ItemCard from './ItemCard/ItemCard'
import styles from './Swipe.module.scss'

const db = [
	{
		name: 'Richard Hendricks',
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

export default function Swipe() {
	const [items, setItems] = useState(db)

	const onSwipe = (direction: string): void => {
		console.log('You swiped: ' + direction)
	}

	const onCardLeftScreen = (myIdentifier: string): void => {
		console.log(myIdentifier + ' left the screen')
	}

	return (
		<section className={styles.swipe}>
			<section className={styles.wrapper}>
				{items.map(item => (
					<TinderCard
						onSwipe={onSwipe}
						onCardLeftScreen={() => onCardLeftScreen('fooBar')}
						preventSwipe={['right', 'left']}
						key={item.name}
						className={styles.card}
					>
						{item.JSX}
					</TinderCard>
				))}
			</section>

			<section className={styles.action}>
				<button className={styles.button}>
					<BiDislike />
				</button>
				<button className={styles.button}>
					<BiLike />
				</button>
			</section>
		</section>
	)
}
