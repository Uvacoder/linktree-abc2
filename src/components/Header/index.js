import { HeaderStyled, HeaderImg, HeaderTitle } from "./header-styled";
import lumbergImg from "../../img/rob-owen.png";

export default function Header() {
  return (
    <HeaderStyled>
      <HeaderImg
        src={lumbergImg}
        alt="Bill Lumberg"
        loading="lazy"
        draggable="false"
      />
      <HeaderTitle>Bill Lumberg</HeaderTitle>
      <p>Frontend Developer</p>
    </HeaderStyled>
  );
}
