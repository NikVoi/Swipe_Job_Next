import { useLocale, useMessages } from 'next-intl'

import Auth from '@/components/Auth/Auth'

export default function AuthPage() {
	const messages = useMessages()
	const locale = useLocale()

	return <Auth></Auth>
}
