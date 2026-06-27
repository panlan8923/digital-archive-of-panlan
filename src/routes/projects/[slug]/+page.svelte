<script lang="ts">
	import SiteFooter from '$lib/components/layout/SiteFooter.svelte';
	import SiteNav from '$lib/components/layout/SiteNav.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { resolvePath } from '$lib/utils/path';
	import { skipArchiveIndexOnce } from '$lib/utils/indexing-session';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const project = $derived(data.project);
	let soundEnabled = $state(true);
</script>

<svelte:head>
	<title>{project.title} — PAN LAN DIGITAL ARCHIVE</title>
	<meta name="description" content={project.introText.slice(0, 160)} />
</svelte:head>

<div class="project-page">
	<div class="project-page__main">
		<header class="project-page__header">
			<div class="project-page__header-start">
				<a class="project-page__back" href={resolvePath('/')} onclick={skipArchiveIndexOnce}>← Archive</a>
				<span class="project-page__entry-number archive-entry-number">{project.entryId}</span>
			</div>
			<div class="project-page__header-end">
				<SiteNav linkMode />
			</div>
		</header>

		<section class="project-hero">
			<div class="project-hero__text">
				<p class="project-hero__eyebrow">
					<span class="archive-entry-number">{project.entryId}</span>
					<span aria-hidden="true"> — </span>
					{project.subtitle}
				</p>
				<h1 class="project-hero__title">{project.title}</h1>
				<p class="project-hero__meta">
					{project.authors} / {project.year}
				</p>
			</div>
			<div class="project-hero__cover">
				<img src={resolvePath(project.coverImage)} alt="" class="project-hero__cover-image" />
			</div>
		</section>

		<section class="project-intro">
			<h2 class="project-section__label">01 — Introduction</h2>
			<h3 class="project-intro__title">{project.introTitle}</h3>
			<p class="project-intro__text">{project.introText}</p>
		</section>

		{#if project.highlights.length > 0}
			<section class="project-highlights" aria-label="Selected spreads">
				<h2 class="project-section__label">Highlights</h2>
				<div class="project-highlights__list">
					{#each project.highlights as highlight, index (highlight.id)}
						<article class="project-spread">
							<div class="project-spread__meta">
								<span class="project-spread__number">
									{String(index + 1).padStart(2, '0')}
								</span>
								<h3 class="project-spread__title">{highlight.title}</h3>
								{#if highlight.caption}
									<p class="project-spread__caption">{highlight.caption}</p>
								{/if}
							</div>
							<div class="project-spread__media">
								{#if highlight.kind === 'video'}
									<video
										class="project-spread__video"
										src={resolvePath(highlight.src ?? '')}
										poster={highlight.poster ? resolvePath(highlight.poster) : undefined}
										controls
										playsinline
										preload="metadata"
									>
										<track kind="captions" />
									</video>
								{:else}
									<img
										class="project-spread__image"
										src={resolvePath(highlight.image ?? '')}
										alt={highlight.title}
										loading="lazy"
									/>
								{/if}
							</div>
						</article>
					{/each}
				</div>
			</section>
		{/if}

		<section class="project-toc" aria-label="Full table of contents">
			<h2 class="project-section__label">Contents</h2>
			<ol class="project-toc__list">
				{#each project.toc as item (item.number)}
					<li class="project-toc__item">
						<div class="project-toc__heading">
							<span class="project-toc__number">{item.number}</span>
							<span class="project-toc__label">{item.label}</span>
						</div>
						{#if item.subsections?.length}
							<ul class="project-toc__subsections">
								{#each item.subsections as subsection (subsection)}
									<li>{subsection}</li>
								{/each}
							</ul>
						{/if}
					</li>
				{/each}
			</ol>
		</section>

		{#if project.pdfUrl}
			<section class="project-download">
				<p class="project-download__note">
					The full publication includes all chapters and documentation. Download the complete PDF
					to read the entire project.
				</p>
				<Button label="Download Full PDF" href={project.pdfUrl} download />
			</section>
		{/if}
	</div>

	<SiteFooter bind:soundEnabled />
</div>
