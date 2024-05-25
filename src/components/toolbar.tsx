import ToolbarButton from "@/components/toolbar-button";
import UserMenu from "@/components/user-menu";
import { Home, Music, Settings } from "lucide-react";

export default function Toolbar() {
  return (
    <div className="fixed bottom-14 left-1/2 -translate-x-1/2 flex gap-2 items-center border border-border/20 shadow-lg backdrop-blur rounded-full p-2 bg-muted/30">
      <UserMenu />
      <ToolbarButton href="/" title="トップ" icon={<Home />} />
      <ToolbarButton href="/music" title="音楽" icon={<Music />} />
      <ToolbarButton href="/settings" title="設定" icon={<Settings />} />
    </div>
  );
}
