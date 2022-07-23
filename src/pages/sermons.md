---
title: "RBC: Sermons"
layout: "@layouts/default.astro"
setup: |
  import YoutubeGrid from "@components/youtube-grid.svelte";
  import LoadVideos from "@components/youtube-data.mjs";
  let videoFeed = await LoadVideos("UCS-jtPdMwPTdjBLkQwjtzPA");
---

## Sermons

<YoutubeGrid videoFeed={videoFeed} />
