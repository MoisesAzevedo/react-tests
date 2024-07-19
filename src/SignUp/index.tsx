import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    navigate("/dashboard");
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Cadastre-se</h2>
        <input type="text" placeholder="insira seu nome" />
        <input type="text" placeholder="insira seu e-mail" />
        <input type="text" placeholder="insira sua senha" />
        <button>Sign Up</button>
        <Link to={"/"}>Já tem cadastro?</Link>
      </form>
    </div>
  );
}
