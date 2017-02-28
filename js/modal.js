$(document).ready(function(){
	var modal_buscador=(function(){
		var st={
			checkboxTipo : ".checkbox_tipo",
			btnTipo			 : ".btn_tipo",
			lista				 : ".lista"
		}
		var dom={}
		var catchDom=function(){
			dom.btnTipo      = $(st.btnTipo);
			dom.checkboxTipo = $(st.checkboxTipo);
			dom.lista        = $(st.lista);
		}

		var suscribeEvents=function(){
			dom.btnTipo.on("click", events.lista);
			dom.checkboxTipo.on("click",events.mensaje);
		}
		var events={
			lista:function(){
				var $this=$(this);
				var elemento=$this.siblings(st.lista);
				elemento.toggle();
			},
			mensaje: function(){
				var $this=$(this);
				if($this.is(':checked')){
					var val=$this.attr("name");
					var ruta=window.location;
					alert(ruta.href+"/"+val+"/");
				}
			}
		}
		var initialize=function(){
			catchDom();
			suscribeEvents();
		}
		return{
			init:initialize
		}
	})();
	modal_buscador.init(); 
});