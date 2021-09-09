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
          mensaje: "El campo tipo de historieta es obligatorio",
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
                    <h3>¡Participa de la encuesta!</h3>
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
                                <label for="tel">Télefono</label>
                                <input v-on:blur="validacion('telefono')" :class="campos.telefono.esValido != null ? campos.telefono.esValido ? 'verde':'rojo': ''"  v-model.number="telefono" class="form-control" type="tel" name="telefono" id="tel">
                            </div>
                            <div class="col-md-6 my-3">
                                <label for="fNacimiento">Fecha de Nacimiento</label>
                                <input v-on:blur="validacion('fNacimiento')" :class="campos.fNacimiento.esValido != null ? campos.fNacimiento.esValido ? 'verde':'rojo': ''"  v-model="fNacimiento"  class="form-control" type="date" name="fNacimiento" id="fNacimiento">
                            </div>
                            <div class="col-md-6 my-3">
                                <label for="genero">Genero</label>
                                <select v-on:blur="validacion('genero')" :class="campos.genero.esValido != null ? campos.genero.esValido ? 'verde':'rojo': ''"  v-model="genero" class="custom-select" id="genero">
                                    <option selected disabled value="nada">Elegir opción</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="femenino">Femenino</option>
                                    <option value="otros">Otros</option>
                                </select>
                            </div>
                            <div class="col-md-6 my-3">
                                <label for="t-reloj">Tipo de historieta</label>
                                <select v-on:blur="validacion('tipoReloj')" :class="campos.tipoReloj.esValido != null ? campos.tipoReloj.esValido ? 'verde':'rojo': ''"  v-model="tipoReloj" class="custom-select" id="t-reloj">
                                    <option selected disabled value="nada">Elegir opción</option>
                                    <option value="digital">Comic</option>
                                    <option value="analogo">Manga</option>
                                    <option value="deportivo">Novela ligera</option>
                                </select>
                            </div>
                            <div class="col-md-6 my-3">
                                <label for="frecuenciaC">Frecuencia de compra</label>
                                <select v-on:blur="validacion('frecCompra')" :class="campos.frecCompra.esValido != null ? campos.frecCompra.esValido ? 'verde':'rojo': ''" v-model="frecCompra" class="custom-select" id="frecuenciaC">
                                    <option selected disabled value="nada">Elegir opción</option>
                                    <option value="una ves al mes">Una vez al mes.</option>
                                    <option value="dos veces al mes">Dos veces al mes.</option>
                                    <option value="una vez al año">Una vez al año</option>
                                    <option value="nunca">Casi nunca.</option>
                                </select>
                            </div>
                            <div class="col-md-6 my-3">
                                <label for="factCompra">Factor de compra</label>
                                <select v-on:blur="validacion('factCompra')" :class="campos.factCompra.esValido != null ? campos.factCompra.esValido ? 'verde':'rojo': ''" v-model="factCompra" class="custom-select" id="factCompra">
                                    <option selected disabled value="nada">Elegir opción</option>
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
                                    <option selected disabled value="nada">Elegir opción</option>
                                    <option value="internet">Internet</option>
                                    <option value="tienda">Tienda</option>
                                    <option value="free shop">Free shop</option>
                                    <option value="exterior">Compra en el exterio</option>
                                </select>
                            </div>
                            <div class="col-md-6 my-3">
                                <label for="provRecomend">Probabilidad</label>
                                <select v-on:blur="validacion('probRecom')" :class="campos.probRecom.esValido != null ? campos.probRecom.esValido ? 'verde':'rojo': ''" v-model="probRecom" class="custom-select" id="provRecomend" required>
                                    <option selected disabled value="nada">Elegir opción</option>
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
                          ¡Gracias!</p>
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