<?php

namespace App\Console\Commands;

use App\Models\Admin;
use App\Models\Role;
use Illuminate\Console\Command;

class AdminCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:admin';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create Admin';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Admin::truncate();
        Admin::create([
            'first_name' => 'admin',
            'last_name' => 'developer',
            'phone_number' => '01021408853',
            'email' => 'mostafalotfy285@gmail.com',
            'password' => bcrypt('mostafalotfy285'),
            'role_id' => Role::create([
                'name_en' => 'admin',
                'name_ar' => 'أدمن',

            ])->id,
        ]);
        $this->info('success');
    }
}
