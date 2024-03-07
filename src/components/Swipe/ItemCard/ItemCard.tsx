'use client'

import Image from 'next/image'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineAttachMoney, MdOutlineMapsHomeWork } from 'react-icons/md'
import styles from './ItemCard.module.scss'

import img from '@/assets/human.jpg'

const ItemCard = () => {
	return (
		<div className={styles.card}>
			<Image src={img} alt='human' className={styles.image}></Image>

			<div className={styles.name}>User Name</div>

			<div className={styles.description}>
				<div className={styles.descriptionItem}>
					<MdOutlineMapsHomeWork />
					<span>Engenier</span>
				</div>

				<div className={styles.descriptionItem}>
					<IoLocationOutline />
					<span>Minsk, stalitsa</span>
				</div>

				<div className={styles.descriptionItem}>
					<MdOutlineAttachMoney />
					500 $
				</div>
			</div>

			<div className={styles.skills}>
				<div className={styles.skillItem}>php</div>
				<div className={styles.skillItem}>Volter</div>
				<div className={styles.skillItem}>Postgres</div>
				<div className={styles.skillItem}>Postgressdfgsdfg</div>
				<div className={styles.skillItem}>Postgres</div>
			</div>
		</div>
	)
}

export default ItemCard
