var $form = $('#formulario'),
	$titulo = $("#titulo"),
	$url = $("#url"),
	$button = $("#mostrar_form"),
	$list = $("#contenido"),
	$post = $(".item").first();

//si es true hay algo guardado
if(localStorage.getItem('autosave'))
{
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

var id = setInterval( function()
{
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());
}, 1000);


function mostrarFormulario(tito)
{
	//la accion del elemento no la hagas pero ejecuta todo este codigo
	tito.preventDefault();
	tito.stopPropagation();
	//Si esta visible lo oculta y viceversa
	$form.slideToggle();
	$list.slideToggle();
	//Se puede usar stopBubbling o preventDefault en JS
	//pero en jQ se hacen los dos retornando false
}

function agregarPost()
{
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();
	
	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	$clone.hide();
	//enbeber el clone
	$list.prepend($clone);
	mostrarFormulario();
	$titulo.val('');
	$url.val('');
	$clone.fadeIn();
	//inabilita ir a el url que se ingresa
	return false;
}

//Eventos
$button.click( mostrarFormulario );
//asigna un evento 
$form.on( "submit", agregarPost );