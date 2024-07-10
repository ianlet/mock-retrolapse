import {AppBar} from "~/components/ui/app-bar/app-bar";

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({children}: PageLayoutProps) {
 return (
   <div className="bg-[url('/images/background-1.jpg')] bg-cover w-full h-full">
     <div className="flex flex-col h-full">
       <AppBar/>

       <main className="h-full overflow-y-auto">
         <div className="container mx-auto p-6">
           {children}
         </div>
       </main>
     </div>
   </div>
 )
}