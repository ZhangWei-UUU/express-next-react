import React from "react";
import Link from "next/link";

const Map = () =>(
  <div className="iot-component">
    <h1>溯源追踪</h1>
    <p>基于百度地图进行二次开发</p>
    <Link href="/doc/baidumap"><a>了解更多</a></Link>
  </div>
);

export default Map;