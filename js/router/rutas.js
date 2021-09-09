

const formulario = {
  template:`<mi-form></mi-form>`, name:"form"
}
const carrito = {
  template:`<mi-carrito></mi-carrito>`, name:"carrito"
}
const home = {
  template:`<mi-home></mi-home>`, name: "home",
//   components: {
//     'mi-form': formulario,
//   },
}
const productos = { template: `<mis-productos></mis-productos>`, name:"productos" }
const contacto = {template: `<section class="container p-3">
                <div class="text-center">
                    <h2>Contacto</h2>
                    <p class="h4 py-3">Si tenés alguna duda o necesitas soporte para de nuestros productos
                        por favor completá el formulario y nos contactaremos a la brevedad.</p>
                </div>

                <div id="contacto" class="row justify-content-around">



                    <form class="col-11 col-md-6 p-3 p-lg-5" action="#" method="post" enctype="multipart/form-data">

                        <div class="form-row">

                            <div class="form-group col-12">
                                <label class="font-weight-bold h5" for="nombre">Nombre</label>
                                <input class="form-control" type="text" name="nombre" id="nombre" required="">
                            </div>
                            <div class="form-group pt-4 col-12">
                                <label class="font-weight-bold h5" for="correo">Email</label>
                                <input class="form-control" type="email" name="correo" id="correo" required="">
                            </div>
                            <div class="form-group pt-4 col-12">
                                <label class="font-weight-bold h5" for="tel">Télefono</label>
                                <input class="form-control" type="tel" name="telefono" id="tel" required="">
                            </div>
                            <div class="form-group pt-4 col-12">
                                <label class="font-weight-bold h5 " for="coment">Dejanos un comentario</label>
                                <textarea name="comentario" id="coment" class="form-control"></textarea>
                            </div>
                            <div class=" col-12 mx-auto">
                                <button class="btn btn-block btn-enviar" type="submit">Enviar</button>
                            </div>
                        </div>
                    </form>


                    <div
                        class="datos-contac col-12 col-md-6 p-3 p-lg-5 d-flex align-items-center justify-content-center">
                        <div>
                            <h3 class="text-center pb-5 h2">INFORMACION DE CONTACTO</h3>

                            <ul class="list-unstyled text-center">
                                <li class="col-12 h5"> contacto@mireloj.com</li>
                                <li class="col-12 h5">(011) 902-8665</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </section>


           `,
  name: "contacto",
};

const routes = [
        {path: '/', component: home },
        { path: '/productos', component: productos },
        { path: '/carrito', component: carrito },
        
        {path:'/formulario', component: formulario},
        { path: '/contacto', component: contacto},
        
        { path: '*', redirect: '/' }
				
   ]     
  const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
    

}).$mount('#app') 
