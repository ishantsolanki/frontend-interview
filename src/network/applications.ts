import useSWRInfinite from "swr/infinite";
import { ApplicationDTO } from "../model/Applications";
import { BASE_URL } from "./common";

export const getApplications = ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) =>
  fetch(`${BASE_URL}/applications?_page=${page}&_limit=${limit}`).then((res) =>
    res.json()
  ) as Promise<ApplicationDTO[]>;

const getKey = (pageIndex: number, previousPageData: ApplicationDTO[]) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end
  return `${BASE_URL}/applications?_page=${pageIndex}`; // SWR key
};

export const useApplications = (page: number, limit: number) => {
  return useSWRInfinite<ApplicationDTO[], Error>(getKey, () =>
    getApplications({ page, limit })
  );
};
