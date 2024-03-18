import classNames from 'classnames'
import styles from './ProfileNav.module.scss'

export default function ProfileNav() {
	return (
		<nav className={styles.navigate}>
			<ul>
				<li className={classNames(styles.item, styles.active)}>profile</li>
				<li className={styles.item}>location</li>
				<li className={styles.item}>resume</li>
			</ul>
		</nav>
	)
}
