'use client'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useAnimation } from 'framer-motion'
import { ArrowRight, CheckCheck } from 'lucide-react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const HeroAndDetails = () => {
	const controls = useAnimation()

	useEffect(() => {
		const image = document.querySelector('#sticky-image') as HTMLImageElement
		const imageTopOffset = image.offsetTop

		const scrollHandler = () => {
			const scrollTop = window.scrollY
			const windowWidth = window.innerWidth

			if (windowWidth > 1200) {
				const secondSection = document.querySelector(
					'#second-section'
				) as HTMLImageElement
				const imageBottomOffset =
					secondSection.offsetTop + secondSection.clientHeight - image.clientHeight - 64

				if (scrollTop >= imageTopOffset && scrollTop <= imageBottomOffset) {
					controls.start({ y: scrollTop - imageTopOffset })
				} else if (scrollTop < imageTopOffset) {
					controls.start({ y: 0 })
				} else {
					controls.start({ y: imageBottomOffset - imageTopOffset })
				}
			}
		}

		window.addEventListener('scroll', scrollHandler)
		window.addEventListener('resize', scrollHandler)

		return () => {
			window.removeEventListener('scroll', scrollHandler)
			window.removeEventListener('resize', scrollHandler)
		}
	}, [controls])

	return (
		<>
			{/* Hero Section */}
			<section className='container mt-16'>
				<div className='flex items-center justify-between'>
					{/* Lado esquerdo */}
					<div>
						<Badge className='mb-3'>o melhor para seu evento</Badge>
						<h1 className='font-bold text-5xl leading-[55px] max-w-[512px] mb-6'>
							Planeje seu evento com facilidade
						</h1>
						<p className='text-lg  text-[#979AA0] max-w-[512px] mb-8'>
							A Evenix é a ferramenta perfeita para organizadores de eventos de todos os
							tamanhos. Nossa IA inteligente pode ajudá-lo a planejar eventos de forma
							rápida e fácil, sem comprometer a qualidade.
						</p>
						<div className='flex gap-6'>
							<Button>Planeje seu evento</Button>
							<Button variant={'secondary'}>
								Contato <ArrowRight className='ml-2' size={16} />
							</Button>
						</div>
					</div>
					{/* Lado direito */}
					<motion.div
						id='sticky-image'
						initial={{ y: 0 }}
						animate={controls}
						transition={{ type: 'spring', stiffness: 50, damping: 10 }}>
						<picture>
							<img src='/images/card.svg' alt='Card' />
						</picture>
					</motion.div>
				</div>
			</section>
			{/* Details Section */}
			<section id='second-section' className='bg-primary mt-16'>
				<div className='container py-16'>
					<div className='grid grid-cols-2 gap-12 max-w-[702px]'>
						<div>
							<CheckCheck size={16} />
							<h2 className='font-bold text-xl mb-2 mt-4'>Compromisso</h2>
							<p className='text-[#D3E7FF]'>
								Nossa IA inteligente pode criar uma agenda que se adapta às suas
								necessidades e às de seus participantes.
							</p>
						</div>
						<div>
							<CheckCheck size={16} />
							<h2 className='font-bold text-xl mb-2 mt-4'>Compromisso</h2>
							<p className='text-[#D3E7FF]'>
								Nossa IA inteligente pode criar uma agenda que se adapta às suas
								necessidades e às de seus participantes.
							</p>
						</div>
						<div>
							<CheckCheck size={16} />
							<h2 className='font-bold text-xl mb-2 mt-4'>Compromisso</h2>
							<p className='text-[#D3E7FF]'>
								Nossa IA inteligente pode criar uma agenda que se adapta às suas
								necessidades e às de seus participantes.
							</p>
						</div>
						<div>
							<CheckCheck size={16} />
							<h2 className='font-bold text-xl mb-2 mt-4'>Compromisso</h2>
							<p className='text-[#D3E7FF]'>
								Nossa IA inteligente pode criar uma agenda que se adapta às suas
								necessidades e às de seus participantes.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default HeroAndDetails
