'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Logo from '@/assets/logo.png'
import { BiLogOut } from 'react-icons/bi'
import { FaGoogle, FaRegUserCircle, FaTelegramPlane } from 'react-icons/fa'

import ButtonAuthApi from '@/components/UI/ButtonAuthApi/ButtonAuthApi'
import ButtonAuthLogIn from '@/components/UI/ButtonAuthChoice/ButtonAuthLogIn'
import styles from './AuthAction.module.scss'
import FormLogIn from './FormLogIn/FormLogIn'
import FormSingIn from './FormSingIn/FormSingIn'

export default function AuthAction() {
	const [activeButton, setActiveButton] = useState('login')

	return (
		<section className={styles.content}>
			<Link href='/' className={styles.logo}>
				<Image src={Logo} alt='logo' />
			</Link>

			<div className={styles.choice}>
				<ButtonAuthLogIn
					text='Log In'
					isActive={activeButton === 'login'}
					onClick={() => setActiveButton('login')}
					icon={<BiLogOut />}
				/>
				<ButtonAuthLogIn
					text='Create Account'
					isActive={activeButton === 'register'}
					onClick={() => setActiveButton('register')}
					icon={<FaRegUserCircle />}
				/>
			</div>

			<div className={styles.actions}>
				{activeButton === 'login' && (
					<div className={styles.fadeIn}>
						<FormLogIn />
					</div>
				)}
				{activeButton === 'register' && (
					<div className={styles.fadeIn}>
						<FormSingIn />
					</div>
				)}
			</div>

			<div className={styles.anotherAuth}>
				<h3>Or continue with</h3>
				<div className={styles.authChoice}>
					<ButtonAuthApi icon={<FaGoogle />} onClick={() => {}} />
					<ButtonAuthApi icon={<FaTelegramPlane />} onClick={() => {}} />
				</div>
			</div>
		</section>
	)
}
