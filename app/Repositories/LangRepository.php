<?php


namespace App\Repositories;


use App\Comparator\Comparator;
use App\Traits\Singleton;


class  LangRepository extends Repository
{
    use Singleton;

    protected $searchableFields = [
        "key",
        "value",
        "id"
    ];
    protected Comparator $comparator;
    public static $rules = [
        "key" => "required|string|max:255",
        "value" => "requierd|string|max:255"
    ];

    private $data;


    public function __construct()
    {
        $this->comparator = app(Comparator::class);

        $this->data = $this->get();

    }

    function tableName(): string
    {
        return "languages";
    }

    public function key($key)
    {

        if ($this->comparator->isCacheLangEnables())
            $keys = cache()->rememberForever("language", fn() => $this->data);
        else {
            $keys = $this->data;
        }
        return key_exists($key, $keys->pluck("value", "key")->toArray()) ? $keys->pluck("value", "key")[$key] : null;


    }

    public function setKey($key)
    {

        $this->comparator->unless(
            $this->comparator->addLangPermission()
            , fn($repo) => $repo
            ->insert([
                "key" => $key,
            ]));
    }


    public function set($key, $value)
    {

        return $this->comparator->when($this->comparator->addLangPermission() && !$this->exists("key", $key),
            fn() => $this->insert([
                "key" => $key,
                "value" => $value,
                "created_at" => now()
            ]));
    }

    public function updateById($id, $value)
    {
        factory("lang")->where("id", $id)->update([
            "value" => $value,

        ]);
    }

    public function getCompare()
    {
        return $this->comparator;
    }

}
