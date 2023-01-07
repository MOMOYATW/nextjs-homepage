import { api } from "./notionAPI";
import { notion, getPageMetaData } from "./notion";

export const getSinglePost = async (id: string) => {
  const page = await api.getPage(id);
  const pagemeta = await notion.pages.retrieve({ page_id: id });
  page.collection = {};
  Object.values(page.block)[0].value.content = Object.values(
    page.block
  )[0].value.content?.slice(2);
  return { page: page, ...getPageMetaData(pagemeta) };
};
