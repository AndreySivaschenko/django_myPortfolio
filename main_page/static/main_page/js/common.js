$("#send").click(function(){
	var email = $('#email').val();
	var name = $("#name").val();
	var message = $('#message').val();
	$.ajax({
		url: "submit.php",
		type: "POST",
		cache: false,
		data: {"name":name, "email":email,"message":message},
		dataType: "html",
		beforeSend:function(){
			$("#send").attr('disabled',"disabled");
		},
		success:function(data){
			if(data == true){
				$("#name").val ("");
				$("#email").val("");
				$("#message").val("");
				$("#send").text("Cообщение отправленно!");
				$("#email").css("border-bottom-color", "#60fc8c");
				$("#name").css("border-bottom-color", "#60fc8c");
				$("#message").css("border-bottom-color", "#60fc8c");
			} else{
				if(data == false)
					alert("Что-то пошло не так! Сообщение не отправлено");
				else{
					switch(data){
						case "Имя не указано":
						$("#name").css("border-bottom-color", "#f7b4b4");
						break;
						case "Сообщение не указано":
						$("#message").css("border-bottom-color", "#f7b4b4");
						break;
						$("#email").css("border-bottom-color","#f7b4b4");
						break;
						default:
						$("#name").css("border-bottom-color", "#f7b4b4");
						$("#message").css("border-bottom-color", "#f7b4b4");
						$("#email").css("border-bottom-color","#f7b4b4");
					}
				}
			}
			$("#send").removeAttr("disabled");
		}
	});
});


KП303А - 5
Tl072 - 3
Резисторы
1k8 - 5
3к3 - 10
3k9 - 5
10к - 5
18к - 3
22к - 5
27к - 5
47к -5
68к - 5
100к - 3
220k - 5
330k - 5
470к - 5
1M - 2
2M2 - 3
100R - 2
Резистор подстроечный - 100к (3362R, 3323P) - 4
Электолит 
1uf - 2
10uf - 2
100uf - 2
220uf - 2
Металл(керам.)
1n - 3
1n5 - 1
2n2 - 3
10n - 2
22n -3 
4n7 - 1
47n - 3
100n - 2
220n - 2
22p - 1
220p - 4
100p -1
470p - 1
1uf - 4


Всю жизнь меня 
Преследуют лишь 
Черные полосы.


ты никому не нужен,
а нужен лишь тогда,
когда от тебя что-то надо.
Никто не вспомнит про тебя,
пока не сможешь ты им помочь.
Я видел многих таких людей,
И всем нужно от меня что-то.
Не нужны и вы мне. 
Я справлюсь сам.
А такие "Друзья" пусть 
Идут лесом. 

Я справлюсь, и здесь точка.
Все пробемы я решу.
