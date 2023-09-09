<?php

namespace App\Repositories;

class ShipmentRepository extends Repository
{
    public function tableName(): string
    {
        return 'shipments';
    }
}
