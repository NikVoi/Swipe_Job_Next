import { FC } from 'react'
import styles from './NavButton.module.scss'

interface ModalProps {
	onOpen: () => void
}

const NavButton: FC<ModalProps> = ({ onOpen }) => {
	return (
		<button onClick={onOpen} className={styles.button}>
			<span className={styles.span}></span>
		</button>
	)
}

export default NavButton
