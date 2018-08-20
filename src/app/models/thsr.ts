import { NameType, PointType } from './misc';

class RailStation {
    StationID: string; //  車站代碼
    StationName: NameType; // 車站名稱
    StationPosition: PointType; // 車站位置
    StationAddress: string; // 車站地址
    StationPhone?: string; // 車站聯絡電話
    OperatorID: string; // 營運業者代碼
    UpdateTime: Date; //  本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
}

class RailODDailyTimetable {
    TrainDate: string; // 行駛日期(格式: yyyy:MM:dd)
    DailyTrainInfo: RailDailyTrainInfo; // 車次資料
    OriginStopTime: RailStopTime; // 起站停靠時間資料
    DestinationStopTime: RailStopTime; // 迄站停靠時間資料
    UpdateTime: Date; // 資料更新日期時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
}

class RailDailyTrainInfo {
    TrainNo: string; // 車次代碼
    Direction: string; // 行駛方向 = ['0: 南下', '1: 北上']
    StartingStationID?: string; // 列車起點車站代號
    StartingStationName?: NameType; // 列車起點車站名稱
    EndingStationID?: string; // 列車終點車站代號
    EndingStationName?: NameType; // 列車終點車站名稱
    Note?: NameType; // 附註說明
}

class RailStopTime {
    StopSequence: number; // 跑法站序(由1開始)
    StationID: string; // 車站代碼
    StationName: NameType; // 車站名稱
    ArrivalTime?: string; // 到站時間(格式: HH:mm:ss)
    DepartureTime: string; // 離站時間(格式: HH:mm:ss)
}

export { RailStation, RailODDailyTimetable };
