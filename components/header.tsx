'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
	const [ativo, setAtivo] = useState(false)
	return (
		<div className='border-b border-zinc-800'>
			<header className='container h-14 flex items-center justify-between'>
				<div className='flex gap-12 items-center'>
					<picture>
						<img
							className='w-24 cursor-pointer'
							src='/images/evenix.svg'
							alt='Logo Evenix'
						/>
					</picture>
					<div className='hidden md:flex gap-6'>
						<Link href={'/'}>Inicio</Link>
						<Link href={'/'}>Recursos</Link>
						<Link href={'/'}>Planos</Link>
					</div>
				</div>
				<div className='hidden md:flex items-center gap-4'>
					<Link href={'/'}>Cadastre-se</Link>
					<Button>
						Entre <ArrowRight className='ml-2' size={16} />
					</Button>
				</div>
				<div
					className={`block transform cursor-pointer transition-transform duration-300 md:hidden`}
					onClick={() => setAtivo(!ativo)}>
					{ativo ? <X size={24} color='white' /> : <Menu color='white' size={24} />}
				</div>
				<AnimatePresence>
					{ativo && (
						<motion.div
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 1000, opacity: 0 }}
							transition={{ duration: 0.5 }}
							className='container items-left absolute left-0 top-[100px] flex h-screen w-full flex-col bg-[#08080A]'>
							<Link
								href='/'
								className={`flex py-4 items-center border-b leading-5 text-white
							`}>
								Inicio
							</Link>
							<Link
								href='/'
								className={`flex py-4 items-center border-b leading-5 text-white`}>
								Recursos
							</Link>
							<Link
								href='/'
								className={`flex py-4 items-center border-b leading-5 text-white`}>
								Planos
							</Link>
							<Button className='my-4' variant={'secondary'}>
								Cadastre-se
							</Button>
							<Button>
								Entre <ArrowRight className='ml-2' size={16} />
							</Button>
						</motion.div>
					)}
				</AnimatePresence>
			</header>
		</div>
	)
}

export default Header
