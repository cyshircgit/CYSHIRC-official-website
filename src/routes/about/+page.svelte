<script lang="ts">
	import {
		IconDeviceLaptop,
		IconUsersGroup,
		IconTrophy,
		IconBook2,
		IconShield,
		IconCode,
		IconBrandInstagram,
		IconHeartHandshake,
		IconCurrencyDollar
	} from '@tabler/icons-svelte';

	const courses = [
		{
			icon: IconCode,
			title: '應用開發與演算法班',
			description: '深入學習C++、Python等程式語言，掌握演算法核心概念，為APCS檢定與學科能力競賽做好準備'
		},
		{
			icon: IconShield,
			title: '資訊安全專班',
			description: '由專業講師親自授課，學習網路安全、資安防護等實用技能，培養成為資安專家'
		}
	];

	const techFields = [
		{ icon: IconCode, title: 'C++ / Python', description: '程式語言開發' },
		{ icon: IconDeviceLaptop, title: '網管 / 網頁設計', description: '網路技術' }
	];

	const features = [
		{
			icon: IconBook2,
			title: '雙軌課程設計',
			description: '提供應用開發與資安兩大專業方向'
		},
		{
			icon: IconTrophy,
			title: '實戰競賽經驗',
			description: '定期舉辦資安與競程比賽，累積實戰經驗'
		},
		{
			icon: IconUsersGroup,
			title: '專業師資指導',
			description: '學長姐全程指導，與SCIST.tw合作'
		},
		{
			icon: IconDeviceLaptop,
			title: '多元技術領域',
			description: '從程式開發到硬體實作，涵蓋完整技術棧'
		}
	];

	const stats = [
		{ number: '36', label: '社員人數' },
		{ number: '2', label: '專業課程' },
		{ number: '2+', label: '技術領域' },
		{ number: '800', label: '學期社費' }
	];
</script>

<div class="page">
	<!-- Hero Section -->
	<section class="hero">
		<div class="container">
			<div class="hero-content">
				<span class="section-label">ABOUT US</span>
				<h1 class="hero-title">關於<span class="highlight">我們</span></h1>
				<p class="hero-subtitle">
					我們是一群熱愛資訊科技、勇於探索數位世界的夥伴們。<br />
					無論你是程式新手還是對資訊領域充滿好奇的學習者，<br />
					這裡都是你發揮潛能、實現夢想的最佳舞台！
				</p>
			</div>
		</div>
	</section>

	<!-- Stats Section -->
	<section class="stats-section">
		<div class="container">
			<div class="stats-grid">
				{#each stats as stat}
					<div class="stat-card">
						<div class="stat-number">{stat.number}</div>
						<div class="stat-label">{stat.label}</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Introduction Section -->
	<section class="intro-section">
		<div class="container">
			<div class="intro-content">
				<h2 class="section-title">嘉義高中資訊研究社<span class="highlight">116級</span></h2>
				<p class="intro-text">
					作為<a
						href="https://scist.org"
						target="_blank"
						rel="noopener noreferrer"
						class="link-highlight">SCIST.tw</a
					>的合作社團，我們致力於培養學生的程式設計能力、資訊安全意識，以及科技創新思維。在這裡，你將與
					<strong>36位</strong>志同道合的夥伴一起成長，由經驗豐富且極具耐心的學長姐們帶領，從零開始打造屬於你的資訊技術之路。
				</p>
				<p class="intro-text">
					我們不只是學習寫程式，更是在培養<strong>解決問題的能力與邏輯思維</strong>！
				</p>
			</div>
		</div>
	</section>

	<!-- Courses Section -->
	<section class="courses-section">
		<div class="container">
			<h2 class="section-title">雙軌<span class="highlight">課程設計</span></h2>
			<div class="courses-grid">
				{#each courses as course}
					<div class="course-card">
						<div class="course-icon">
							<svelte:component this={course.icon} size={40} stroke={1.5} />
						</div>
						<h3 class="course-title">{course.title}</h3>
						<p class="course-description">{course.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Tech Fields Section -->
	<section class="tech-section">
		<div class="container">
			<h2 class="section-title">多元<span class="highlight">技術領域</span></h2>
			<div class="tech-grid">
				{#each techFields as field}
					<div class="tech-card">
						<div class="tech-icon">
							<svelte:component this={field.icon} size={32} stroke={1.5} />
						</div>
						<h3 class="tech-title">{field.title}</h3>
						<p class="tech-description">{field.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<section class="features-section">
		<div class="container">
			<h2 class="section-title">社團<span class="highlight">特點</span></h2>
			<div class="features-grid">
				{#each features as feature}
					<div class="feature-card">
						<div class="feature-icon">
							<svelte:component this={feature.icon} size={36} stroke={1.5} />
						</div>
						<h3 class="feature-title">{feature.title}</h3>
						<p class="feature-description">{feature.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="cta-section">
		<div class="container">
			<div class="cta-content">
				<h2 class="cta-title">準備好加入我們了嗎？</h2>
				<p class="cta-text">一起在資訊的世界裡探索無限可能！</p>
				<div class="cta-buttons">
					<a href="/contact" class="btn-primary">聯絡我們</a>
					<a href="/events" class="btn-secondary">查看活動</a>
				</div>
			<div class="cta-info">
				<a href="https://www.instagram.com/cysh_irc/" target="_blank" rel="noopener noreferrer" class="info-link">
					<IconBrandInstagram size={20} stroke={2} />
					<span>Instagram: @cysh_irc</span>
				</a>
				<a href="https://scist.org" target="_blank" rel="noopener noreferrer" class="info-link">
					<IconHeartHandshake size={20} stroke={2} />
					<span>合作夥伴: SCIST.tw</span>
				</a>
				<div class="info-link">
					<IconCurrencyDollar size={20} stroke={2} />
					<span>社費: 上下學期各800元（含社服、講師費、點心）</span>
				</div>
			</div>
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	$crimson-primary: #ce1a4b;
	$crimson-dark: #a01538;
	$highlight-yellow: #d4ff00;
	$gray-900: #0f1117;
	$gray-800: #1a1d29;
	$gray-700: #252936;
	$gray-600: #32374a;
	$gray-400: #9ca3af;
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

	.highlight {
		background: $highlight-yellow;
		color: $gray-900;
		padding: 0.1em 0.35em;
		margin-left: 0.15em;
		border-radius: 0.25em;
		display: inline-block;
		line-height: 1.3;
	}

	.hero {
		padding: 8rem 0 6rem;
		background: $gray-900;

		@media (max-width: 768px) {
			padding: 5rem 0 4rem;
		}

		.hero-content {
			max-width: 900px;
			text-align: center;
			margin: 0 auto;

			.hero-title {
				font-size: 5rem;
				font-weight: 900;
				line-height: 1.1;
				letter-spacing: -0.045em;
				color: #fff;
				margin: 0 0 2rem;

				@media (max-width: 1024px) {
					font-size: 4rem;
				}

				@media (max-width: 768px) {
					font-size: 3rem;
				}
			}

			.hero-subtitle {
				font-size: 1.25rem;
				line-height: 1.8;
				color: $gray-400;
				margin: 0;
				font-weight: 500;

				@media (max-width: 768px) {
					font-size: 1.125rem;

					br {
						display: none;
					}
				}
			}
		}
	}

	.stats-section {
		padding: 4rem 0;
		background: $gray-800;
		border-top: 1.5px solid $gray-700;
		border-bottom: 1.5px solid $gray-700;

		.stats-grid {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 3rem;

			@media (max-width: 768px) {
				grid-template-columns: repeat(2, 1fr);
				gap: 2rem;
			}
		}

		.stat-card {
			text-align: center;

			.stat-number {
				font-size: 3.5rem;
				font-weight: 900;
				color: $crimson-primary;
				line-height: 1;
				margin-bottom: 0.5rem;
				letter-spacing: -0.02em;

				@media (max-width: 768px) {
					font-size: 2.5rem;
				}
			}

			.stat-label {
				font-size: 0.875rem;
				font-weight: 600;
				color: $gray-400;
				text-transform: uppercase;
				letter-spacing: 0.05em;
			}
		}
	}

	.intro-section {
		padding: 6rem 0;
		background: $gray-900;

		.intro-content {
			max-width: 900px;
			margin: 0 auto;
			text-align: center;

			.section-title {
				font-size: 2.5rem;
				font-weight: 900;
				line-height: 1.2;
				letter-spacing: -0.03em;
				color: #fff;
				margin: 0 0 3rem;

				@media (max-width: 768px) {
					font-size: 2rem;
				}
			}

			.intro-text {
				font-size: 1.125rem;
				line-height: 1.9;
				color: $gray-400;
				margin: 0 0 1.5rem;

				strong {
					color: #fff;
					font-weight: 700;
				}

				.link-highlight {
					color: $crimson-primary;
					font-weight: 700;
					text-decoration: none;
					transition: all 0.2s $transition-smooth;
					border-bottom: 2px solid transparent;

					&:hover {
						border-bottom-color: $crimson-primary;
					}
				}

				&:last-child {
					margin-bottom: 0;
					font-size: 1.25rem;
					color: #fff;
				}
			}
		}
	}

	.courses-section {
		padding: 6rem 0;
		background: $gray-800;

		.section-title {
			font-size: 2.5rem;
			font-weight: 900;
			line-height: 1.2;
			letter-spacing: -0.03em;
			color: #fff;
			margin: 0 0 4rem;
			text-align: center;

			@media (max-width: 768px) {
				font-size: 2rem;
			}
		}

		.courses-grid {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 2.5rem;

			@media (max-width: 768px) {
				grid-template-columns: 1fr;
				gap: 2rem;
			}
		}

		.course-card {
			background: $gray-900;
			border: 1.5px solid $gray-700;
			border-radius: 1.5rem;
			padding: 3rem;
			transition: all 0.4s $transition-smooth;

			&:hover {
				border-color: $crimson-primary;
				transform: translateY(-8px);
				box-shadow: 0 20px 40px rgba($crimson-primary, 0.1);

				.course-icon {
					background: $crimson-primary;
					color: #fff;
					transform: scale(1.1) rotate(-5deg);
				}
			}

			.course-icon {
				width: 80px;
				height: 80px;
				background: $gray-700;
				border: 1.5px solid $gray-600;
				border-radius: 1.25rem;
				display: flex;
				align-items: center;
				justify-content: center;
				color: $crimson-primary;
				margin-bottom: 1.5rem;
				transition: all 0.4s $transition-smooth;
			}

			.course-title {
				font-size: 1.5rem;
				font-weight: 800;
				color: #fff;
				margin: 0 0 1rem;
				letter-spacing: -0.02em;
			}

			.course-description {
				font-size: 1rem;
				line-height: 1.7;
				color: $gray-400;
				margin: 0;
			}
		}
	}

	.tech-section {
		padding: 6rem 0;
		background: $gray-900;

		.section-title {
			font-size: 2.5rem;
			font-weight: 900;
			line-height: 1.2;
			letter-spacing: -0.03em;
			color: #fff;
			margin: 0 0 4rem;
			text-align: center;

			@media (max-width: 768px) {
				font-size: 2rem;
			}
		}

		.tech-grid {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 2rem;

			@media (max-width: 768px) {
				grid-template-columns: 1fr;
			}
		}

		.tech-card {
			background: $gray-800;
			border: 1.5px solid $gray-700;
			border-radius: 1.25rem;
			padding: 2rem;
			text-align: center;
			transition: all 0.3s $transition-smooth;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			min-height: 200px;

			&:hover {
				border-color: $crimson-primary;
				transform: translateY(-4px);

				.tech-icon {
					color: $crimson-primary;
					transform: scale(1.05);
				}
			}

			.tech-icon {
				color: $gray-400;
				margin-bottom: 0.75rem;
				transition: all 0.3s $transition-smooth;
			}

			.tech-title {
				font-size: 1.125rem;
				font-weight: 700;
				color: #fff;
				margin: 0 0 0.125rem;
				line-height: 1.3;
			}

			.tech-description {
				font-size: 0.875rem;
				color: $gray-400;
				margin: 0;
				line-height: 1.4;
			}
		}
	}

	.features-section {
		padding: 6rem 0;
		background: $gray-800;

		.section-title {
			font-size: 2.5rem;
			font-weight: 900;
			line-height: 1.2;
			letter-spacing: -0.03em;
			color: #fff;
			margin: 0 0 4rem;
			text-align: center;

			@media (max-width: 768px) {
				font-size: 2rem;
			}
		}

		.features-grid {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 2rem;

			@media (max-width: 1024px) {
				grid-template-columns: repeat(2, 1fr);
			}

			@media (max-width: 768px) {
				grid-template-columns: 1fr;
			}
		}

		.feature-card {
			background: $gray-900;
			border: 1.5px solid $gray-700;
			border-radius: 1.25rem;
			padding: 2.5rem;
			text-align: center;
			transition: all 0.3s $transition-smooth;

			&:hover {
				border-color: $crimson-primary;
				transform: translateY(-4px);

				.feature-icon {
					background: $crimson-primary;
					color: #fff;
				}
			}

			.feature-icon {
				width: 72px;
				height: 72px;
				background: $gray-700;
				border-radius: 1rem;
				display: flex;
				align-items: center;
				justify-content: center;
				color: $crimson-primary;
				margin: 0 auto 1.5rem;
				transition: all 0.3s $transition-smooth;
			}

			.feature-title {
				font-size: 1.25rem;
				font-weight: 700;
				color: #fff;
				margin: 0 0 0.75rem;
			}

			.feature-description {
				font-size: 0.9375rem;
				line-height: 1.6;
				color: $gray-400;
				margin: 0;
			}
		}
	}

	.cta-section {
		padding: 8rem 0;
		background: $gray-900;

		@media (max-width: 768px) {
			padding: 5rem 0;
		}

		.cta-content {
			max-width: 800px;
			margin: 0 auto;
			text-align: center;

			.cta-title {
				font-size: 3rem;
				font-weight: 900;
				line-height: 1.2;
				letter-spacing: -0.03em;
				color: #fff;
				margin: 0 0 1rem;

				@media (max-width: 768px) {
					font-size: 2rem;
				}
			}

			.cta-text {
				font-size: 1.25rem;
				color: $gray-400;
				margin: 0 0 3rem;
			}

			.cta-buttons {
				display: flex;
				gap: 1.5rem;
				justify-content: center;
				margin-bottom: 4rem;

				@media (max-width: 768px) {
					flex-direction: column;
					align-items: center;
				}
			}

			.btn-primary,
			.btn-secondary {
				padding: 1rem 2.5rem;
				border-radius: 9999px;
				font-weight: 700;
				font-size: 1rem;
				text-transform: uppercase;
				letter-spacing: 0.05em;
				transition: all 0.3s $transition-smooth;
				display: inline-block;

				@media (max-width: 768px) {
					width: 100%;
					max-width: 300px;
				}
			}

			.btn-primary {
				background: $crimson-primary;
				color: #fff;
				border: 2px solid $crimson-primary;

				&:hover {
					background: transparent;
					transform: translateY(-2px);
					box-shadow: 0 10px 30px rgba($crimson-primary, 0.3);
				}
			}

			.btn-secondary {
				background: transparent;
				color: #fff;
				border: 2px solid $gray-600;

				&:hover {
					border-color: #fff;
					transform: translateY(-2px);
				}
			}

			.cta-info {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				padding-top: 3rem;
				border-top: 1.5px solid $gray-700;

				.info-link {
					display: inline-flex;
					align-items: center;
					gap: 0.75rem;
					font-size: 1rem;
					color: $gray-400;
					text-decoration: none;
					margin: 0 auto;
					transition: all 0.3s $transition-smooth;

					&:hover {
						color: #fff;
						transform: translateX(4px);

						:global(svg) {
							color: $crimson-primary;
						}
					}

					:global(svg) {
						flex-shrink: 0;
						transition: color 0.3s $transition-smooth;
					}
				}

				@media (max-width: 768px) {
					padding-top: 2rem;
				}
			}
		}
	}
</style>