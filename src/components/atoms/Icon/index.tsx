import IconStyle from './IconStyle'

import {
    ActivityCircle,
    AngleDown,
    AngleDownCircle,
    AngleLeft,
    AngleLeftCircle,
    AngleRight,
    AngleRightCircle,
    AngleUp,
    AngleUpCircle,
    ArrowDownSmall,
    ArrowLeftSmall,
    ArrowRightSmall,
    ArrowUpSmall,
    BackArrow,
    BadgeDiscountAlt,
    Balance,
    Bell,
    Bookmark,
    Calculator,
    Calendar,
    Camera,
    Cards,
    ChartPie,
    ChatDots,
    Check,
    CheckCircle,
    Clock,
    Compass,
    Copy,
    Coupon,
    CreditCard,
    Currency,
    Dashboard,
    Download,
    Envelope,
    ExclamationCircle,
    Eye,
    EyeLash,
    File,
    Folder,
    ForwardArrow,
    Globe,
    Heart,
    Home,
    Image,
    InfoCircle,
    Link,
    LocationPin,
    Lock,
    LogOut,
    MenuLeftAlt,
    Microphone,
    MinusCircle,
    Mobile,
    MoreHorizontalCircle,
    MoreVerticalCircle,
    Note,
    NoteText,
    Payments,
    Pen,
    PercentCircle,
    Phone,
    Pix,
    PlayCircle,
    PlusCircle,
    PollVerticalCircle,
    Preloader,
    QuestionCircle,
    Search,
    SendRight,
    Settings,
    Shield,
    ShoppingBasket,
    SlidersHorizontalAlt,
    SortAscendingCircle,
    SortDescendingCircle,
    Star,
    TimesCircle,
    Transfer,
    Trash,
    Tv,
    Upload,
    UserAlt,
    UsersAlt,
    Video,
    VolumeHigh,
    Wallet,
    VerticalLogo,
} from './icons'

import {
    MdVpnKey,
    MdAssuredWorkload,
    MdPix,
    MdContentPasteGo,
    MdQrCodeScanner,
    MdOutlineQrCode2,
    MdQrCode2,
    MdQrCode,
    MdCallReceived,
    MdCallMade,
    MdOutlineReceiptLong,
    MdSchedule,
    MdAccountBalanceWallet,
    MdPersonOutline,
    MdBusiness,
    MdOutlinePersonOutline,
    MdOutlinePerson3,
    MdOutlineFileCopy,
    MdOutlineLocationOn,
    MdOutlineFolderOpen,
    MdPermIdentity,
    MdOutlineBadge,
    MdOutlineFeaturedPlayList,
    MdOutlineCameraFront,
    MdPhotoCamera,
    MdCollections,
    MdOutlineDelete,
    MdArrowBack,
    MdClose,
    MdCheckCircle,
    MdPersonAdd,
    MdIosShare,
    MdLock,
    MdLockOutline,
    MdSearch,
    MdInfo,
    MdError,
    MdOutlineRefresh,
    MdTune,
    MdPriorityHigh,
    MdDownload,
    MdModeEdit,
    MdPersonRemove,
    MdMoreVert,
} from "react-icons/md";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IconComponentInterface } from '../../../interfaces';


const components = [
    { name: "ActivityCircle", obj: ActivityCircle },
    { name: "AngleDownCircle", obj: AngleDownCircle },
    { name: "AngleDown", obj: AngleDown },
    { name: "AngleLeftCircle", obj: AngleLeftCircle },
    { name: "AngleLeft", obj: AngleLeft },
    { name: "AngleRightCircle", obj: AngleRightCircle },
    { name: "AngleRight", obj: AngleRight },
    { name: "AngleUpCircle", obj: AngleUpCircle },
    { name: "AngleUp", obj: AngleUp },
    { name: "ArrowDownSmall", obj: ArrowDownSmall },
    { name: "ArrowLeftSmall", obj: ArrowLeftSmall },
    { name: "ArrowRightSmall", obj: ArrowRightSmall },
    { name: "ArrowUpSmall", obj: ArrowUpSmall },
    { name: "BadgeDiscountAlt", obj: BadgeDiscountAlt },
    { name: "Bell", obj: Bell },
    { name: "Bookmark", obj: Bookmark },
    { name: "Calendar", obj: Calendar },
    { name: "Camera", obj: Camera },
    { name: "ChartPie", obj: ChartPie },
    { name: "ChatDots", obj: ChatDots },
    { name: "CheckCircle", obj: CheckCircle },
    { name: "Clock", obj: Clock },
    { name: "Compass", obj: Compass },
    { name: "Coupon", obj: Coupon },
    { name: "CreditCard", obj: CreditCard },
    { name: "Currency", obj: Currency },
    { name: "Download", obj: Download },
    { name: "Envelope", obj: Envelope },
    { name: "ExclamationCircle", obj: ExclamationCircle },
    { name: "Eye", obj: Eye },
    { name: "EyeLash", obj: EyeLash },
    { name: "File", obj: File },
    { name: "Folder", obj: Folder },
    { name: "Globe", obj: Globe },
    { name: "Heart", obj: Heart },
    { name: "Home", obj: Home },
    { name: "Image", obj: Image },
    { name: "InfoCircle", obj: InfoCircle },
    { name: "Link", obj: Link },
    { name: "LocationPin", obj: LocationPin },
    { name: "Lock", obj: Lock },
    { name: "LogOut", obj: LogOut },
    { name: "MenuLeftAlt", obj: MenuLeftAlt },
    { name: "Microphone", obj: Microphone },
    { name: "MinusCircle", obj: MinusCircle },
    { name: "Mobile", obj: Mobile },
    { name: "MoreHorizontalCircle", obj: MoreHorizontalCircle },
    { name: "MoreVerticalCircle", obj: MoreVerticalCircle },
    { name: "NoteText", obj: NoteText },
    { name: "Note", obj: Note },
    { name: "Pen", obj: Pen },
    { name: "PercentCircle", obj: PercentCircle },
    { name: "Phone", obj: Phone },
    { name: "PlayCircle", obj: PlayCircle },
    { name: "PlusCircle", obj: PlusCircle },
    { name: "PollVerticalCircle", obj: PollVerticalCircle },
    { name: "QuestionCircle", obj: QuestionCircle },
    { name: "Search", obj: Search },
    { name: "SendRight", obj: SendRight },
    { name: "Settings", obj: Settings },
    { name: "Shield", obj: Shield },
    { name: "ShoppingBasket", obj: ShoppingBasket },
    { name: "SlidersHorizontalAlt", obj: SlidersHorizontalAlt },
    { name: "SortAscendingCircle", obj: SortAscendingCircle },
    { name: "SortDescendingCircle", obj: SortDescendingCircle },
    { name: "Star", obj: Star },
    { name: "TimesCircle", obj: TimesCircle },
    { name: "Trash", obj: Trash },
    { name: "Tv", obj: Tv },
    { name: "Upload", obj: Upload },
    { name: "UserAlt", obj: UserAlt },
    { name: "UsersAlt", obj: UsersAlt },
    { name: "Video", obj: Video },
    { name: "VolumeHigh", obj: VolumeHigh },
    { name: "Dashboard", obj: Dashboard },
    { name: "Wallet", obj: Wallet },
    { name: "Transfer", obj: Transfer },
    { name: "Payments", obj: Payments },
    { name: "Cards", obj: Cards },
    { name: "Pix", obj: Pix },
    { name: "BackArrow", obj: BackArrow },
    { name: "ForwardArrow", obj: ForwardArrow },
    { name: "Balance", obj: Balance },
    { name: "Calculator", obj: Calculator },
    { name: "Copy", obj: Copy },
    { name: "Check", obj: Check },
    { name: "Preloader", obj: Preloader },
    { name: "VerticalLogo", obj: VerticalLogo },
    { name: "MdVpnKey", obj: MdVpnKey },
    { name: "MdAssuredWorkload", obj: MdAssuredWorkload },
    { name: "MdPix", obj: MdPix },
    { name: "MdContentPasteGo", obj: MdContentPasteGo },
    { name: "MdQrCodeScanner", obj: MdQrCodeScanner },
    { name: "MdQrCode", obj: MdQrCode },
    { name: "MdQrCode2", obj: MdQrCode2 },
    { name: "MdOutlineQrCode2", obj: MdOutlineQrCode2 },
    { name: "MdCallReceived", obj: MdCallReceived },
    { name: "MdCallMade", obj: MdCallMade },
    { name: "MdOutlineReceiptLong", obj: MdOutlineReceiptLong },
    { name: "MdSchedule", obj: MdSchedule },
    { name: "MdAccountBalanceWallet", obj: MdAccountBalanceWallet },
    { name: "MdPersonOutline", obj: MdPersonOutline },
    { name: "MdPermIdentity", obj: MdPermIdentity },
    { name: "MdOutlinePerson3", obj: MdOutlinePerson3 },
    { name: "MdOutlinePersonOutline", obj: MdOutlinePersonOutline },
    { name: "MdBusiness", obj: MdBusiness },
    { name: "MdOutlineLocationOn", obj: MdOutlineLocationOn },
    { name: "MdOutlineFileCopy", obj: MdOutlineFileCopy },
    { name: "MdOutlineFolderOpen", obj: MdOutlineFolderOpen },
    { name: "MdOutlineBadge", obj: MdOutlineBadge },
    { name: "MdOutlineCameraFront", obj: MdOutlineCameraFront },
    { name: "MdOutlineFeaturedPlayList", obj: MdOutlineFeaturedPlayList },
    { name: "MdCollections", obj: MdCollections },
    { name: "MdPhotoCamera", obj: MdPhotoCamera },
    { name: "MdOutlineDelete", obj: MdOutlineDelete },
    { name: "MdArrowBack", obj: MdArrowBack },
    { name: "MdClose", obj: MdClose },
    { name: "MdCheckCircle", obj: MdCheckCircle },
    { name: "MdPersonAdd", obj: MdPersonAdd },
    { name: "MdIosShare", obj: MdIosShare },
    { name: "MdLock", obj: MdLock },
    { name: "MdLockOutline", obj: MdLockOutline },
    { name: "MdSearch", obj: MdSearch },
    { name: "MdInfo", obj: MdInfo },
    { name: "MdError", obj: MdError },
    { name: "MdOutlineRefresh", obj: MdOutlineRefresh },
    { name: "MdTune", obj: MdTune },
    { name: "MdPriorityHigh", obj: MdPriorityHigh },
    { name: "MdDownload", obj: MdDownload },
    { name: "MdMoreVert", obj: MdMoreVert },
    { name: "MdModeEdit", obj: MdModeEdit },
    { name: "MdPersonRemove", obj: MdPersonRemove },
    { name: "Loading3Quarters", obj: AiOutlineLoading3Quarters },
]

const Icon = (props: IconComponentInterface) => {
    const { icon, onClick, width, color, rounded, applyPadding, loading } = props
    const Comp = components.filter(comp => comp.name === icon)
    const Compo = Comp[0].obj

    return Compo
        ? <IconStyle
            rounded={rounded}
            applyPadding={applyPadding}
            loading={loading}
            cursor={onClick ? 'pointer' : 'inherit'}
            onClick={onClick}
        >
            <Compo size={width} fill={color} />
        </IconStyle>
        : <></>
}

export default Icon