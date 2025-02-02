import { LinearProgress, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

function LifeLinearProgressWithLabel(props) {
    const useStyles = makeStyles({
        lifeColor: {
            backgroundColor: props.lifeColor
        },
        lifeSecondaryColor: {
            backgroundColor: props.lifeSecondaryColor
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
                        root: classes.lifeSecondaryColor,
                        bar: classes.lifeColor
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

const StatusBar = ({
    label,
    max,
    current,
    lifeColor,
    lifeSecondaryColor,
    onClick
}) => {
    const normalise = (current, max) => ((current - 0) * 100) / (max - 0);

    return (
        <Box sx={{ width: '100%' }}>
            <LifeLinearProgressWithLabel
                value={normalise(current, max)}
                label={label}
                lifeColor={lifeColor}
                lifeSecondaryColor={lifeSecondaryColor}
                onClick={onClick}
            />
        </Box>
    )
}

export default StatusBar;