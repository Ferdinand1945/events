import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
    '/sign-in(.*)', 
    '/sign-up(.*)', 
    '/(.*)',
    '/events/:id(.*)',
    '/api/webhook/clerk(.*)',
    '/api/webhook/stripe(.*)',
    '/api/uploadthing(.*)',
    '/api/uploadthing',])

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect()
  }
})