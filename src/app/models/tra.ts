import { NameType, PointType } from './misc';

// ['0: 特等站', '1: 一等站', '2: 二等站', '3: 三等站', '4: 簡易站', '5: 招呼站', '6: 未知'];
type StationClassType = 0 | 1 |  2 | 3 | 4 | 5 | 6;

class RailStation {
    StationID: string; // 車站代碼
    StationName: NameType; // 車站代碼
    StationPosition: PointType; // 車站位置
    StationAddress: string; // 車站地址
    StationPhone?: string; // 車站聯絡電話
    OperatorID: string; // 營運業者代碼
    StationClass: StationClassType; // 車站級別
    ReservationCode?: string; // 票價用站牌代碼
    // FIXME: to Date
    UpdateTime: string; // 本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
}

class RailODDailyTimetable {
    TrainDate: string; // 行駛日期(格式: yyyy:MM:dd)
    DailyTrainInfo: RailDailyTrainInfo; // 車次資料
    OriginStopTime: RailStopTime; // 起站停靠時間資料
    DestinationStopTime: RailStopTime; //  迄站停靠時間資料
    // FIXME: to Date
    UpdateTime: string; // 資料更新日期時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
}

class RailDailyTrainInfo {
    TrainNo: string; // 車次代碼
    Direction: number; // 順逆行 = ['0: 順行', '1: 逆行']
    StartingStationID?: string; // 列車起點車站代號
    StartingStationName?: NameType; // 列車起點車站名稱
    EndingStationID?: string; // 列車終點車站代號
    EndingStationName?: NameType; // 列車終點車站名稱
    TripHeadsign?: string; // 車次車頭文字描述(通用以"往"+ 迄站中文站名")
    TrainTypeID: string; // 列車車種代碼
    TrainTypeCode: string; // 列車車種簡碼
    TrainTypeName: NameType; // 列車車種名稱
    TripLine?: number; // 山海線類型 = ['0: 不經山海線', '1: 山線', '2: 海線']
    OverNightStationID?: string; // 跨夜車站代碼
    WheelchairFlag: number; // 是否設身障旅客專用座位車 = ['0: 否', '1: 是']
    PackageServiceFlag: number; // 是否提供行李服務 = ['0: 否', '1: 是']
    DiningFlag: number; // 是否提供餐車服務 = ['0: 否', '1: 是']
    BikeFlag: number; // 是否人車同行班次(置於攜車袋之自行車各級列車均可乘車) = ['0: 否', '1: 是']
    BreastFeedingFlag: number; // 是否設有哺(集)乳室車廂 = ['0: 否', '1: 是']
    DailyFlag: number; // 是否為每日行駛 = ['0: 否', '1: 是']
    ServiceAddedFlag: boolean; // 是否為加班車
    Note?: NameType; // 附註說明
}

class RailStopTime {
    StopSequence: number; //  跑法站序(由1開始)
    StationID: string; // 車站代碼
    StationName: NameType; // 車站名稱
    ArrivalTime: string; // 到站時間(格式: HH:mm:ss)
    DepartureTime: string; // 離站時間(格式: HH:mm:ss)
}


export { RailStation, RailODDailyTimetable };
