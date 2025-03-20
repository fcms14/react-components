import { useState } from "react";
import { PopupContainer } from "./PopupStyle";
import { BlurPage } from "../ModAlert/ModAlertStyle";
import { Header } from "../../organisms/Header";
import { MdClose } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
import { Row } from "../../molecules/Row";
import { RowAlertInterface } from "../../organisms/Row/RowAlert";
import { theme } from "../../../providers/theme";
import { useNavigate } from "react-router-dom";

const AttentionPopup = ({ text, title, path, rightLink }: RowAlertInterface) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(true);
  const onClick = () => setIsOpen(false)

  if (!isOpen) return null;

  return (
    <>
      <BlurPage onClick={onClick} />
      <PopupContainer>
        <Header.WithTwoIcons
          text={title}
          leftIcon={{ icon: RiErrorWarningFill, width: 20 }}
          rightIcon={{ icon: MdClose, onClick: onClick, width: 20 }}
        />
        <Row.Text size="big"> {text}</Row.Text>
        <Row.Text size="big" textAlign="center" cursor="pointer" onClick={() => navigate(path)} >
          <span style={{ color: theme.footer.active, fontWeight: 700 }}> {rightLink} </span>
        </Row.Text>
      </PopupContainer>
    </>
  );
};

export default AttentionPopup;