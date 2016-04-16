const chai = require('chai')

chai.should()

const electron = require('electron')
const app = electron.app

describe('It should always pass', () => {
    it ('should always pass', () => {
        const ok = true;
        ok.should.be.true
        ok.should.not.be.false
    })
})