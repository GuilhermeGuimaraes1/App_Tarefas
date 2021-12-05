import { handleNovoItem } from "./assets/componetes/criarTarefa.js";
import { carregaTarefa } from "./assets/componetes/carrefaTarefa.js";

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", handleNovoItem);

carregaTarefa();
