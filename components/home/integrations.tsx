'use client'

import { Github } from 'lucide-react'
import { IntegrationCard } from '../utils/integration-card'
import { motion } from 'framer-motion'

const integrations = [
	{
		icon: <Github size={45} className='text-primary' />,
		title: 'Google Drive',
		description: 'Acesse seus arquivos do Google Drive diretamente do Trello.'
	},
	{
		icon: <Github size={45} className='text-primary' />,
		title: 'Google Drive',
		description: 'Acesse seus arquivos do Google Drive diretamente do Trello.'
	},
	{
		icon: <Github size={45} className='text-primary' />,
		title: 'Google Drive',
		description: 'Acesse seus arquivos do Google Drive diretamente do Trello.'
	},
	{
		icon: <Github size={45} className='text-primary' />,
		title: 'Google Drive',
		description: 'Acesse seus arquivos do Google Drive diretamente do Trello.'
	},
	{
		icon: <Github size={45} className='text-primary' />,
		title: 'Google Drive',
		description: 'Acesse seus arquivos do Google Drive diretamente do Trello.'
	},
	{
		icon: <Github size={45} className='text-primary' />,
		title: 'Google Drive',
		description: 'Acesse seus arquivos do Google Drive diretamente do Trello.'
	},
	{
		icon: <Github size={45} className='text-primary' />,
		title: 'Slack',
		description: 'Comunique-se com sua equipe no Slack sobre as tarefas do Trello.'
	}
]

export const Integrations = () => {
	const cardWidth = 430
	const minWidth = 1440

	const containerWidth =
		typeof window !== 'undefined' ? Math.max(window.innerWidth, minWidth) : minWidth

	const repeatTimes = Math.ceil(containerWidth / cardWidth) + 1

	const tickerVariants = {
		animate: {
			x: [-cardWidth * repeatTimes, 0],
			transition: {
				x: {
					duration: 15,
					repeat: Infinity,
					repeatType: 'loop',
					ease: 'linear'
				}
			}
		}
	}

	return (
		<div className='mt-32'>
			<div className='flex flex-col justify-center items-center'>
				<span className='text-primary font-semibold mb-2'>Integrações</span>
				<h2 className='font-bold text-4xl mb-4'>
					Escolha as integrações que se ajustam ao seu gosto
				</h2>
			</div>
			<div className='overflow-hidden w-full flex mt-11'>
				<motion.div
					suppressHydrationWarning
					variants={tickerVariants}
					initial='animate'
					animate='animate'
					style={{
						display: 'flex',
						width: `${cardWidth * repeatTimes}px`
					}}>
					{Array(repeatTimes)
						.fill(integrations)
						.flat()
						.map((integration, index) => (
							<IntegrationCard
								key={index}
								icon={integration.icon}
								title={integration.title}
								description={integration.description}
							/>
						))}
				</motion.div>
			</div>
		</div>
	)
}
