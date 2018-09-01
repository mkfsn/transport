import { RawNameType, RawPointType, NameType, PointType } from './misc';

interface RawRailStation {
    StationID: string; // 車站代碼
    StationName: RawNameType; // 車站代碼
    StationPosition: RawPointType; // 車站位置
    StationAddress: string; // 車站地址
    StationPhone?: string; // 車站聯絡電話
    OperatorID: string; // 營運業者代碼
    StationClass: string; // 車站級別 ['0: 特等站', '1: 一等站', '2: 二等站', '3: 三等站', '4: 簡易站', '5: 招呼站', '6: 未知'];
    ReservationCode?: string; // 票價用站牌代碼
    UpdateTime: string; // 本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
}

interface RawRailODDailyTimetable {
    TrainDate: string; // 行駛日期(格式: yyyy:MM:dd)
    DailyTrainInfo: RawRailDailyTrainInfo; // 車次資料
    OriginStopTime: RawRailStopTime; // 起站停靠時間資料
    DestinationStopTime: RawRailStopTime; //  迄站停靠時間資料
    UpdateTime: string; // 資料更新日期時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
}

interface RawRailDailyTrainInfo {
    TrainNo: string; // 車次代碼
    Direction: number; // 順逆行 = ['0: 順行', '1: 逆行']
    StartingStationID?: string; // 列車起點車站代號
    StartingStationName?: RawNameType; // 列車起點車站名稱
    EndingStationID?: string; // 列車終點車站代號
    EndingStationName?: RawNameType; // 列車終點車站名稱
    TripHeadsign?: string; // 車次車頭文字描述(通用以"往"+ 迄站中文站名")
    TrainTypeID: string; // 列車車種代碼
    TrainTypeCode: string; // 列車車種簡碼
    TrainTypeName: RawNameType; // 列車車種名稱
    TripLine?: number; // 山海線類型 = ['0: 不經山海線', '1: 山線', '2: 海線']
    OverNightStationID?: string; // 跨夜車站代碼
    WheelchairFlag: number; // 是否設身障旅客專用座位車 = ['0: 否', '1: 是']
    PackageServiceFlag: number; // 是否提供行李服務 = ['0: 否', '1: 是']
    DiningFlag: number; // 是否提供餐車服務 = ['0: 否', '1: 是']
    BikeFlag: number; // 是否人車同行班次(置於攜車袋之自行車各級列車均可乘車) = ['0: 否', '1: 是']
    BreastFeedingFlag: number; // 是否設有哺(集)乳室車廂 = ['0: 否', '1: 是']
    DailyFlag: number; // 是否為每日行駛 = ['0: 否', '1: 是']
    ServiceAddedFlag: boolean; // 是否為加班車
    Note?: RawNameType; // 附註說明
}

interface RawRailStopTime {
    StopSequence: number; //  跑法站序(由1開始)
    StationID: string; // 車站代碼
    StationName: RawNameType; // 車站名稱
    ArrivalTime: string; // 到站時間(格式: HH:mm:ss)
    DepartureTime: string; // 離站時間(格式: HH:mm:ss)
}

class RailStation {
    StationID: string;
    StationName: NameType;
    StationPosition: PointType;
    StationAddress: string;
    StationPhone?: string;
    OperatorID: string;
    StationClass: string;
    ReservationCode?: string;
    UpdateTime: Date;

    constructor(raw: RawRailStation) {
        this.StationID = raw.StationID;
        this.StationName = new NameType(raw.StationName);
        this.StationPosition = new PointType(raw.StationPosition);
        this.StationAddress = raw.StationAddress;
        this.StationPhone = raw.StationPhone;
        this.OperatorID = raw.OperatorID;
        this.StationClass = raw.StationClass;
        this.ReservationCode = raw.ReservationCode;
        this.UpdateTime = new Date(raw.UpdateTime);
    }

    // XXX: For selector options
    get id(): string {
        return this.StationID;
    }

    // XXX: For selector options
    get name(): string {
        return this.StationName.Zh_tw;
    }
}

class RailStopTime {
    StopSequence: number;
    StationID: string;
    StationName: NameType;
    ArrivalTime: Date; // 到站時間(格式: HH:mm:ss)
    DepartureTime: Date; // 離站時間(格式: HH:mm:ss)

    constructor(trainDate: string, raw: RawRailStopTime) {
        this.StopSequence = raw.StopSequence;
        this.StationID = raw.StationID;
        this.StationName = new NameType(raw.StationName);
        this.ArrivalTime = new Date(trainDate + ' ' + raw.ArrivalTime);
        this.DepartureTime = new Date(trainDate + ' ' + raw.DepartureTime);
    }
}

class RailDailyTrainInfo {
    TrainNo: string;
    Direction: number;
    StartingStationID?: string;
    StartingStationName?: NameType;
    EndingStationID?: string;
    EndingStationName?: NameType;
    TripHeadsign?: string;
    TrainTypeID: string;
    TrainTypeCode: string;
    TrainTypeName: NameType;
    TripLine?: number;
    OverNightStationID?: string;
    WheelchairFlag: number;
    PackageServiceFlag: number;
    DiningFlag: number;
    BikeFlag: number;
    BreastFeedingFlag: number;
    DailyFlag: number;
    ServiceAddedFlag: boolean;
    Note?: NameType;

    constructor(raw: RawRailDailyTrainInfo) {
        this.TrainNo = raw.TrainNo;
        this.Direction = raw.Direction;
        this.StartingStationID = raw.StartingStationID;
        this.StartingStationName = new NameType(raw.StartingStationName);
        this.EndingStationID = raw.EndingStationID;
        this.EndingStationName = new NameType(raw.EndingStationName);
        this.TripHeadsign = raw.TripHeadsign;
        this.TrainTypeID = raw.TrainTypeID;
        this.TrainTypeCode = raw.TrainTypeCode;
        this.TrainTypeName = new NameType(raw.TrainTypeName);
        this.TripLine = raw.TripLine;
        this.OverNightStationID = raw.OverNightStationID;
        this.WheelchairFlag = raw.WheelchairFlag;
        this.PackageServiceFlag = raw.PackageServiceFlag;
        this.DiningFlag = raw.DiningFlag;
        this.BikeFlag = raw.BikeFlag;
        this.BreastFeedingFlag = raw.BreastFeedingFlag;
        this.DailyFlag = raw.DailyFlag;
        this.ServiceAddedFlag = raw.ServiceAddedFlag;
        this.Note = new NameType(raw.Note);
    }

    get TrainType(): string {
        switch (this.TrainTypeID) {
            case '1100':
            case '1101':
            case '1103':
            case '1108':
                return '自強';
            case '1102':
                return '自強(太魯閣)';
            case '1107':
                return '自強(普悠瑪)';
            case '1110': // (無身障座位)
            case '1111': // (有身障座位)
            case '1114': // (無身障座位 ,有自行車車廂)
            case '1115': // (有身障座位 ,有自行車車廂)
                return '莒光';
            case '1120':
                return '復興';
            case '1131':
                return '區間車';
            case '1132':
                return '區間快';
            case '1140':
                return '普快車';
        }
        return '';
    }
}

class RailODDailyTimetable {
    TrainDate: Date;
    DailyTrainInfo: RailDailyTrainInfo;
    OriginStopTime: RailStopTime;
    DestinationStopTime: RailStopTime;
    UpdateTime: Date;

    constructor(raw: RawRailODDailyTimetable) {
        this.TrainDate = new Date(raw.TrainDate);
        this.DailyTrainInfo = new RailDailyTrainInfo(raw.DailyTrainInfo);
        this.OriginStopTime = new RailStopTime(raw.TrainDate, raw.OriginStopTime);
        this.DestinationStopTime = new RailStopTime(raw.TrainDate, raw.DestinationStopTime);
        if (this.OriginStopTime.DepartureTime > this.DestinationStopTime.ArrivalTime) {
            this.DestinationStopTime.ArrivalTime.setDate(1 + this.DestinationStopTime.ArrivalTime.getDate());
            this.DestinationStopTime.DepartureTime.setDate(1 + this.DestinationStopTime.DepartureTime.getDate());
        }
        this.UpdateTime = new Date(raw.UpdateTime);
    }
}

export { RawRailStation, RailStation, RawRailODDailyTimetable,  RailODDailyTimetable };
