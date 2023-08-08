<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AjaxLocalizeMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        if($request->ajax())
        {
            $lang_header = str($request->header("Accept-Language"));
            if($lang_header->startsWith("en"))
                app()->setLocale("en");
            elseif ($lang_header->startsWith("ar"))
                app()->setLocale("ar");
        }

        return $next($request);
    }
}
