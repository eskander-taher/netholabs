import { SparklesCore } from "./Sparkles";

export default function SparklesPreview() {
	return (
		<div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
			<h1 className="w-[80%] sm:w-1/2 text-sm sm:text-2xl  text-center text-white relative z-20">
				The rapid technological advancements of the 21st century offer unprecedented
				opportunities to study the brain. By merging neuro-technologies with artificial
				intelligence (AI), we can pioneer a new class of research: longitudinal
				neuroethology. This paradigm allow us to study the brain during innate and
				instinctive behaviors over extended periods, from weeks to years. AI and
				neuro-technologies facilitate the creation of large-scale, novel datasets, and
				enable the study of neural computation and the ontology of diseases. Moreover, the
				tools will help reduce animal use and enhance their well-being via enriched and
				increasingly natural environments.
			</h1>
			<div className="w-[40rem] h-40 relative">
				{/* Gradients */}
				<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
				<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
				<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
				<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

				{/* Core component */}
				<SparklesCore
					background="transparent"
					minSize={0.4}
					maxSize={1}
					particleDensity={1200}
					className="w-full h-full"
					particleColor="#FFFFFF"
				/>

				{/* Radial Gradient to prevent sharp edges */}
				<div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
			</div>
		</div>
	);
}
