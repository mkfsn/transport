interface RawNameType {
    Zh_tw?: string; // 中文繁體名稱
    En?: string; // 英文名稱
}

interface RawPointType {
    PositionLat?: number; // 位置緯度(WGS84)
    PositionLon?: number; // 位置經度(WGS84)
}

class NameType {
    Zh_tw?: string;
    En?: string;

    constructor(raw: RawNameType) {
        this.Zh_tw = raw.Zh_tw;
        this.En = raw.En;
    }
}

class PointType {
    PositionLat?: number;
    PositionLon?: number;

    constructor(raw: RawPointType) {
        this.PositionLat = raw.PositionLat;
        this.PositionLon = raw.PositionLon;
    }
}

export { RawNameType, RawPointType, NameType, PointType };
