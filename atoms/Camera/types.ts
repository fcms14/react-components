export type FacingMode          = 'user' | 'environment'
export type AspectRatio         = 'cover' | number
export type Stream              = MediaStream | null
export type SetStream           = React.Dispatch<React.SetStateAction<Stream>>
export type SetNumberOfCameras  = React.Dispatch<React.SetStateAction<number>>
export type SetNotSupported     = React.Dispatch<React.SetStateAction<boolean>>
export type SetPermissionDenied = React.Dispatch<React.SetStateAction<boolean>>

export interface CameraProps {
  facingMode                                       ?: FacingMode
  aspectRatio                                      ?: AspectRatio
  numberOfCamerasCallback?(numberOfCameras: number) : void
  videoSourceDeviceId                              ?: string | undefined
  errorMessages?: {
    noCameraAccessible?: string
    permissionDenied  ?: string
    switchCamera      ?: string
    canvas            ?: string
  }
  videoReadyCallback?(): void
}

export type CameraType = React.ForwardRefExoticComponent<CameraProps & React.RefAttributes<unknown>> & {
  takePhoto()         : string
  switchCamera()      : FacingMode
  getNumberOfCameras(): number
}