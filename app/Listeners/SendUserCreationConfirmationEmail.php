<?php

namespace App\Listeners;

use App\Events\UserCreatedSuccessful;
use App\Jobs\SendEmailJob;
use App\Mail\UserCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendUserCreationConfirmationEmail implements ShouldQueue
{


    public function handle(UserCreatedSuccessful $event): void
    {
        $user = $event->user;
        $password = $event->password;

        // Send email to user

        sleep(20);
        Mail::to($user->email)->send(new UserCreated($user, $password));
        // SendEmailJob::dispatch($event->user, $event->password);
    }
}
