const EvenctEmitter = require('events')

const customEmitter = new EvenctEmitter()

customEmitter.on('response', ()=>{
    console.log('response event')
})

customEmitter.emit('response')