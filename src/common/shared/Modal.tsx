import React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import colors from '../../style/colors';
import media from '../../style/mediaQueries';
import closeIcon from '../../assets/icons/close.svg';

interface StyledModalProps {
    small?: boolean;
}

export enum ModalHeaderType {
    Default = 'default',
    Success = 'success',
    Error = 'error',
    Info = 'info',
}

interface ModalHeaderProps {
    headerType?: ModalHeaderType;
}

const StyledModal = styled.div<StyledModalProps>`
  width: ${(props) => (props.small ? '300px' : '600px')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${colors.white};

  border-radius: 14px;
  z-index: 1000;

  @media ${media.mqTablet} {
    width: ${(props) => (props.small ? '240px' : '475px')};
  }

  @media ${media.mqMobile} {
    width: ${(props) => (props.small ? '75%' : '90%')};
  }
`;

const getHeaderColor = (type: string | undefined): string => {
    switch (type) {
        case ModalHeaderType.Success:
            return colors.green;
        case ModalHeaderType.Info:
            return colors.turquoise;
        case ModalHeaderType.Error:
            return colors.yellow;
        default:
            return colors.green;
    }
};

const ModalHeader = styled.div<ModalHeaderProps>`
  display: flex;
  justify-content: space-between;

  font-size: 22px;
  line-height: 25px;
  text-align: center;

  color: ${colors.white};

  flex: none;
  order: 0;
  flex-grow: 0;

  background-color: ${(props) => getHeaderColor(props.headerType)};
  padding: 17px 16px 16px;

  border-radius: 14px 14px 0 0;
`;

const InvisibleElem = styled.div`
  flex: 0 1 auto;
  width: 24px;
  height: 24px;
  visibility: hidden;
`;

const CloseIcon = styled.img`
  flex: 0 1 auto;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const HeaderText = styled.div`
  flex: 0 1 auto;
`;

const ModalBody = styled.div<{ mobilePadding?: string }>`
  padding: 24px;
  @media ${media.mqMobile} {
    padding: ${(props) => (props.mobilePadding ? props.mobilePadding : '24px')};
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${colors.modalBackground};
  z-index: 1000;
`;

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    header?: string | React.ReactNode;
    mobilePadding?: string;
    headerBackground?: string;
}

function Modal({
                   isOpen,
                   children,
                   onClose,
                   header,
                   mobilePadding,
                   small = false,
                   headerType,
               }: ModalProps & ModalHeaderProps & StyledModalProps & { children: React.ReactNode }) {
    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div>
            <Overlay />
            <StyledModal small={small}>
                {!!header && (
                    <ModalHeader headerType={headerType}>
                        <InvisibleElem />
                        <HeaderText>{header}</HeaderText>
                        <CloseIcon src={closeIcon} onClick={onClose} />
                    </ModalHeader>
                )}
                <ModalBody mobilePadding={mobilePadding}>{children}</ModalBody>
            </StyledModal>
        </div>,
        document.getElementById('modal-root')!
    );
}

export default Modal;
