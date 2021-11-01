///////////////////Categorias//////////////////////////////////////
function autoInicioCategoria(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://129.151.117.213:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
            let $select = $("#select-category");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
            }); 
        }
    
    })

}
function traerInformacionCategorias(){
    $.ajax({
        url:"http://129.151.117.213:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}
function pintarRespuesta(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionCategorias("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarCategoria("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionCategorias(){
    let var2 = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://129.151.117.213:8080/api/Category/save",
       
        success:function(response) {
                console.log(response);
            console.log("La categoria se guardo correctamente");
            alert("La categoria se guardo correctamente");
            window.location.reload()
            },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("La categoria no se guardo ");   
        }
        });

}

function actualizarInformacionCategorias(idElemento){
    let myData={
        id:idElemento,
        name:$("#Cname").val(),
        description:$("#Cdescription").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.117.213:8080/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#Cname").val("");
            $("#Cdescription").val("");
            autoInicioCategoria();
            alert("se ha Actualizado correctamente la categoria")
        }
    });

}

function borrarCategoria(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.117.213:8080/api/Category/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            autoInicioCategoria();
            alert("Se ha Eliminado.")
        }
    });

}

///////////////////Rooms//////////////////////////////////////
function autoInicioRoom(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://129.151.117.213:8080/api/Room/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaRooms(respuesta);
            let $select = $("#select-room");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
            }); 
        }
    
    })

}
function traerInformacionRooms(){
    $.ajax({
        url:"http://129.151.117.213:8080/api/Room/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaRooms(respuesta);
        }
    });
}

function pintarRespuestaRooms(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].stars+"</td>";
        myTable+="<td>"+respuesta[i].hotel+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td>"+respuesta[i].category.name+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionRooms("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarRooms("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionRooms(){
    let var3 = {
        name:$("#Rname").val(),
        stars:$("#Rstars").val(),
        hotel:$("#Rhotel").val(),
        description:$("#Rdescription").val(),
        category: {id:+$("#select-category").val()},
        };
        console.log(var3)
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        
        url:"http://129.151.117.213:8080/api/Room/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("La informacion se guardo correctamente");
            alert("La informacion se guardo ");
            window.location.reload()
            },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("La informacion no se guardo correctamente");  
        }
        });

}

function actualizarInformacionRoom(idElemento){
    let myData={
        id:idElemento,
        name:$("#Rname").val(),
        stars:$("#Rstars").val(),
        hotel:$("#Rhotel").val(),
        description:$("#Rdescription").val(),
        category:$("#select-category").val(),
        
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.117.213:8080/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#Rname").val("");
            $("#Rstars").val("");
            $("#Rhotel").val("");
            $("#Rdescription").val("");
            $("#select-category").val("");
            autoInicioRoom();
            alert("se ha Actualizado correctamente Room")
        }
    });

}

function borrarRooms(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.117.213:8080/api/Room/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            autoInicioRoom();
            alert("Se ha Eliminado.")
        }
    });

}

//////////////////////Clientes//////////////////////////////////

function autoInicioCliente(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://129.151.117.213:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
            let $select = $("#select-client");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
            }); 
        }
    
    })
}
function traerInformacionClientes(){
    $.ajax({
        url:"http://129.151.117.213:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionClientes("+respuesta[i].idClient+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarClientes("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function guardarInformacionClientes(){
    let var4 = {
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
        };
        console.log(var4);
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://129.151.117.213:8080/api/Client/save",
               
        success:function(response) {
                console.log(response);
            console.log("El cliente se guardo correctamente");
            alert("El cliente se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("El cliente no se guardo ");   
        }
        });

}

function actualizarInformacionClientes(idElemento){
    let myData={
        idClient:idElemento,
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
        
        
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.117.213:8080/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idClient").val("");
            $("#CLemail").val("");
            $("#CLpas word").val("");
            $("#CLname").val("");
            $("#CLage").val("");
            autoInicioCliente();
            alert("se ha Actualizado correctamente el cliente")
        }
    });

}

function borrarClientes(idElemento){
    let myData={
        idClient:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.117.213:8080/api/Client/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            autoInicioCliente();
            alert("Se ha Eliminado el cliente.")
        }
    });

}

//////////////////////Mensajes/////////////////////////////////
function autoInicioMensaje(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://129.151.117.213:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
        }
    
    })

}
function traerInformacionMensajes(){
    $.ajax({
        url:"http://129.151.117.213:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensajes(respuesta);
        }
    });
}

function pintarRespuestaMensajes(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="<td>"+respuesta[i].room.name+"</td>";
        myTable+="<td>"+respuesta[i].client.name+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionRooms("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarRooms("+respuesta[i].id+")'>Borrar</button>";
        }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMensajes(){
    let var5 = {
        messageText:$("#MmessageText").val(),
        room: {id:+$("#select-room").val()},
        client: {id:+$("#select-client").val()},
                };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var5),
        
        url:"http://129.151.117.213:8080/api/Message/save",
       
        success:function(response) {
                console.log(response);
            console.log("El mensaje se guardo correctamente");
            alert("El mensaje se guardo correctamente");
            window.location.reload()
            },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("El mensaje no se guardo ");  
        }
        });

}

function actualizarInformacionMensajes(idElemento){
    let myData={
        id:idElemento,
        messageText:$("#MmessageText").val(),
        room: {id:+$("#select-room").val()},
        client: {id:+$("#select-client").val()},
       
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.117.213:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#MmessageText").val("");
            $("#select-room").val("");
            $("#select-client").val("");
            autoInicioMensaje();
            alert("se ha Actualizado correctamente el mensaje")
        }
    });

}

function borrarMensajes(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.117.213:8080/api/Room/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            autoInicioMensaje();
            alert("Se ha Eliminado.")
        }
    });

}
//////////////////////Reservas/////////////////////////////////


function traerInformacionReservas(){
    $.ajax({
        url:"http://localhost:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservas(respuesta);
        }
    });
}

function pintarRespuestaReservas(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].starDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
        myTable+="<td>"+respuesta[i].room.name+"</td>";
        myTable+="<td>"+respuesta[i].client.name+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionRooms("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarRooms("+respuesta[i].id+")'>Borrar</button>";
        }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}

function guardarInformacionReservas(){
    let var6 = {
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
        room: {id:+$("#select-room").val()},
        client: {id:+$("#select-client").val()},
                };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var6),
        
        url:"http://129.151.117.213:8080/api/Reservation/save",       
        
        success:function(response) {
                console.log(response);
            console.log("La reserva se guardo correctamente");
            alert("La reserva se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("La Reserva no se guardo ");
      
        }
        });

function actualizarInformacionmensajes(idElemento)    
        let myData={
            id:idElemento,
            startDate:$("#startDate").val(),
            devolutionDate:$("#devolutionDate").val(),
            status:$("#status").val(),
            room: {id:+$("#select-room").val()},
            client: {id:+$("#select-client").val()},
        };
        console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.117.213:8080/api/Ortopedic/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#startDate").val("");           
            $("#devolutionDate").val("");
            $("#status").val("");
            $("#select-room").val("");
            $("#select-client").val("");
            alert("se ha Actualizado correctamente la reserva")
        }
    });  
    
    function borrarReserva(idElemento){
        let myData={
            id:idElemento
        };
        let dataToSend=JSON.stringify(myData);
        $.ajax({
            url:"http://129.151.117.213:8080/api/Reservation/"+idElemento,
            type:"DELETE",
            data:dataToSend,
            contentType:"application/JSON",
            datatype:"JSON",
            success:function(respuesta){
                $("#resultado").empty();
                autoInicioOrtesis();
                alert("Se ha Eliminado la reserva")
            }
        });
    
    }   



}