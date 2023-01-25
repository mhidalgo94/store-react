
const styleNavBar = {
    styleLink: {
        color: "#7D879C",
        fontSize: "17px",
        fontWeight: 500,
        lineHeight: 1.6,
        letterSpacing: "0.0075em",

        "&:hover": {
        color: "rgb(210, 63, 87)",
        }
    },
    styleIcons: {
        color:'#7D879C',
        cursor:'pointer',
        "&:hover": { color: "rgb(210, 63, 87)" },
    },
    styleMenuAccount:{
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 1.5,
        '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: 0,
            mr: 1,
        },
        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right:8 ,
            width:10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
        },
    }
};

export default styleNavBar;