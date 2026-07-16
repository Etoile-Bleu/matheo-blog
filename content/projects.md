---
title: "Projects"
showDate: false
showReadingTime: false
---

Two projects I keep coming back to, both offline-first software for places where the internet, the hardware, or both, cannot be assumed.

## ZamSync

A sync engine written in Rust for district health clinics in Bhutan that run on 2G and lose power mid-transfer. WAL replication with Hybrid Logical Clocks, Version Vectors, mTLS, and ChaCha20-Poly1305 encryption at rest, under 10 MB of RAM.

- Code: [github.com/Etoile-Bleu/ZamSync](https://github.com/Etoile-Bleu/ZamSync)
- Read more: [Building software for places where the internet barely exists](https://dev.to/etoile_bleu/-i-built-a-sync-engine-for-clinics-that-run-on-2g-and-lose-power-mid-transfer-here-is-why-and-18od)

## MenSung

An offline medication interaction checker in Rust, built for medical workers in war zones, refugee camps, and rural clinics with no internet access. One static binary, one database file, every lookup fully local.

- Code: [github.com/Etoile-Bleu/MenSung](https://github.com/Etoile-Bleu/MenSung)
- Read more: [Checking drug interactions in places where the internet barely exists](https://dev.to/etoile_bleu/checking-drug-interactions-in-places-where-the-internet-barely-exists-2om1)

Scriptable mode, two drugs, a known contraindication:

![mensung Acetylsalicylic acid Warfarin](https://etoile-bleu.github.io/matheo-blog/img/mensung/warfarin.gif)

Same check, a different pair:

![mensung Warfarin Ibuprofen](https://etoile-bleu.github.io/matheo-blog/img/mensung/warfarin-ibuprofen.gif)

The interactive terminal interface, looking up a single drug's own facts with Alt+I:

![MenSung TUI, Alt+I drug info screen](https://etoile-bleu.github.io/matheo-blog/img/mensung/alt-i.gif)

## Other work

Compilers, raytracers, distributed systems, CTF write-ups, the smaller stuff. All of it is on [my GitHub](https://github.com/Etoile-Bleu), and the full list with context is on [my resume](https://etoile-bleu.github.io/matheo-blog/resume-matheo-delbarre.pdf).
