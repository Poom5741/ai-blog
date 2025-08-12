# Implementation Plan

- [ ] 1. Project Scaffold and Core Setup

  - Initialize Astro project with required integrations (Tailwind, MDX, sitemap, astro-icon, @astrojs/og)
  - Configure package.json with all required dependencies and npm scripts
  - Set up ESLint and Prettier configuration files
  - Create basic project structure with src/components, src/layouts, src/pages, src/content directories
  - _Requirements: 1.1, 9.3_

- [ ] 2. Content Collections and Schema Configuration

  - Create src/content/config.ts with Zod schema for blog posts including all required fields
  - Set up content collection types for TypeScript integration
  - Create sample frontmatter templates for content authors
  - Implement content validation and error handling
  - _Requirements: 2.1, 2.2, 11.1_

- [ ] 3. Base Layout and Theme System

  - Create layouts/Base.astro with HTML structure, meta tags, and theme support
  - Implement CSS custom properties for light/dark theme variables
  - Create ThemeToggle component with localStorage persistence and system preference detection
  - Set up Tailwind configuration with custom design tokens and font stacks
  - _Requirements: 3.2, 3.4, 3.5_

- [ ] 4. Core Layout Components
- [ ] 4.1 Implement SiteHeader component

  - Create responsive navigation with logo, main nav links, and mobile menu
  - Integrate theme toggle and search trigger functionality
  - Add sticky positioning and smooth scroll behavior
  - _Requirements: 3.1, 3.4_

- [ ] 4.2 Implement SiteFooter component

  - Create footer with newsletter signup form, social links, and copyright
  - Integrate Buttondown email capture with environment variable configuration
  - Add responsive design and consistent spacing
  - _Requirements: 6.2, 3.1_

- [ ] 5. Content Display Components
- [ ] 5.1 Create PostCard component

  - Implement responsive card layout with hero image, title, description, and metadata
  - Add tag pills, reading time calculation, and publication date display
  - Create hover effects and smooth transitions
  - Support featured post variant with larger styling
  - _Requirements: 2.3, 3.4, 4.2_

- [ ] 5.2 Create PostMeta component

  - Display publication date, update date, reading time, and author information
  - Format dates consistently and handle optional fields gracefully
  - Add structured data markup for SEO
  - _Requirements: 2.3, 5.4_

- [ ] 5.3 Implement Prose component

  - Create typography-optimized content wrapper using @tailwindcss/typography
  - Add responsive image handling with astro:assets
  - Implement code syntax highlighting with copy-to-clipboard functionality
  - _Requirements: 3.1, 7.2, 11.2_

- [ ] 6. Interactive Components
- [ ] 6.1 Create Callout component

  - Implement styled content blocks for info, warning, tip, and danger types
  - Add icon integration with semantic colors and accessible markup
  - Support optional titles and proper ARIA labels
  - _Requirements: 11.2, 8.2_

- [ ] 6.2 Implement TableOfContents component

  - Auto-generate TOC from MDX headings with configurable depth
  - Add smooth scroll navigation and active section highlighting
  - Make toggleable via frontmatter configuration
  - _Requirements: 2.4, 4.4_

- [ ] 6.3 Create ShareButtons component

  - Implement social sharing for Twitter, LinkedIn, and copy link
  - Add proper meta tags and URL encoding
  - Style with consistent design system
  - _Requirements: 6.4, 5.1_

- [ ] 7. Search Implementation
- [ ] 7.1 Set up Pagefind integration

  - Configure Pagefind build process and indexing
  - Create build script for search index generation
  - Set up client-side search bundle loading
  - _Requirements: 4.1, 4.5_

- [ ] 7.2 Create SearchDrawer component

  - Implement modal overlay with keyboard navigation support
  - Add real-time search results with highlighting
  - Support keyboard shortcuts (/ to open, Escape to close)
  - Display search results with proper formatting and links
  - _Requirements: 4.1, 4.5, 8.1_

- [ ] 8. Page Templates and Routing
- [ ] 8.1 Create homepage (pages/index.astro)

  - Implement hero section with site title, subtitle, and newsletter CTA
  - Display featured post prominently with larger card styling
  - Show recent posts grid with pagination
  - Add topics/tags cloud with post counts
  - _Requirements: 4.2, 4.4, 6.2_

- [ ] 8.2 Create blog post template (pages/blog/[slug].astro)

  - Implement elegant article layout with proper typography scale
  - Add automatic OG image generation using post metadata
  - Include table of contents, next/previous navigation, and share buttons
  - Integrate Giscus comments at bottom of posts
  - _Requirements: 2.4, 5.2, 6.1, 6.4_

- [ ] 8.3 Create tag pages (pages/tags/index.astro and pages/tags/[tag].astro)

  - Display all tags with post counts on index page
  - Show filtered posts for individual tag pages
  - Add pagination for tag-specific post listings
  - _Requirements: 4.2, 4.3, 4.4_

- [ ] 8.4 Create about page (pages/about.astro)

  - Display author bio, photo, and social links
  - Add contact information and professional background
  - Include newsletter signup and social media integration
  - _Requirements: 6.2, 8.2_

- [ ] 9. SEO and Web Standards Implementation
- [ ] 9.1 Configure sitemap and robots.txt

  - Set up @astrojs/sitemap integration with proper site URL
  - Create robots.txt with appropriate crawling directives
  - Configure canonical URLs in astro.config.mjs
  - _Requirements: 5.1, 5.4_

- [ ] 9.2 Implement RSS feed

  - Create RSS endpoint using @astrojs/rss with full post content
  - Include proper metadata, publication dates, and categories
  - Validate RSS feed format and test with feed readers
  - _Requirements: 5.3, 5.1_

- [ ] 9.3 Set up automatic OG image generation

  - Create dynamic OG image endpoint using @astrojs/og
  - Generate images with post title, tag pills, and publication date
  - Configure proper image dimensions and styling
  - _Requirements: 5.2, 6.4_

- [ ] 10. Comments and Analytics Integration
- [ ] 10.1 Integrate Giscus comments

  - Set up GitHub Discussions integration with environment variables
  - Add Giscus script loading and configuration
  - Style comments to match site design
  - _Requirements: 6.1, 6.3_

- [ ] 10.2 Add Cloudflare Web Analytics

  - Integrate analytics script with environment variable toggle
  - Ensure privacy-compliant tracking without cookies
  - Add performance monitoring setup
  - _Requirements: 7.1, 7.4_

- [ ] 11. Accessibility and Performance Optimization
- [ ] 11.1 Implement accessibility features

  - Add skip-to-content link and proper landmark structure
  - Ensure all interactive elements have visible focus styles
  - Add descriptive alt text for images and proper ARIA labels
  - Test color contrast ratios and keyboard navigation
  - _Requirements: 8.1, 8.2, 8.3, 8.4_

- [ ] 11.2 Optimize images and assets

  - Configure astro:assets for responsive image generation
  - Set up lazy loading with proper width/height attributes
  - Add preconnect links for external fonts and resources
  - Implement WebP/AVIF format generation
  - _Requirements: 7.2, 7.3, 7.4, 1.5_

- [ ] 12. Cloudflare Workers Deployment Setup
- [ ] 12.1 Configure Cloudflare Workers adapter

  - Install @astrojs/cloudflare and wrangler dependencies
  - Update astro.config.mjs for SSR with Cloudflare adapter
  - Create wrangler.toml configuration file with proper settings
  - _Requirements: 10.1, 10.4_

- [ ] 12.2 Set up GitHub Actions for Workers deployment

  - Create .github/workflows/deploy-workers.yml workflow
  - Configure secrets for CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID
  - Add build and deployment steps with proper error handling
  - _Requirements: 10.3, 10.4_

- [ ] 13. Cloudflare Pages Fallback Setup
- [ ] 13.1 Configure static build option

  - Create alternative astro.config.mjs for static generation
  - Set up GitHub Actions workflow for Pages deployment
  - Document switching between Workers and Pages deployment
  - _Requirements: 10.2, 10.4_

- [ ] 13.2 Create deployment documentation

  - Write comprehensive README with quickstart instructions
  - Document environment variable configuration
  - Add troubleshooting guide and maintenance tips
  - Include "Deploy in 2 minutes" section with screenshots
  - _Requirements: 9.4, 10.4_

- [ ] 14. Sample Content and Testing
- [ ] 14.1 Create sample blog posts

  - Write 5 sample posts covering research, agents, tooling, infra, product, and opinion topics
  - Add realistic frontmatter, hero images, and proper tagging
  - Include various content types (callouts, code blocks, images)
  - _Requirements: 11.1, 11.2_

- [ ] 14.2 Add author profile and site configuration

  - Create src/data/author.json with Poom's profile information
  - Set up site configuration with proper URLs and metadata
  - Add placeholder images and logos under /public/images
  - _Requirements: 11.1, 5.4_

- [ ] 15. Quality Assurance and Performance Testing
- [ ] 15.1 Implement automated testing

  - Set up Playwright for end-to-end testing of critical user flows
  - Create smoke tests for homepage rendering and search functionality
  - Add Lighthouse CI integration for performance monitoring
  - _Requirements: 1.3, 1.4, 4.5_

- [ ] 15.2 Final optimization and validation
  - Run performance audits and optimize bundle sizes
  - Validate RSS feed with online validators
  - Test accessibility with automated tools and manual testing
  - Verify all requirements are met and document any deviations
  - _Requirements: 1.3, 1.4, 1.5, 8.5_
