---
title: "Their API was throttled on purpose, and I had to route around it"
date: 2026-07-16
tags: ["internship", "legacy-systems", "react", "at7-systeme"]
description: "Five months porting a 25-year-old industrial software stack to the web, on a site where you can't install anything."
showDate: true
showReadingTime: true
---

Here's the constraint that started the whole project. AT7 Système, where I interned from August to December 2025, does industrial automation work, a lot of it on TotalEnergies' Carling petrochemical site. That site locks down every machine technicians touch. No unauthorized software installs, full stop. But TotalEnergies also requires intervention reports to be filed the same day, especially if something went wrong. AT7's own internal software, the one that actually generates those reports, couldn't be installed on-site. So for years, reports got written whenever the team made it back to a computer that could run it. Sometimes that was hours later. Sometimes it wasn't the same day at all.

My mission was to fix that gap with a website. No install, works in whatever browser is already on the machine, same reports, same PDFs, generated on the spot.

## What actually shipped

It grew past the original scope pretty fast. By the end it covered intervention reports, a dashboard, timesheets, on-call schedules, leave requests, all pulling from the same data their 25-year-old internal tool already managed. Built in React, talking to a Node API, deployed as an actual replacement piece of their daily workflow, not a prototype that lives in a demo folder.

## Then we turned it on for real

It worked fine in testing, one or two people clicking around. Then we let the whole team use it at once, and the latency became unbearable. Click a button, wait. Submit a form, wait longer.

The cause took a while to track down. Their real data lives in an HFSQL database that only speaks the language of WinDev and WebDev, the proprietary stack AT7's internal software was built on. My React app doesn't speak that language either, so every request had to go through AT7's existing WebDev API layer as a translator. And that translator, it turned out, had a hard concurrency cap. Not a technical limit. A deliberate one, the kind vendors set so you eventually pay to have it lifted. Fine when one or two people are testing. A wall the moment a whole team relies on it.

## Two wrong answers before the right one

I needed a way to reach that database that didn't go through the throttled translator.

First attempt: ODBC, a generic database connector. It handled binary data cleanly, which mattered because report attachments and generated PDFs are binary. But it mangled every accented character. É, è, à, all garbled. Unacceptable when every report is written in French.

Second attempt: OLE DB. Handled French text perfectly. Fell over on binary data, the exact thing ODBC had been good at.

The answer was neither on its own. ODBC for binary, OLE DB for text, both wired together with small VBS scripts doing the handoff between them. Ugly on paper. In practice, the latency problem disappeared, and the site went from barely usable to something the team could run all day without noticing it was there, which is the actual goal of any internal tool.

## What I actually learned

Not React. I already knew React going in. What I didn't know: how to sit across from two people, Christophe Fröliger and Lionel Sutkowski, who understood their 25-year-old system down to its edge cases but had never built a modern web app, and turn their explanations into something I could actually implement. A lot of the job was translation in both directions, not just between ODBC and OLE DB.

I also had to prioritize hard. Five months sounds like a lot until you're facing a system that's been accumulating features for two decades. I used a rough 80/20 cut: reports and PDF generation first, because that's the piece with a real compliance deadline attached, and the rest could follow once that actually worked.

Christophe and Lionel gave me a lot of room to make real decisions, not just write code to a spec. That trust is the part of the internship I think about the most. It's one thing to be told what to build. It's another to be handed a real constraint and asked what you'd do about it.

## Why this matters more than my side projects, honestly

ZamSync and MenSung are mine from the first line. I chose the architecture, I chose the constraints, nobody was depending on them before I shipped anything. AT7 was different. The database existed before me and will exist after me. The users were real people who needed their reports filed on time, not a demo audience. I didn't get to pick the stack, the legacy quirks, or the vendor's throttling.

Most software running in the world looks more like AT7's than like a greenfield side project. I'm glad the first real system I touched taught me that early.
