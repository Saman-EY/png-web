import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useLandingPngsQry = () => {
  return useQuery({
    queryKey: ["landing-png"],
    queryFn: async () => {
      // const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/mixpng.json`);
      // const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/output.json`);
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
      return data;
    },
    staleTime: 1000 * 60 * 1, // 1 minute
  });
};

// export const useLandingPngsQry = (params?: Record<string, any>) => {
//   return useQuery({
//     queryKey: ["landingSlider", params],
//     queryFn: async () => {
//       const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/slider/getSliders`, { params });
//       return data;
//     },
//     staleTime: 1000 * 60 * 1, // 1 minute
//   });
// };

export const useGetMostDownloadedQry = () => {
  return useQuery({
    queryKey: ["most-download-list"],
    queryFn: async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/stats/most-downloaded`);

      return data;
    },
    staleTime: 1000 * 60 * 1, // 1 minute
  });
};
export const useGetTagsQry = () => {
  return useQuery({
    queryKey: ["tags-list"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/tags?page=1&per_page=5&search=&sort_by=name&sort_order=desc`
      );

      return data;
    },
    staleTime: 1000 * 60 * 1, // 1 minute
  });
};
export const useGetPopularProsQry = () => {
  return useQuery({
    queryKey: ["popular-pros-list"],
    queryFn: async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/stats/popular-products?limit=4&type=both`);

      return data;
    },
    staleTime: 1000 * 60 * 1, // 1 minute
  });
};
