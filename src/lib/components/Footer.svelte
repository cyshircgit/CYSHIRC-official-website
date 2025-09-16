<script lang="ts">
	import NotByAIBadgewhite from '$lib/assets/Assisted-By-Humans-Not-By-AI-Badge-white.svg?url';
</script>

<footer class="footer">
	<p>Built with ❤️ by CYSHIRC members x tonicatOWO</p>
	<img src={NotByAIBadgewhite} alt="Not by AI badge" class="footer-badge" loading="lazy" />
</footer>

<style lang="scss">
	.footer {
		margin-top: auto;
		padding: 2rem;
		text-align: center;
		border-top: 1px solid var(--border-gray);
		color: var(--text-muted);
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		font-size: 0.9rem;

		@media (max-width: 480px) {
			padding: 1.5rem 1rem;
			flex-direction: column;
			gap: 1rem;
		}

		@media (min-width: 481px) and (max-width: 767px) {
			padding: 2rem 1.5rem;
			flex-direction: column;
			gap: 1rem;
		}

		@media (min-width: 1710px) {
			padding: 3rem;
		}

		p {
			margin: 0;
		}

		.footer-badge {
			width: auto;
			height: 32px;
			opacity: 0.8;
			transition: opacity 0.2s ease;

			&:hover,
			&:focus {
				opacity: 1;
			}
		}
	}
</style>
