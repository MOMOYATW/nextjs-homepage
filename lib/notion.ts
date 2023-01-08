import { NotionAPI } from "notion-client";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

const api = new NotionAPI({
  authToken: process.env.NOTION_TOKEN_V2,
  activeUser: process.env.NOTION_USER_ID,
});

export const getSinglePost = async (pageId: string) => {
  const page = await api.getPage(pageId);
  const page_meta = await notion.pages.retrieve({ page_id: pageId });
  page.collection = {};
  return { page, meta: { ...formatPageMeta([page_meta])[0] } };
};

const formatPageMeta = (results: any[]) => {
  return results.map((result) => {
    const date = new Date(result.properties.Date.created_time);

    return {
      id: result.id,
      cover: result.cover.external ? result.cover.external.url : "",
      authors: result.properties.Authors.people[0].name,
      date: date.toDateString(),
      excerpt: result.properties.Excerpt.rich_text,
      title: result.properties.Page.title,
      tags: result.properties.Tags.multi_select,
    };
  });
};

export const getPublishedPosts = async () => {
  // page size may not enough in the future
  // currently request one time should be ok
  console.log(process.env.NOTION_TOKEN);
  const pages = await notion.databases.query({
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

  return formatPageMeta(pages.results);
};
