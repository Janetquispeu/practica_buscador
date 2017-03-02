$(document).ready(function () {
	var modal_search = (function () {
		var st = {
			checkbox     : ".check",
			btnType			 : ".btn_tipo",
			list				 : ".lista",
			ruta	       : ".ruta",
			myModal			 : "#myModal",
			btnClose		 : ".btn_close",
			btnSearch    : ".btn_buscar",
			url          : "https://www.maseducacion.com",
		}
		var dom={}

		var catchDom = function () {
			dom.btnType      = $(st.btnType);
			dom.checkbox     = $(st.checkbox);
			dom.list         = $(st.list);
			dom.ruta				 = $(st.ruta);
			dom.myModal 	 	 = $(st.myModal);
			dom.btnClose     = $(st.btnClose);
			dom.btnSearch    = $(st.btnSearch);
		}

		var suscribeEvents = function () {
			dom.btnType.on("click", events.list);
			dom.checkbox.on("click", events.message);
			dom.btnClose.on("click", events.close);
			dom.btnSearch.on("click", events.name);
		}

		var events = {
			list : function () {
				var $this    = $(this);
				var elemento = $this.siblings(st.list);
				elemento.toggle();
			},

			message : function () {
				dom.ruta.hide();
				dom.myModal.show();	
			},

			close : function () {
				dom.myModal.hide();
			},

			name: function () {
				var rutaType   = "";
				var rutaModal  = "";
				var rutaPrice  = "";
				var valueType  = [];
				var valueModal = [];
				var valuePrice = [];

				$(".check").each(function(index, element){ 
					var $this = $(element);
					if($this.hasClass('checkbox_tipo')){
						fn.isChecked($this, valueType)
					}

					if($this.hasClass('checkbox_modal')){
						fn.isChecked($this, valueModal)
					}

					if($this.hasClass('checkbox_price')){
						fn.isChecked($this, valuePrice)
					}	

				});	

				rutaType  = valueType.join("--");
				rutaModal = valueModal.join("--");
				rutaPrice = valuePrice.join("--");

				var url = fn.getUrl(rutaType, rutaModal, rutaPrice);
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

			getUrl: function(rutaType, rutaModal, rutaPrice){
				var url = st.url;
				if(rutaType !== ""){
				  url = url + '/' + rutaType;
				}
				if(rutaModal !== ""){
					url = url + '/' + rutaModal;
				}
				if(rutaPrice !== ""){
					url = url + "?precio=" + rutaPrice;
				}
				return url;
			},

			style:function () {
				dom.myModal.hide();
			  $(st.ruta).css("display","block");
			}

		}
		
		var initialize = function () {
			catchDom();
			suscribeEvents();
		}

		return{
			init:initialize
		}

	})();
	modal_search.init(); 
});