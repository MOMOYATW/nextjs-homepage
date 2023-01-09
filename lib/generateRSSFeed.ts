import RSS from "rss";
import { getPublishedPosts } from "./notion";
import fs from "fs";

export const generateRssFeed = async () => {
  const site_url = "https://blog.davytao.me";
  const allPosts = await getPublishedPosts();
  const feedOptions = {
    title: "Davy Tao",
    description: "Hi there, Welcome to my blog!",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/icon.png`,
    pubDate: new Date(),
    copyright: `© 2022-${new Date().getFullYear()} Davy Tao. All rights reserved.`,
  };
  const feed = new RSS(feedOptions);

  allPosts.map((post) => {
    let title = "";
    post.title.map((value: any) => (title += value.plain_text));
    let excerpt = "";
    post.excerpt.map((value: any) => (excerpt += value.plain_text));
    feed.item({
      title: title,
      description: excerpt,
      url: `${site_url}/posts/${post.id}`,
      date: post.date,
    });
  });

  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
};
