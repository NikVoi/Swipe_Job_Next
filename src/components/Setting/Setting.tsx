import Preference from './Content/Preference/Preference'
import Navigation from './NavigationSetting/Navigation'
import styles from './Setting.module.scss'

export default function Setting() {
	return (
		<section className={styles.setting}>
			<Navigation />

			<Preference />
		</section>
	)
}
