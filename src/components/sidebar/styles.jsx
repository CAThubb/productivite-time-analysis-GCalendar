import styled from "styled-components";
import { v } from "../../styles/variables";
import {Link} from "react-router-dom";

export const SSidebar = styled.div`
  width: ${v.sidebarWidth};
  background: #1F1F25;
  height: 100vh;
  padding: ${v.lgSpacing};
  
  position: relative;
`;

export const SLogo = styled.div`
  width: 52px;
  img {
    max-width: 100%;
    height: auto;
  }
  cursor: pointer;
  margin-bottom: ${v.lgSpacing};
`;

export const SLinkContainer = styled.div`
  background: transparent;
  border-radius: ${v.borderRadius};
  margin: 8px 0;
  
  :hover {
    box-shadow: inset 0 0 0 1px;
  }
`;

export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;
  color: white;
  
  svg {
    font-size: 25px;
  }
`;

export const SLinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${v.smSpacing};
  color: white;
`;

export const SLinkLMainLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${v.mdSpacing};
  color: #05D2FF;

  font-size: 20px;

`;

