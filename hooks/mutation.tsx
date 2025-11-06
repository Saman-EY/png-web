import { publicApi } from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export const useLoginUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body: { email: string; password: string }) => {
      const response = await publicApi.post("/auth/login", body);
      return response.data;
    },

    onSuccess: (data) => {
      console.log("✅ Logged in:", data);

      // ✅ Invalidate any user-related queries
      queryClient.invalidateQueries({ queryKey: [""] });

      // ✅ Set token cookie (uncomment if needed)
      Cookies.set("token", data?.access_token, {
        expires: 7,
        secure: true,
        sameSite: "strict",
      });

      // ✅ Redirect user
      window.location.replace("/dashboard");
    },

    onError: (error: any) => {
      console.error("❌ Login failed:", error);
      toast.error("login failed try again");
    },
  });
};

export const useRegisterUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: { name: string; email: string; password: string; password_confirmation: string }) => {
      const response = await publicApi.post("/auth/register", body);
      return response.data;
    },

    onSuccess: (data) => {
      console.log("✅ registered:", data);

      // ✅ Invalidate any user-related queries
      queryClient.invalidateQueries({ queryKey: [""] });

      // ✅ Set token cookie (uncomment if needed)
      Cookies.set("token", data?.access_token, {
        expires: 7,
        secure: true,
        sameSite: "strict",
      });

      // ✅ Redirect user
      window.location.replace("/dashboard");
    },

    onError: (error: any) => {
      console.error("❌ Login failed:", error);
      toast.error("register failed try again");
    },
  });
};
export const useLogutUser = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await publicApi.post("/auth/logout", "");
      return response.data;
    },
    onSuccess: () => {
      // toast.success("ثبت شد");
    },
    onError: (error: any) => {
      console.error("Error creating user:", error);
      if (error.response.data.message) {
        console.log(error.response.data.message);
      }
    },
  });
};
