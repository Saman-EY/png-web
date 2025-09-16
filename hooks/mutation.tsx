import { useMutation } from "@tanstack/react-query";

export const useLoginUser = () => {
  return useMutation({
    mutationFn: async (body: { username: string; password: string }) => {
      //   const response = await api.post("/user/login", body);
      //   return response.data;
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

    //   if (error.response.data.message) {
    //     if (error.response.data.message === "Invalid Password") {
    //       alert("رمز عبور اشتباه است");
    //     } else {
    //       alert(error.response.data.message);
    //     }
    //   }
    // },
  });
};
