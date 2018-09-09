import { combineReducers }  from 'redux';

const rootReducer = combineReducers({
    task: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        }, {
            _id: 2,
            description: 'Pagar conta de luz',
            done: true
        },{
            _id: 3,
            description: 'Pagar aluguel',
            done: true
        }]
    })
})

export default rootReducer;
