
import dynamic from "next/dynamic";

const MultiComponents = {
  mychannel:dynamic(import("./Mychannel")),
  message:dynamic(import("./Message")),
  settings:dynamic(import("./Settings")),
  policy:dynamic(import("./Policy")),
  help:dynamic(import("./Help")),
  shop:dynamic(import("./Shop"))
};

export default MultiComponents;