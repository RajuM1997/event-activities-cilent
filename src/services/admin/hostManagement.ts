"use server";

import { serverFetch } from "@/lib/server-fetch";
import { revalidateTag } from "next/cache";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getHosts = async (queryString?: string) => {
  try {
    const searchParams = new URLSearchParams(queryString);
    const page = searchParams.get("page") || "1";

    const res = await serverFetch.get(
      `/user?role=HOST&${queryString ? `?${queryString}` : ""}`,
      {
        next: {
          tags: ["host-list", `user-page-${page}`],
        },
      },
    );

    const result = await res.json();

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
          : "Event Create Failed. Please try again."
      }`,
    };
  }
};

export const updateHostStatue = async (
  id: string,
  _currentState: any,
  formData: any,
) => {
  try {
    const status = formData.get("status");

    const res = await serverFetch.patch(`/user/host-status/${id}`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    const result = await res.json();
    if (result.success) {
      revalidateTag("host-list", { expire: 0 });
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
          : "Host Status Updated Failed. Please try again."
      }`,
    };
  }
};
