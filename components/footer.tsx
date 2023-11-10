'use client'

import { ChevronUp, Github } from 'lucide-react'
import Link from 'next/link'

export const Footer = () => {
	const scrollParaTopo = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth' // Adiciona um efeito de rolagem suave
		})
	}
	return (
		<footer className='container'>
			<div className='flex gap-2 justify-center sm:justify-between items-center'>
				<picture className='hidden sm:flex'>
					<img
						className='w-24 cursor-pointer'
						src='/images/evenix.svg'
						alt='Logo Evenix'
					/>
				</picture>
				<div className='flex gap-6'>
					<Link href={'/'}>Inicio</Link>
					<Link href={'/'}>Recursos</Link>
					<Link href={'/'}>Planos</Link>
				</div>
			</div>
			<hr className='h-px my-8 bg-[#6325C7] border-0' />
			<div className='flex pb-4 gap-4 flex-col-reverse sm:flex-row justify-between items-center'>
				<p className='text-white/70 flex gap-2'>
					<Github className='text-white' /> Criado por:{' '}
					<Link className='text-[#6325C7] font-semibold' href={'github.com/vitorFRE'}>
						vitorFRE
					</Link>
				</p>
				<p
					className='text-white/70 cursor-pointer font-medium flex gap-1'
					onClick={scrollParaTopo}>
					Voltar para o topo <ChevronUp className='text-[#6325C7]' />{' '}
				</p>
			</div>
		</footer>
	)
}
