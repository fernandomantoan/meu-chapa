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

export const phones = [
    { id: 1, name: 'AUTOBAN', phone: '0800 055 55 50' },
    { id: 2, name: 'AUTOVIAS', phone: '0800 707 90 00' },
    { id: 3, name: 'CART', phone: '0800 773 00 90' },
    { id: 4, name: 'CENTROVIAS', phone: '0800 17 89 98' },
    { id: 5, name: 'COLINAS', phone: '0800 703 50 80' },
    { id: 6, name: 'ECOPISTAS', phone: '0800 777 00 70' },
    { id: 7, name: 'ECOVIAS', phone: '0800 19 78 78' },
    { id: 8, name: 'ENTREVIAS', phone: '0800 300 03 33​' },
    { id: 9, name: 'INTERVIAS', phone: '0800 707 14 14' },
    { id: 10, name: 'RENOVIAS', phone: '0800 055 96 96' },
    { id: 11, name: 'RODOANEL OESTE', phone: '0800 773 66 99' },
    { id: 12, name: 'RODOVIAS DO TIETÊ', phone: '0800 770 33 22' },
    { id: 13, name: 'ROTA DAS BANDEIRAS', phone: '0800 770 80 70' },
    { id: 14, name: 'SPMAR', phone: '0800 774 88 77' },
    { id: 15, name: 'SPVIAS', phone: '0800 703 50 30' },
    { id: 16, name: 'TAMOIOS', phone: '0800 545 0000' },
    { id: 17, name: 'TEBE', phone: '0800 55 11 67' },
    { id: 18, name: 'TRIÂNGULO DO SOL', phone: '0800 701 16 09' },
    { id: 19, name: 'VIAOESTE', phone: '0800 701 55 55' },
    { id: 20, name: 'VIARONDON', phone: '0800 729 93 00' },
    { id: 21, name: 'Polícia Militar Rodoviária', phone: '(11) 3327-2727' },
    { id: 22, name: 'Artesp', phone: '0800 727 83 77' },
    { id: 23, name: 'DER', phone: '0800 055 55 10' },
    { id: 24, name: 'Polícia Rodoviária Federal', phone: '191' },
    { id: 25, name: 'Polícia Rodoviária Estadual (PR)', phone: '198' }
];