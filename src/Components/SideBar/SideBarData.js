import React from "react";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import InfoIcon from '@mui/icons-material/Info';
import SupportIcon from '@mui/icons-material/Support';


export const SideBarData = [
    {
        title: "Мой профиль",
        icon: <AccountCircleIcon />,
        link: "/profile"
    },
    {
        title: "Платы",
        icon: <DeveloperBoardIcon />,
        link: "/boards"
    },
    {
        title: "Инструкция",
        icon: <InfoIcon />,
        link: "/manual"
    },
    {
        title: "Техподдержка",
        icon: <SupportIcon />,
        link: "/support"
    }
]