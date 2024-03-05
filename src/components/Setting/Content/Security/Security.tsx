import Button from '@/components/UI/Button/Button'
import styles from '../Preference/Preference.module.scss'

export default function Security() {
	return (
		<section className={styles.preference}>
			<div className={styles.title}>Security</div>

			<div className={styles.content}></div>

			<div className={styles.action}>
				<Button text='Cancel' />
				<Button text='Update' />
			</div>
		</section>
	)
}
