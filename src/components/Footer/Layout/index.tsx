import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu";
  import Link from "next/link";
  import { cn } from "@/lib/utils";
  import React from "react";
  
  interface Props {
    className: string;
    content: string;
    href: string;
  }
  
  const FooterRoutes: React.FC<Props> = ({ className, content, href }) => {
    return (
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), className)}
                >
                  {content}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
      </div>
    );
  };
  
  export default FooterRoutes;
  