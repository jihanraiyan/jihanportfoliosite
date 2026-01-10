'use client';

import { useState } from 'react';
import InfiniteGallery from '@/components/InfiniteGallery';
import { Github, Linkedin, Mail, X, ExternalLink, Play, MapPin, GraduationCap } from 'lucide-react';

type ModalContent = {
	type: 'profile' | 'project';
	data?: ProjectData;
};

type ProjectData = {
	title: string;
	subtitle: string;
	date: string;
	description: string;
	details: string[];
	tags: string[];
	link?: string;
	demoLink?: string;
	isVideo?: boolean;
};

export default function Home() {
	const [modalContent, setModalContent] = useState<ModalContent | null>(null);
	const [hoveredImage, setHoveredImage] = useState<{ id: string; position: { x: number; y: number } } | null>(null);

	const projectsData: Record<string, ProjectData> = {
		'jaspertech': {
			title: 'JasperTech',
			subtitle: 'Founder & Engineer',
			date: 'January 2026 – Present',
			description: 'Open-source canvas-first IDE for chemical process design and simulation, enabling intuitive flowsheeting for research.',
			details: [
				'Built an open-source canvas-first IDE for chemical process design and simulation using React and TypeScript, enabling intuitive flowsheeting and rapid iteration for academic and research use cases',
				'Modeled chemical unit operations as composable, graph-based building blocks with enforced mass balance, thermodynamic, and energy constraints to reduce trial-and-error in early-stage process design',
				'Designed an AI-ready, programmatic process representation that serializes flowsheets as executable graphs, laying the foundation for automated design iteration and techno-economic tradeoff analysis',
			],
			tags: ['React', 'TypeScript', 'Chemical Engineering', 'Open Source', 'IDE'],
			link: 'https://github.com/jihanraiyan',
		},
		'games4peace': {
			title: 'Games4Peace Platform',
			subtitle: 'Founder & Software Engineer',
			date: 'June 2024 – Present',
			description: 'Full-stack gaming platform with 14,000+ users raising funds for humanitarian causes.',
			details: [
				'Built and deployed a full-stack gaming platform used by 14,000+ users to passively raise funds and awareness for humanitarian causes',
				'Designed and implemented core application logic, frontend UI, and analytics tracking',
				'Optimized performance and user flows to improve engagement and session duration',
				'Owned the product end-to-end, from system design and development to deployment and iteration based on user feedback',
			],
			tags: ['React', 'JavaScript', 'Full-Stack', 'Analytics'],
			link: 'https://games4peace.com/',
		},
		'celly': {
			title: 'Celly',
			subtitle: 'Cursor for Google Sheets',
			date: 'July 2025',
			description: 'Write formulas, analyze data, and automate workflows with AI. No more syntax errors or endless googling.',
			details: [
				'Like Cursor revolutionized coding, Celly transforms how you work with spreadsheets using AI',
				'AI Formula Assistant understands your intent and writes complex formulas—no syntax errors or documentation hunting',
				'Smart autocomplete predicts what you\'re trying to do based on your data context and completes it instantly',
				'Natural language queries turn questions like "Show me sales trends by region" into beautiful charts instantly',
			],
			tags: ['Apps Script', 'AI/NLP', 'Automation', 'Google Sheets'],
			link: 'https://celly.site',
			demoLink: 'https://drive.google.com/file/d/1QUgFRCUuwbeoqlDPpgJPuPpYwbafJfVM/view?usp=sharing',
		},
		'flashquran': {
			title: 'Flashquran.org',
			subtitle: 'Personal Project',
			date: 'December 2025',
			description: 'Minimal flash card web app for accessible Quran reading with 3min avg sessions.',
			details: [
				'Designed and built a minimal, flash card web app to reduce friction and make Quran reading less overwhelming',
				'Prioritized performance, accessibility, and simplicity to support sustained daily usage',
				'Achieved strong early engagement with 3 minute average session duration',
			],
			tags: ['Web App', 'React', 'Accessibility', 'UX Design'],
			link: 'https://flashquran.org',
		},
		'guardian-angel': {
			title: 'Guardian Angel Safety Scanner',
			subtitle: 'Head of Product',
			date: 'September – November 2022',
			description: 'Wearable safety system with motion sensing and real-time haptic alerts.',
			details: [
				'Built a wearable safety scanner using Arduino (C/C++), PIR motion sensors, ultrasonic distance sensors, and vibration motors to detect fast-approaching motion and trigger haptic alerts',
				'Implemented embedded detection logic using real-time sensor fusion, velocity calculations, and thresholding to reduce false positives from normal movement',
				'Designed and shipped a functional prototype using CAD, PLA 3D printing, and hardware refactoring from Raspberry Pi to Arduino, improving reliability and power efficiency',
			],
			tags: ['Embedded Systems', 'Sensors', 'Real-time Processing', 'Arduino', 'C/C++'],
			link: 'https://drive.google.com/file/d/15rnVJwomCZdyRdHu2Wlq1j1HVx2XMlxP/view',
			isVideo: true,
		},
	};

	// Gallery images in chronological order: Profile first, then projects from newest to oldest
	const galleryImages = [
		{ src: '/profile.jpg', alt: 'Jihan Raiyan', id: 'profile' },
		{ src: '/jaspertech.png', alt: 'JasperTech', id: 'jaspertech' }, // January 2026
		{ src: '/flashquran.png', alt: 'Flashquran.org', id: 'flashquran' }, // December 2025
		{ src: '/celly.jpg', alt: 'Celly', id: 'celly' }, // July 2025
		{ src: '/games4peace.jpeg', alt: 'Games4Peace Platform', id: 'games4peace' }, // June 2024
		{ src: '/guardian-angel.jpeg', alt: 'Guardian Angel Safety Scanner', id: 'guardian-angel' }, // September 2022
	];

	const handleImageClick = (imageId: string) => {
		if (imageId === 'profile') {
			setModalContent({ type: 'profile' });
		} else {
			setModalContent({ type: 'project', data: projectsData[imageId] });
		}
	};

	const handleImageHover = (imageId: string | null, position?: { x: number; y: number }) => {
		if (imageId && position) {
			setHoveredImage({ id: imageId, position });
		} else {
			setHoveredImage(null);
		}
	};

	const getHoverLabel = (id: string) => {
		if (id === 'profile') return 'About Me';
		return projectsData[id]?.title || '';
	};

	return (
		<main className="min-h-screen">
			<InfiniteGallery
				images={galleryImages}
				speed={1.2}
				zSpacing={3}
				visibleCount={12}
				falloff={{ near: 0.8, far: 14 }}
				className="h-screen w-full rounded-lg overflow-hidden"
				onImageClick={handleImageClick}
				onImageHover={handleImageHover}
			/>
			
			<div className="h-screen inset-0 pointer-events-none fixed flex items-center justify-center text-center px-3 mix-blend-exclusion text-white">
				<h1 className="font-serif text-4xl md:text-7xl tracking-tight">
					<span className="italic">I build;</span> therefore I become
				</h1>
			</div>

			<div className="text-center fixed bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold text-white/60 pointer-events-none">
				<p>Click on any image to learn more</p>
				<p className="opacity-60">
					Use mouse wheel, arrow keys, or touch to navigate
				</p>
			</div>

			{/* Hover Label */}
			{hoveredImage && (
				<div 
					className="fixed z-40 pointer-events-none"
					style={{
						left: `${hoveredImage.position.x}px`,
						top: `${hoveredImage.position.y}px`,
						transform: 'translate(-50%, -120%)',
					}}
				>
					<div className="relative">
						{/* Line pointing to image */}
						<div className="absolute left-1/2 -bottom-8 w-0.5 h-8 bg-white/40" />
						
						{/* Label */}
						<div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-lg px-4 py-2 shadow-2xl">
							<p className="text-white font-medium text-sm whitespace-nowrap">
								{getHoverLabel(hoveredImage.id)}
							</p>
							<p className="text-white/60 text-xs mt-0.5">
								Click to explore →
							</p>
						</div>
					</div>
				</div>
			)}

			{/* Profile Modal */}
			{modalContent?.type === 'profile' && (
				<div 
					className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm pointer-events-auto"
					onClick={() => setModalContent(null)}
				>
						<div 
						className="relative w-full max-w-2xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							onClick={() => setModalContent(null)}
							className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center 
								hover:bg-white/10 transition-colors border border-white/10"
						>
							<X size={20} className="text-white" />
						</button>

						<div className="relative h-24 md:h-28 bg-gradient-to-br from-white/5 to-white/0">
							<img
								src="/profile.jpg"
								alt="Jihan Raiyan"
								className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white/20 object-cover shadow-xl"
							/>
						</div>

						<div className="p-6 md:p-8 pt-20 md:pt-24">
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
								Jihan Raiyan
							</h2>
							
							<div className="flex flex-wrap gap-2 justify-center mb-6">
								<span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20 backdrop-blur-sm">
									Engineer
								</span>
								<span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20 backdrop-blur-sm">
									Founder
								</span>
								<span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20 backdrop-blur-sm">
									Researcher
								</span>
							</div>

							<p className="text-white/80 text-center mb-6 leading-relaxed">
								I'm a builder focused on software, hardware, and AI. I work on systems that reduce 
								friction in the real world, with a strong interest in sustainability, automation, 
								and human-centered products.
							</p>

							<div className="flex flex-wrap gap-4 justify-center mb-6 text-sm text-white/60">
								<div className="flex items-center gap-2">
									<GraduationCap size={16} className="text-white/80" />
									<span>NYU '26 - Chemical Engineering & Economics</span>
								</div>
								<div className="flex items-center gap-2">
									<MapPin size={16} className="text-white/80" />
									<span>New York, NY</span>
								</div>
							</div>

							<div className="flex gap-3 justify-center">
								<a
									href="https://www.linkedin.com/in/jihan-raiyan/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full 
										hover:bg-white/10 transition-all border border-white/20 text-white text-sm"
								>
									<Linkedin size={16} />
									LinkedIn
								</a>
								<a
									href="https://github.com/jihanraiyan"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full 
										hover:bg-white/10 transition-all border border-white/20 text-white text-sm"
								>
									<Github size={16} />
									GitHub
								</a>
								<a
									href="mailto:jar10134@nyu.edu"
									className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full 
										hover:bg-white/10 transition-all border border-white/20 text-white text-sm"
								>
									<Mail size={16} />
									Email
								</a>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Project Modal */}
			{modalContent?.type === 'project' && modalContent.data && (
				<div 
					className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm pointer-events-auto"
					onClick={() => setModalContent(null)}
				>
					<div 
						className="relative w-full max-w-2xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							onClick={() => setModalContent(null)}
							className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center 
								hover:bg-white/10 transition-colors border border-white/10"
						>
							<X size={20} className="text-white" />
						</button>

						<div className="p-6 md:p-8">
							<div className="text-white/60 font-mono text-sm mb-2">
								{modalContent.data.date}
							</div>
							
							<h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
								{modalContent.data.title}
							</h3>
							<p className="text-white/70 mb-4">{modalContent.data.subtitle}</p>

							<div className="flex flex-wrap gap-2 mb-6">
								{modalContent.data.tags.map((tag) => (
									<span
										key={tag}
										className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/20 backdrop-blur-sm"
									>
										{tag}
									</span>
								))}
							</div>

							<p className="text-white/80 mb-6 leading-relaxed">
								{modalContent.data.description}
							</p>

							<ul className="space-y-3 mb-6">
								{modalContent.data.details.map((detail, i) => (
									<li key={i} className="flex gap-3 text-sm text-white/70">
										<span className="text-white mt-1">•</span>
										<span>{detail}</span>
									</li>
								))}
							</ul>

							<div className="flex flex-wrap gap-3">
								{modalContent.data.link && (
									<a
										href={modalContent.data.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-medium
											hover:bg-white/90 transition-all duration-300 shadow-lg"
									>
										{modalContent.data.isVideo ? <Play size={16} /> : <ExternalLink size={16} />}
										{modalContent.data.isVideo ? 'Watch Demo' : 'Visit Website'}
									</a>
								)}
								{modalContent.data.demoLink && (
									<a
										href={modalContent.data.demoLink}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 rounded-full font-medium text-white
											hover:bg-white/10 transition-all duration-300 border border-white/20 backdrop-blur-sm"
									>
										<Play size={16} />
										Watch Demo
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</main>
	);
}
