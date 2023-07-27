<?php
use App\Repositories\ImageRepository;
use App\Repositories\SettingRepository;
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
function image($name,$path):ImageRepository
{
    return new ImageRepository($name,$path);
}
function lang($key,$value = null,$langPrefix = null)
{
    if(!$langPrefix)
    {
        $langPrefix = app()->getLocale();
        $key = $langPrefix. ".".$key;
    }
    if(!$value)
    {

        return factory("lang")->key($key)->value ??  $key;
    }
    return factory("lang")->set($key, $value);
}
