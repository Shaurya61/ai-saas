import { authMiddleware } from "@clerk/nextjs";

// it is used to private the route (for example, when we use stripe i have to private certain features to get used that will be unlocked after purchasing the subscription)

export default authMiddleware({
    publicRoutes: ["/"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
