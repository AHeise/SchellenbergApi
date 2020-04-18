//HeloResponse.ts
//--------------------------------------------------
//Copyright 2020 Pascâl Hartmann
//See LICENSE File
//--------------------------------------------------
//Wrapper for Response answers
//--------------------------------------------------

export default class HeloResponse {

    salt?: string;
    sessionSalt?: string;

    constructor(salt?: string, sessionSalt?: string) {
        this.salt = salt;
        this.sessionSalt = sessionSalt;
    }

    static fromObject(object: any): HeloResponse {
        return new HeloResponse(
            object.salt,
            object.sessionSalt
        )
    }

}