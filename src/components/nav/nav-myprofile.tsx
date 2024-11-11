import { user } from "@/data/user";
import Link from "next/link";

export const NavMyProfile = () => {
   return (
      <div className="flex items-center">
         <div className="size-10 mr-2 rounded-full overflow-hidden">
            <Link href={`/${user.slug}`}>
               <img className="size-full" src={user.avatar} alt={user.name} />
            </Link>
         </div>
         <div className="flex-1 overflow-hidden">
            <Link className="block truncate" href={`/${user.slug}`}>
               {user.name}
            </Link>
            <div className="text-sm text-gray-400 truncate">@{user.slug}</div>
         </div>
      </div>
   );
};
