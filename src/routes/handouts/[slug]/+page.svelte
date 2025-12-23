<script lang="ts">
        import type { PageProps } from './$types';
        let { data }: PageProps = $props();
</script>

<svelte:head>
        <title>{data.title} - CYSHIRC</title>
        <meta name="description" content={`CYSHIRC 講義 - ${data.title}`} />
</svelte:head>

<div class="handout-container">
        <h1 class="handout-title">{data.title}</h1>
        <article class="handout-content">
                {@html data.content}
        </article>
</div>

<style lang="scss">
        @use '$lib/styles/theme' as theme;
        $highlight-yellow: #fff176;
        $highlight-blue: #7db4d4;
        $highlight-purple: #b8a4ce;
        $highlight-green: #b8d88c;
        $highlight-orange: #ffbc7f;
        $highlight-pink: #ffaad5;

        $gray-300: #404040;
        $gray-400: #a0a0a0;
        $gray-900: #1a1a1a;
        $crimson-primary: #dc143c;
        $crimson-dark: #b01030;
        $crimson-light: #ff4458;
        $transition-smooth: ease-in-out;
        $font-monospace: 'Fira Code', 'Consolas', 'Monaco', monospace;

        @mixin container {
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

        @mixin section-title($base-size: 3.5rem, $mobile-size: 2.5rem) {
                font-size: $base-size;
                font-weight: 900;
                line-height: 1.1;
                letter-spacing: -0.04em;
                color: #fff;
                margin: 0 0 2rem;

                @media (max-width: 768px) {
                        font-size: $mobile-size;
                }
        }

        .handout-container {
                @include container;
                padding-top: 2rem;
                padding-bottom: 2rem;

                .handout-title {
                        @include section-title(2.5rem, 2rem);
                        color: #fff;
                        margin-bottom: 2rem;
                }

                .handout-content {
                        font-size: 1.125rem;
                        line-height: 1.75;
                        color: #fff;

                        :global(h1) {
                                font-size: 2rem;
                                font-weight: 700;
                                margin: 2.5rem 0 1rem;
                                padding-bottom: 0.5rem;
                                border-bottom: 2px solid $gray-300;
                        }

                        :global(h2) {
                                font-size: 1.75rem;
                                font-weight: 600;
                                margin: 2rem 0 1rem;
                                color: $crimson-primary;
                        }

                        :global(h3) {
                                font-size: 1.5rem;
                                font-weight: 600;
                                margin: 1.75rem 0 0.75rem;
                                color: $crimson-dark;
                        }

                        :global(h4) {
                                font-size: 1.25rem;
                                font-weight: 600;
                                margin: 1.5rem 0 0.75rem;
                                color: #fff;
                        }

                        :global(p) {
                                margin: 1rem 0;
                        }

                        :global(ul),
                        :global(ol) {
                                margin: 1rem 0;
                                padding-left: 2rem;

                                :global(li) {
                                        margin: 0.5rem 0;
                                }
                        }

                        :global(ul) {
                                list-style-type: disc;

                                :global(ul) {
                                        list-style-type: circle;
                                }
                        }

                        :global(ol) {
                                list-style-type: decimal;
                        }

                        :global(a) {
                                color: $crimson-primary;
                                text-decoration: underline;
                                transition: color 0.3s $transition-smooth;

                                &:hover {
                                        color: $crimson-light;
                                }
                        }

                        :global(mark) {
                                padding: 0.2em 0.5em;
                                border-radius: 0.35em;
                                color: #000;
                        }

                        :global(mark.theme-highlight) {
                                background: $highlight-yellow;
                        }

                        :global(mark.highlight-blue) {
                                background: $highlight-blue;
                        }

                        :global(mark.highlight-purple) {
                                background: $highlight-purple;
                        }

                        :global(mark.highlight-green) {
                                background: $highlight-green;
                        }

                        :global(mark.highlight-orange) {
                                background: $highlight-orange;
                        }

                        :global(mark.highlight-pink) {
                                background: $highlight-pink;
                        }

                        :global(pre) {
                                background-color: $gray-900;
                                border-radius: 0.5rem;
                                padding: 1.5rem;
                                overflow-x: auto;
                                margin: 1.5rem 0;
                                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

                                :global(code) {
                                        background: none;
                                        padding: 0;
                                        font-size: 0.95rem;
                                        color: #e2e8f0;
                                        font-family: $font-monospace;
                                }
                        }

                        :global(code) {
                                background-color: #4a4a4a;
                                color: $crimson-primary;
                                padding: 0.2rem 0.4rem;
                                border-radius: 0.25rem;
                                font-size: 0.9em;
                                font-family: $font-monospace;
                        }

                        :global(blockquote) {
                                border-left: 4px solid $crimson-primary;
                                padding-left: 1.5rem;
                                margin: 1.5rem 0;
                                color: $gray-400;
                                font-style: italic;
                        }

                        :global(table) {
                                width: 100%;
                                border-collapse: collapse;
                                margin: 1.5rem 0;

                                :global(th),
                                :global(td) {
                                        border: 1px solid $gray-300;
                                        padding: 0.75rem 1rem;
                                        text-align: left;
                                }

                                :global(th) {
                                        background-color: #4d4d4d;
                                        font-weight: 600;
                                }

                                :global(tr:nth-child(even)) {
                                        background-color: #525252;
                                }
                        }

                        :global(hr) {
                                border: none;
                                border-top: 2px solid #fff;
                                margin: 2rem 0;
                        }

                        :global(img) {
                                max-width: 100%;
                                height: auto;
                                border-radius: 0.5rem;
                                margin: 1.5rem 0;
                                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        }
                }
        }

        @media (max-width: 768px) {
                .handout-container {
                        .handout-content {
                                font-size: 1rem;

                                :global(pre) {
                                        padding: 1rem;
                                        font-size: 0.875rem;
                                }
                        }
                }
        }
</style>
