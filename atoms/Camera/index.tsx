import {forwardRef, useState, useEffect, useRef, useImperativeHandle } from 'react'
import {
  CameraProps,
  FacingMode,
  Stream,
  SetStream,
  SetNumberOfCameras,
  SetNotSupported,
  SetPermissionDenied,
} from './types'
import { CameraContainer, CameraWrapper, Canvas, CamVideo, ErrorMsg } from './styles'

/**
    import { Camera } from "../../components/molecules/Camera"
    import { CameraType } from "../../components/molecules/Camera/types"

    const [numberOfCameras, setNumberOfCameras] = useState(0);
    const [image, setImage]                     = useState<string | null>(null);
    const [showImage, setShowImage]             = useState<boolean>(false);
    const camera                                = useRef<CameraType>(null);
    const [devices, setDevices]                 = useState<MediaDeviceInfo[]>([]);
    const [activeDeviceId, setActiveDeviceId]   = useState<string | undefined>(undefined);
    
    <Camera
        ref                     = {camera}
        aspectRatio             = "cover"
        numberOfCamerasCallback = {(i) => setNumberOfCameras(i)}
        videoSourceDeviceId     = {activeDeviceId}
        errorMessages           = {{
            noCameraAccessible: 'Nenhuma câmera disponível',
            permissionDenied  : 'Permissão negada, recarregue a página e dê permissão de acesso a camera',
            switchCamera      : 'Apenas uma câmera disponível',
            canvas            : 'Canvas não suportado pelo navegador.',
        }}
        videoReadyCallback={() => {}}
    />
*/

export const Camera = forwardRef<unknown, CameraProps>((
    {
        facingMode              = 'user',
        aspectRatio             = 'cover',
        numberOfCamerasCallback = () => null,
        videoSourceDeviceId     = undefined,
        errorMessages           = {
            noCameraAccessible: 'Nenhuma câmera disponível',
            permissionDenied  : 'Permissão negada, recarregue a página e dê permissão de acesso a camera',
            switchCamera      : 'Apenas uma câmera disponível',
            canvas            : 'Canvas não suportado pelo navegador.',
        },
        videoReadyCallback = () => null,
    },
    ref,
) => {
    const player                                  = useRef<HTMLVideoElement>(null)
    const canvas                                  = useRef<HTMLCanvasElement>(null)
    const container                               = useRef<HTMLDivElement>(null)
    const [numberOfCameras, setNumberOfCameras]   = useState<number>(0)
    const [stream, setStream]                     = useState<Stream>(null)
    const [currentFacingMode, setFacingMode]      = useState<FacingMode>(facingMode)
    const [notSupported, setNotSupported]         = useState<boolean>(false)
    const [permissionDenied, setPermissionDenied] = useState<boolean>(false)

    useEffect(() => {
        numberOfCamerasCallback(numberOfCameras)
    }, [numberOfCameras])

    useImperativeHandle(ref, () => ({
        takePhoto: () => {
            if (numberOfCameras < 1) {
                throw new Error(errorMessages.noCameraAccessible)
            }

            if (canvas?.current) {
                const playerWidth  = player?.current?.videoWidth || 1280
                const playerHeight = player?.current?.videoHeight || 720
                const playerAR     = playerWidth / playerHeight

                const canvasWidth  = container?.current?.offsetWidth || 1280
                const canvasHeight = container?.current?.offsetHeight || 1280
                const canvasAR     = canvasWidth / canvasHeight

                let sX, sY, sW, sH

                if (playerAR > canvasAR) {
                    sH = playerHeight
                    sW = playerHeight * canvasAR
                    sX = (playerWidth - sW) / 2
                    sY = 0
                } else {
                    sW = playerWidth
                    sH = playerWidth / canvasAR
                    sX = 0
                    sY = (playerHeight - sH) / 2
                }

                canvas.current.width  = sW
                canvas.current.height = sH

                const context = canvas.current.getContext('2d')

                if (context && player?.current) {
                    context.drawImage(player.current, sX, sY, sW, sH, 0, 0, sW, sH)
                }

                const imgData = canvas.current.toDataURL('image/jpeg')
                
                return imgData

            } else {
                throw new Error(errorMessages.canvas)
            }
        },
        switchCamera: () => {
            if (numberOfCameras < 1) {
                throw new Error(errorMessages.noCameraAccessible)
            } else if (numberOfCameras < 2) {
                console.error('Error: Impossível acessar a câmera.')
            }

            const newFacingMode = currentFacingMode === 'user' ? 'environment' : 'user'
            setFacingMode(newFacingMode)

            return newFacingMode
        },
        getNumberOfCameras: () => numberOfCameras,
    }))

    useEffect(() => {
        initCameraStream(
            stream,
            setStream,
            currentFacingMode,
            videoSourceDeviceId,
            setNumberOfCameras,
            setNotSupported,
            setPermissionDenied,
        )
    }, [currentFacingMode, videoSourceDeviceId])

    useEffect(() => {
        if (stream && player && player.current) {
            player.current.srcObject = stream
        }

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop())
            }
        }
    }, [stream])

    return (
        <CameraContainer ref={container} aspectRatio={aspectRatio}>
            <CameraWrapper>
                { notSupported ? <ErrorMsg>{errorMessages.noCameraAccessible}</ErrorMsg> : null }
                { permissionDenied ? <ErrorMsg>{errorMessages.permissionDenied}</ErrorMsg> : null }
                <CamVideo
                    ref          = {player}
                    id           = "video"
                    muted        = {true}
                    autoPlay     = {true}
                    playsInline  = {true}
                    mirrored     = {currentFacingMode === 'user' ? true : false}
                    onLoadedData = {() => videoReadyCallback()}
                />
                <Canvas ref={canvas} />
            </CameraWrapper>
        </CameraContainer>
    )
  },
)

Camera.displayName = 'Camera'

const initCameraStream = (
    stream             : Stream,
    setStream          : SetStream,
    currentFacingMode  : FacingMode,
    videoSourceDeviceId: string | undefined,
    setNumberOfCameras : SetNumberOfCameras,
    setNotSupported    : SetNotSupported,
    setPermissionDenied: SetPermissionDenied,
) => {
    if (stream) {
        stream.getTracks().forEach(track => track.stop())
    }

    const constraints = {
        audio: false,
        video: {
            deviceId  : videoSourceDeviceId ? { exact: videoSourceDeviceId }: undefined,
            facingMode: currentFacingMode,
            width     : { ideal: 1920 },
            height    : { ideal: 1920 },
        },
    }

    if (navigator?.mediaDevices?.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(stream => setStream(handleSuccess(stream, setNumberOfCameras)))
            .catch(err => handleError(err, setNotSupported, setPermissionDenied))
    }
    
    if(!navigator?.mediaDevices?.getUserMedia) {
        const getWebcam = (navigator as any).getUserMedia ||
            (navigator as any).webkitGetUserMedia ||
            (navigator as any).mozGetUserMedia ||
            (navigator as any).msGetUserMedia

        if (getWebcam) {
            getWebcam(
                constraints,
                (stream: MediaStream) => setStream(handleSuccess(stream, setNumberOfCameras)),
                (err: Error) => handleError(err, setNotSupported, setPermissionDenied),
            )
        }

        if(!getWebcam){
            setNotSupported(true)
        }
    }
}

const handleSuccess = (stream: MediaStream, setNumberOfCameras: SetNumberOfCameras) => {
    navigator.mediaDevices
        .enumerateDevices()
        .then(resp => setNumberOfCameras(resp.filter(device => device.kind === 'videoinput').length))

    return stream
}

const handleError = (error: Error, setNotSupported: SetNotSupported, setPermissionDenied: SetPermissionDenied) => {
    if (error.name === 'PermissionDeniedError') {
        setPermissionDenied(true)
    } else {
        setNotSupported(true)
    }
}