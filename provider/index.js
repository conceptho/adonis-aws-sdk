const { ServiceProvider } = require('@adonisjs/fold')

class AWSProvider extends ServiceProvider{
    register () {
        this.app.singleton('Conceptho/AWS-SDK', () => {
            const Config = this.app.use('Adonis/Src/Config')
            return new (require('./../src'))(Config)
        })
    }
}

module.exports = AWSProvider
