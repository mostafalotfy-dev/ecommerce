<?php
use App\Repositories\ImageRepository;
use App\Repositories\SettingRepository;
use App\Factory\AppFactory;

function settings($key, $value = null)
{
    $settingsRepository = app(SettingRepository::class);
    if (!$value) {

        return $settingsRepository->getByKey($value);
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
    return new ImageRepository($name,$path);
}