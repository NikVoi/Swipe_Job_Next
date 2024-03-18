import Image from 'next/image'
import { IoIosSend } from 'react-icons/io'

import img from '@/assets/human.jpg'
import styles from './Chat.module.scss'

export default function Chat() {
	return (
		<section className={styles.chat}>
			<div className={styles.top}>
				<Image
					src={img}
					alt='avatar'
					className={styles.chatAvatar}
					width={50}
				></Image>
				<div className={styles.info}>
					<div className={styles.name}>Google assistant</div>
					<div className={styles.status}>online</div>
				</div>
			</div>

			<div className={styles.content}>
				<div className={styles.myMes}>
					<Image
						src={img}
						alt='avata'
						className={styles.avatar}
						width={40}
					></Image>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
						voluptates. Ea asperiores quod error laudantium harum hic autem, rem
						quisquam. Eaque rem recusandae porro cumque necessitatibus repellat,
						autem explicabo aspernatur?
					</span>
				</div>

				<div className={styles.humanMes}>
					<Image
						src={img}
						alt='avata'
						className={styles.avatar}
						width={45}
					></Image>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
						voluptates. Ea asperiores quod error laudantium harum hic autem, rem
						quisquam. Eaque rem recusandae porro cumque necessitatibus repellat,
						autem explicabo aspernatur?
					</span>
				</div>
			</div>

			<div className={styles.action}>
				<input
					type='text'
					className={styles.input}
					placeholder='type message...'
				/>

				<button className={styles.send}>
					<IoIosSend />
				</button>
			</div>
		</section>
	)
}
