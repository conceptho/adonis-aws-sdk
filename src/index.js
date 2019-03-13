const aws = require('aws-sdk')
const uuid = require('uuid')

class AWS {
    constructor (Config) {
        this.Config = Config
        const awsConfig = {
            accessKeyId: this.Config.get('aws.accessKeyId'),
            secretAccessKey: this.Config.get('aws.secretAccessKey'),
            region: this.Config.get('aws.region')
        }
        aws.config.update(awsConfig)
        this.sdk = aws
    }
}

module.exports = AWS
