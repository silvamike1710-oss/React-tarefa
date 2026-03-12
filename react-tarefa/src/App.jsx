
import { useState, useEffect } from "react";
import ProductCard from "./components/productCard";

function App() {
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);

      useEffect(() => {

          setTimeout(() => {

              const fakeProducts = [

    {
      id: 1,
      name: "Caderno",
      price: 30,
      image: "notebook.jpg",
      description: "um bom caderno para lápis, aquarelas e marcadores."
    },
    {
      id: 2,
      name: "kit canetas",
      price: 15,
      image: "pen.jpg",
      description: "canetas gel ballpoint coloridas com glitter."
    },
    {
      id: 3,
      name: "lápis de cor",
      price: 20,
      image: "pen.jpg",
      description: "grande jogo de lapis de cor."
    },
    {
      id: 4,
      name: "aquarelas",
      price: 45,
      image: "pen.jpg",
      description: "aquarelas sólidas de 24 cores."
    },
  ];

    setProducts(fakeProducts);
    setLoading(false);

  }, 2000);
}, []);


  

if (loading) {
  return (
    <div className="text-center mt-5">
      <div className="spinner-border"></div>
      <p className="mt-3">Carregando produtos...</p>
    </div>
  );
}

 return (

    <div className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold">Catálogo de Produtos</h1>
        <p className="text-muted">Lista de materiais artísticos</p>
      </div>

      <div className="row g-4">

        {products.map((product) => (
          
          <div className="col-md-6 col-lg-3" key={product.id}>
            <ProductCard
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
            />
          </div>

        ))}

      </div>

    </div>

  );
};



export default App;