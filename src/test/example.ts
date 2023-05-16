import {AroundLandListRequest} from "./class/AroundLandListRequest";

let startX = 35.1533513;
let endX = 35.1532378;
let xJump = 0.000329155955;

let startY = 126.9193595;
let endY = 126.9192167;
let yJump = 0.000329155955;

console.log(90 * Math.PI / 180)

const aroundLandListRequest = new AroundLandListRequest();

console.log(aroundLandListRequest.getDistance(startX, startY, endX, endY));
aroundLandListRequest.aroundShopList(startX, startY, 1000);

//m당 y 좌표 이동 값
let meterPerLatitude = (1 / (6371 * (Math.PI / 180))) / 1000;
//m당 x 좌표 이동 값
let meterPerLongitude = (1 / (6371 * (Math.PI / 180) * Math.cos(aroundLandListRequest.toRadians(35.1533513)))) / 1000;

console.log(meterPerLatitude, meterPerLongitude);