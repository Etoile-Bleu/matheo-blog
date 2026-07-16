---
title: "Why I only build for people who actually need it"
date: 2026-07-16
tags: ["philosophy", "zamsync", "mensung", "open-source"]
description: "A short manifesto on the one rule that decides what I spend my nights building."
showDate: true
showReadingTime: false
---

I have one rule for what I build.

It has to be for someone who cannot buy their way out of the problem.

Not "underserved." Not "emerging markets." A person. A nurse in a district clinic with no signal. A worker in a field hospital with no internet. A patient whose record just disappeared because the connection dropped mid-transfer, again.

If a company with money could already fix it, I don't need to be there. Plenty of smart people are chasing those problems, and they're better funded than I am. I want the empty corner of the map. The one with no market at the end of it. Just a person.

## Where the rule came from

I didn't choose this on purpose. I read, almost by accident, about a hospital in Bhutan that switched on a new patient records system and watched it fall over on day one. Not because anyone did anything wrong. Because the network genuinely could not carry the load, and nobody had built the system to survive that.

I couldn't stop thinking about it.

So I built ZamSync. A sync engine for clinics that lose their connection for hours, sometimes days, and lose power in the middle of a transfer without warning. Then I went looking for what else breaks in the same kind of place, and I found the next thing almost immediately: a nurse holding two drug names and no way to check if they're safe together, because the tool for that lives on a website, and the website needs a connection she doesn't have. So I built MenSung.

Neither of these started as a business idea. They started as a sentence I read that I couldn't put down.

## What "real" means to me

I get asked, sometimes, why I don't build something more useful. Something more people would use.

Here's the test I actually apply. The people affected can't just buy a commercial fix. The tools that exist are the wrong size, the wrong price, or built for a context that isn't theirs. And the constraint is physical, not preference: no internet, no power, old hardware, a place too small or too poor to count as a market.

That last part matters most. "Not a market" is exactly why nobody else is building it. It is also exactly why I want to.

## The part I'm less sure about

I'm not a great marketer. I've said that before and it's still true. I don't have a growth strategy. I have a GitHub account and an honest description of a problem, and so far, that has been enough.

What keeps me going isn't the stars, although the stars are nice. It's the one message from a stranger who read about a clinic in the Himalayas he will probably never visit, and took thirty seconds to say the problem was real. I didn't build ZamSync for him. But he's the reason I kept building it on the nights I wanted to stop.

That's the whole manifesto, really. Find the person the market forgot. Build the thing they actually need, not the thing that's fun to build. Be honest about why. Everything else is details.
