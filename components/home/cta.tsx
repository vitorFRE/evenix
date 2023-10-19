import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'

export const Cta = () => {
	return (
		<section className='mt-32 mb-16 bg-[#6325C7]'>
			<div className='container flex flex-col md:flex-row md:items-center justify-between py-16'>
				<h1 className='text-white max-w-[460px] font-bold text-4xl'>
					Junte-se a nós para uma experiência incrível!
				</h1>
				<div className='flex mt-4 md:mt-0 flex-col sm:flex-row gap-4 sm:gap-6'>
					<Button className='bg-white hover:bg-white/90 text-slate-900'>
						Planeje seu evento
					</Button>
					<Button variant={'secondary'}>
						Experimente <ArrowRight className='ml-2' size={16} />
					</Button>
				</div>
			</div>
		</section>
	)
}
