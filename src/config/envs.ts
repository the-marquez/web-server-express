
import 'dotenv/config';
import env from 'env-var';

const { get } = env;

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}


