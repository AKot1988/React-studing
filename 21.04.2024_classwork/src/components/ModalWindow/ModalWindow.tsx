import { FC, ReactNode, useState, PropsWithChildren } from 'react';
import classes from './ModalWindov.module.scss'

// type ModalWindowProps = PropsWithChildren & {
//   isOpened?: boolean
//  }


// інтерфейс ModalWindowProps наслідується від PropsWithChildren у останньому е тип
// interface ModalWindowProps extends PropsWithChildren {
//  isOpened?: boolean
// }

//третій варінт написання  типу для пропсів модального вікна- ПРОПИСАТИ ОДРАЗУ В ФУНКЦІЇ ModalWindow
type ModalWindowProps = {
  isOpened?: boolean
  handleClose?: () => void
}


const ModalWindow: FC<PropsWithChildren<ModalWindowProps>> = ({children, handleClose})=> {
  return (
    <div className={classes.modalWrapper} onClick={handleClose && (() => handleClose())}>
      <div className={classes.modalContent}>
        {children}
      </div>
    </div>
  )
}

export default ModalWindow