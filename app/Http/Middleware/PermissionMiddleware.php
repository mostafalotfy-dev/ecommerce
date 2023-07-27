<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PermissionMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next,$permission): Response
    {
        if(!auth("admin") ){
            abort(403);
        }

        if(auth("admin") && !auth("admin")->user()->roles->where("name_en",$permission)->count() > 1)
        {
            abort(403);
        }
        return $next($request);
    }
}
