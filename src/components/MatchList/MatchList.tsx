import img from '@/assets/human-1.jpg'
import Image from 'next/image'
import Link from 'next/link'
import styles from './MatchList.module.scss'

export default function MatchList() {
	return (
		<section className={styles.match}>
			<Link href='./prfile' className={styles.item}>
				<Image
					src={img}
					alt='avatar'
					className={styles.avatar}
					width={100}
				></Image>
				<h3>Anastasia</h3>
			</Link>

			<div className={styles.item}>
				<Image src={img} alt='avatar' className={styles.avatar}></Image>
				<h3>
					Anastasia
					<div className={styles.notification}>
						<span className={styles.ping}></span>
					</div>
				</h3>
			</div>

			<div className={styles.item}>
				<Image src={img} alt='avatar' className={styles.avatar}></Image>
				<h3>
					Anastasia
					<div className={styles.notification}>
						<span className={styles.ping}></span>
					</div>
				</h3>
			</div>

			<div className={styles.item}>
				<Image src={img} alt='avatar' className={styles.avatar}></Image>
				<h3>
					Anastasia
					<div className={styles.notification}>
						<span className={styles.ping}></span>
					</div>
				</h3>
			</div>

			<div className={styles.item}>
				<Image src={img} alt='avatar' className={styles.avatar}></Image>
				<h3>
					Anastasia
					<div className={styles.notification}>
						<span className={styles.ping}></span>
					</div>
				</h3>
			</div>
		</section>
	)
}
