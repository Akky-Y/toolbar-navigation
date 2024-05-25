import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function UserMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-full">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/74072948?s=400&u=6595e7b3c4583842a53dc9af3d36da8d58757898&v=4" />
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
          laudantium dolor exercitationem omnis ex dolore! Optio aliquam
          obcaecati eos rerum inventore, minus sed consequuntur unde, suscipit
          vitae nihil placeat debitis reprehenderit, hic laboriosam quasi
          voluptas impedit earum qui harum. Illo, autem commodi culpa qui vero
          amet accusantium labore voluptatem ipsa.
        </p>
      </PopoverContent>
    </Popover>
  );
}
