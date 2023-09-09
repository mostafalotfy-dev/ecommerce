<?php

namespace App\Mixins;

class LangMixin
{
    const LANG_KEY = 'lang';

    public function get()
    {
        return fn () => factory(self::LANG_KEY)->get();
    }

    public function set()
    {
        return fn ($key, $value, string $default = '') => factory(self::LANG_KEY)->set($key, $value);
    }
}
