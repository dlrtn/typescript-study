import {IsOptional} from "class-validator";

export class UserInfoDao {
    public id?: number;
    public nickname!: string;
    public created_at?: string;
    public updated_at?: string;

    constructor(
        { id, nickname, created_at, updated_at }:
            { id?: number, nickname: string, created_at?: string, updated_at?: string }) {
        this.id = id;
        this.nickname = nickname;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}


export class UserInfoDto {
    @IsOptional()
    public id?: number;

    public nickname!: string;

    @IsOptional()
    public updatedAt?: string;

    constructor(
        { id, nickname, updated_at }:
            { id?: number, nickname?: string, updated_at?: string }) {
        console.log('UserInfoDto constructor')

        this.id = id;
        this.nickname = nickname;
        this.updatedAt = updated_at;
    }
}

const request = {
    nickname: 'test',
    id: 1
};

const userInfo = new UserInfoDao({
    updated_at: (new Date()).toISOString(),
    id: request.id,
    nickname: request.nickname
});

const userInfoDto = new UserInfoDto({
    id: userInfo.id,
    nickname: userInfo.nickname,
    updated_at: userInfo.updated_at
})

console.log(userInfo)
console.log(userInfoDto)