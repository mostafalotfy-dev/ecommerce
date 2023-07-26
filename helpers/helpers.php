<?php
use App\Repositories\SettingRepository;


function settings($key, $value = null)
{
    $settingsRepository = app(SettingRepository::class);
    if (!$value) {

        return $settingsRepository->getByKey($value);
    }

    $settingsRepository->updateKey($key,$value);


}