<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     *
     */
    protected static ?string $password;
    public function definition(): array
    {
        return [
            "first_name" =>$this->faker->firstName(),
            "middle_name"=>$this->faker->lastName(),
            "last_name"=>$this->faker->lastName(),
            "email"=>$this->faker->email(),
            'password' => static::$password ??= Hash::make('password')
        ];
    }
}
