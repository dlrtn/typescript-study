import { IsNumber } from "class-validator";

export class AroundLandListRequest {
    @IsNumber()
    public lat!: number;

    @IsNumber()
    public lng!: number;

    @IsNumber()
    public range!: number;

    private toRadians(degree: number): number {
        return (degree * Math.PI) / 180;
    }

    private calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
        const dLat = this.toRadians(lat2 - lat1);
        const dLon = this.toRadians(lng2 - lng1);

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRadians(lat1)) *
            Math.cos(this.toRadians(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return 6371 * c * 1000;
    }

    public async aroundShopList(lat: number, lng: number, range: number): Promise<void> {
        const nowLatitude = lat;
        const nowLongitude = lng;

        const meterForLatitude = (1 / (6371 * 1 * (Math.PI / 180))) / 1000;
        const meterForLongitude = (1 / (6371 * 1 * (Math.PI / 180) * Math.cos(this.toRadians(nowLatitude)))) / 1000;

        const maxY = nowLatitude + range * meterForLatitude;
        const minY = nowLatitude - range * meterForLatitude;
        const maxX = nowLongitude + range * meterForLongitude;
        const minX = nowLongitude - range * meterForLongitude;

        console.log(maxY, minY, maxX, minX);
        return;
    }
}
