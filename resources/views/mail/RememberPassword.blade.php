<b>Здравствуйте, {{$mail_data['name']}}!!</b>  <br>
Вы запросили смену пароля: <br><br>
<a href="{{$mail_data['url']}}/registration/{{$mail_data['verification_code']}}">Сбросить пароль</a>
<br><br>
Если вы этого не делали, то удалите это сообщение!