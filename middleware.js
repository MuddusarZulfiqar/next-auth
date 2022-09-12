import { NextResponse } from 'next/server';

export function middleware(req) {
    let user = req.cookies.get('user');
    const productionUrl = 'http://localhost:3000';
    // check if the request is for a static asset
    if (req.nextUrl.pathname.startsWith('/_next')) {
        return NextResponse.next();
    }
    // check if request is dashboard and user is not logged in
    // console.log(req.cookies)
    if (req.nextUrl.pathname.startsWith('/dashboard') && !user) {
        return NextResponse.redirect(`${productionUrl}/auth/login`);
    }
    // check if request is login and user is logged in
    if (req.nextUrl.pathname.startsWith('/auth/login') && user) {
        return NextResponse.redirect(`${productionUrl}/dashboard`);
    }
    // check if request is logout and user is logged in
    if (req.nextUrl.pathname.startsWith('/auth/logout') && !user) {
        return NextResponse.redirect(`${productionUrl}/auth/login`);
    }
    // if none of the above, return the request
    return NextResponse.next();
}
