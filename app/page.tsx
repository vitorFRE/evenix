import { Footer } from '@/components/footer'
import Header from '@/components/header'
import { About } from '@/components/home/about'
import { Cta } from '@/components/home/cta'
import { Faq } from '@/components/home/faq'
import HeroAndDetails from '@/components/home/hero-and-details'
import TopBar from '@/components/top-bar'
import dynamic from 'next/dynamic'

const Integrations = dynamic(() => import('../components/home/integrations'), {
	ssr: false
})

export default function Home() {
	return (
		<main className=''>
			<TopBar />
			<Header />
			<HeroAndDetails />
			<About />
			<Integrations />
			<Faq />
			<Cta />
			<Footer />
		</main>
	)
}
