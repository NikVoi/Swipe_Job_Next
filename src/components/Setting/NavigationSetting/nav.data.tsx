import { HiOutlineLockClosed } from 'react-icons/hi'
import { MdOutlineNotificationsActive } from 'react-icons/md'
import { VscAccount } from 'react-icons/vsc'

interface DataItem {
	ico: JSX.Element
	value: string
}

export const data: DataItem[] = [
	{ ico: <VscAccount />, value: 'Account preference' },
	{ ico: <HiOutlineLockClosed />, value: 'Sign in & security' },
	{ ico: <MdOutlineNotificationsActive />, value: 'Notification' },
]
