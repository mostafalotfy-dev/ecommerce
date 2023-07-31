<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateRoleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "name_ar" => "required|string|max:255|unique:roles,name_ar",
            "name_en"=>"required|string|max:255|unique:roles,name_en",
            "permissions"=>"required|array",
            "admin_id"=>"required|exists:admins,id"
        ];
    }
}
