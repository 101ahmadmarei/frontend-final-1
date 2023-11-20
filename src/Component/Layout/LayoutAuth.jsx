import React from 'react'
import { Cookies, useCookies } from 'react-cookie';
import { Outlet, redirect } from 'react-router'


export function authLoader() {
    // const [cookies, setCookie,removeCookie] = useCookies(["token"]);
    const cookies = new Cookies();

    if(!cookies.get('token')){
        return redirect('/login')
    }

    return null
}

export function LayoutAuth() {
        return (
            <Outlet/>
          )
}