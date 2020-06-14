import { InterestPoint, Reward } from "./entities/Entities";

export const points = [{
    id: 1,
    name: 'Posto de Combustível Teste',
    latitude: -22.998953881362638,
    longitude: -47.027013803864634,
    type: 'gas_station'
}, {
    id: 2,
    name: 'Restaurante Teste',
    latitude: -23.003327354177827,
    longitude: -47.03332056714976,
    type: 'restaurant'
}, {
    id: 3,
    name: 'Atendimento',
    latitude: -22.99305491600461,
    longitude: -47.03732781352653,
    type: 'health'
}] as InterestPoint[];

export const rewards = [{
    id: 1,
    name: 'Kit Higiene COVID-19',
    description: 'Composto por Alquingél 200 ml, sabonete e 2 Máscaras',
    points: 500,
    image: require('../assets/HigieneCovid.png')
}, {
    id: 2,
    name: 'Troca de Óleo',
    description: 'Troca de óleo (até 100 litros) com SW-300',
    points: 1000,
    image: require('../assets/Oleo.png')
}, {
    id: 3,
    name: 'Vale Almoço',
    description: 'Almoço + Refrigerante + Sobremesa',
    points: 750,
    image: require('../assets/Almoco.png')
}, {
    id: 4,
    name: 'Vale Abastecimento',
    description: '100 litros de diesel',
    points: 3000,
    image: require('../assets/Combustivel.png')
}] as Reward[];

export const services = [{
    id: 1,
    name: 'Alimentação',
    icon: 'silverware-fork-knife'
}, {
    id: 2,
    name: 'Banheiro',
    icon: 'toilet'
}];