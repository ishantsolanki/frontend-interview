import swr from "swr";
import { ApplicationDTO } from "../model/Applications";
import { BASE_URL } from "./common";

export const getApplications = ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) =>
  fetch(`${BASE_URL}/applications?page=${page}&limit=${limit}`).then((res) =>
    res.json()
  ) as Promise<ApplicationDTO[]>;

export const useApplications = (page: number, limit: number) => {
  return swr<ApplicationDTO[], Error>(
    `${BASE_URL}/applications?page=${page}&limit=${limit}`,
    () => getApplications({ page, limit })
  );
};
