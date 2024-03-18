'use client'

import Image from 'next/image'
import { useState } from 'react'
import { TbMessage } from 'react-icons/tb'

import img from '@/assets/human-1.jpg'
import Button from '../UI/Button/Button'
import Vacations from './Content/Vacations/Vacations'
import styles from './Profile.module.scss'
import ProfileNav from './ProfileNav/ProfileNav'

export default function Profile() {
	const [writeButton, setWriteButton] = useState(true)

	return (
		<section className={styles.profile}>
			<div className={styles.circle}></div>
			<div className={styles.circle}></div>

			<div className={styles.glass}>
				<section className={styles.top}>
					<Image src={img} alt='avatar' className={styles.avatar}></Image>

					<div className={styles.name}>Nikita Voytik</div>

					<div className={styles.additional}>
						<span className={styles.email}>@fasdfsdfsd</span>
						<span className={styles.join}> * Joined month 2024</span>
						<span className={styles.join}> * mb location</span>
					</div>

					{writeButton && <Button text='Message' ico={<TbMessage />} />}
				</section>

				<ProfileNav />

				<div className={styles.content}>
					{/* <Main /> */}
					<Vacations />
				</div>
			</div>
		</section>
	)
}
