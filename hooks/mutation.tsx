import { publicApi } from "@/api";
import { useMutation } from "@tanstack/react-query";

export const useLoginUser = () => {
  return useMutation({
    mutationFn: async (body: { email: string; password: string }) => {
      const response = await publicApi.post("/auth/login", body);
      return response.data;
    },
    onSuccess: (data) => {
      // queryClient.invalidateQueries({ queryKey: ["users"] });
      // localStorage.setItem("token", data.token);
      //   Cookies.set("token", data.token, {
      //     expires: 7, // 7 days
      //     secure: true, // only https
      //     sameSite: "strict", // CSRF protection
      //   });
      //   navigate("/dashboard");
    },
    // onError: (error: any) => {
    //   console.error("Error creating user:", error);
  });
};

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: async (body: { name: string; email: string; password: string; password_confirmation: string }) => {
      const response = await publicApi.post("/auth/register", body);
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
