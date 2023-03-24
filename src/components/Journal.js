import Link from 'next/link';

export default function Journal() {
  return (
    <>
    <div className="container py-3">
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col col-lg-8 offset-lg-2">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-body">
              <h1 className="card-title pricing-card-title">Journal</h1>
              <p>Para empezar con el desarrollo de la prueba de Automata, realice lo siguiente:</p>
              <h4>Instalaciones de Next.js</h4>
              <p>Primero empecé con las instalaciones de Next.js</p>
              <h4>Netlify</h4>
              <p>Continué con la configuración de Netlify</p>
              <h4>GitHub</h4>
              <p>Configure mi proyecto en GitHub y di permisos a mi equipo</p>
              <p>Cree el proyecto en Next.js</p>
              <p>Subi el proyecto a GitHub</p>
              <p>Configure Netlify en para poderlo mostrar en el seervidor</p>
              <h4>Bootstrap</h4>
              <p>Comencé con la instalación de Bootstrap en el proyecto</p>
              <h4>Componentes</h4>
              <p>Agregue el componente Header</p>
              <p>Agregue el componente Jounal</p>
              <p>Agregue el componente card url</p>
              <p>Agregue el componente card date</p>
              <p>Agregue el componente card counter</p>
              <h4>Investigación</h4>
              <p>Investigue como funciona Nextjs</p>
              <p>Investigue en netxjs el usestate</p>
              <p>Planee el cómo agregar en el index una función para obtener la url y el último valor de la url y pasarlo por props a los componentes</p>
              <h4>Problemas</h4>
              <p>Me encontre con la dificultad para la parte de redireccionamiento, necesito enfatizar más esa parte</p>
              <p>La dificultad que tuve fue el contador cuando las fechas son iguales, no me dio tiempo de agregar función para actualizar los valores desde cero</p>
              <p>No me alcanzo el tiempo para agregar y enfatizar en el tema de testing</p>
              <h4>Links</h4>
              <p><Link href="https://www.youtube.com/watch?v=3asnOp4rZxM&t=93s" target='_blank'>Curso de Next.js</Link></p>
              <p><Link href="https://www.youtube.com/watch?v=kRV23b1hYzw" target='_blank'>NEXTJS EN 5 MINUTOS</Link></p>
              <p><Link href=" https://es.reactjs.org/docs/hooks-state.html" target='_blank'>hooks state</Link></p>
              <p><Link href="https://blog.avneesh.tech/how-to-make-a-count-down-timer-in-react" target='_blank'>countdown timer in react</Link></p>
              <p><Link href="https://www.coffeeclass.io/articles/nextjs-usestate" target='_blank'>nextjs usestate</Link></p>
              <p><Link href="https://gist.github.com/Ifmr24/3761a1510513d48c1b9613a6aacd4fc4" target='_blank'>hooks</Link></p>
              <p><Link href="https://nextjs.org/docs/testing" target='_blank'>nextjs</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
