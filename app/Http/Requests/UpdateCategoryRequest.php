<?php

namespace App\Http\Requests;

use App\Repositories\CategoryRepository;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateCategoryRequest extends FormRequest
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
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        $rules = CategoryRepository::$rules;
        $rules['name_en'] = 'required|regex:(^[A-z])';
        $rules['name_ar'] = 'required|regex:(^[ي-ء])';

        return $rules;
    }
}
