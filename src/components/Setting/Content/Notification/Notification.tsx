import Button from '@/components/UI/Button/Button'
import styles from '../Preference/Preference.module.scss'

export default function Preference() {
	return (
		<section className={styles.preference}>
			<div className={styles.title}>notiofication</div>

			<div className={styles.content}></div>

			<div className={styles.action}>
				<Button text='Cancel' />
				<Button text='Update' />
			</div>
		</section>
	)
}
