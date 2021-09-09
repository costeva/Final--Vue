Vue.component("mi-carrito", {
    data: function () {
        return {
            carrito: [],
            // cantTot: null,
        }
    },
    //  methods: {
        
    // },
    template: ` <section class="container py-5">

                <div class="p-4">
                    <h3>Carrito <span id="total">({{total}})</span></h3>
                </div>
                <!--TODO: poner v-if para mostras si tiene o no contenido-->
                <div class="contKart">
                    <ul class="container">
                        <li v-for="(articulo,index) in carrito" class="row justify-content-between align-items-center m-0 border rounded pb-2 pb-md-0"
                            :id="articulo.prod_id">
                            <div class="col-12 col-md-3"><img :src="articulo.imagen" :alt="articulo.nombre">
                            </div>
                            <div class="col-12 col-md-5">
                                <h4 class="h5 font-weight-bold">{{articulo.nombre}}</h4>
                                <p class="text-truncate">{{articulo.descripcion}}</p>
                            </div>
                            <div class="col-6 col-md-2">
                                <p>$\n{{articulo.precio}}</p>
                                <p id="subTot3">Subtotal: $\n{{articulo.precio}}</p>
                            </div>
                            <div class="col-6 col-md-2 text-center">
                                <div class="row justify-content-around">
                                    <div class="col-4 p-2"><button @click="decrement(index)" class="btnMenos border btn p-0" >-</button>
                                    </div>
                                    <div class="col-4 p-2"><span class="badge badge-pill text-center" id="a3">{{articulo.cantidad}}</span>
                                    </div>
                                    <div class="col-4 p-2"><button @click="increment(index)" class="btnMas border btn p-0">+</button>
                                    </div>
                                    <div class="col-12 mt-4 my-2"><button @click="del(index)"
                                            class="btn btn-danger eliminar">Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="p-4 d-flex justify-content-end">
                    <div>
                        <span class="h3" id="cartTotal">Precio total: $ {{sum}}</span>
                    </div>
                    <!-- <button class="btn btn-secondary ml-auto ">vaciar carrito</button>
                    <button class="btn btn-primary">Realizar compra</button> -->
                </div>

            </section>`,

    methods:{
        increment(index){
            console.log('---------increment'+index)
            this.carrito[index].cantidad++;
            this.totCant();
            // this.carrito.push(articulo);
            localStorage.setItem("carrito", JSON.stringify(this.carrito));
        },
        decrement(index){
            //if (this.carrito[index].count==0) return;
            console.log('---------decrement' + index)
            if (this.carrito[index].cantidad > 1) {
                this.carrito[index].cantidad--;
                // this.totCant();
                localStorage.setItem("carrito", JSON.stringify(this.carrito));
            }
            // this.carrito.push(articulo);
            
        },
        del(index){
            this.carrito.splice(index, 1);
            localStorage.setItem("carrito", JSON.stringify(this.carrito));
        },

        totCant() {
        let totCont = 0;
         for (let arti of this.carrito){
                    totCont+=arti.cantidad;
            }
    
        return totCont;
        
    }
    },
    
    // filters:{
    //     showPrice(price){
    //         return '￥'+price.toFixed(2)
    //     }


        
    // },
    
    computed: {
          total:{
            get(){
                
               let totCont = 0;
                for (let arti of this.carrito) {
                    totCont += arti.cantidad;
                }
    
                return totCont;
            }
        },
        // total: {
        //     totCant() {
        //         let totCont = 0;
        //         for (let arti of this.carrito) {
        //             totCont += arti.cantidad;
        //         }
    
        //         return totCont;
        //     }
        // },
        sum:{
            get(){
                
                let sum=0;
                for (let cart of this.carrito){
                    sum+=cart.cantidad*cart.precio;
                }
                return sum;
            }
        }
    },  
   
    mounted() {
        
        this.carrito = JSON.parse(localStorage.getItem("carrito")) || this.carrito;
        // this.cantTot = this.totCant();
        // console.log(this.carrito);
    },
    
});