import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const getPublishedPosts = async () => {
  const posts = await notion.databases.query({
    database_id: process.env.DATABASE_ID!,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  const hasMore = posts.has_more;
  const nextCursor = posts.next_cursor;

  const allPosts = await Promise.all(
    posts.results.map(async (post) => {
      const excerpt = await notion.blocks.children.list({
        block_id: post.id,
        page_size: 1,
      });
      return { ...post, excerpt: excerpt.results[0] };
    })
  );

  return allPosts.map((post: any) => {
    return getPageMetaData(post);
  });
};

export const getAllPublished = async () => {
  const posts = await notion.databases.query({
    database_id: process.env.DATABASE_ID!,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  const allPosts = posts.results;

  return allPosts;
};

const getToday = (datestring: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date();

  if (datestring) {
    date = new Date(datestring);
  }

  const minute = date.getMinutes();
  const hour = date.getHours();
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let today = `${month} ${day}, ${year} ${hour}:${minute}`;

  return today;
};

export const getPageMetaData = (post: any) => {
  return {
    id: post.id,
    title: post.properties.Page.title,
    date: getToday(post.properties.Date.created_time),
    cover: post.cover
      ? post.cover.external.url
      : "https://images.ctfassets.net/pdf29us7flmy/3NWHOvgo4nYs2giJF61Qw8/d1f8de3bd5820ba946a217a49a3fd65b/resume-cover-letter-spot-3.svg",
    authors: post.properties.Authors.people[0].name,
    tags: post.properties.Tags.multi_select,
    excerpt: post.excerpt ? post.excerpt.paragraph.rich_text[0].plain_text : "",
  };
};

export default getPublishedPosts;
