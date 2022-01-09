import { LinearProgress, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

function EnergyLinearProgressWithLabel(props) {
    const useStyles = makeStyles({
        energyColor: {
            backgroundColor: props.energyColor
        },
        energySecondaryColor: {
            backgroundColor: props.energySecondaryColor
        }
    });

    const classes = useStyles();

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress
                    style={{ height: '30px', borderRadius: '4px', cursor: 'pointer' }}
                    variant="determinate"
                    value={props.value}
                    classes={{
                        root: classes.energySecondaryColor,
                        bar: classes.energyColor
                    }}
                    onClick={props.onClick}
                />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body1" color="text.secondary" style={{ userSelect: 'none' }}>
                    {props.label}
                </Typography>
            </Box>
        </Box>
    )
}

const EnergyBar = ({
    label,
    max,
    current,
    energyColor,
    energySecondaryColor,
    onClick
}) => {
    const normalise = (current, max) => ((current - 0) * 100) / (max - 0);

    return (
        <Box sx={{ width: '100%' }}>
            <EnergyLinearProgressWithLabel
                value={normalise(current, max)}
                label={label}
                energyColor={energyColor}
                energySecondaryColor={energySecondaryColor}
                onClick={onClick}
            />
        </Box>
    )
}

export default EnergyBar;