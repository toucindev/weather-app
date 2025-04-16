import readline from 'readline';
import pesquisarClima from './weather.js';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o nome das cidades (separadas por vírgula): ', async (resposta) => {
  const cidades = resposta.split(',').map(c => c.trim());

  try {
    const resultados = await Promise.all(
      cidades.map(cidade => pesquisarClima(cidade).then(data => ({ cidade, data })))
    );

    for (const resultado of resultados) {
      const { cidade, data } = resultado;
      const clima = data.data.current_condition[0];

      console.log(chalk.yellow(`\n🌤️ Clima em ${cidade}:`));
      console.log(chalk.yellow(`Temperatura atual: ${clima.temp_C}°C`));
      console.log(chalk.yellow(`Sensação térmica: ${clima.FeelsLikeC}°C`));
      console.log(chalk.yellow(`Condição: ${clima.weatherDesc[0].value}`));
    }
  } catch (err) {
    console.log(chalk.red('Ocorreu um erro ao buscar o clima:', err.message));
  }

  rl.close();
});
