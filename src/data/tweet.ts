import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
   id: 123,
   user: user,
   body: "Tomara que eu consiga matar o Sukuna hoje",
   image: "https://static.minhtuanmobile.com/uploads/editer/images/2024/04/moi-quan-he-that-su-giua-sukuna-va-yuji-2.webp",
   likeCount: 523,
   commentCount: 61,
   retweetCount: 0,
   liked: true,
   retweeted: false,
   dataPost: new Date(2024, 8, 1, 10, 0, 0),
};
