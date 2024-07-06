import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define the public routes
const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)']);

// Define the protected routes
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // Match all routes except static files and _next
    '/',                      // Home page route (public)
    '/dashboard(.*)',         // Dashboard route (protected)
    '/(api|trpc)(.*)'         // API routes (you can decide to protect these as well if needed)
  ],
};
