
import dynamic from "next/dynamic";

const MultiComponents = {
    mychannel:dynamic(import("./Mychannel")),
    message:dynamic(import("./Mychannel")),
    settings:dynamic(import("./Mychannel")),
    policy:dynamic(import("./Mychannel")),
    help:dynamic(import("./Help")),
};

export default MultiComponents;