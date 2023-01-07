import { api } from "./notionAPI";

export const queryDatabase = async (
  database_id: string,
  property_filters: any
) => {
  const database = await api.getPage(database_id);
  const query = await api.getCollectionData(
    Object.keys(database.collection)[0],
    Object.keys(database.collection_view)[0],
    {
      ...database.collection_view[Object.keys(database.collection_view)[0]]
        ?.value,
      property_filters: property_filters,
    }
  );
  return query;
};
