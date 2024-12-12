<x-mail::message>
# Your Account Has been Created Successfully

## Dear, {{ $user->first_name }} {{ $user->last_name }} :<br>
Your Account is Created Successfully. <br>
Your Passowrd is : <strong>{{ $password}}</strong> <br>
Please Change Your Password After Login. <br>

<x-mail::button :url="'http://127.0.0.1:8000/login'">
    Login
</x-mail::button>

Thanks,<br>
Student Management System
</x-mail::message>
