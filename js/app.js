Vue.component("mi-form", {
  data: function () {
    return {
      nombre: null,
      mail: null,
      telefono: null,
      fNacimiento: null,
      genero: null,
      tipoReloj: null,
      frecCompra: null,
      factCompra: null,
      canalCompra: null,
      probRecom: null,

      campos: {
        nombre: {
          esValido: null,
          mensaje: "EL nombre es obligatorio.",
        },
        mail: {
          esValido: null,
          mensaje: "El mail es obligatorio",
        },
        telefono: {
          esValido: null,
          mensaje: "El telefono es obligatorio",
        },
        fNacimiento: {
          esValido: null,
          mensaje: "El fecha nacimiento es obligatorio",
        },
        genero: {
          esValido: null,
          mensaje: "El campo genero es obligatorio",
        },
        tipoReloj: {
          esValido: null,
          mensaje: "El campo tipo de reloj es obligatorio",
        },
        frecCompra: {
          esValido: null,
          mensaje: "El campo frecuencia de compra es obligatorio",
        },
        factCompra: {
          esValido: null,
          mensaje: "El campo factor de compra es obligatorio",
        },
        canalCompra: {
          esValido: null,
          mensaje: "El campo canal de compra es obligatorio",
        },
        probRecom: {
          esValido: null,
          mensaje: "El campo probabilidad de compra es obligatorio",
        },
      },

      dCliente: {},
      // errores: [],
      enviado: false,
    };
  },
  computed: {
    hayErrores: function () {
      console.log(
        "hayErrores",
        !this.campos.nombre.esValido,
        !this.campos.mail.esValido,
        !this.campos.fNacimiento.esValido,
        !this.campos.telefono.esValido,
        !this.campos.genero.esValido,
        !this.campos.tipoReloj.esValido,
        !this.campos.frecCompra.esValido,
        !this.campos.factCompra.esValido,
        !this.campos.canalCompra.esValido,
        !this.campos.probRecom.esValido
      );
      return (
        !this.campos.nombre.esValido ||
        !this.campos.mail.esValido ||
        !this.campos.fNacimiento.esValido ||
        !this.campos.telefono.esValido ||
        !this.campos.genero.esValido ||
        !this.campos.tipoReloj.esValido ||
        !this.campos.frecCompra.esValido ||
        !this.campos.factCompra.esValido ||
        !this.campos.canalCompra.esValido ||
        !this.campos.probRecom.esValido
      );
    },
  },
  template: `
<section class="container p-3">
<div class="text-center">
                    <h3>??Participa de la encuesta!</h3>
                    <p class="h4 py-3">Si queres obtener un <b> 20% de descuento en tu proxima compra</b>, partcipa de la encuesta y automaticamente te enviaremos el codigo de descuento</p>
                </div>

                <div id="soporte" class="row justify-content-around" novalidate>
                  <form v-on:submit.prevent="enviar"  class="encuesta col-11 col-md-7 p-3 p-lg-5" novalidate>

                   <div class="form-row">

                            <div class="col-12 my-3">
                                <label for="nombre">Nombre</label>
                                <input v-on:blur="validacion('nombre')" :class="campos.nombre.esValido != null ? campos.nombre.esValido ? 'verde':'rojo': ''"    v-model="nombre" class="form-control" type="text" name="nombre" id="nombre">
                            </div>
                            <div class="col-12 my-3">
                                <label for="correo">Email</label>
                              <input v-on:blur="validacion('mail')" :class="campos.mail.esValido != null ? campos.mail.esValido ? 'verde':'rojo': ''" class="form-control " v-model="mail" type="email" name="correo" id="correo" >
                            </div>
                            <div class="col-md-6 my-3">
                                <label for="tel">T??lefono</label>
                                <input v-on:blur="validacion('telefono')" :class="campos.telefono.esValido != null ? campos.telefono.esValido ? 'verde':'rojo': ''"  v-model.number="telefono" class="form-control" type="tel" name="telefono" id="tel">
                            </div>
                            <div class="col-md-6 my-3">
                                <label for="fNacimiento">Fecha de Nacimiento</label>
                                <input v-on:blur="validacion('fNacimiento')" :class="campos.fNacimiento.esValido != null ? campos.fNacimiento.esValido ? 'verde':'rojo': ''"  v-model="fNacimiento"  class="form-control" type="date" name="fNacimiento" id="fNacimiento">
                            </div>
                            <div class="col-md-6 my-3">
                                <label for="genero">Genero</label>
                                <select v-on:blur="validacion('genero')" :class="campos.genero.esValido != null ? campos.genero.esValido ? 'verde':'rojo': ''"  v-model="genero" class="custom-select" id="genero">
                                    <option selected disabled value="nada">Elegir opci??n</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="femenino">Femenino</option>
                                    <option value="otros">Otros</option>
                                </select>
                            </div>
                            <div class="col-md-6 my-3">
                                <label for="t-reloj">Tipo de reloj</label>
                                <select v-on:blur="validacion('tipoReloj')" :class="campos.tipoReloj.esValido != null ? campos.tipoReloj.esValido ? 'verde':'rojo': ''"  v-model="tipoReloj" class="custom-select" id="t-reloj">
                                    <option selected disabled value="nada">Elegir opci??n</option>
                                    <option value="digital">Digital</option>
                                    <option value="analogo">Analogico</option>
                                    <option value="deportivo">Deportivo</option>
                                </select>
                            </div>
                            <div class="col-md-6 my-3">
                                <label for="frecuenciaC">Frecuencia de compra</label>
                                <select v-on:blur="validacion('frecCompra')" :class="campos.frecCompra.esValido != null ? campos.frecCompra.esValido ? 'verde':'rojo': ''" v-model="frecCompra" class="custom-select" id="frecuenciaC">
                                    <option selected disabled value="nada">Elegir opci??n</option>
                                    <option value="una ves al mes">Una vez al mes.</option>
                                    <option value="dos veces al mes">Dos veces al mes.</option>
                                    <option value="una vez al a??o">Una vez al a??o</option>
                                    <option value="nunca">Casi nunca.</option>
                                </select>
                            </div>
                            <div class="col-md-6 my-3">
                                <label for="factCompra">Factor de compra</label>
                                <select v-on:blur="validacion('factCompra')" :class="campos.factCompra.esValido != null ? campos.factCompra.esValido ? 'verde':'rojo': ''" v-model="factCompra" class="custom-select" id="factCompra">
                                    <option selected disabled value="nada">Elegir opci??n</option>
                                    <option value="descuentos">Descuentos</option>
                                    <option value="promociones">Promociones</option>
                                    <option value="calidad">Calidad</option>
                                    <option value="marca">Marca</option>
                                    <option value="procedencia">Procedencia</option>
                                    <option value="modelo">Modelo</option>
                                </select>
                            </div>
                            <div class="col-md-6 my-3">
                                <label for="canalCompra">Canal de compra</label>
                                <select v-on:blur="validacion('canalCompra')" :class="campos.canalCompra.esValido != null ? campos.canalCompra.esValido ? 'verde':'rojo': ''" v-model="canalCompra" class="custom-select" id="canalCompra">
                                    <option selected disabled value="nada">Elegir opci??n</option>
                                    <option value="internet">Internet</option>
                                    <option value="tienda">Tienda</option>
                                    <option value="free shop">Free shop</option>
                                    <option value="exterior">Compra en el exterio</option>
                                </select>
                            </div>
                            <div class="col-md-6 my-3">
                                <label for="provRecomend">Probabilidad</label>
                                <select v-on:blur="validacion('probRecom')" :class="campos.probRecom.esValido != null ? campos.probRecom.esValido ? 'verde':'rojo': ''" v-model="probRecom" class="custom-select" id="provRecomend" required>
                                    <option selected disabled value="nada">Elegir opci??n</option>
                                    <option value="muy probable">Muy probable.</option>
                                    <option value="poco probabe">Poco probable.</option>
                                    <option value="nada probable">Nada probable.</option>

                                </select>
                            </div>
                            <div class="col-12 mx-auto mt-3">
                              <button  class="btn btn-block btn-enviar" type="submit" value="enviar">Enviar</button>
                          </div>
                        </div>
                        </form>
                      
                  <div class="datos-env col-12 col-md-5 p-3 p-lg-5 d-flex align-items-center justify-content-center">
                    <div class="row">
                      <div class="col-12 p-5 text-center" v-if="enviado === true">
                        <div v-if="hayErrores" class="classerror">
                          <ul class="list-unstyled">
                            <li v-for="x in campos" :key="x.mensaje" v-if="!x.esValido">
                              {{x.mensaje}}
                            </li>
                            </ul>
                        </div>
                        <div v-else-if="enviado" class="enviado">
                          <span class="h3">Encuesta enviada</span>
                          <p class="py-2">Esperamos verte pronto en nuestra tienda.<br>
                          ??Gracias!</p>
                        </div>
                      </div>                        
                      <div class="col-12" v-if="!hayErrores && enviado" >
                        <h4 class="h5">Datos enviados</h4>
                        <ul class="">
                          <li class="py-1">{{this.dCliente.nombre | capitalize }}</li>
                          <li class="py-1">{{this.dCliente.mail}}</li>
                          <li class="py-1">{{this.dCliente.telefono}}</li>
                         
                          <li class="py-1">{{this.dCliente.fNacimiento}}</li>
                        
                          <li class="py-1">{{this.dCliente.genero | capitalize({ onlyFirstLetter: true }) }}</li>
               
                          <li class="py-1">{{this.dCliente.tipoReloj | capitalize({ onlyFirstLetter: true }) }}</li>
                
                          <li class="py-1">{{this.dCliente.frecCompra | capitalize({ onlyFirstLetter: true }) }}</li>
                 
                          <li class="py-1">{{this.dCliente.factCompra | capitalize({ onlyFirstLetter: true }) }}</li>
                   
                          <li class="py-1">{{this.dCliente.canalCompra | capitalize({ onlyFirstLetter: true }) }}</li>
                     
                          <li class="py-1">{{this.dCliente.probRecom | capitalize({ onlyFirstLetter: true }) }}</li>
                      
                          
                          
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
            </section>


`,

  methods: {
    enviar: function (e) {
      console.log(e); //evento del submit
      // this.errores = [];
      //validacion
      this.validacion("nombre");
      this.validacion("mail");
      this.validacion("telefono");
      this.validacion("nombre");
      this.validacion("mail");
      this.validacion("fNacimiento");
      this.validacion("genero");
      this.validacion("tipoReloj");
      this.validacion("frecCompra");
      this.validacion("factCompra");
      this.validacion("canalCompra");
      this.validacion("probRecom");

      // console.log(this.errores)

      this.enviado = true; //queremos evaluar que los mensajes se muestren solo cuando se ejecute la funcion

      if (!this.hayErrores) {
        if (!localStorage.datoCliente) {
          this.dCliente = {};
          // console.log(this.dCliente);
        } else {
          // console.log(this.dCliente);
          this.dCliente = JSON.parse(localStorage.getItem("datoCliente"));
        }

        this.dCliente = {
          nombre: this.nombre,
          mail: this.mail,
          telefono: this.telefono,
          fNacimiento: this.fNacimiento,
          genero: this.genero,
          tipoReloj: this.tipoReloj,
          frecCompra: this.frecCompra,
          factCompra: this.factCompra,
          canalCompra: this.canalCompra,
          probRecom: this.probRecom,
        };
        // console.log('dCliente', this.dCliente)
        localStorage.setItem("datoCliente", JSON.stringify(this.dCliente));
      }
    },
    /**
     *
     */
    validacionEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validacion: function (campo) {
      if (campo == "mail") {
        this.campos.mail.esValido = this.validacionEmail(this.mail);
      } else {
        console.log("validar", campo, this.campos[campo]);
        if (!this[campo]) {
          this.campos[campo].esValido = false;

          // this.errores.push(this.campos[campo].mensaje);
        } else {
          this.campos[campo].esValido = true;
        }
      }
    },
  },

  mounted: function () {
    this.dCliente = JSON.parse(localStorage.getItem("datoCliente")) || [];
  },
});

Vue.component("mis-productos", {
  props: [
    "imagen",
    "alt",
    "nombre",
    "precio",
    "id",
    "descripcion",
    "caracteristicas",
  ],
  methods: {
    select() {
      // reversion mas limpia usando el atajo this._props que le envia los datos
      console.log(this._props);
      let prod = this._props;
      this.$emit("selectprod", prod);
    },
    cartAgr() {
      prod = this._props;
      this.$emit("agr-cart", prod);
    },
  },

  template: `         
            
            <a v-on:click="select" class="btn cardi tarjeta col-8 col-md-4 col-lg-3 my-3 mx-4 p-0  bg-white shadow">
             
              <article class="d-flex flex-column-reverse">
             
                <div class="col-12 bd-highlight texto-card p-2 text-center h-100 d-inline-block">
                  <h3>{{nombre}}</h3>
                  <span class="precio d-block py-2">$\n{{ precio }}</span>
                  
                  <div class="col-12 divAgrCart">
                  <a class="btn btnCart" @click="cartAgr">Agregar al Carrito</a>
                 </div>
                </div>
                <div class="col-12 bd-highlight pb-2 text-center">
                  <img v-bind:src="imagen" v-bind:alt="alt">
                </div>
                
                
              </article>
            </a>`,
});

Vue.component("modal-prod", {
  props: ["imagen", "alt", "nombre", "precio", "id", "descripcion", "caract"],
  methods: {
    closemodal() {
      this.$emit("closemodal");
    },
  },
  template: `
    <div  class="modal position-fixed d-flex justify-content-center flex-column align-middle" tabindex="-1">
      <div class="modal-dialog modal-dialog-scrollable modal-lg bg-white rounded overflow-auto" >
        <div class="row p-3 m-0 justify-content-around">
          <div class="col-12 d-flex justify-content-end">
            <a class="btn btnCerrar rounded-circle" v-on:click.prevent="closemodal">X</a>
          </div>
          <div class="col-9 col-md-6 text-center">
            <img   v-bind:src="imagen" v-bind:alt="alt" data-target="#modal" data-toggle="modal">
          </div>
          <div class="contxt col-12 col-md-6">
            <h3> {{nombre}}</h3>
            <p class="h2">$\n{{precio}}</span></p>
            <ul>
              <li v-for="caractr in caract" >
                {{caractr}}
              </li>
            </ul>
           
          </div>
           <div class="descrit-prod col-12 order-4 order-lg-4 text-lg-left p-4">
            <h4 class="h4">Descripci??n</h4>
            <p class="pt-3" v-html="descripcion"></p>
            </div>            
        </div>
      </div>
    </div>

	`,
});

// Vue.component("mi-carrito", {});

// Vue.component("mtd-pago", {});

var app = new Vue({
  el: ".contenedor",
  data: {
    modal: false,
    modalData: {},

    carrito: {
      idProd: [],
      cant: [],
      preTotal: null,
    },

    productos: [
      {
        prod_id: 1,
        destacado: true,
        categoria: "Comic",
        marca: "marvel",
        nombre: "avengers la guerra de los reinos",
        imagen: "res/img/advenger.png",
        alt: "avengers la guerra de los reinos",
        descripcion:"??Qui??n necesita a los Avengers cuando tienes al nuevo escuadr??n supremo de Am??rica? Cuando la Guerra de los Reinos llega a la capital de la naci??n, los h??roes m??s grandes de Washington, D.C., ??entran en acci??n! ??Pero qui??nes son y de d??nde vienen? ??Solo el Agente Coulson lo sabe! Mientras tanto, la Monta??a Avenger es asediada por las fuerzas de Malekith, y en la batalla final por Midgard, ??la Capitana Marvel lidera a los Avengers de la Guerra! ??Hulk lucha contra Ulik.<br/>??Blade se enfrenta a los supersoldados de Roxxon! ??y Dardevil, el Dios sin miedo, tiene un mensaje cr??ptico que decidir?? el futuro del equipo!. Luego despu??s de la guerra, los h??roes m??s poderosos de la Tierra buscan celebrar. Hay una fiesta en la Monta??a Avenger, pero, ??d??nde est?? Pantera Negra?",
        caracteristicas: [
          
          "Editorial: PANINI MARVEL ARGENTINA",
          "Colecci??n: AVENGERS",
          "ISBN: 9786075684116",
          "P??ginas: 104",
          "Encuadernaci??n: RUSTICA",
          "Fecha de edici??n: 21/05/2021",
          "Idioma: Espa??ol",

        ],
        precio:630.00,
      },
      {
        prod_id: 2,
        destacado: true,
        categoria: "comic",
        marca: "DC",
        
        nombre: "Batman Aniversario",
        imagen: "res/img/bataman.png",
        alt: "Comic Batman Aniversario",
        descripcion:
          "Durante a??os ha sido el Caballero Oscuro de Gotham City,vigilando laciudaddesdelassombras,erradicandosumaldad.Invencible,inviolable, nunca ha sido corrompido o quebrado. Hasta ahora? El carism??tico Di??cono Blackfire, una figura m??stica con ra??ces tan antiguas como la mism??sima Gotham, ha creado un ej??rcito entre los marginados y los indigentes? pero, ??cu??les son sus verdaderas intenciones? ??Y qu?? pasar?? cuandoelCaballeroOscuroceda ante la confusi??n y el miedo?",
        caracteristicas: [
          "Editorial: OVNI PRESS DC",
          "P??ginas: 200",
          "ISBN: 9789877245127",
          "Colecci??n: BATMAN",
          "Encuadernaci??n: RUSTICA",
          "Edici??n: 1",
          "Fecha de edici??n: 14/02/2020",
          "Idioma: Espa??ol",
        ],
        precio:950.00,
      },
      {
        prod_id: 3,
        destacado: true,
        categoria: "Comic",
        marca: "UTOPIA",
        
        nombre: "The Boys",
        imagen: "res/img/the-boys",
        alt: "UTOPIA the boys",
        descripcion:
          "Los supers son muchos y estan desmadrados. ??Hay que ponerles limites! ??Controlarlos! ??Que sepan quien manda! Y no hay nadie mejor para ese trabajo que los muchachos de The Boys (Butcher, The Frenchman, The Female -Of the Species- y Mother?s Milk) y su nueva incorporacion: Wee Hughie.",

        caracteristicas: [
          "Editorial: UTOPIA EDITORIAL",
          "P??ginas: 168",
          "ISBN: 9789874592712",
          "Colecci??n: THE BOYS",
          "Encuadernaci??n: RUSTICA",
          "Edici??n: 1",
          "Fecha de edici??n: 17/07/2015",
          "Idioma: Espa??ol",
        ],
        precio: 1300.00,
      },
      {
        prod_id: 4,
        destacado: true,
        categoria: "Comic",
        marca: "DC",
        nombre: "Detective Pikachu",
        imagen: "res/img/pokemon-pikachu.png",
        alt: "Comic detective pikachu",
        descripcion:
          "??LA NOVELA GR??FICA OFICIAL!Sigue el viaje de Tim Goodman a trav??s de Ryme City, mientras busca a supadre desaparecido. Con sorpresas a la vuelta de cada esquina, nada esm??s inesperado que el socio de Tim en esta aventura, ??un Pikachu con unainclinaci??n por el caf?? y el peligro!En una ciudad donde humanos y Pok??mon conviven en armon??a, peligros inesperados los rodean mientras intentan resolver un misterio... ??y tal vez salvar el mundo! Corresponde a Pok??mon: Detective Pikachu.",
        caracteristicas: [
         "Editorial: OVNI PRESS DC",
         "ISBN: 9789877247060",
         "P??ginas: 112",
         "Encuadernaci??n: RUSTICA",
         "Fecha de edici??n: 19/03/2021",
         "Idioma: Espa??ol",
         "Edici??n: 3",
         "Colecci??n: POKEMON",
        ],
        precio: 1300.00,
      },
      {
        prod_id: 5,
        destacado: false,
        categoria: "Comic",
        marca: "Marvel",
        
        nombre: "Capitan de la nada",
        imagen: "res/img/capitan.png",
        alt: "Comic Capitan America de la nada",
        descripcion:
    "Capit??n America: ??Buscado por asesinato! Acusado y detenido, Steve Rogers se ha convertido en el capit??n de la nada. Sin traje, sin escudo y atrapado tras las rejas con mil villanos y asesinos a quienes nada les gustar??a mas que verlo muerto, Steve se defiende, ??y puede hacerlo todo el d??a! Pero mientras la ??lite de Poder hace su juego, ??qui??n est?? con el Cap? Un mot??n en la prisi??n es la mejor distracci??n posible para sacar a Steve del encierro, pero ??y si no quiere ir? Steve Rogers podr??a terminar siendo un fugitivo, pero eso no significa que renunciar??a a la lucha para demostrar su inocencia y llevar al verdadero asesino ante la justicia. ??Ni por asomo! ??Es hora de que el Cap pruebe una nueva t??ctica!",

        caracteristicas: [
          "Editorial PANINI MARVEL ARGENTINA",
          "Colecci??n: CAPITAN AMERICA",
          "ISBN: 9786075684666",
          "P??ginas: 144",
          "Encuadernaci??n: RUSTICA",
          "Fecha de edici??n: 11/06/2021",
          "Idioma: Espa??ol",
        ],
        precio:910.00 ,
      },
      {
        prod_id: 6,
        destacado: false,
        categoria: "Comic",
        marca: "DC",
 
        nombre: "Superman Lois Clark la llegada",
        imagen: "res/img/superman.png",
        alt: "Comic superman lois clark la llegada",
        descripcion:
          "Hubo un universo en que la vida de superman era muy distinta. Estaba casado con lois lane, la madre de su hijo jonathan, y todo era felicidad hasta que terminaron en telos, y participaron de un conflicto cosmico. Ahora, viven en secreto en nuestro mundo, pero este hombre de acero no esta ni mucho menos quiero. </br>La llegada de la excalibur, la amenaza de intergang... apenar son dos de los problemas con que se va a topar un superman que tendra un peso enorme en elfuturo inmediado del universo dc.",
        caracteristicas: [
          "Editorial: OVNI PRESS DC",
          "P??ginas: 200",
          "ISBN: 9788417106508",
          "Colecci??n: SUPERMAN",
          "Encuadernaci??n: RUSTICA",
          "Fecha de edici??n: 28/06/2019",
          "Idioma: Espa??ol",
        ],
        precio: 1600.00,
      },
      {
        prod_id: 7,
        destacado: false,
        categoria: "Comic",
        marca: "DC",
      
        nombre: "La muerte de Superman ",
        imagen: "res/img/superman-muerte.png",
        alt: "Comic La muerte de Superman",
        descripcion:
          "??Elevento??picoqueconmovi??al mundo y cambi?? a superman para siempre!Doomsday,unacriatura cuyo ??nico prop??sito es la destrucci??n,haaterrizadoenlaTierra. <br/>La Liga de la Justicia hizo un valiente y desesperado intento por detenerlo, perocuandolabestiaseacerc??a Metr??polis fue Superman quien respondi?? a la llamada para enfrentarlo. Y entonces sucedi?? lo impensable. El Hombre de Acero... ??muri??!",
        caracteristicas: [
         " Editorial: OVNI PRESS DC",
         " P??ginas: 224",
         " ISBN: 9789877245882",
         " Colecci??n: SUPERMAN",
         " Encuadernaci??n: RUSTICA",
         " Fecha de edici??n: 27/12/2019",
         " Idioma: Espa??ol",
        ],
        precio: 1725.00,
      },
      {
        prod_id: 8,
        destacado: false,
        categoria: "Comic",
        marca: "Marvel ",
        nombre: "Buenas Noches",
        imagen: "res/img/deapool.png",
        alt: "Comic Deapool Buenas noches",
        descripcion:
        "??Skottie Young lleva a deadpool a nuevos niveles de locura! Ya en la primera p??gina, Wade recibir?? su misi??n m??s dif??cil hasta ahora: ??eliminar a Santa Claus! Luego, cuando alguien se robe su coraz??n (literalmente) el Mercenario Boc??n deber?? solicitar la ayuda del mejor detective privado de Marvel: ??Jessica Jones! Adem??s, ??es momento de decirle hola a Buenas Noches, el enigm??tico personaje ha estado rob??ndole los trabajos como mercenario a Deadpool",
        caracteristicas: [
          "Editorial: OVNI PRESS MARVEL",
          "P??ginas: 136",
          "ISBN: 9789877245783",
          "Colecci??n: DEADPOOL",
          "Encuadernaci??n: RUSTICA",
          "Edici??n: 1",
          "Fecha de edici??n: 29/11/2019",
          "Idioma: Espa??ol",
        ],
        precio: 1300.00,
      },
      {
        prod_id: 9,
        destacado: false,
        categoria: "Comic",
        marca: "DC",
     
        nombre: "Flash Corriendo Aterrado",
        imagen: "res/img/flash.png",
        alt: "Comic Flash Corriendo Aterrado ",
        descripcion:
          "Las consecuencias de ?El prendedor? han dejado a Flash en una encrucijada. ??Puede seguir minti??ndole a la mujer que ama sobre su identidad secreta? ??Puede reparar su relaci??n rota con Kid Flash? Green Lantern ofrece algunos consejos, pero Barry no tiene tiempo para tomar una decisi??n, ??cortes??a del regreso de su m??ximo enemigo, el Flash Reverso!",
        caracteristicas: [
          "Editorial OVNI PRESS DC",
          "P??ginas: 124",
          "ISBN: 9789877245509",
          "Colecci??n: FLASH",
          "Encuadernaci??n: RUSTICA",
          "Edici??n: 1",
          "Fecha de edici??n: 09/08/2019",
          "Idioma: Espa??ol",
        ],
        precio: 1275.00,
      },
      {
        prod_id: 10,
        destacado: false,
        categoria: "Comic",
        marca: "Marvel",
        
        nombre: "X-MEN EXTERMINIO",
        imagen: "res/img/x-men.png",
        alt: "X-MEN EXTERMINIO",
        descripcion:
          "Los X-Men originales (C??clope, Iceman, ??ngel, Bestia y Marvel Girl) fueron desviados de su l??nea temporal para salvar nuestro presente, pero al parecer se convirtieron en los causales de todos los males de los mutantesactuales.??Sepodr??cambiar el destino de los X-Men?",
        caracteristicas: [
         

          "Editorial OVNI PRESS MARVEL",
          "P??ginas: 136",
          "ISBN: 9789877245448",
          "Colecci??n: MARVEL EXCELSIOR",
          "Encuadernaci??n: RUSTICA",
          "Fecha de edici??n: 19/07/2019",
          "Idioma: Espa??ol",
        ],
        precio: 1350.00,
      },
      {
        prod_id: 11,
        destacado: false,
        categoria: "Comic",
        marca: "Marvel",
     
        nombre: "Hulk La puerta Verde",
        imagen: "res/img/hulk",
        alt: "Comic Hulk la puerta Verde",
        descripcion:
          "Bruce Banner est?? vivo y huyendo, y ahora todo el mundo lo sabe. Pronto, Hulk se ver?? perseguido una vez m??s, esta vez por el gobierno, Alpha Flight, la misteriosa Base sombra? ??y los Avengers! Alguien lo encontrar?? primero, pero ??qu?? opci??n es la menos mala? Puede que no importe, porque Bruce tiene problemas mayores. Algo terrible lo ha infectado, Algo con planes indescriptibles para la humanidad. Y el ??nico que sabe sobre esta oscura infecci??n... ??es Hulk!",
        caracteristicas: [
        
        "Editorial: PANINI MARVEL ARGENTINA",
        "Colecci??n: EL INMORTAL HULK",
        "ISBN: 9786076345870",
        "P??ginas: 120",
        "Encuadernaci??n: RUSTICA",
        "Fecha de edici??n: 23/04/2021",
        "Idioma: Espa??ol",
        
        
        
        ],
        precio: 660.00,
      },
      {
        prod_id: 12,
        destacado: false,
        categoria: "Comic",
        marca: "Marvel",
     
        nombre: "Venon el Abismo",
        imagen: "res/img/venon.png",
        alt: "Comic Venon El abismo",
        descripcion:
          "????Venom ya no existe?! Justo cuando pensabas que la exitosa historia de Venom no pod??a volverse m??s intensa, Donny Cates pone el mundo de Eddie Brock de cabeza, ??otra vez! Pero esta vez no ser??n dragones, dioses anfitriones y acci??n vertiginosa. No, no ??Esta vez Eddie est?? pasando por una picadora de carne emocional como nunca se ha visto en el Universo Marvel! Cuando Eddie se encuentra verdaderamente solo por primera vez en mucho tiempo, el silencio es ensordecedor.<br/>Adem??s: San Francisco ofrece cualquier cosa menos un feliz regreso a casa gracias al padre separado de Eddie, y al hermano peque??o que nunca supo que ten??a ??Revelar?? Eddi el regreso a su viejo terru??o secretos que ser??a mejor mantener encerrados?",
        caracteristicas: [
          "Editorial: PANINI MARVEL ARGENTINA",
          "Colecci??n: VENOM",
          "ISBN: 9786075682631",
          "P??ginas: 144",
          "Encuadernaci??n: RUSTICA",
          "Fecha de edici??n: 26/02/2021",
          "Idioma: Espa??ol",
        ],
        precio:770.00,
      },
    ],
  },
  methods: {
    showModal(d) {
      console.log("prod", d);
      this.modal = true;
      this.modalData = d;
    },
    hideModal() {
      console.log("closemodal");
      this.modal = false;
      this.modalData = {};
    },
    agrCarrito(producto) {
      console.log(producto.id);
      let indC = this.carrito.idProd.indexOf(producto.id);
      //	console.log(indC);

      if (indC != -1) {
        this.carrito.cant[indC]++;
      } else {
        this.carrito.idProd.push(producto.id);
        this.carrito.cant.push(1);
      }

      //muestro el precio y la cantidad de productos al agregar al carrito.

      this.carrito.preTotal = this.carrito.preTotal + parseInt(producto.precio);

      localStorage.setItem("carrito", JSON.stringify(this.carrito));
    },
  },
  mounted: function () {
    console.log(this.carrito);
    this.carrito = JSON.parse(localStorage.getItem("carrito")) || this.carrito;
  },
});
