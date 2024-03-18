import Chat from '../Chat/Chat'
import ChatList from '../ChatList/ChatList'
import MatchList from '../MatchList/MatchList'
import styles from './Messenger.module.scss'

export default function Messenger() {
	return (
		<section className={styles.messenger}>
			<section className={styles.window}>
				<section className={styles.wrapper}>
					<MatchList />
					<ChatList />
				</section>

				<Chat />
			</section>
		</section>
	)
}
