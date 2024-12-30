import { appendUserList, fetchUserList, removeUsersElement } from "./user";
import { getElementById } from "./utils/dom";

const userButton = getElementById("button-user");

userButton.addEventListener("click", async () => {
  // APIkからユーザー情報の取得
  const users = await fetchUserList();
  // ユーザー情報の表示
  removeUsersElement();
  appendUserList(users);
});
