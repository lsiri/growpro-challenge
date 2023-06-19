import BackToHomeButton from "src/components/BackToHomeButton";

export default function ErrorPage() {
  return (
    <div id="error-page">
        <h1>Oops!</h1>
        <p>Ha ocurrido un error inesperado.</p>
        <BackToHomeButton/>
    </div>
  );
}