function Usuario() {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $('#cardbody');
            $.each(data.results, function (i, usuario) {
                var filas =
                    '<div class="col" >'+
                    ' <div class="card">'+
                '<div class="card-img">'+
                    '<img id="Img" src="' + usuario.picture.medium+'" style="width:90px ; height:100px" />'+
                '</div>'+
                    '<span>' + usuario.name.first+" "+ usuario.name.last+'</span>'+
                    '<p class="card-name">' + usuario.location.country+" "+usuario.location.city+'</p>'+
            '</div >'+
                    '</div >';
                $("#cardbody").append(filas);
            });
        }
    });
};

function Limpiar() {
    $('#cardbody').empty();
}