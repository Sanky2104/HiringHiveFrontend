import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId:"us-east-1_T6s012ex2",
    ClientId:"2dmg3p5cmodfp6k2s0hl0spm81"
}

export default new CognitoUserPool(poolData);