<b>Здравствуйте, {{$mail_data['name']}}!!</b>  <br>
Вы запросили смену пароля: <br><br>
<a href="http://127.0.0.1:8000/registration/{{$mail_data['verification_code']}}">Сбросить пароль</a>
<br><br>
Если вы этого не делали, то удалите это сообщение!