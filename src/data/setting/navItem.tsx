import { FaMagnifyingGlass } from 'react-icons/fa6'
import { GiSkills } from 'react-icons/gi'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { LiaBusinessTimeSolid } from 'react-icons/lia'
import {
	MdOutlineAddHomeWork,
	MdOutlineNotificationsActive,
} from 'react-icons/md'
import { VscAccount } from 'react-icons/vsc'

import { DataItem } from '@/types/setting/ISetting'

export const navItem: DataItem[] = [
	{ ico: <VscAccount />, value: 'Account preference' },
	{ ico: <HiOutlineLockClosed />, value: 'Sign in & security' },
	{ ico: <MdOutlineNotificationsActive />, value: 'Notification' },
	{ ico: <MdOutlineAddHomeWork />, value: 'Vacations' },
	{ ico: <GiSkills />, value: 'Skills' },
	{ ico: <FaMagnifyingGlass />, value: 'Searching' },
	{ ico: <LiaBusinessTimeSolid />, value: 'Experience' },
]
