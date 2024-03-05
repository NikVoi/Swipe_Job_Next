import Button from '@/components/UI/MainButton/MainButton'
import Avatar from './Avatar/Avatar'
import styles from './Preference.module.scss'
import UserDetails from './UserDetails/UserDetails'
import UserName from './UserName/UserName'

export default function Preference() {
	return (
		<section className={styles.preference}>
			<div className={styles.title}>Preferencee</div>

			<div className={styles.content}>
				<Avatar />

				<div className={styles.inputWrapper}>
					<UserName />

					<UserDetails />
				</div>
			</div>

			<div className={styles.action}>
				<Button text='Cancel' />
				<Button text='Update' />
			</div>
		</section>
	)
}
