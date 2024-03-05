import Image from 'next/image'
import { FaRegImage } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'

import img from '@/assets/gamer.png'
import Button from '@/components/UI/MainButton/MainButton'
import styles from './Avatar.module.scss'

export default function Avatar() {
	return (
		<div className={styles.avatar}>
			<Image src={img} alt='avatar' className={styles.img}></Image>

			<div className={styles.wrapper}>
				<Button ico={<FaRegImage />} text='Change' />
				<Button ico={<RiDeleteBin6Line />} text='Delete' />
			</div>
		</div>
	)
}
