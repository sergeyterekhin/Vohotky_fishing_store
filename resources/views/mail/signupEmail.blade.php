<b>Здравствуйте, {{$mail_data['name']}}!!</b> <br>
Пожалуйста, подтвердите регистрацию на сайте Вохотку: <br><br>
<a href="http://127.0.0.1:8000/registration/{{$mail_data['verification_code']}}">Подтвердить регистрацию</a>
<br><br>
Если вы этого не делали, то удалите это сообщение!