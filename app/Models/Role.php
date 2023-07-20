<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Exceptions\RoleAlreadyExists;
use Spatie\Permission\Exceptions\RoleDoesNotExist;
use Spatie\Permission\Guard;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Permission\Contracts\Role as RoleContract;
class Role extends Model  implements RoleContract
{
    use HasRoles, HasFactory;
    protected $guard_name = "admin";
    public static function create(array $attributes = [])
    {
        $attributes['guard_name'] = $attributes['guard_name'] ?? Guard::getDefaultName(static::class);

       
       
        if (static::where("name_en",$attributes["name_en"])->orWhere("name_ar",$attributes["name_ar"])->count()) {
            throw RoleAlreadyExists::create($attributes['name_en'], $attributes['guard_name']);
        }

        return static::query()->create($attributes);
    }
   
        public static function findByName(string $name, $guardName = null): RoleContract
        {
            $guardName = $guardName ?? Guard::getDefaultName(static::class);
    
            $role = static::findByParam(['name_en' => $name, 'guard_name' => $guardName]);
    
            if (! $role) {
                throw RoleDoesNotExist::named($name);
            }
    
            return $role;
        }
        
    /**
     * Find a role by its id (and optionally guardName).
     *
     * @param  string|null  $guardName
     * @return \Spatie\Permission\Contracts\Role|\Spatie\Permission\Models\Role
     */
    public static function findById(int $id, $guardName = null): RoleContract
    {
        $guardName = $guardName ?? Guard::getDefaultName(static::class);

        $role = static::findByParam([(new static())->getKeyName() => $id, 'guard_name' => $guardName]);

        if (! $role) {
            throw RoleDoesNotExist::withId($id);
        }

        return $role;
    }
    public static function findOrCreate(string $name, $guardName = null): RoleContract
    {
        $guardName = $guardName ?? Guard::getDefaultName(static::class);

        $role = static::findByParam(['name_en' => $name, 'guard_name' => $guardName]);

        if (! $role) {
            return static::query()->create(['name' => $name, 'guard_name' => $guardName] + (PermissionRegistrar::$teams ? [PermissionRegistrar::$teamsKey => getPermissionsTeamId()] : []));
        }

        return $role;
    }
}
