<script lang="ts">
	import { onMount } from 'svelte';
	import {
		IconUsers,
		IconCode,
		IconRocket,
		IconArrowRight,
		IconDeviceLaptop,
		IconUsersGroup,
		IconSparkles,
		IconNetwork,
		IconChevronLeft,
		IconChevronRight
	} from '@tabler/icons-svelte';
	import eventsData from '$lib/data/events.json';
	import featuresData from '$lib/data/features.json';

	const iconMap: Record<string, any> = {
		IconUsers,
		IconCode,
		IconRocket,
		IconDeviceLaptop,
		IconUsersGroup,
		IconSparkles,
		IconNetwork
	};

	// 排序並取最近的 3 個活動
	const allEvents = eventsData
		.map((event) => ({
			...event,
			icon: iconMap[event.icon],
			dateObj: new Date(event.fullDate)
		}))
		.sort((a, b) => {
			const today = new Date();
			const diffA = Math.abs(a.dateObj.getTime() - today.getTime());
			const diffB = Math.abs(b.dateObj.getTime() - today.getTime());
			return diffA - diffB;
		});

	// 首頁只顯示前 3 個最近的活動
	const events = allEvents.slice(0, 3);

	const features = featuresData.map((feature) => ({
		...feature,
		icon: iconMap[feature.icon]
	}));

	let galleryImages = $state<string[]>([]);
	let currentImageIndex = $state(0);
	let autoplayInterval: ReturnType<typeof setInterval> | null = null;

	onMount(() => {
		const imageModules = import.meta.glob('$lib/assets/gallery/*.{jpg,jpeg,png,webp,svg}', {
			eager: true,
			query: '?url',
			import: 'default'
		});

		galleryImages = Object.values(imageModules) as string[];

		if (galleryImages.length > 1) {
			autoplayInterval = setInterval(() => {
				nextImage();
			}, 5000);
		}

		return () => {
			if (autoplayInterval) {
				clearInterval(autoplayInterval);
			}
		};
	});

	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
	}

	function prevImage() {
		currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
	}

	function goToImage(index: number) {
		currentImageIndex = index;
	}
</script>

<div class="page">
	<!-- Hero Section -->
	<section class="hero">
		<!-- Background Carousel -->
		{#if galleryImages.length > 0}
			<div class="hero-background">
				<div class="carousel-images">
					{#each galleryImages as image, index}
						<div class="carousel-image" class:active={index === currentImageIndex}>
							<img src={image} alt="社團活動照片 {index + 1}" />
						</div>
					{/each}
				</div>
				<div class="hero-overlay"></div>
			</div>
		{/if}

		<div class="container">
			<div class="hero-content">
				<div class="hero-badge">CHIAYI SENIOR HIGH SCHOOL</div>
				<h1 class="hero-title">
					嘉義高中<br />
					<span class="highlight">資訊研究社</span>
				</h1>
				<p class="hero-subtitle">
					探索程式設計的無限可能，與志同道合的夥伴一起成長。<br />
					從零基礎到專案實戰，我們提供完整的學習路徑。
				</p>
				<div class="hero-cta">
					<a href="/about" class="btn-primary">
						了解更多
						<IconArrowRight size={20} stroke={2.5} />
					</a>
					<a href="/events" class="btn-secondary">查看活動</a>
				</div>
			</div>
		</div>

		<!-- Carousel Controls -->
		{#if galleryImages.length > 1}
			<button
				class="carousel-btn prev"
				onclick={prevImage}
				aria-label="上一張照片"
			>
				<IconChevronLeft size={24} stroke={2} />
			</button>
			<button
				class="carousel-btn next"
				onclick={nextImage}
				aria-label="下一張照片"
			>
				<IconChevronRight size={24} stroke={2} />
			</button>

			<div class="carousel-indicators">
				{#each galleryImages as _, index}
					<button
						class="indicator"
						class:active={index === currentImageIndex}
						onclick={() => goToImage(index)}
						aria-label="前往照片 {index + 1}"
					></button>
				{/each}
			</div>
		{/if}
	</section>

	<!-- Events Section -->
	<section class="events">
		<div class="container">
			<div class="section-header">
				<span class="section-label">UPCOMING EVENTS</span>
				<h2 class="section-title">近期活動</h2>
			</div>

			<div class="events-grid">
				{#each events as event}
					<article class="event-card">
						<div class="event-icon">
							<event.icon size={32} stroke={1.5} />
						</div>
						<div class="event-meta">
							<span class="event-category">{event.category}</span>
							<span class="event-date">{event.date}</span>
						</div>
						<h3 class="event-title">{event.title}</h3>
						<p class="event-description">{event.description}</p>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section class="about">
		<div class="container">
			<div class="about-grid">
				<div class="about-content">
					<span class="section-label">ABOUT CYSHIRC</span>
					<h2 class="section-title">
						培養未來<br />
						<span class="highlight">科技人才</span>
					</h2>
					<p class="about-text">
						CYSHIRC 致力於為學生提供優質的程式教育環境，透過系統化課程、專案實作與競賽參與，培養學生的技術能力與團隊合作精神。
					</p>
					<p class="about-text">
						無論你是程式新手還是資深玩家，都能在這裡找到屬於自己的學習路徑，與志同道合的夥伴一起成長。
					</p>
					<a href="/about" class="text-link">
						深入了解
						<IconArrowRight size={18} stroke={2.5} />
					</a>
				</div>

				<div class="features-grid">
					{#each features as feature}
						<div class="feature-card">
							<div class="feature-icon">
								<feature.icon size={48} stroke={1.5} />
							</div>
							<h3 class="feature-title">{feature.title}</h3>
							<p class="feature-description">{feature.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="cta">
		<div class="container">
			<div class="cta-content">
				<h2 class="cta-title">準備好加入我們了嗎？</h2>
				<p class="cta-description">立即報名參加活動，開啟你的程式學習之旅</p>
				<a href="/contact" class="btn-primary-large">
					立即加入
					<IconArrowRight size={24} stroke={2.5} />
				</a>
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	$crimson-primary: #ce1a4b;
	$crimson-dark: #a01538;
	$crimson-light: #e63764;
	$highlight-yellow: #d4ff00;
	$gray-900: #0f1117;
	$gray-800: #1a1d29;
	$gray-700: #252936;
	$gray-600: #32374a;
	$gray-400: #9ca3af;
	$gray-300: #d1d5db;
	$transition-smooth: cubic-bezier(0.4, 0, 0.2, 1);

	.page {
		background: $gray-900;
		min-height: 100vh;
	}

	.container {
		max-width: 1440px;
		margin: 0 auto;
		padding: 0 3.5rem;

		@media (max-width: 1024px) {
			padding: 0 2rem;
		}

		@media (max-width: 768px) {
			padding: 0 1.5rem;
		}
	}

	.section-label {
		display: inline-block;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: $gray-400;
		margin-bottom: 1.5rem;
	}

	.section-title {
		font-size: 3.5rem;
		font-weight: 900;
		line-height: 1.1;
		letter-spacing: -0.04em;
		color: #fff;
		margin: 0 0 2rem;

		@media (max-width: 768px) {
			font-size: 2.5rem;
		}
	}

	.highlight {
		background: $highlight-yellow;
		color: #000;
		padding: 0.2em 0.5em;
		border-radius: 0.35em;
		display: inline-block;
		line-height: 1.2;
		font-weight: 900;
		position: relative;
		z-index: 10;
		isolation: isolate;
		transform: translateZ(0);
		will-change: transform;
		backface-visibility: hidden;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		filter: none;
		text-shadow: none;
		box-shadow: none;
	}

	.hero {
		padding: 8rem 0 10rem;
		background: $gray-900;
		position: relative;
		overflow: hidden;
		min-height: 100vh;
		display: flex;
		align-items: center;

		@media (max-width: 768px) {
			padding: 5rem 0 6rem;
			min-height: 80vh;
		}

		.hero-background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 0;

			.carousel-images {
				position: relative;
				width: 100%;
				height: 100%;

				.carousel-image {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					opacity: 0;
					transition: opacity 1.2s $transition-smooth;

					&.active {
						opacity: 1;
					}

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
						display: block;
					}
				}
			}

			.hero-overlay {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: linear-gradient(
					135deg,
					rgba($gray-900, 0.7) 0%,
					rgba($gray-900, 0.7) 50%,
					rgba($gray-900, 0.7) 100%
				);
				z-index: 1;
			}
		}

		.container {
			position: relative;
			z-index: 2;
		}

		.hero-content {
			max-width: 900px;
			text-align: center;
			margin: 0 auto;

			.hero-badge {
				display: inline-block;
				font-size: 0.6875rem;
				font-weight: 700;
				letter-spacing: 0.15em;
				text-transform: uppercase;
				color: #000;
				padding: 0.5rem 1rem;
				border-radius: 100px;
				margin-bottom: 2.5rem;
				background: $highlight-yellow;
				isolation: isolate;
				transform: translateZ(0);
				filter: none;
			}

			.hero-title {
				font-size: 5.5rem;
				font-weight: 900;
				line-height: 1.05;
				letter-spacing: -0.045em;
				color: #fff;
				margin: 0 0 2rem;
				text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);

				@media (max-width: 1024px) {
					font-size: 4rem;
				}

				@media (max-width: 768px) {
					font-size: 3rem;
				}
			}

			.hero-subtitle {
				font-size: 1.25rem;
				line-height: 1.7;
				color: rgba(#fff, 0.9);
				margin: 0 0 3rem;
				font-weight: 500;
				text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

				@media (max-width: 768px) {
					font-size: 1.125rem;
				}
			}

			.hero-cta {
				display: flex;
				gap: 1rem;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;
			}
		}

		.carousel-btn {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			width: 48px;
			height: 48px;
			border-radius: 50%;
			background: rgba(#fff, 0.15);
			border: 1.5px solid rgba(#fff, 0.3);
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			transition: all 0.3s $transition-smooth;
			backdrop-filter: blur(8px);
			z-index: 3;

			&:hover {
				background: rgba($crimson-primary, 0.9);
				border-color: $crimson-primary;
				transform: translateY(-50%) scale(1.1);
			}

			&.prev {
				left: 2rem;

				@media (max-width: 768px) {
					left: 1rem;
				}
			}

			&.next {
				right: 2rem;

				@media (max-width: 768px) {
					right: 1rem;
				}
			}

			@media (max-width: 768px) {
				width: 40px;
				height: 40px;
			}

			:global(svg) {
				flex-shrink: 0;
			}
		}

		.carousel-indicators {
			position: absolute;
			bottom: 3rem;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			gap: 0.75rem;
			z-index: 3;

			@media (max-width: 768px) {
				bottom: 2rem;
			}

			.indicator {
				width: 10px;
				height: 10px;
				border-radius: 50%;
				background: rgba(#fff, 0.4);
				border: none;
				cursor: pointer;
				transition: all 0.3s $transition-smooth;

				&:hover {
					background: rgba(#fff, 0.7);
					transform: scale(1.2);
				}

				&.active {
					width: 28px;
					border-radius: 5px;
					background: $crimson-primary;
				}

				@media (max-width: 768px) {
					width: 8px;
					height: 8px;

					&.active {
						width: 24px;
					}
				}
			}
		}
	}

	.btn-primary,
	.btn-primary-large {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: $crimson-primary;
		color: #fff;
		padding: 1rem 2rem;
		border-radius: 100px;
		font-weight: 700;
		font-size: 0.9375rem;
		letter-spacing: -0.01em;
		transition: all 0.3s $transition-smooth;
		border: 2px solid $crimson-primary;
		box-shadow: 0 6px 20px rgba($crimson-primary, 0.25);

		&:hover {
			background: $crimson-light;
			border-color: $crimson-light;
			transform: translateY(-3px);
			box-shadow: 0 16px 40px rgba($crimson-light, 0.5);
		}

		&:active {
			transform: translateY(-1px);
			box-shadow: 0 4px 12px rgba($crimson-primary, 0.3);
		}
	}

	.btn-primary-large {
		padding: 1.25rem 2.5rem;
		font-size: 1.125rem;
		gap: 0.75rem;
		box-shadow: 0 8px 24px rgba($crimson-primary, 0.3);

		&:hover {
			box-shadow: 0 20px 48px rgba($crimson-light, 0.55);
		}

		&:active {
			box-shadow: 0 6px 16px rgba($crimson-primary, 0.35);
		}
	}

	.btn-secondary {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: transparent;
		color: #fff;
		padding: 1rem 2rem;
		border-radius: 100px;
		font-weight: 700;
		font-size: 0.9375rem;
		letter-spacing: -0.01em;
		border: 2px solid $gray-700;
		transition: all 0.3s $transition-smooth;

		&:hover {
			border-color: $gray-600;
			background: $gray-800;
			transform: translateY(-2px);
		}
	}

	.events {
		padding: 8rem 0;
		background: $gray-800;

		@media (max-width: 768px) {
			padding: 5rem 0;
		}

		.section-header {
			text-align: center;
			margin-bottom: 5rem;
		}

		.events-grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
			gap: 2rem;

			@media (max-width: 768px) {
				grid-template-columns: 1fr;
			}
		}
	}

	.event-card {
		background: $gray-700;
		border: 1.5px solid $gray-600;
		border-radius: 1.5rem;
		padding: 3rem;
		transition: all 0.4s $transition-smooth;

		&:hover {
			border-color: $crimson-primary;
			transform: translateY(-8px);
			box-shadow: 0 24px 48px rgba($crimson-primary, 0.2);

			.event-icon {
				background: $crimson-primary;
				color: #fff;
				transform: scale(1.05) rotate(5deg);
			}
		}

		.event-icon {
			width: 72px;
			height: 72px;
			background: $gray-600;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 2rem;
			color: #fff;
			transition: all 0.4s $transition-smooth;
		}
	}

	.event-meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.5rem;
		gap: 1rem;
	}

	.event-category {
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: $gray-400;
	}

	.event-date {
		font-size: 0.875rem;
		font-weight: 600;
		color: $gray-400;
		font-variant-numeric: tabular-nums;
	}

	.event-title {
		font-size: 1.75rem;
		font-weight: 800;
		line-height: 1.2;
		letter-spacing: -0.02em;
		color: #fff;
		margin: 0 0 1rem;
	}

	.event-description {
		font-size: 1rem;
		line-height: 1.7;
		color: $gray-400;
		margin: 0;
	}

	.about {
		padding: 10rem 0;
		background: $gray-900;

		@media (max-width: 768px) {
			padding: 6rem 0;
		}
	}

	.about-grid {
		display: grid;
		grid-template-columns: 5fr 7fr;
		gap: 6rem;
		align-items: start;

		@media (max-width: 1024px) {
			grid-template-columns: 1fr;
			gap: 4rem;
		}
	}

	.about-content {
		position: sticky;
		top: 8rem;

		@media (max-width: 1024px) {
			position: static;
		}
	}

	.about-text {
		font-size: 1.125rem;
		line-height: 1.8;
		color: $gray-400;
		margin: 0 0 1.5rem;
	}

	.text-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: $crimson-primary;
		font-weight: 700;
		font-size: 1rem;
		margin-top: 1rem;
		transition: all 0.3s ease;

		&:hover {
			color: $crimson-light;
			transform: translateX(4px);
		}
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;

		@media (max-width: 640px) {
			grid-template-columns: 1fr;
		}
	}

	.feature-card {
		background: $gray-800;
		border: 1.5px solid $gray-700;
		border-radius: 1.25rem;
		padding: 2.5rem;
		transition: all 0.4s $transition-smooth;

		&:hover {
			border-color: $gray-600;
			transform: translateY(-4px);
			background: $gray-700;

			.feature-icon {
				transform: scale(1.1) rotate(-5deg);
			}
		}

		.feature-icon {
			margin-bottom: 1.5rem;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			color: $crimson-primary;
			transition: transform 0.4s $transition-smooth;
		}
	}

	.feature-title {
		font-size: 1.25rem;
		font-weight: 800;
		line-height: 1.3;
		letter-spacing: -0.02em;
		color: #fff;
		margin: 0 0 0.75rem;
	}

	.feature-description {
		font-size: 0.9375rem;
		line-height: 1.6;
		color: $gray-400;
		margin: 0;
	}

	.cta {
		padding: 10rem 0;
		background: $gray-800;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			height: 1px;
			background: linear-gradient(
				90deg,
				transparent 0%,
				rgba($crimson-primary, 0.5) 50%,
				transparent 100%
			);
		}

		@media (max-width: 768px) {
			padding: 6rem 0;
		}

		.cta-content {
			max-width: 800px;
			margin: 0 auto;
			text-align: center;

			.cta-title {
				font-size: 4rem;
				font-weight: 900;
				line-height: 1.1;
				letter-spacing: -0.04em;
				color: #fff;
				margin: 0 0 1.5rem;

				@media (max-width: 768px) {
					font-size: 2.5rem;
				}
			}

			.cta-description {
				font-size: 1.25rem;
				line-height: 1.6;
				color: $gray-400;
				margin: 0 0 3rem;
			}
		}
	}
</style>
