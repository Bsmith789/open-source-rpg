import React from 'react'
import { withStyles } from '@mui/styles'

import Image from 'next/image';

import { Grid } from '@mui/material'

const Header = ({
    title,
    classes
}) => {
    return (
        <Grid
            item
            xs={12}
            justifyContent="center"
            style={{ textAlign: 'center', marginTop: 50 }}
        >
            <Image
                src="/assets/logoEquilibrio.svg"
                alt="Destruição do Equilíbrio"
                width="200"
                height="300"
            />
            <h1
                className={classes.title}
            >
                {title}
            </h1>
        </Grid>
    )
}

const styles = theme => ({
    title: {
        color: '#FFFFFF',
        marginTop: 60,
    }
});

export default withStyles(styles)(Header);
