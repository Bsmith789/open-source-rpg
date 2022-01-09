import { LinearProgress, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

function SanityLinearProgressWithLabel(props) {
    const useStyles = makeStyles({
        sanityColor: {
            backgroundColor: props.sanityColor
        },
        sanitySecondaryColor: {
            backgroundColor: props.sanitySecondaryColor
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
                        root: classes.sanitySecondaryColor,
                        bar: classes.sanityColor
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

const SanityBar = ({
    label,
    max,
    current,
    sanityColor,
    sanitySecondaryColor,
    onClick
}) => {
    const normalise = (current, max) => ((current - 0) * 100) / (max - 0);

    return (
        <Box sx={{ width: '100%' }}>
            <SanityLinearProgressWithLabel
                value={normalise(current, max)}
                label={label}
                sanityColor={sanityColor}
                sanitySecondaryColor={sanitySecondaryColor}
                onClick={onClick}
            />
        </Box>
    )
}

export default SanityBar;