import { Formik, Form } from 'formik';
import { Grid, TextField, Button } from '@mui/material';

import { CharacterInfoSchema } from '../../validations';

import Loader from '../Loader';

const CharacterInfoForm = ({
    initialValues,
    onSubmit
}) => (
    <Formik
        initialValues={{ 
            name: initialValues.name,
            player_name: initialValues.player_name,
            age: initialValues.age,
            gender: initialValues.gender,
            movement: initialValues.movement,
            armor: initialValues.armor,
            exposition: initialValues.exposition,
            ocupation: initialValues.ocupation
        }}
        onSubmit={(values, { setSubmitting }) => {
            onSubmit(values).then(() => setSubmitting(false));
        }}
        validationSchema={CharacterInfoSchema}
    >
      {({
        values,
        errors,
        handleChange,
        handleSubmit,
        isSubmitting
      }) => (
        <Form onSubmit={handleSubmit}>
            <Grid container item xs={12} spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        label="Nome do jogador(a)"
                        name="player_name"
                        value={values.player_name}
                        fullWidth
                        onChange={handleChange}
                        error={errors.player_name}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        label="Nome"
                        name="name"
                        value={values.name}
                        fullWidth
                        onChange={handleChange}
                        error={errors.name}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        type="number"
                        variant="outlined"
                        label="Idade"
                        name="age"
                        value={values.age}
                        fullWidth
                        onChange={handleChange}
                        error={errors.age}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        label="Gênero"
                        name="gender"
                        value={values.gender}
                        fullWidth
                        onChange={handleChange}
                        error={errors.gender}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        label="Ocupação"
                        name="ocupation"
                        value={values.ocupation}
                        fullWidth
                        onChange={handleChange}
                        error={errors.ocupation}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        type="number"
                        variant="outlined"
                        label="Movimento"
                        name="movement"
                        value={values.movement}
                        fullWidth
                        onChange={handleChange}
                        error={errors.movement}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        type="number"
                        variant="outlined"
                        label="Corpo"
                        name="armor"
                        value={values.armor}
                        fullWidth
                        onChange={handleChange}
                        error={errors.armor}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        type="number"
                        variant="outlined"
                        label="Exposição"
                        name="exposition"
                        value={values.exposition}
                        fullWidth
                        onChange={handleChange}
                        error={errors.exposition}
                    />
                </Grid>
                <Grid item xs={12}>
                    <div style={{ float: 'right', display: 'flex', alignItems: 'center' }}>
                        {
                            isSubmitting && (
                                <Loader size={30} style={{ marginRight: '10px' }} />
                            )
                        }
                        <Button
                            variant="contained"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Salvar
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Form>
      )}
    </Formik>
)

export default CharacterInfoForm;
