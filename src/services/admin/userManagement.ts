"use server";

import { serverFetch } from "@/lib/server-fetch";
import { revalidateTag } from "next/cache";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllUsers = async (queryString?: string) => {
  try {
    const searchParams = new URLSearchParams(queryString);

    const page = searchParams.get("page") || "1";
    const res = await serverFetch.get(
      `/user?role=USER&${queryString ? `?${queryString}` : ""}`,
      {
        next: {
          tags: ["user-list", `user-page-${page}`],
        },
      },
    );
    return res.json();
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "User Get Failed. Please try again."
      }`,
    };
  }
};

export const updateUserStatue = async (
  id: string,
  _currentState: any,
  formData: any,
) => {
  try {
    const status = formData.get("status");

    const res = await serverFetch.patch(`/user/user-status/${id}`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    const result = await res.json();
    if (result.success) {
      revalidateTag("user-list", { expire: 0 });
    }
    return result;
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "User Status Updated Failed. Please try again."
      }`,
    };
  }
};
