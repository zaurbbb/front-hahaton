import homePrimaryIcon from "/icons/homePrimaryIcon.png";
import homeSecondaryIcon from "/icons/homeSecondaryIcon.png";
import utilizationPrimaryIcon from "/icons/utilizationPrimaryIcon.png";
import utilizationSecondaryIcon from "/icons/utilizationSecondaryIcon.png";
import networkPrimaryIcon from "/icons/networkPrimaryIcon.png";
import networkSecondaryIcon from "/icons/networkSecondaryIcon.png";
import chartPrimaryIcon from "/icons/chartPrimaryIcon.png";
import chartSecondaryIcon from "/icons/chartSecondaryIcon.png";
import storagePrimaryIcon from "/icons/storagePrimaryIcon.png";
import storageSecondaryIcon from "/icons/storageSecondaryIcon.png";
import settingsPrimaryIcon from "/icons/settingsPrimaryIcon.png";
import settingsSecondaryIcon from "/icons/settingsSecondaryIcon.png";

const sidebarItems = [
  {
    title: "Home",
    path: "/home",
    primaryIcon: homePrimaryIcon,
    secondaryIcon: homeSecondaryIcon,
  },
  {
    title: "Resource Utilization",
    path: "/resource-utilization",
    primaryIcon: utilizationPrimaryIcon,
    secondaryIcon: utilizationSecondaryIcon,
  },
  {
    title: "Network Performance",
    path: "/network-performance",
    primaryIcon: networkPrimaryIcon,
    secondaryIcon: networkSecondaryIcon,
  },
  {
    title: "Risk Analysis",
    path: "/risk-analysis",
    primaryIcon: chartPrimaryIcon,
    secondaryIcon: chartSecondaryIcon,
  },
  {
    title: "Storage Provider",
    path: "/storage-provider",
    primaryIcon: storagePrimaryIcon,
    secondaryIcon: storageSecondaryIcon,
  },
  {
    title: "Settings",
    path: "/settings",
    primaryIcon: settingsPrimaryIcon,
    secondaryIcon: settingsSecondaryIcon,
  },
];

export { sidebarItems };
