$(document).ready(function() {
	validate();

	(function() {
		if (!String.prototype.trim) {
			(function() {
				var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function() {
					return this.replace(rtrim, '');
				};
			})();
		}

		[].slice.call( document.querySelectorAll( '.send__input, .blank__input' ) ).forEach( function( inputEl ) {
			if( inputEl.value.trim() !== '' ) {
				classie.add( inputEl.parentNode, 'input--filled' );
			}
			inputEl.addEventListener( 'focus', onInputFocus );
			inputEl.addEventListener( 'focus', addFocusClass );
			inputEl.addEventListener( 'blur', onInputBlur );
			inputEl.addEventListener( 'blur', removeFocusClass );
		} );

		function onInputFocus( ev ) {
			classie.add( ev.target.parentNode, 'input--filled' );
		}
		function addFocusClass( ev ) {
			classie.add( ev.target.parentNode, 'input--focus' );
		}

		function onInputBlur( ev ) {
			if( ev.target.value.trim() === '' ) {
				classie.remove( ev.target.parentNode, 'input--filled' );
			}
		}

		function removeFocusClass( ev ) {
			if( ev.target.value.trim() !== '' || ev.target.value.trim() === '' ) {
				classie.remove( ev.target.parentNode, 'input--focus' );
			}
		}

	})();


	$('.send_tel').formatter({
		'pattern': '+{{9}}({{999}}) {{999}}-{{99}}-{{99}}',
		'persistent': false,
		'placeholder': '___ __ __ __'
	});

	$('.blank_item').formatter({
		'pattern': '{{99999}}',
		'persistent': false,
		'placeholder': '___ __ __ __'
	});

	$('.blank_time').formatter({
		'pattern': '{{99}}-{{99}}-{{9999}}',
		'persistent': false,
		'placeholder': '___ __ __ __'
	});



});//doc ready

function validate() {
	$('.js-validate').each(function(){
		if ($(this).length > 0) {
			$(this).validate({
				errorClass: 'has-error',
				rules: {
					name: {
						minlength: 2,
						required: true
					},
					city: {
						minlength: 2
					},
					// password: {
					// 	minlength: 5
					// },
					// confirm_password: {
					// 	minlength: 5,
					// 	equalTo: '#password'
					// },
					// email: {
					// 	email: true,
					// 	required: true
					// },
					tel: {
						minlength: 17,
						required: true
					},
					// sallerTel: {
					// 	minlength: 17
					// },
					address: {
						minlength: 2
					},
					message: {
						minlength: 4
					},
					date: {
						minlength: 4
					},
					time: {
						minlength: 10
					},
					items: {
						minlength: 1
					},
					sallerName: {
						minlength: 2
					},
					sallerPost: {
						minlength: 2
					},
					square: {
						minlength: 1
					},
					garantUserComment:{
						minlength: 4
					},
					client: {
						required: true
					},
					agree: {
						required: true
					},
					obectYstanovki: {
						required: true
					},
					celZakypki: {
						required: true
					}
				},
				messages: {
					firstname: '* Вас так зовут?',
					lastname: '* У вас такая фамилия?',
					fathername: '* У вас такое отчество?',
					password: {
						required: '* Введите пароль',
						minlength: '* Минимум 5 символов'
					},
					confirm_password: {
						 required: '* Пароли не совпадают',
						 minlength: '* Минимум 5 символов',
						 equalTo: '* Пароли не совпадают'
					},
					// email: 'заполнено некорректно',
					address: '* Это Ваш адрес?',
					any: '* Заполните поле',
					time: 'Заполните поле',
					items: 'Заполните поле',
					company: '* Заполните поле',
					tel: {
						required: 'заполнено некорректно',
						minlength: 'заполнено некорректно'
					},
					name: {
						required: 'заполнено некорректно',
						minlength: 'Минимум 2 символa'
					},
					message: {
						required: '* Заполните поле',
						minlength: 'Заполните поле',
					},
					text_area: {
						required: '* Заполните поле',
						minlength: 'Заполните поле'
					}
				}
			});
		}
	});
}



