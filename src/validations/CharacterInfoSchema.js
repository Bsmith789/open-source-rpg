import * as Yup from 'yup';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome do personagem é obrigatório'),
    player_name: Yup.string().nullable(),
    age: Yup.number().nullable(),
    gender: Yup.string().nullable(),
    ocupation: Yup.string().nullable(),
    movement: Yup.string().nullable(),
    armor: Yup.string().nullable(),
    exposition: Yup.string().nullable()
});

export default schema;