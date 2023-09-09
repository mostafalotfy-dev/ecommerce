<?php

namespace App\Console\Commands;

use Illuminate\Console\GeneratorCommand;

/**
 * Summary of MakeRepositoryCommand
 */
class MakeRepositoryCommand extends GeneratorCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:make-repository {name}';

    protected $type = 'class';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    public function getStub()
    {

        $path = str(file_get_contents(base_path('stubs/repository.stub')));
        $className = $this->argument('name');
        $tableName = str($className)->plural();
        $path->replace(
            '{{ className }}', $className)->replace('{{ tableName }}', $tableName);

        return base_path('stubs/repository.stub');

    }

    /**
     * Execute the console command.
     */
    public function handle()
    {
        parent::handle();
        $this->info('success');
    }
}
