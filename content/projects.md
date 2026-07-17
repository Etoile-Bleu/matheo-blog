---
title: "Projects"
showDate: false
showReadingTime: false
---

Things I built myself, in the order I built them. Contributions to other people's projects are on their own [page](/contributions/).

## 2026

Two projects I keep coming back to, both offline-first software for places where the internet, the hardware, or both, cannot be assumed.

### ZamSync

A sync engine written in Rust for district health clinics in Bhutan that run on 2G and lose power mid-transfer. WAL replication with Hybrid Logical Clocks, Version Vectors, mTLS, and ChaCha20-Poly1305 encryption at rest, under 10 MB of RAM.

- Code: [github.com/Etoile-Bleu/ZamSync](https://github.com/Etoile-Bleu/ZamSync)
- Read more: [Building software for places where the internet barely exists](https://dev.to/etoile_bleu/-i-built-a-sync-engine-for-clinics-that-run-on-2g-and-lose-power-mid-transfer-here-is-why-and-18od)

### MenSung

An offline medication interaction checker in Rust, built for medical workers in war zones, refugee camps, and rural clinics with no internet access. One static binary, one database file, every lookup fully local.

- Code: [github.com/Etoile-Bleu/MenSung](https://github.com/Etoile-Bleu/MenSung)
- Read more: [Checking drug interactions in places where the internet barely exists](https://dev.to/etoile_bleu/checking-drug-interactions-in-places-where-the-internet-barely-exists-2om1)

Scriptable mode, two drugs, a known contraindication:

![mensung Acetylsalicylic acid Warfarin](https://etoile-bleu.github.io/matheo-blog/img/mensung/warfarin.gif)

Same check, a different pair:

![mensung Warfarin Ibuprofen](https://etoile-bleu.github.io/matheo-blog/img/mensung/warfarin-ibuprofen.gif)

The interactive terminal interface, looking up a single drug's own facts with Alt+I:

![MenSung TUI, Alt+I drug info screen](https://etoile-bleu.github.io/matheo-blog/img/mensung/alt-i.gif)

### generals-forge

A community dedicated server in Rust, hexagonal architecture, for Command & Conquer: Generals Zero Hour. A twenty year old RTS with a fan base that still wants to play it online.

- Code: [github.com/Etoile-Bleu/generals-forge](https://github.com/Etoile-Bleu/generals-forge)

### druk-lang

An LLVM-backed compiled language written in C++. Custom front-end, parser, static type system, IR generation pipeline supporting both JIT and AOT execution.

- Code: [github.com/Etoile-Bleu/druk-lang](https://github.com/Etoile-Bleu/druk-lang)

## 2025

**AT7 Système**, my internship, five months porting a legacy WinDev system to the web for technicians on a locked-down industrial site. [Full write-up](/posts/at7-systeme-internship/).

## 2019

**[GuardMinecraftFR](https://github.com/Etoile-Bleu/GuardMinecraftFR)**, my first project, ever. I was 13. A Skript script called "Guard" for a Minecraft server: anti-spam, chat mute and clear, broadcasts, spawn point management. The original README still says, in my own words at the time: *"Je suis un jeune de 13 ans qui ai fait ce script"*, I'm a 13 year old who made this script. I asked people to email me the bugs they found. I still would.

## Other work

Compilers, raytracers, distributed systems, CTF write-ups, the smaller stuff. All of it is on [my GitHub](https://github.com/Etoile-Bleu), and the full list with context is on [my resume](https://etoile-bleu.github.io/matheo-blog/resume-matheo-delbarre.pdf).
