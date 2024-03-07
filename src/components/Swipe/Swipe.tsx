import { BiDislike, BiLike } from 'react-icons/bi'

import ItemCard from './ItemCard/ItemCard'
import styles from './Swipe.module.scss'

export default function Swipe() {
	return (
		<section className={styles.swipe}>
			<section className={styles.wrapper}>
				<ItemCard />
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
