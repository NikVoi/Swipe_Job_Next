import Image from 'next/image'
import styles from './ChatList.module.scss'

import img from '@/assets/human-1.jpg'
import classNames from 'classnames'

export default function ChatList() {
	return (
		<section className={styles.chats}>
			<div className={classNames(styles.item, styles.active)}>
				<Image
					src={img}
					alt='avatar'
					className={styles.avatar}
					width={50}
				></Image>

				<div className={styles.wrapper}>
					<div className={styles.name}>Test test Test</div>
					<div className={styles.lastMes}>
						Lorem ipsum dolor sit amet s fsf sdf sdf sdf ывдаолр ивыаор иывоар
						иывора иывораи ывораи ывоаи овыри аовыиар р
					</div>
				</div>

				<div className={styles.date}>12:45</div>
			</div>
			<div className={styles.item}>
				<Image
					src={img}
					alt='avatar'
					className={styles.avatar}
					width={50}
				></Image>

				<div className={styles.wrapper}>
					<div className={styles.name}>Test test Test</div>
					<div className={styles.lastMes}>
						Lorem ipsum dolor sit afaf adf adf ssd sdf sdf sdf sdf sdf
					</div>
				</div>

				<div className={styles.date}>12:45</div>
			</div>
			<div className={styles.item}>
				<Image
					src={img}
					alt='avatar'
					className={styles.avatar}
					width={50}
				></Image>

				<div className={styles.wrapper}>
					<div className={styles.name}>Test test Test</div>
					<div className={styles.lastMes}>Lorem ipsum dolor sit</div>
				</div>

				<div className={styles.date}>12:45</div>
			</div>
		</section>
	)
}
