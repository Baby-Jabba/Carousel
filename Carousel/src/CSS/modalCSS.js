import styled from '@emotion/styled'

export const ModalNavBar = styled.div({
  display: 'flex',
  height: '3rem',
  width: '100%',
  backgroundColor: '#fff'

})

export const ModalContainer = styled.div({
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  height: '100%',
  width: 'auto',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  flexWrap: 'wrap',
  zIndex: '9'
})

export const LModalContainer = styled.div({
  flex: '3',
  backgroundColor: 'grey'
})

export const RModalContainer = styled.div({
  flex: '1',
  backgroundColor: 'white'
})

export const CarouselContainer = styled.div({
  width: '100%',
  height: '100%',
  backgroundColor: 'violet',
  display: 'flex'
})

export const ExitButton = styled.div({
  width: '45px',
  height: '45px',
  top: '0',
  right: '0',
  position: 'absolute',
  cursor: 'pointer',
  '.fa-times': {
    color: '#00a680',
    fontSize: '32px',
    lineHeight: '48px'
  },
  ':hover': {
    filter: 'brightness(120%)'
  }
})
