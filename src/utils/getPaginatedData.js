import { ITEMS_PER_PAGE } from "@data/constants";

export const getPaginatedData = (data, currentPage, itemsPerPage = ITEMS_PER_PAGE) => {
  const flatItems = Object.values(data).flat();
  const totalPages = Math.ceil(flatItems.length / itemsPerPage);
  const startIndex = (currentPage - 1)*itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return [flatItems.slice(startIndex, endIndex), totalPages];
}
