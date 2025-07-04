import CIcon from "@coreui/icons-react";
import {
  cilSpeedometer,
  cilEnvelopeOpen,
  cilEnvelopeLetter,
  cilUser,
  cilWindowMaximize,
  cilBell,
  cilLibraryBuilding,
  cilExternalLink,
  cilDescription,
} from "@coreui/icons";
import { CNavGroup, CNavItem } from "@coreui/react";

/*
뱃지가 필요하면 ?

  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Theme',
  },

 */
const _nav = [
  {
    component: CNavItem,
    name: "대시보드",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: "신청",
    icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "신청통계",
        to: "/application-stats",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "공고",
    icon: <CIcon icon={cilEnvelopeLetter} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "공고통계",
        to: "/announcement-stats",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "커리어",
    icon: <CIcon icon={cilEnvelopeLetter} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "커리어관리",
        to: "/career-management",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "회원",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "회원관리",
        to: "/user-management",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "배너/팝업",
    icon: <CIcon icon={cilWindowMaximize} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "배너관리",
        to: "/banner-management",
      },
      {
        component: CNavItem,
        name: "팝업관리",
        to: "/popup-management",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "알림",
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "알림관리",
        to: "/notification-management",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "학교",
    icon: <CIcon icon={cilLibraryBuilding} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "학교관리",
        to: "/school-management",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "약관",
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "약관관리",
        to: "/terms-management",
      },
    ],
  },
  {
    component: CNavItem,
    name: "서비스 바로가기",
    href: "https://www.giggle-inglo.com/",
    icon: <CIcon icon={cilExternalLink} customClassName="nav-icon" />,
  },
];

export default _nav;
