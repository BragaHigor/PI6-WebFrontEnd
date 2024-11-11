import { SearchInput } from "@/components/nav/search-input";
import { TweetItem } from "@/components/tweet/tweet-item";
import { GeneralHeader } from "@/components/ui/general-header";
import { tweet } from "@/data/tweet";
import { redirect } from "next/navigation";

type SearchPageProps = {
   searchParams: {
      q: string | undefined;
   };
};

export default function SearchPage({ searchParams }: SearchPageProps) {
   if (!searchParams.q) redirect("/");

   return (
      <div>
         <GeneralHeader backHref="/">
            <SearchInput defaultValue={searchParams.q} />
         </GeneralHeader>
         <div className="border-t-2 border-gray-900">
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
         </div>
      </div>
   );
}
