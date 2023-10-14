interface integrationCardProps {
	title: string
	description: string
	icon: React.ReactNode
}

export const IntegrationCard: React.FC<integrationCardProps> = ({
	description,
	icon,
	title
}) => {
	return (
		<div className='flex ml-4 gap-4 py-5 px-4 bg-white rounded-md min-w-[430px]'>
			{icon}
			<div className='flex flex-col gap-4'>
				<h2 className='font-semibold text-lg text-slate-900'>{title}</h2>
				<p className='text-slate-600'>{description}</p>
			</div>
		</div>
	)
}
