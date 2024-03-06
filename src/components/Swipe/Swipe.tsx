import Image from 'next/image'
import { BiDislike, BiLike } from 'react-icons/bi'

import img from '@/assets/human.jpg'
import styles from './Swipe.module.scss'

export default function Swipe() {
	return (
		<section className={styles.swipe}>
			<section className={styles.wrapper}>
				<div className={styles.card}>
					<Image src={img} alt='human' className={styles.image}></Image>
					<div className='name'></div>
					<div className={styles.description}></div>
					<div className={styles.skills}></div>
				</div>
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
