<script lang="ts">
        import {
                IconBrandGithub,
                IconBrandInstagram,
                IconBrandDiscord,
                IconMail,
        } from '@tabler/icons-svelte';

        const currentYear = new Date().getFullYear();

        const socialLinks = [
                {
                        icon: IconBrandInstagram,
                        href: 'https://www.instagram.com/cysh_irc/',
                        label: 'Instagram',
                },
                {
                        icon: IconBrandDiscord,
                        href: 'https://discord.gg/jqYC8WAScJ',
                        label: 'Discord',
                },
                {
                        icon: IconBrandGithub,
                        href: 'https://github.com/cyshircgit',
                        label: 'GitHub',
                },
                {
                        icon: IconMail,
                        href: 'mailto:cyshirc@gmail.com',
                        label: 'Email',
                },
        ];

        const navLinks = [
                { href: '/', label: '首頁' },
                { href: '/about', label: '關於我們' },
                { href: '/events', label: '活動資訊' },
                { href: '/contact', label: '聯絡資訊' },
                { href: '/handouts', label: '講義' },
        ];
</script>

<footer class="footer">
        <div class="footer-container">
                <div class="footer-content">
                        <div class="footer-brand">
                                <a href="/" class="footer-logo">CYSHIRC.</a>
                                <p class="footer-description">
                                        嘉義高中資訊研究社<br />
                                        培養未來科技人才
                                </p>
                        </div>

                        <nav class="footer-nav">
                                <h3 class="footer-nav-title">快速連結</h3>
                                <ul class="footer-nav-list">
                                        {#each navLinks as link (link.href)}
                                                <li>
                                                        <a href={link.href} class="footer-nav-link"
                                                                >{link.label}</a
                                                        >
                                                </li>
                                        {/each}
                                </ul>
                        </nav>

                        <div class="footer-social">
                                <h3 class="footer-nav-title">社群媒體</h3>
                                <div class="social-links">
                                        {#each socialLinks as social (social.label)}
                                                <a
                                                        href={social.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        class="social-link"
                                                        aria-label={social.label}
                                                >
                                                        <social.icon size={24} stroke={1.5} />
                                                </a>
                                        {/each}
                                </div>
                        </div>
                </div>

                <div class="footer-bottom">
                        <p class="copyright">
                                © {currentYear} CYSHIRC 嘉義高中資訊研究社. All rights reserved.
                        </p>
                        <p class="credits">Made with ❤️ by high school students learning to code</p>
                </div>
        </div>
</footer>

<style lang="scss">
        @use '$lib/styles/theme' as theme;

        .footer {
                background: theme.$gray-800;
                border-top: 1px solid theme.$gray-700;
                padding: 4rem 0 2rem;
        }

        .footer-container {
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

        .footer-content {
                display: grid;
                grid-template-columns: 2fr 1fr 1fr;
                gap: 4rem;
                margin-bottom: 3rem;

                @media (max-width: 768px) {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                        text-align: center;
                }
        }

        .footer-brand {
                .footer-logo {
                        color: #fff;
                        font-size: 1.5rem;
                        font-weight: 900;
                        text-transform: uppercase;
                        letter-spacing: -0.02em;
                        text-decoration: none;
                        display: inline-block;
                        margin-bottom: 1rem;

                        &:hover {
                                color: theme.$crimson-primary;
                        }
                }

                .footer-description {
                        color: theme.$gray-400;
                        font-size: 0.9375rem;
                        line-height: 1.7;
                        margin: 0;
                }
        }

        .footer-nav-title {
                color: #fff;
                font-size: 0.875rem;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                margin: 0 0 1.25rem;
        }

        .footer-nav-list {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: column;
                gap: 0.75rem;

                @media (max-width: 768px) {
                        align-items: center;
                }
        }

        .footer-nav-link {
                color: theme.$gray-400;
                text-decoration: none;
                font-size: 0.9375rem;
                transition: all 0.2s theme.$transition-smooth;

                &:hover {
                        color: #fff;
                        transform: translateX(4px);
                }
        }

        .social-links {
                display: flex;
                gap: 1rem;

                @media (max-width: 768px) {
                        justify-content: center;
                }
        }

        .social-link {
                width: 44px;
                height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: theme.$gray-700;
                border: 1px solid theme.$gray-600;
                border-radius: 50%;
                color: theme.$gray-400;
                transition: all 0.3s theme.$transition-smooth;

                &:hover {
                        background: theme.$crimson-primary;
                        border-color: theme.$crimson-primary;
                        color: #fff;
                        transform: translateY(-4px);
                }
        }

        .footer-bottom {
                padding-top: 2rem;
                border-top: 1px solid theme.$gray-700;
                text-align: center;

                .copyright {
                        color: theme.$gray-400;
                        font-size: 0.875rem;
                        margin: 0 0 0.5rem;
                }

                .credits {
                        color: theme.$gray-600;
                        font-size: 0.8125rem;
                        margin: 0;
                }
        }
</style>
