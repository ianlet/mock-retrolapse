import {IconButton} from "~/components/ui/button/icon-button";

interface AppBarProps {
}

export function AppBar({}: AppBarProps) {
  return (
    <header className="w-full h-16 text-on-background">
      <div className="container mx-auto w-full h-full flex flex-row items-center px-4">
        <h1 className="font-semibold tracking-wide text-2xl uppercase">Retrolapse</h1>

        <div className="flex-grow"/>

        <IconButton>
         {/* @ts-expect-error CDN imported */}
          <ion-icon name="settings" class="size-6"/>
        </IconButton>
      </div>
    </header>
  );
}