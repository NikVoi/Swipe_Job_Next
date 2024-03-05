import { HiOutlineLockClosed } from 'react-icons/hi'
import { MdOutlineNotificationsActive } from 'react-icons/md'
import { VscAccount } from 'react-icons/vsc'

import { DataItem } from '@/types/setting/ISetting'

export const navItem: DataItem[] = [
	{ ico: <VscAccount />, value: 'Account preference' },
	{ ico: <HiOutlineLockClosed />, value: 'Sign in & security' },
	{ ico: <MdOutlineNotificationsActive />, value: 'Notification' },
]
