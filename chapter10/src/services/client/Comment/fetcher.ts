import * as ApiComment from "@/pages/api/comments";
import { defaultHeaders, handleResolve, host } from "..";
import { Input } from "./type";

export const path = () => host(`/comments`);

export async function getComments({ postId }: { postId: number }): Promise<ApiComment.GetReturn> {
  return fetch(`${path()}?postId=${postId}`, {
    method: "GET",
    headers: defaultHeaders,
  }).then(handleResolve);
}

export async function postComment({ postId, content }: Input): Promise<ApiComment.PostReturn> {
  return fetch(path(), {
    method: "POST",
    body: JSON.stringify({ postId, content }),
    headers: defaultHeaders,
  }).then(handleResolve);
}



