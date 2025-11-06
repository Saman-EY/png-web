import { api } from "@/api";
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

export const useGetMostViewQry = (params: { limit?: number; period?: string } = {}) => {
  const { limit = 20, period = "week" } = params;

  return useQuery({
    queryKey: ["most-view-list", limit, period], // make it unique for caching
    queryFn: async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/stats/most-viewed`, {
        params: { limit, period },
      });
      return data;
    },
    staleTime: 1000 * 60 * 1, // 1 minute
  });
};
export const useGetMostDownloadedQry = (params: { limit?: number; period?: string } = {}) => {
  const { limit = 20, period = "week" } = params;
  return useQuery({
    queryKey: ["most-download-list", limit, period],
    queryFn: async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/stats/most-downloaded`, {
        params: { limit, period },
      });

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
export const useGetMeQry = () => {
  return useQuery({
    queryKey: ["myData"],
    queryFn: async () => {
      const { data } = await api.get(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/me`);

      return data;
    },
    staleTime: 1000 * 60 * 1, // 1 minute
  });
};
