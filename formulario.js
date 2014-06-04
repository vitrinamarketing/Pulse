var $form = $('#formulario'),
	$titulo = $("#titulo"),
	$url = $("#url"),
	$button = $("#mostrar_form"),
	$list = $("#contenido"),
	$post = $(".item").first();

function mostrarFormulario()
{
	//Si esta visible lo oculta y viceversa
	$form.slideToggle();
	//Se puede usar stopBubbling o preventDefault en JS
	//pero en jQ se hacen los dos retornando false
	return false;
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
	$clone.fadeIn();
	//inabilita ir a el url que se ingresa
	return false;
}

//Eventos
$button.click( mostrarFormulario );
$form.on( "submit", agregarPost );