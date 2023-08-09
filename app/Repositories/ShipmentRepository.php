<?php

namespace  App\Repositories;


class ShipmentRepository extends Repository
{

    /**
     * @return string
     */
    function tableName(): string
    {
        return "shipments";
    }
}
