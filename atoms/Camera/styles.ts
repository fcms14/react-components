import styled from 'styled-components';
import { AspectRatio } from './types';
import { isMobile } from 'react-device-detect';


export const CameraWrapper = styled.div`
    width : 100%;
    height: 100%;
`;

export const CameraContainer = styled.div<{ aspectRatio: AspectRatio }>`
    width        : 100%;
    background   : black;
    margin-bottom: 1rem;
    ${({ aspectRatio }) => aspectRatio === 'cover' ? 
        `` :
        `padding-bottom: ${100 / aspectRatio}%;`
    }
`;

export const ErrorMsg = styled.div`
    padding: 40px;
`;

export const CamVideo = styled.video<{ mirrored: boolean }>`
    width     : 100%;
    height    : 100%;
    object-fit: cover;
    z-index   : 1011;
    transform : rotateY(${({ mirrored }) => (mirrored ? '180deg' : '0deg')});
`;

export const Canvas = styled.canvas`
    display: none;
`;