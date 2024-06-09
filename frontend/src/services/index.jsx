import { BaseUrl } from "../utils/endpoints";

export async function getFormDetails() {
  const response = await fetch(BaseUrl);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
