import axios from "axios";

export default async function pesquisarClima(cidade) {
    const data = await axios.get(`https://wttr.in/${cidade}?format=j1`);
    return data;
}