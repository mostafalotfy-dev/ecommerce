<?php
use App\Repositories\SettingRepository;


function settings($key, $value = null)
{
    $settingsRepository = app(SettingRepository::class)->where("key", $key);
    if (!$value) {

        return $settingsRepository->first();
    }

    $settingsRepository->update([
        "value" => $value
    ]);


}