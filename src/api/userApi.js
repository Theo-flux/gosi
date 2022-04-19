import { JSON_to_URLEncoded } from "../utils/helpers";

export const subscribeApi = async (email) => {
  try {
    const res = await fetch(
      `https://zobomap-dev.azurewebsites.net/v1/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON_to_URLEncoded({ email }),
      }
    );

    const result = await res;

    return result.status === 200
      ? "successful"
      : res.status === 409
      ? "Email is already subscribed"
      : "Something went wrong.";
  } catch (err) {
    return err.detail || "Something went wrong.";
  }
};

export const contactUsApi = async (data) => {
  try {
    const res = await fetch(
      `https://zobomap-dev.azurewebsites.net/v1/contact-us`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON_to_URLEncoded({ ...data }),
      }
    );

    const result = await res;

    return result.status === 200 ? "successful" : "An error occured";
  } catch (err) {
    console.error(err);

    return null;
  }
};
