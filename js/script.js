document.addEventListener("DOMContentLoaded", function(event) { 

	var writeusButton = document.querySelector(".contacts_button");
	var writeusModal = document.querySelector(".writeus");
	var overlay = document.querySelector(".modal_overlay");
	var writeusClose = writeusModal.querySelector(".close");
	var writeusName = writeusModal.querySelector(".writeus_name");
	var writeusEmail = writeusModal.querySelector(".writeus_email");
	var writeusMessage = writeusModal.querySelector(".writeus_message");
	var writeusSubmit = writeusModal.querySelector(".writeus_submit");

	var mapOpen = document.querySelector(".map_open");
	var mapPopup = document.querySelector(".map_popup");
	var mapPopupClose = mapPopup.querySelector(".close");

	//Нажати на картинку карты
	mapOpen.addEventListener("click", function(e){
		e.preventDefault();
		overlay.classList.add("modal_show");
		mapPopup.classList.add("modal_show");
	});

	//Нажатие на крестик на большой карте
	mapPopupClose.addEventListener("click", function(e){
		e.preventDefault();
		mapPopup.classList.remove("modal_show");
		overlay.classList.remove("modal_show");
	});

	// Нажатие на кнопку [Заблудились? Напишите нам]
	writeusButton.addEventListener("click", function(e){
		e.preventDefault();
		overlay.classList.add("modal_show");
		writeusModal.classList.add("modal_show");

		if(localStorage.getItem('name')) {
			writeusName.value = localStorage.getItem('name');
			writeusEmail.focus();
		} else {
			writeusName.focus();
		}
	});


	// Нажати на крести к форме обратной связи
	writeusClose.addEventListener("click", function(e){
		e.preventDefault();
		writeusModal.classList.remove("modal_show");
		overlay.classList.remove("modal_show");
		if(writeusModal.classList.contains("empty_fields_animation")) writeusModal.classList.remove("empty_fields_animation");
		if(writeusName.classList.contains("border_red")) writeusName.classList.remove("border_red");
		if(writeusEmail.classList.contains("border_red")) writeusEmail.classList.remove("border_red");
		if(writeusMessage.classList.contains("border_red")) writeusMessage.classList.remove("border_red");
	});


	//нажатие на overlay
	overlay.addEventListener("click", function(e){
		if(writeusModal.classList.contains("modal_show")) 	writeusModal.classList.remove("modal_show");
		overlay.classList.remove("modal_show");
		if(writeusModal.classList.contains("empty_fields_animation")) writeusModal.classList.remove("empty_fields_animation");
		if(writeusName.classList.contains("border_red")) writeusName.classList.remove("border_red");
		if(writeusEmail.classList.contains("border_red")) writeusEmail.classList.remove("border_red");
		if(writeusMessage.classList.contains("border_red")) writeusMessage.classList.remove("border_red");

		if(mapPopup.classList.contains("modal_show")) mapPopup.classList.remove("modal_show");
	});


	//нажати на клавишу esc
	window.addEventListener("keydown", function(e){
		if(e.keyCode === 27) {
			if(writeusModal.classList.contains("modal_show")) 	writeusModal.classList.remove("modal_show");
			if(overlay.classList.contains("modal_show")) 	overlay.classList.remove("modal_show");
			if(writeusModal.classList.contains("empty_fields_animation")) writeusModal.classList.remove("empty_fields_animation");
			if(writeusName.classList.contains("border_red")) writeusName.classList.remove("border_red");
			if(writeusEmail.classList.contains("border_red")) writeusEmail.classList.remove("border_red");
			if(writeusMessage.classList.contains("border_red")) writeusMessage.classList.remove("border_red");

			if(mapPopup.classList.contains("modal_show")) mapPopup.classList.remove("modal_show");
		}
	});

	//Нажатие [Отправить] в форме обратной связи
	writeusSubmit.addEventListener("click", function(e){
		if(!writeusName.value || !writeusEmail.value || !writeusMessage.value) {
			e.preventDefault();

			if(writeusModal.classList.contains("empty_fields_animation")) writeusModal.classList.remove("empty_fields_animation");
			writeusModal.offsetWidth;
			writeusModal.classList.add("empty_fields_animation");

			if(!writeusName.value) {
				if(writeusName.classList.contains("border_red")) writeusName.classList.remove("border_red");
				writeusModal.offsetWidth;
				writeusName.classList.add("border_red");
			}

			if(!writeusEmail.value) {
				if(writeusEmail.classList.contains("border_red")) writeusEmail.classList.remove("border_red");
				writeusModal.offsetWidth;
				writeusEmail.classList.add("border_red");
			}


			if(!writeusMessage.value) {
				if(writeusMessage.classList.contains("border_red")) writeusMessage.classList.remove("border_red");
				writeusModal.offsetWidth;
				writeusMessage.classList.add("border_red");
			}
		}

		localStorage.setItem('name', writeusName.value);
	});


	writeusName.addEventListener("click", function() {
		if(writeusName.classList.contains("border_red")) writeusName.classList.remove("border_red");
	});

	writeusEmail.addEventListener("click", function() {
		if(writeusEmail.classList.contains("border_red")) writeusEmail.classList.remove("border_red");
	});

	writeusMessage.addEventListener("click", function() {
		if(writeusMessage.classList.contains("border_red")) writeusMessage.classList.remove("border_red");
	});


});
