"use client";

import { Tweet } from "@/types/tweet";
import { formatRelativeTime } from "@/utils/format-relative";
import { faComment } from "@fortawesome/free-regular-svg-icons/faComment";
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons/faHeartPulse";
import { faRetweet } from "@fortawesome/free-solid-svg-icons/faRetweet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

type TweetItemProps = {
   tweet: Tweet;
   hideComments?: boolean;
};

export const TweetItem = ({ tweet, hideComments }: TweetItemProps) => {
   const [liked, setLiked] = useState(tweet.liked);

   const handleLikeButton = () => {
      setLiked(!liked);
   };

   return (
      <div className="flex gap-2 p-6 border-b-2 border-gray-900">
         <div>
            <Link href={`/${tweet.user.slug}`}>
               <img
                  className="size-10 rounded-full"
                  src={tweet.user.avatar}
                  alt={tweet.user.name}
               />
            </Link>
         </div>
         <div className="flex-1">
            <div className="flex flex-wrap items-center gap-x-3">
               <div className="font-regular text-lg">
                  <Link href={`/${tweet.user.slug}`}>{tweet.user.name}</Link>
               </div>
               <div className="text-xs text-gray-500">
                  @{tweet.user.slug} - {formatRelativeTime(tweet.dataPost)}
               </div>
            </div>
            <div className="py-4 text-lg">{tweet.body}</div>
            {tweet.image && (
               <div className="w-full">
                  <img
                     className="w-full rounded-2xl"
                     src={tweet.image}
                     alt=""
                  />
               </div>
            )}
            <div className="flex mt-6 text-gray-500">
               {!hideComments && (
                  <div className="flex-1">
                     <Link href={`/tweet/${tweet.id}`}>
                        <div className="inline-flex items-center gap-2 cursor-pointer">
                           <FontAwesomeIcon
                              className="size-6"
                              icon={faComment}
                           />
                           <div className="text-lg">{tweet.commentCount}</div>
                        </div>
                     </Link>
                  </div>
               )}
               <div className="flex-1">
                  <div className="inline-flex items-center gap-2 cursor-pointer">
                     <FontAwesomeIcon className="size-6" icon={faRetweet} />
                     <div className="text-lg">{tweet.retweetCount}</div>
                  </div>
               </div>
               <div className="flex-1">
                  <div
                     className={`inline-flex items-center gap-2 cursor-pointer 
                        ${liked && "text-red-400"}`}
                     onClick={handleLikeButton}
                  >
                     <FontAwesomeIcon
                        className="size-6"
                        icon={liked ? faHeartPulse : faHeart}
                     />
                     <div className="text-lg">{tweet.likeCount}</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
