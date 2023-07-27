<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request,$role, Closure $next): Response
    {
        if(!auth("admin") ){
            abort(403);
        }
        if(auth("admin") && !auth("admin")->roles()->where("name_".app()->getLocale(),$role)->exists())
        {
            abort(403);
        }
        return $next($request);
    }
}
