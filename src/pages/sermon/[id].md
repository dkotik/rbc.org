---
title: "RBC: Sermons"
layout: "@layouts/default.astro"
setup: |
  import LoadVideos from "@components/youtube-data.mjs";
  import Video from "@components/youtube-video.svelte";

  export async function getStaticPaths() {
    let videoFeed = await LoadVideos("UCS-jtPdMwPTdjBLkQwjtzPA");
    let paths = [];
    videoFeed.feed.entry.forEach(video => {
      //console.log(video);
      paths.push({
        params: {id: video["yt:videoId"],},
        props: video});
    });
    return paths;
  }

  const { id } = Astro.params;
  const video = Astro.props;
---

# {video.title}

<Video id={id} />
