"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function submitContactAction(formData: FormData) {
  const data = {
    name: formData.get("name"),
    contactNumber: formData.get("contactNumber"),
    email: formData.get("email"),
    message: formData.get("message"),
  };
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
      console.log("resolving");
    }, 3000);
  });

  console.log(data);

  //   redirect("/");
}
