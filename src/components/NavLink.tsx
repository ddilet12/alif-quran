import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Link, type NavLinkProps } from "@/lib/router-compat";
import { useLocation } from "@tanstack/react-router";

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, to, ...props }, ref) => {
    const { pathname } = useLocation();
    const isActive = pathname === to;

    return (
      <Link
        ref={ref}
        to={to}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
