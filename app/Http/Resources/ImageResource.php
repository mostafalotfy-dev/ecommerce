<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ImageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"=>$this->id,
            "file_name"=>asset("storage/".$this->file_name),
            "alternative_text"=>(string) $this->alt,
            "description"=>(string) $this->description
        ];
    }
}
