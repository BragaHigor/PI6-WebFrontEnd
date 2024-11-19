"use client";

import { User } from "@/types/user";
import Link from "next/link";
import { Button } from "./button";
import { useState, useEffect } from "react";
import { axiosInstance } from "@/server/api";

type RecommendationItemProps = {
   userId: string;
};

export const RecommendationItem = ({ userId }: RecommendationItemProps) => {
   const [user, setUser] = useState<User | null>(null);
   const [following, setFollowing] = useState(false);

   useEffect(() => {
      const fetchUser = async () => {
         try{
            const response = await axiosInstance.get(`/user/${sessionStorage.getItem('userSlug')}`, {
               headers: {
                  Authorization: `Bearer ${sessionStorage.getItem('token')}`
               }
            });
            const data = response.data.user;
            if (data) {
               setUser(data);
            }
         } catch (error) {
            console.error("Failed to fetch user", error);
         }
      };

      fetchUser();
   }, [userId]);

   const handleFollowButton = () => {
      setFollowing(true);
   };

   if (!user) {
      return <div>Loading...</div>;
   }

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
            <div className="truncate text-sm text-gray-400">@{user.slug}</div>
         </div>
         <div className="pl-2 w-20">
            {!following && (
               <Button label="Seguir" onClick={handleFollowButton} size={3} />
            )}
         </div>
      </div>
   );
};
