import {Box} from '@mui/material'


function usePaymentMethodStyle(select) {
    const borderColor = select ? '#03a9f4' : 'transparent';
    const borderColorHover = !select ? 'rgb(210, 63, 87)' : borderColor;
    let BoxContainer = {
        minWidth: '210px',
        maxWidth: '210px',
        bgcolor:'rgb(246, 249, 252)',
        p:'8px',
        borderRadius:'8px',
        borderStyle:'solid',
        borderWidth: '1px',
        borderColor,
        cursor:'pointer',
        zIndex:0,
        '&:hover':{
            borderColor:borderColorHover
        }
    }
      return BoxContainer
  };
  



export default function PaymentCardAccordion({values,setPaymentCard}) {

  return (
    <Box sx={usePaymentMethodStyle(values.selected)}>PaymentCardAccordion</Box>
  )
}
