<?php

namespace App\Http\Requests;

use App\Repositories\ProductRepository;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
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
     * @return array<string, `ValidationRule|array|string>
     */
    public function rules(): array
    {
        $rules = ProductRepository::$rules;
        $rules['name_en'] = 'required|string|max:255|regex:(^[A-z])';
        $rules['name_ar'] = 'required|string|max:255|regex:(^[ء-ي])';

        return $rules;
    }
}
