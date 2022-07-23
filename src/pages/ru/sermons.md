---
title: "РБЦ: Проповеди"
layout: "@layouts/default.astro"
setup: |
  import YoutubeGrid from "@components/youtube-grid.svelte";
  import LoadVideos from "@components/youtube-data.mjs";
  let videoFeed = await LoadVideos("UCS-jtPdMwPTdjBLkQwjtzPA");
---

## Проповеди

<YoutubeGrid videoFeed={videoFeed} />
