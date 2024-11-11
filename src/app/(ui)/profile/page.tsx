import { user } from "@/data/user";
import { redirect } from "next/navigation";

export default function ProfilePage() {
   redirect("/" + user.slug);

   return null;
}
