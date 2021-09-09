Vue.component("mi-home", {
  // data: function () {
  //   return {
  //     nombre: null,
  //     mail: null,
  //     telefono: null,
  //     fNacimiento: null,
  //     genero: null,
  //     tipoReloj: null,
  //     frecCompra: null,
  //     factCompra: null,
  //     canalCompra: null,
  //     probRecom: null,

  //     campos: {
  //       nombre: {
  //         esValido: null,
  //         mensaje: "EL nombre es obligatorio.",
  //       },
  //       mail: {
  //         esValido: null,
  //         mensaje: "El mail es obligatorio",
  //       },
  //       telefono: {
  //         esValido: null,
  //         mensaje: "El telefono es obligatorio",
  //       },
  //       fNacimiento: {
  //         esValido: null,
  //         mensaje: "El fecha nacimiento es obligatorio",
  //       },
  //       genero: {
  //         esValido: null,
  //         mensaje: "El campo genero es obligatorio",
  //       },
  //       tipoReloj: {
  //         esValido: null,
  //         mensaje: "El campo tipo de reloj es obligatorio",
  //       },
  //       frecCompra: {
  //         esValido: null,
  //         mensaje: "El campo frecuencia de compra es obligatorio",
  //       },
  //       factCompra: {
  //         esValido: null,
  //         mensaje: "El campo factor de compra es obligatorio",
  //       },
  //       canalCompra: {
  //         esValido: null,
  //         mensaje: "El campo canal de compra es obligatorio",
  //       },
  //       probRecom: {
  //         esValido: null,
  //         mensaje: "El campo probabilidad de compra es obligatorio",
  //       },
  //     },

  //     dCliente: {},
  //     // errores: [],
  //     enviado: false,
  //   };
  // },
  // computed: {
  //   hayErrores: function () {
  //     console.log(
  //       "hayErrores",
  //       !this.campos.nombre.esValido,
  //       !this.campos.mail.esValido,
  //       !this.campos.fNacimiento.esValido,
  //       !this.campos.telefono.esValido,
  //       !this.campos.genero.esValido,
  //       !this.campos.tipoReloj.esValido,
  //       !this.campos.frecCompra.esValido,
  //       !this.campos.factCompra.esValido,
  //       !this.campos.canalCompra.esValido,
  //       !this.campos.probRecom.esValido
  //     );
  //     return (
  //       !this.campos.nombre.esValido ||
  //       !this.campos.mail.esValido ||
  //       !this.campos.fNacimiento.esValido ||
  //       !this.campos.telefono.esValido ||
  //       !this.campos.genero.esValido ||
  //       !this.campos.tipoReloj.esValido ||
  //       !this.campos.frecCompra.esValido ||
  //       !this.campos.factCompra.esValido ||
  //       !this.campos.canalCompra.esValido ||
  //       !this.campos.probRecom.esValido
  //     );
  //   },
  // },
  template: `

      <div>
   <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <picture>
                            <source srcset="res/img/banner-dc-m.png"
                                media=" only screen and (min-width:481px) and (max-width:768px)">

                            <source srcset="res/img/banner-dc-l.png"
                                media=" only screen and (min-width:769px) and (max-width:1920px)">

                            <img src="res/img/banner-dc-s.png" class="d-block w-100"
                                alt="reloj con pulsera de cuero marron">
                        </picture>
                    </div>
                    <div class="carousel-item">
                        <picture>
                            <source srcset="res/img/banner-marvel-m.png"
                                media=" only screen and (min-width:481px) and (max-width:768px)">

                            <source srcset="res/img/banner-marvel-l.png"
                                media=" only screen and (min-width:769px) and (max-width:1920px)">

                            <img src="res/img/banner-dc-s.png" class="d-block w-100"
                                alt="reloj con pulsera de cuero negro">
                        </picture>
                    </div>
                    <div class=" carousel-item">

                        <picture>
                            <source srcset="res/img/banner2-marvel-m.png"
                                media=" only screen and (min-width:481px) and (max-width:768px)">

                            <source srcset="res/img/banner2-marvel-l.png"
                                media=" only screen and (min-width:769px) and (max-width:1920px)">

                            <img src="res/img/banner2-marvel-s.png" class="d-block w-100"
                                alt="Imagen de un reloj a pulso alta gama">
                        </picture>


                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <div class="intro container text-center py-4">
                <h2 class="titulo">Bienvenido</h2>
                <p>
                    <b> Te deseamos que tengas una experiencia positiva en tienda Mi Reloj.</b>
                </p>
                <p>
                    Tenemos el objetivo de convertirnos en un referente a nivel nacional en la venta de relojes. A
                    partir de esto, se han incorporado diversas marcas para poder cumplir con las necesidades de nuestro
                    clientes.
                </p>
            </div>
            <div class="container">
          
                <mi-form></mi-form>
            	<!--<router-link class="btn" to="/formulario">Ir al formulario</router-link>-->
            </div>


               <div id="mtdPago" class="container pb-5 text-center">
                <h3 class="py-5">Medios de pago</h3>
                <ul class="row justify-content-around list-unstyled">
                    <li class="col-5 col-sm-3 col-md-3 bgPago-1">Efectivo</li>
                    <li class="col-5 col-sm-3 col-md-3 bgPago-2">Transferencia</li>
                    <li class="col-5 col-sm-3 col-md-3 bgPago-3">Deposito</li>
                    <li class="col-5 col-sm-3  col-lg-3 bgPago-4">Tarjeta</li>
                </ul>
            </div>
           
            </div>


`,

  // methods: {
  //   enviar: function (e) {
  //     console.log(e); //evento del submit
  //     // this.errores = [];
  //     //validacion
  //     this.validacion("nombre");
  //     this.validacion("mail");
  //     this.validacion("telefono");
  //     this.validacion("nombre");
  //     this.validacion("mail");
  //     this.validacion("fNacimiento");
  //     this.validacion("genero");
  //     this.validacion("tipoReloj");
  //     this.validacion("frecCompra");
  //     this.validacion("factCompra");
  //     this.validacion("canalCompra");
  //     this.validacion("probRecom");

  //     // console.log(this.errores)

  //     this.enviado = true; //queremos evaluar que los mensajes se muestren solo cuando se ejecute la funcion

  //     if (!this.hayErrores) {
  //       if (!localStorage.datoCliente) {
  //         this.dCliente = {};
  //         // console.log(this.dCliente);
  //       } else {
  //         // console.log(this.dCliente);
  //         this.dCliente = JSON.parse(localStorage.getItem("datoCliente"));
  //       }

  //       this.dCliente = {
  //         nombre: this.nombre,
  //         mail: this.mail,
  //         telefono: this.telefono,
  //         fNacimiento: this.fNacimiento,
  //         genero: this.genero,
  //         tipoReloj: this.tipoReloj,
  //         frecCompra: this.frecCompra,
  //         factCompra: this.factCompra,
  //         canalCompra: this.canalCompra,
  //         probRecom: this.probRecom,
  //       };
  //       // console.log('dCliente', this.dCliente)
  //       localStorage.setItem("datoCliente", JSON.stringify(this.dCliente));
  //     }
  //   },
  //   /**
  //    *
  //    */
  //   validacionEmail(email) {
  //     const re =
  //       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     return re.test(email);
  //   },
  //   validacion: function (campo) {
  //     if (campo == "mail") {
  //       this.campos.mail.esValido = this.validacionEmail(this.mail);
  //     } else {
  //       console.log("validar", campo, this.campos[campo]);
  //       if (!this[campo]) {
  //         this.campos[campo].esValido = false;

  //         // this.errores.push(this.campos[campo].mensaje);
  //       } else {
  //         this.campos[campo].esValido = true;
  //       }
  //     }
  //   },
  // },

  // mounted: function () {
  //   this.dCliente = JSON.parse(localStorage.getItem("datoCliente")) || [];
  //   },
  // destroyed: function(){
	// 		console.log("se destruyo la instancia")
// }
});