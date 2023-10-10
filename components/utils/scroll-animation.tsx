import React, { useEffect } from 'react'
import { useAnimation, motion, AnimationControls } from 'framer-motion'

interface StickyImageProps {
	src: string
	stopAt: string
	marginBottom?: number
	className?: string
}

const StickyImage: React.FC<StickyImageProps> = ({
	src,
	stopAt,
	marginBottom,
	className
}) => {
	const controls: AnimationControls = useAnimation()

	useEffect(() => {
		const image = document.querySelector(`#sticky-image`) as HTMLElement
		const stopSection = document.querySelector(`#${stopAt}`) as HTMLElement

		if (!image || !stopSection) {
			return
		}

		const imageTopOffset = image.offsetTop
		const stopSectionTopOffset = stopSection.offsetTop
		const stopSectionHeight = stopSection.clientHeight

		const stopSectionBottomOffset =
			stopSectionTopOffset + stopSectionHeight - (marginBottom ? marginBottom : 0)

		const scrollHandler = () => {
			const scrollTop = window.scrollY
			const windowWidth = window.innerWidth

			if (windowWidth > 1023) {
				if (
					scrollTop >= imageTopOffset &&
					scrollTop <= stopSectionBottomOffset - image.clientHeight
				) {
					controls.start({ y: scrollTop - imageTopOffset })
				} else if (scrollTop < imageTopOffset) {
					controls.start({ y: 0 })
				} else {
					controls.start({
						y: stopSectionBottomOffset - imageTopOffset - image.clientHeight
					})
				}
			}
		}

		window.addEventListener('scroll', scrollHandler)

		return () => {
			window.removeEventListener('scroll', scrollHandler)
		}
	}, [controls, stopAt, marginBottom])

	return (
		<motion.div
			initial={{ y: 0 }}
			id='sticky-image'
			animate={controls}
			className={className}
			transition={{ type: 'spring', stiffness: 50, damping: 10 }}>
			<picture>
				<img src={src} alt='Card' />
			</picture>
		</motion.div>
	)
}

export default StickyImage
