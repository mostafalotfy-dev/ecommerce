<?php

use App\Factory\AppFactory;

function settings($key, $value = null,$default = "")
{
    $settingsRepository = factory("settings");
    if (!$value) {

        return $settingsRepository->getByKey($value)  ?: $default  ;
    }
    $settingsRepository->updateKey($key,$value);
}

 function factory($name)
{
    $factory = app(AppFactory::class);
    return method_exists($factory ,$name) ? $factory->$name()  : throw new BadMethodCallException("Method With $name Does not Exists");
}
function image($name,$path)
{
    return factory("image")
    ->setImageName($name)
    ->setImagePath($path);
}
function lang($key,$value = null,$langPrefix = null)
{
    if(is_null($langPrefix))
    {
        $langPrefix = app()->getLocale();
        $key = $langPrefix. ".".$key;
    }

        factory("lang")->set($key,$value);

    if(!$value)
    {
        return factory("lang")->key($key) ?? $key ;
    }


}
