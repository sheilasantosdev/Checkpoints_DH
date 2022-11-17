const timePipoca = 10;
const timeMacarrao = 8;
const timeCarne = 15;
const timeFeijao = 12;
const timeBrigadeiro = 8;

function microondas(opcao, time) {
    switch (opcao) {
      case 1:
        pipoca(time);
        break;
      case 2:
        macarrao(time);
        break;
      case 3:
        carne(time);
        break;
      case 4:
        feijao(time);
        break;
      case 5:
        brigadeiro(time);
        break;
      default:
        console.log('Prato inexistente');
        break;
    }
  };

function pipoca(time) {
    if (time > 3 * timePipoca) {
        console.log('Prato pronto, bom apetite!');
        console.log('KABUMMM!');
    } else if (time > 2 * timePipoca) {
        console.log('Prato pronto, bom apetite!');
        console.log('A comida queimou.');
    } else if (time < timePipoca) {
        console.log('Prato pronto, bom apetite!');
        console.log('Tempo insuficiente!');
    }
      else {
        console.log('Prato pronto, bom apetite!')
    }
    
};

function macarrao(time) {
    if (time > 3 * timeMacarrao) {
        console.log('Prato pronto, bom apetite!');
        console.log('KABUMMM!');
    } else if (time > 2 * timeMacarrao) {
        console.log('Prato pronto, bom apetite!');
        console.log('A comida queimou.');
    } else if (time < timeMacarrao) {
        console.log('Prato pronto, bom apetite!');
        console.log('Tempo insuficiente!');
    }
      else {
        console.log('Prato pronto, bom apetite!')
    }
    
};

function carne(time) {
    if (time > 3 * timeCarne) {
        console.log('Prato pronto, bom apetite!');
        console.log('KABUMMM!');
    } else if (time > 2 * timeCarne) {
        console.log('Prato pronto, bom apetite!');
        console.log('A comida queimou.');
    } else if (time < timeCarne) {
        console.log('Prato pronto, bom apetite!');
        console.log('Tempo insuficiente!');
    }
      else {
        console.log('Prato pronto, bom apetite!')
    }
    
};

function feijao(time) {
    if (time > 3 * timeFeijao) {
        console.log('Prato pronto, bom apetite!');
        console.log('KABUMMM!');
    } else if (time > 2 * timeFeijao) {
        console.log('Prato pronto, bom apetite!');
        console.log('A comida queimou.');
    } else if (time < timeFeijao) {
        console.log('Prato pronto, bom apetite!');
        console.log('Tempo insuficiente!');
    }
      else {
        console.log('Prato pronto, bom apetite!')
    }
    
};

function brigadeiro(time) {
    if (time > 3 * timeBrigadeiro) {
        console.log('Prato pronto, bom apetite!');
        console.log('KABUMMM!');
    } else if (time > 2 * timeBrigadeiro) {
        console.log('Prato pronto, bom apetite!');
        console.log('A comida queimou.');
    } else if (time < timeBrigadeiro) {
        console.log('Prato pronto, bom apetite!');
        console.log('Tempo insuficiente!');
    }
      else {
        console.log('Prato pronto, bom apetite!')
    }
    
};

microondas(5, 25);