<script lang="ts">
	import {
		IconMail,
		IconBrandGithub,
		IconBrandInstagram,
		IconBrandDiscord,
		IconMapPin,
		IconArrowRight
	} from '@tabler/icons-svelte';

	const contactMethods = [
		{
			icon: IconMail,
			title: 'Email',
			value: 'cyshirc@gmail.com',
			link: 'mailto:cyshirc@gmail.com'
		},
		{
			icon: IconBrandInstagram,
			title: 'Instagram',
			value: '@cysh_irc',
			link: 'https://www.instagram.com/cysh_irc/'
		},
		{
			icon: IconBrandDiscord,
			title: 'Discord',
			value: '加入我們的 Discord',
			link: 'https://discord.gg/jqYC8WAScJ'
		},
		{
			icon: IconBrandGithub,
			title: 'GitHub',
			value: 'github.com/cyshircgit',
			link: 'https://github.com/cyshircgit'
		},
		{
			icon: IconMapPin,
			title: '地址',
			value: '嘉義市東區大雅路二段738號',
			link: 'https://maps.google.com/?q=嘉義市東區大雅路二段738號'
		}
	];
</script>

<svelte:head>
	<title>聯絡資訊 - CYSHIRC 嘉義高中資訊研究社</title>
	<meta
		name="description"
		content="有任何問題或想加入我們？歡迎隨時與我們聯繫。透過 Email、Instagram、GitHub 或 Discord 與我們交流。"
	/>
	<meta property="og:title" content="聯絡資訊 - CYSHIRC" />
	<meta
		property="og:description"
		content="歡迎隨時與我們聯繫，無論是想加入社團還是詢問活動資訊。"
	/>
</svelte:head>

<div class="page">
	<section class="contact-hero">
		<div class="container">
			<div class="hero-content">
				<span class="section-label">CONTACT US</span>
				<h1 class="hero-title">
					聯絡<span class="highlight">我們</span>
				</h1>
				<p class="hero-subtitle">有任何問題或想加入我們？歡迎隨時與我們聯繫</p>
			</div>
		</div>
	</section>

	<section class="contact-section">
		<div class="container">
			<div class="contact-wrapper">
				<div class="contact-info">
					<h2 class="info-title">聯絡資訊</h2>
					<p class="info-description">
						無論你是想加入社團、詢問活動資訊，或是有任何建議，我們都很樂意聽到你的聲音。歡迎透過以下方式與我們聯繫。
					</p>

					<div class="contact-methods">
						{#each contactMethods as method (method.title)}
							<a
								href={method.link}
								class="contact-method"
								target={method.link?.startsWith('http') ? '_blank' : undefined}
								rel={method.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
							>
								<div class="method-icon">
									<svelte:component this={method.icon} size={28} stroke={2} />
								</div>
								<div class="method-content">
									<h3 class="method-title">{method.title}</h3>
									<p class="method-value">{method.value}</p>
								</div>
								<div class="method-arrow">
									<IconArrowRight size={20} stroke={2} />
								</div>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	@use '$lib/styles/theme' as theme;

	.page {
		background: theme.$gray-900;
		min-height: 100vh;
	}

	.contact-hero {
		padding: 8rem 0 6rem;
		background: theme.$gray-900;

		@media (max-width: 768px) {
			padding: 5rem 0 4rem;
		}

		.hero-content {
			max-width: 800px;
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
				line-height: 1.7;
				color: theme.$gray-400;
				margin: 0;
				font-weight: 500;

				@media (max-width: 768px) {
					font-size: 1.125rem;
				}
			}
		}
	}

	.contact-section {
		padding: 4rem 0 10rem;
		background: theme.$gray-900;

		@media (max-width: 768px) {
			padding: 3rem 0 6rem;
		}
	}

	.contact-wrapper {
		max-width: 900px;
		margin: 0 auto;
	}

	.contact-info {
		.info-title {
			font-size: 2.5rem;
			font-weight: 900;
			line-height: 1.2;
			letter-spacing: -0.03em;
			color: #fff;
			margin: 0 0 1.5rem;
			text-align: center;

			@media (max-width: 768px) {
				font-size: 2rem;
			}
		}

		.info-description {
			font-size: 1.125rem;
			line-height: 1.8;
			color: theme.$gray-400;
			margin: 0 0 4rem;
			text-align: center;
			max-width: 700px;
			margin-left: auto;
			margin-right: auto;
		}
	}

	.contact-methods {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.contact-method {
		display: flex;
		gap: 1.5rem;
		align-items: center;
		background: theme.$gray-800;
		border: 1.5px solid theme.$gray-700;
		border-radius: 1.25rem;
		padding: 2rem;
		text-decoration: none;
		transition: all 0.4s theme.$transition-smooth;
		position: relative;
		overflow: hidden;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 0;
			height: 100%;
			background: linear-gradient(90deg, transparent, rgba(theme.$crimson-primary, 0.1));
			transition: width 0.4s theme.$transition-smooth;
		}

		&:hover {
			border-color: theme.$crimson-primary;
			transform: translateX(8px);
			background: theme.$gray-700;

			&::before {
				width: 100%;
			}

			.method-icon {
				background: theme.$crimson-primary;
				border-color: theme.$crimson-primary;
				color: #fff;
				transform: scale(1.05) rotate(-5deg);
			}

			.method-arrow {
				opacity: 1;
				transform: translateX(0);
			}
		}

		.method-icon {
			width: 64px;
			height: 64px;
			background: theme.$gray-700;
			border: 1.5px solid theme.$gray-600;
			border-radius: 1rem;
			display: flex;
			align-items: center;
			justify-content: center;
			color: theme.$crimson-primary;
			flex-shrink: 0;
			transition: all 0.4s theme.$transition-smooth;
		}

		.method-content {
			flex: 1;

			.method-title {
				font-size: 0.875rem;
				font-weight: 700;
				letter-spacing: 0.05em;
				text-transform: uppercase;
				color: theme.$gray-400;
				margin: 0 0 0.5rem;
			}

			.method-value {
				font-size: 1.25rem;
				font-weight: 600;
				color: #fff;
				margin: 0;
				transition: color 0.3s ease;
			}
		}

		.method-arrow {
			color: theme.$crimson-primary;
			opacity: 0;
			transform: translateX(-10px);
			transition: all 0.4s theme.$transition-smooth;
		}

		@media (max-width: 768px) {
			padding: 1.5rem;
			gap: 1rem;

			.method-icon {
				width: 56px;
				height: 56px;
			}

			.method-content .method-value {
				font-size: 1.125rem;
			}
		}
	}
</style>
