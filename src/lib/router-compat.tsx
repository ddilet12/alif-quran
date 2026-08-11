/**
 * Small compatibility layer so components written against react-router-dom
 * work on TanStack Router without rewriting every call site.
 */
import {
  Link as TanstackLink,
  useLocation as useTanstackLocation,
  useParams as useTanstackParams,
} from "@tanstack/react-router";
import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
  children?: ReactNode;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, ...props }, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const AnyLink = TanstackLink as any;
    return <AnyLink ref={ref} to={to} {...props} />;
  },
);
Link.displayName = "Link";

export interface NavLinkProps extends LinkProps {
  activeClassName?: string;
  pendingClassName?: string;
}

export const useLocation = () => useTanstackLocation();

export const useParams = (): Record<string, string | undefined> =>
  useTanstackParams({ strict: false }) as Record<string, string | undefined>;
