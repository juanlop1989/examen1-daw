import Image from "next/image";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 p-4 bg-light">
      <header className="mb-4 text-center">
        <h1 className="display-4">Bienvenidos a su App de Gastos Personales</h1>
      </header>

      <main className="text-center">
        <Link href='/Login'>
          <button className="btn btn-primary btn-lg">Iniciar Sesión</button>
        </Link>
      </main>

      <footer className="mt-auto text-muted text-center">
        <p>© 2024 Aplicación de Gastos Personales. Todos los derechos reservados Juan López T32351200.</p>
      </footer>
    </div>
  );
}
