import styled, { css } from 'styled-components'; 

export const ImageWrapper = styled.div`
  width: 80%;
  display: flex;
  height: 50vh;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
`;

export const CameraWrapper = styled.div`
  width: 100%; 
  height: 100%; 
  display: flex;
  justifyContent: center;
  alignItems: center;
  overflow: hidden; 
`;

export const FileUploadWrapper = styled.div`
  width: 95%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color:${({ theme }) => `${theme.colors.background.copy}`};
  color: #666;
  text-align: center;
  margin-top: ${({ theme }) => `${theme.padding.main}`};
`;