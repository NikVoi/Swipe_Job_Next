import { FiMessageCircle } from 'react-icons/fi'
import { IoSettingsOutline } from 'react-icons/io5'
import { TbLogout2, TbSwipe } from 'react-icons/tb'

interface DataItem {
	ico: JSX.Element
	value: string
	link: string
}

export const data: DataItem[] = [
	{ ico: <FiMessageCircle />, value: 'Messenger', link: `messenger` },
	{ ico: <TbSwipe />, value: 'Swipe', link: `swipe` },
	{ ico: <IoSettingsOutline />, value: 'Setting', link: `setting` },
	{ ico: <TbLogout2 />, value: 'Logout', link: `` },
]
