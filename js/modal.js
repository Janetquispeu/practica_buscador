$(document).ready(function(){
	var modal_buscador=(function(){
		var st={
			checkbox     : ".check",
			btnTipo			 : ".btn_tipo",
			lista				 : ".lista",
			ruta	       : ".ruta",
			myModal			 : "#myModal",
			btnClose		 : ".btn_close",
			btnBuscar    : ".btn_buscar",
			url          : "https://www.maseducacion.com"
		}
		var dom={}

		var catchDom = function(){
			dom.btnTipo      = $(st.btnTipo);
			dom.checkbox     = $(st.checkbox);
			dom.lista        = $(st.lista);
			dom.ruta				 = $(st.ruta);
			dom.myModal 	 	 = $(st.myModal);
			dom.btnClose     = $(st.btnClose);
			dom.btnBuscar    = $(st.btnBuscar);
		}

		var afterCatchDom = function(){

		}

		var suscribeEvents = function(){
			dom.btnTipo.on("click", events.lista);
			dom.checkbox.on("click", events.mensaje);
			dom.btnClose.on("click", events.cerrar);
			dom.btnBuscar.on("click", events.name);
		}
		var events = {
			lista:function(){
				var $this=$(this);
				var elemento=$this.siblings(st.lista);
				elemento.toggle();
			},
			mensaje: function(){
				dom.ruta.hide();
				dom.myModal.show();	
			},
			cerrar:function(){
				dom.myModal.hide();
			},
			name: function(){
				var rutaTipo   = "";
				var rutaModal  = "";
				var rutaPrice  = "";
				var valueTipo  = [];
				var valueModal = [];
				var valuePrice = [];

				$(".check").each(function(index, element){ 
					var $this = $(element);
					if($this.hasClass('checkbox_tipo')){
						fn.isChecked($this, valueTipo)
					}
					if($this.hasClass('checkbox_modal')){
						fn.isChecked($this, valueModal)
					}
					if($this.hasClass('checkbox_price')){
						fn.isChecked($this, valuePrice)
					}					
				});	

				rutaTipo  = valueTipo.join("--");
				rutaModal = valueModal.join("--");
				rutaPrice = valuePrice.join("--");

				var url = fn.getUrl(rutaTipo, rutaModal, rutaPrice);
				dom.ruta.text(url);
				fn.style();
			}
		}

		var fn = {
			isChecked: function($element, arr){
				if($element.is(':checked')){
			 		arr.push($element.attr("name"));
		    }
			},
			getUrl: function(rutaTipo, rutaModal, rutaPrice){
				var url = st.url;
				if(rutaTipo !== ""){
					url = url + '/' + rutaTipo;
				}
				if(rutaModal !== ""){
					url = url + '/' + rutaModal;
				}
				if(rutaPrice !== ""){
					url = url + "?precio=" + rutaPrice;
				}
				return url;
			},
			style:function(){
				dom.myModal.hide();
			  $(st.ruta).css("display","block");
			}
		}
		
		var initialize=function(){
			catchDom();
			afterCatchDom();
			suscribeEvents();
		}
		return{
			init:initialize
		}
	})();
	modal_buscador.init(); 
});