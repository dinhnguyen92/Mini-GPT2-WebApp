import AnimatedPage from "../../animation/AnimatedPage";
import DiagramContainer from "../widgets/diagram/DiagramContainer";
import { useEffect, useRef, useState } from "react";
import generateArchitectureDiagramEngine from "../widgets/architecture/ArchitectureDiagramEngine";

export default function ArchitecturePage() {

	const canvasRef = useRef<HTMLDivElement>(null)
	const [canvasSize, setPageSize] = useState({ width: 0, height: 0 })

	useEffect(() => {
		const updateCanvasSize = () => {
			if (canvasRef.current) {
				const { width, height } = canvasRef.current.getBoundingClientRect()
				setPageSize({ width, height })
			}
		}

		updateCanvasSize()	
		window.addEventListener('resize', updateCanvasSize)

		return () => {
			window.removeEventListener('resize', updateCanvasSize)
		}
	}, [])

	const canvasWrapperStyle = {
		height: '100%',
		width: '100%'
	}

  return (
		<AnimatedPage pageKey='architecture'>
			<div ref={canvasRef} style={canvasWrapperStyle}>
				<DiagramContainer engine={generateArchitectureDiagramEngine(canvasSize.height, canvasSize.width)} />
			</div>
		</AnimatedPage>
	)
}