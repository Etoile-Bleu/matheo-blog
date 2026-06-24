---
title: "Why Hugo"
date: 2026-06-20
tags: ["hugo", "web", "tools"]
description: "Why I chose Hugo for this blog and what I appreciate about its approach to static site generation."
---

Hugo is often described as the world's fastest static site generator. That's a marketing claim, but it rests on something real: Hugo is written in Go, and it compiles thousands of pages in seconds.

## The static site landscape

The ecosystem has fragmented. Jekyll, Hugo, Gatsby, Eleventy, Astro, Next.js in export mode, each with its own philosophy.

My conclusion after trying several of them: **complexity is the enemy of content**. If the generator demands more attention than the articles, something is wrong.

Hugo has a steep initial learning curve. Go templates are disorienting at first, but once you understand the core concepts (layouts, front matter, taxonomies), everything fits together coherently.

## What I like about it

**Speed.** A `hugo server` that reloads in milliseconds is a daily pleasure.

**Taxonomies.** Tags, categories, and other classifications are first-class citizens. No plugins required.

**Self-contained.** No Node.js, no `node_modules`. One Go binary, a directory of Markdown files, and that's it.

**Portability.** The output is plain HTML, CSS, and JavaScript. It will work on any host, forever.

## The tradeoff

Go templates are verbose. And Hugo has historically moved fast, with breaking changes between major versions. The documentation can lag behind.

For a personal blog in 2026, it's still the right call.

---

*This blog runs on Hugo 0.163. Source is on [GitHub](https://github.com/Etoile-Bleu/matheo-blog).*
