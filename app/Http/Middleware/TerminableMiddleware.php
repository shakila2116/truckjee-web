<?php

namespace App\Http\Middleware;

use Closure;

class TerminableMiddleware
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        // Perform action

        return $response;
    }

    public function terminate($request,$response){
       // return $response;
    }
}